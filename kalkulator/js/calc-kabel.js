// ── Kabel og vern kalkulator ──
// Standard: NEK 400 / IEC 60364-5-52
// Beregner: lasstrøm, kabeltverrsnitt, spenningsfall, vernstørrelse
// Tabeller og konstanter: kabel-data.js

// ── Hjelpefunksjoner ──
function getTempFactor(temp, insul, install) {
  const isGround = install === 'D1' || install === 'D2';
  let tbl;
  if (isGround) {
    tbl = insul === 'PEX' ? tCorrGroundPEX : tCorrGroundPVC;
  } else {
    tbl = insul === 'PEX' ? tCorrPEX : tCorrPVC;
  }
  const t = Math.max(10, Math.min(50, Math.round(temp / 5) * 5));
  return tbl[t] ?? 1.0;
}

function getToggle(groupId) {
  return document.querySelector(`#${groupId} .toggle-btn.active`)?.dataset.val;
}

function setToggle(groupId, val) {
  document.querySelectorAll(`#${groupId} .toggle-btn`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === val);
  });
}

// ── Hovedberegning ──
function kabelCalc() {
  const length    = parseFloat(document.getElementById('kbLength').value);
  const phases    = parseInt(getToggle('kbPhase'));
  const loadVal   = parseFloat(document.getElementById('kbLoad').value);
  const loadUnit  = getToggle('kbLoadUnit');  // 'W' | 'A'
  const cosP      = parseFloat(document.getElementById('kbCosP').value) || 1.0;
  const install   = document.getElementById('kbInstall').value;
  const system    = getToggle('kbSystem');    // 'IT' | 'TN'
  const use       = getToggle('kbUse');       // 'bolig' | 'industri'
  const conductor = getToggle('kbConductor'); // 'Cu' | 'Al'
  const temp      = parseFloat(document.getElementById('kbTemp').value) || 30;
  const insul     = getToggle('kbInsul');     // 'PVC' | 'PEX'

  const errors = [];
  if (isNaN(length) || length <= 0) errors.push('Kabellengde må være større enn 0.');
  if (isNaN(loadVal) || loadVal <= 0) errors.push(`Last må være større enn 0 ${loadUnit}.`);
  if (cosP <= 0 || cosP > 1) errors.push('Cos φ må være mellom 0,1 og 1,0.');
  if (temp < 10) errors.push('Omgivelsestemperatur kan ikke være under 10 °C.');
  if (temp > 50) errors.push(`${temp}°C overskrider maks tabellverdi for ${insul}-isolert kabel (50°C). Kabelen er ikke egnet for denne temperaturen.`);

  const warnEl = document.getElementById('krWarning');
  if (errors.length) {
    warnEl.textContent = errors.join('\n');
    warnEl.classList.remove('hidden');

    document.getElementById('kbResult').classList.add('hidden');
    document.getElementById('kbUtregningBox').classList.add('hidden');
    return;
  }

  // Spenning og lasstrøm (cos φ = 1)
  // IT 230V: L-L = 230V (ingen nøytral i tradisjonelt IT-nett)
  // TN 400V: L-N = 230V (1-fase), L-L = 400V (3-fase)
  const U_I = system === 'IT'
    ? (phases === 1 ? 230 : Math.sqrt(3) * 230)
    : (phases === 1 ? 230 : Math.sqrt(3) * 400);

  const I = loadUnit === 'A' ? loadVal : loadVal / (U_I * cosP);

  // Spenningsfallreferanse (NEK 400-5-52)
  const U_ref = system === 'IT' ? 230 : (phases === 1 ? 230 : 400);

  const tFactor  = getTempFactor(temp, insul, install);
  const minCS    = conductor === 'Al' ? 16 : 1.5;
  const rho      = rhoMap[`${conductor}_${insul}`] ?? rhoMap.Cu_PVC;
  const izTable  = conductor === 'Al'
    ? (insul === 'PEX' ? izAlPEX : izAlPVC)
    : (insul === 'PEX' ? izCuPEX : izCuPVC);

  // NEK 400-5-52: maks spenningsfall bolig 4 %, industri 5 %
  const maxDrop = use === 'bolig' ? 4.0 : 5.0;

  const calcDrop = cs => phases === 1
    ? (2 * rho * length * I) / (cs * U_ref) * 100
    : (Math.sqrt(3) * rho * length * I) / (cs * U_ref) * 100;

  // Finn minste tverrsnitt som tilfredsstiller både Iz og spenningsfall
  // Bolig: tverrsnitt avvises hvis maxBreakerBolig[cs] < I (vernet vil overskride grensen)
  let chosenCS = null, chosenIz = null, chosenDrop = null;

  for (const cs of crossSections) {
    if (cs < minCS) continue;
    if (use === 'bolig' && maxBreakerBolig[cs] !== undefined && maxBreakerBolig[cs] < I) continue;
    const iz   = (izTable[cs]?.[install] ?? 0) * tFactor;
    const drop = calcDrop(cs);
    if (iz >= I && drop <= maxDrop) {
      chosenCS = cs; chosenIz = iz; chosenDrop = drop; break;
    }
    // Strøm OK men spenningsfall for høyt → kandidat, prøv neste
    if (iz >= I && chosenCS === null) {
      chosenCS = cs; chosenIz = iz; chosenDrop = drop;
    }
  }

  // Fall-back: største tilgjengelige tverrsnitt
  if (chosenCS === null) {
    const cs = crossSections[crossSections.length - 1];
    chosenCS   = cs;
    chosenIz   = (izTable[cs]?.[install] ?? 0) * tFactor;
    chosenDrop = calcDrop(cs);
  }

  // Vern (NEK 400-43): Ib ≤ In ≤ Iz
  // Bolig: maks vernstørrelse per tverrsnitt (maxBreakerBolig)
  const maxBreakerCS = use === 'bolig' ? (maxBreakerBolig[chosenCS] ?? Infinity) : Infinity;
  const breaker = breakerSizes.find(b => b >= I && b <= chosenIz && b <= maxBreakerCS)
               ?? breakerSizes.find(b => b >= I && b <= maxBreakerCS)
               ?? breakerSizes.find(b => b >= I)
               ?? breakerSizes[breakerSizes.length - 1];

  // Advarsler
  const warnings = [];
  if (chosenDrop > maxDrop)
    warnings.push(`Spenningsfall ${chosenDrop.toFixed(1)} % > maks ${maxDrop} % (NEK 400-5-52). Vurder kortere kabel eller større tverrsnitt.`);
  if (chosenIz < I)
    warnings.push('Strømkapasitet overskrides. Vurder parallellføring.');
  if (use === 'bolig' && breaker > chosenIz)
    warnings.push(`NEK 400 (bolig): Vern ${breaker} A > Iz ${chosenIz.toFixed(1)} A. Velg større kabel.`);
  if (use === 'bolig' && maxBreakerBolig[chosenCS] && I > maxBreakerBolig[chosenCS])
    warnings.push(`${chosenCS} mm² tillater maks ${maxBreakerBolig[chosenCS]} A vern i bolig. Last (${I.toFixed(1)} A) overstiger dette — velg større tverrsnitt.`);

  // Vis resultat
  document.getElementById('krCurrent').textContent = I.toFixed(1);
  document.getElementById('krCross').textContent   = chosenCS;
  document.getElementById('krBreaker').textContent = breaker;

  const dropEl = document.getElementById('krDrop');
  dropEl.textContent = chosenDrop.toFixed(1);
  dropEl.style.color = chosenDrop > maxDrop ? '#fc8181' : '#68d391';

  warnEl.textContent = warnings.join('\n');
  warnEl.classList.toggle('hidden', warnings.length === 0);

  document.getElementById('kbResult').classList.remove('hidden');

  // Utregning
  const iName   = {
    A1:'PN i rør i isolert vegg',   A2:'flerleder i rør i isolert vegg',
    B1:'PN i rør på vegg',          B2:'flerleder i rør på vegg',
    C:'direkte på vegg/tak',
    D1:'nedgravd i rør i jord',     D2:'direkte nedgravd i jord',
    E:'på perforert kabelbro',
  }[install] ?? install;
  const izBase  = izTable[chosenCS]?.[install] ?? 0;
  const isGround = install === 'D1' || install === 'D2';
  const tempRef  = isGround ? '20°C (jord)' : '30°C (luft)';
  const tempTab  = isGround ? 'B.52.15' : 'B.52.14';
  const dFactor = phases === 1 ? '2' : '√3';
  const U_I_label = system === 'IT'
    ? (phases === 1 ? '230' : `√3 × 230 = ${(Math.sqrt(3)*230).toFixed(1)}`)
    : (phases === 1 ? '230' : `√3 × 400 = ${(Math.sqrt(3)*400).toFixed(1)}`);
  const ok = v => v ? '✓' : '✗';

  const currentLines = loadUnit === 'A'
    ? [`── Lasstrøm ──`, `I = ${I.toFixed(2)} A  (direkte oppgitt)`]
    : [`── Lasstrøm (cos φ = ${cosP}) ──`, `I = ${loadVal.toFixed(0)} W / (${U_I_label} V × ${cosP})`, `  = ${I.toFixed(2)} A`];

  const lines = [
    ...currentLines,
    ``,
    `── Temperaturkorrigering (${temp}°C, ${insul}) ──`,
    `k_temp = ${tFactor}  (ref. ${tempRef}, NEK 400 tab. ${tempTab})`,
    `Iz_krav = ${I.toFixed(2)} / ${tFactor} = ${(I/tFactor).toFixed(2)} A`,
    ``,
    `── Valgt kabel ──`,
    `${chosenCS} mm² ${conductor} ${insul}, ${iName}`,
    `Iz_tabell = ${izBase} A  (IEC 60364-5-52)`,
    `Iz = ${izBase} × ${tFactor} = ${chosenIz.toFixed(1)} A`,
    `Iz (${chosenIz.toFixed(1)} A) ≥ I (${I.toFixed(2)} A)  ${ok(chosenIz >= I)}`,
    ``,
    `── Spenningsfall (NEK 400-5-52, maks ${maxDrop} %) ──`,
    `ρ = ${rho} Ω·mm²/m  (${conductor} ${insul})`,
    `ΔU = ${dFactor} × ${rho} × ${length} m × ${I.toFixed(2)} A`,
    `     / (${chosenCS} mm² × ${U_ref} V) × 100`,
    `   = ${chosenDrop.toFixed(2)} %`,
    `${chosenDrop.toFixed(2)} % ${chosenDrop <= maxDrop ? '≤' : '>'} ${maxDrop} %  ${ok(chosenDrop <= maxDrop)}`,
    ``,
    `── Vern (NEK 400-43): Ib ≤ In ≤ Iz ──`,
    `Ib = ${I.toFixed(2)} A`,
    `In = ${breaker} A  (automatsikring)`,
    `Iz = ${chosenIz.toFixed(1)} A`,
    `${I.toFixed(2)} ≤ ${breaker} ≤ ${chosenIz.toFixed(1)}  ${ok(I <= breaker && breaker <= chosenIz)}`,
    use === 'bolig' ? [
      ``,
      `── Særnorsk krav (bolig) ──`,
      `In ≤ Iz: ${breaker} ≤ ${chosenIz.toFixed(1)}  ${ok(breaker <= chosenIz)}`,
      maxBreakerBolig[chosenCS] ? `Maks vern ${chosenCS} mm²: ${maxBreakerBolig[chosenCS]} A  →  In = ${breaker} A  ${ok(breaker <= maxBreakerBolig[chosenCS])}` : '',
    ].filter(Boolean).join('\n') : '',
  ].filter(l => l !== undefined);

  document.getElementById('kbUtregning').textContent = lines.join('\n');
  document.getElementById('kbUtregningBox').classList.remove('hidden');
}

// Skjul cos φ-rad når lastenheten er A (total strøm oppgitt direkte)
function updateCosPVisibility() {
  const loadUnit = getToggle('kbLoadUnit');
  const row = document.getElementById('kbCosPRow');
  if (loadUnit === 'A') {
    row.classList.add('hidden');
    document.getElementById('kbCosP').value = '1';
  } else {
    row.classList.remove('hidden');
  }
}

function updateSystemVisibility() {
  const phases = getToggle('kbPhase');
  const row = document.getElementById('kbSystemRow');
  if (phases === '1') {
    row.classList.add('hidden');
    setToggle('kbSystem', 'TN');
  } else {
    row.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#kbLoadUnit .toggle-btn').forEach(btn => {
    btn.addEventListener('click', updateCosPVisibility);
  });
  updateCosPVisibility();

  document.querySelectorAll('#kbPhase .toggle-btn').forEach(btn => {
    btn.addEventListener('click', updateSystemVisibility);
  });
  updateSystemVisibility();
});

// Jord: referansetemperatur 20°C (NEK 400-5-52), luft: 30°C
function updateTempForInstall() {
  const install = document.getElementById('kbInstall').value;
  const tempEl  = document.getElementById('kbTemp');
  if (install === 'D1' || install === 'D2') {
    tempEl.value = '20';
  } else if (tempEl.value === '20') {
    tempEl.value = '30';
  }
}

function kabelClear() {
  document.getElementById('kbLength').value = '';
  document.getElementById('kbLoad').value   = '';
  document.getElementById('kbTemp').value   = '30';
  document.getElementById('kbResult').classList.add('hidden');
  document.getElementById('kbUtregningBox').classList.add('hidden');
  setToggle('kbSystem',    'TN');
  setToggle('kbPhase',     '1');
  setToggle('kbUse',       'bolig');
  setToggle('kbConductor', 'Cu');
  setToggle('kbInsul',     'PVC');
  setToggle('kbLoadUnit', 'W');
  document.getElementById('kbCosP').value = '1';
}
