// ── Kabel og vern kalkulator ──
// Standard: NEK 400 / IEC 60364-5-52
// Beregner: lasstrøm, kabeltverrsnitt, spenningsfall, vernstørrelse

// ── Strømkapasitetstabeller (A), kobber, flerleder ──
// Kilde: IEC 60364-5-52 tabell B.52.2 / B.52.4, referansetemperatur 30°C (luft) / 20°C (jord)
// Metoder:
//   A1 — Enkeltleder i rør i termisk isolert vegg
//   A2 — Flerleder i rør i termisk isolert vegg
//   B1 — Enkeltleder i rør på vegg / i vegg
//   B2 — Flerleder i rør på vegg / i vegg
//   C  — Direkte på vegg eller tak (klamret)
//   D1 — Nedgravd i rør i jord (ref. 20°C)
//   D2 — Direkte nedgravd i jord (ref. 20°C)
//   E  — På perforert kabelbro / fritt i luft
const izCuPVC = {
  1.5:  { A1:11,  A2:13,  B1:13,  B2:15,  C:17.5, D1:22,  D2:26,  E:19.5 },
  2.5:  { A1:15,  A2:17,  B1:18,  B2:20,  C:24,   D1:29,  D2:34,  E:27   },
  4:    { A1:20,  A2:23,  B1:24,  B2:27,  C:32,   D1:38,  D2:44,  E:36   },
  6:    { A1:25,  A2:29,  B1:31,  B2:34,  C:41,   D1:47,  D2:56,  E:46   },
  10:   { A1:34,  A2:39,  B1:42,  B2:46,  C:57,   D1:63,  D2:73,  E:63   },
  16:   { A1:45,  A2:52,  B1:56,  B2:62,  C:76,   D1:81,  D2:95,  E:85   },
  25:   { A1:60,  A2:68,  B1:73,  B2:80,  C:99,   D1:104, D2:121, E:112  },
  35:   { A1:73,  A2:83,  B1:89,  B2:99,  C:119,  D1:125, D2:146, E:138  },
  50:   { A1:87,  A2:99,  B1:108, B2:118, C:144,  D1:148, D2:173, E:168  },
  70:   { A1:111, A2:125, B1:136, B2:149, C:184,  D1:183, D2:213, E:213  },
  95:   { A1:133, A2:150, B1:164, B2:179, C:223,  D1:216, D2:252, E:258  },
  120:  { A1:153, A2:172, B1:188, B2:206, C:259,  D1:246, D2:287, E:299  },
};

const izCuPEX = {
  1.5:  { A1:13,  A2:15,  B1:15,  B2:18,  C:21,   D1:25,  D2:30,  E:23  },
  2.5:  { A1:18,  A2:21,  B1:21,  B2:25,  C:28,   D1:33,  D2:40,  E:32  },
  4:    { A1:24,  A2:28,  B1:28,  B2:33,  C:38,   D1:44,  D2:52,  E:43  },
  6:    { A1:31,  A2:36,  B1:36,  B2:42,  C:49,   D1:56,  D2:66,  E:55  },
  10:   { A1:42,  A2:50,  B1:50,  B2:57,  C:68,   D1:74,  D2:86,  E:76  },
  16:   { A1:56,  A2:66,  B1:68,  B2:76,  C:91,   D1:96,  D2:112, E:101 },
  25:   { A1:73,  A2:84,  B1:89,  B2:99,  C:116,  D1:121, D2:142, E:130 },
  35:   { A1:89,  A2:101, B1:108, B2:120, C:139,  D1:144, D2:169, E:158 },
  50:   { A1:108, A2:121, B1:130, B2:144, C:168,  D1:169, D2:198, E:192 },
  70:   { A1:136, A2:154, B1:165, B2:182, C:213,  D1:209, D2:245, E:246 },
  95:   { A1:164, A2:188, B1:198, B2:220, C:258,  D1:248, D2:290, E:298 },
  120:  { A1:188, A2:216, B1:228, B2:253, C:299,  D1:284, D2:331, E:346 },
};

// ── Strømkapasitetstabeller (A), aluminium, flerleder ──
// Kilde: IEC 60364-5-52 tabell B.52.2 / B.52.4 (Al), min. tverrsnitt 16 mm²
const izAlPVC = {
  16:  { A1:35,  A2:41,  B1:44,  B2:49,  C:59,   D1:64,  D2:74,  E:66  },
  25:  { A1:46,  A2:53,  B1:57,  B2:63,  C:77,   D1:82,  D2:95,  E:87  },
  35:  { A1:57,  A2:65,  B1:70,  B2:78,  C:93,   D1:98,  D2:114, E:107 },
  50:  { A1:68,  A2:78,  B1:84,  B2:94,  C:112,  D1:116, D2:135, E:131 },
  70:  { A1:86,  A2:98,  B1:107, B2:117, C:143,  D1:143, D2:166, E:166 },
  95:  { A1:102, A2:118, B1:128, B2:140, C:173,  D1:169, D2:197, E:201 },
  120: { A1:119, A2:135, B1:149, B2:162, C:201,  D1:193, D2:225, E:232 },
};

// Kilde: IEC 60364-5-52 tabell B.52.3 / B.52.5 (Al XLPE)
const izAlPEX = {
  16:  { A1:44,  A2:51,  B1:53,  B2:60,  C:71,   D1:75,  D2:88,  E:79  },
  25:  { A1:57,  A2:67,  B1:70,  B2:80,  C:90,   D1:96,  D2:110, E:101 },
  35:  { A1:70,  A2:82,  B1:86,  B2:98,  C:110,  D1:115, D2:132, E:122 },
  50:  { A1:84,  A2:96,  B1:102, B2:116, C:132,  D1:133, D2:154, E:149 },
  70:  { A1:107, A2:122, B1:129, B2:145, C:167,  D1:165, D2:192, E:192 },
  95:  { A1:128, A2:147, B1:155, B2:175, C:201,  D1:197, D2:227, E:232 },
  120: { A1:149, A2:171, B1:179, B2:202, C:232,  D1:225, D2:261, E:269 },
};

const crossSections = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
const breakerSizes  = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];

// ── Temperaturkorreksjonsfaktorer — luft, referanse 30°C (NEK 400 tab. B.52.14) ──
const tCorrPVC = { 10:1.22, 15:1.17, 20:1.12, 25:1.06, 30:1.00, 35:0.94, 40:0.87, 45:0.79, 50:0.71 };
const tCorrPEX = { 10:1.15, 15:1.12, 20:1.08, 25:1.04, 30:1.00, 35:0.96, 40:0.91, 45:0.87, 50:0.82 };

// ── Temperaturkorreksjonsfaktorer — jord, referanse 20°C (NEK 400 tab. B.52.15) ──
const tCorrGroundPVC = { 10:1.10, 15:1.05, 20:1.00, 25:0.95, 30:0.89, 35:0.84, 40:0.77, 45:0.71, 50:0.63 };
const tCorrGroundPEX = { 10:1.07, 15:1.04, 20:1.00, 25:0.96, 30:0.93, 35:0.89, 40:0.85, 45:0.80, 50:0.76 };

// ── Resistivitet ved driftstemperatur (Ω·mm²/m) ──
const rhoMap = { Cu_PVC: 0.0225, Cu_PEX: 0.0246, Al_PVC: 0.036, Al_PEX: 0.040 };

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
  if (temp < 10 || temp > 50) errors.push('Omgivelsestemperatur må være mellom 10 og 50 °C.');

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

  const I = loadUnit === 'A' ? loadVal / cosP : loadVal / (U_I * cosP);

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
  let chosenCS = null, chosenIz = null, chosenDrop = null;

  for (const cs of crossSections) {
    if (cs < minCS) continue;
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
  const breaker = breakerSizes.find(b => b >= I && b <= chosenIz)
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
    ? cosP < 1
      ? [`── Lasstrøm (cos φ = ${cosP}) ──`, `I_aktiv = ${loadVal.toFixed(2)} A`, `I = ${loadVal.toFixed(2)} / ${cosP} = ${I.toFixed(2)} A`]
      : [`── Lasstrøm ──`, `I = ${I.toFixed(2)} A  (direkte oppgitt)`]
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
    use === 'bolig' ? `\n── Særnorsk krav (bolig) ──\nIn ≤ Iz: ${breaker} ≤ ${chosenIz.toFixed(1)}  ${ok(breaker <= chosenIz)}` : '',
  ].filter(l => l !== undefined);

  document.getElementById('kbUtregning').textContent = lines.join('\n');
  document.getElementById('kbUtregningBox').classList.remove('hidden');
}

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
