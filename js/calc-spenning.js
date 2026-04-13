// ── Vekselspenning kalkulator ──
// Fyll inn det du vet (minst 2 verdier), beregn resten
// Støtter 1-fase og 3-fase

function spCalc() {
  const phases   = parseInt(getToggle('spPhase'));
  const U_in     = parseFloat(document.getElementById('spU').value);
  const I_in     = parseFloat(document.getElementById('spI').value);
  const P_in     = parseFloat(document.getElementById('spP').value);
  const cosP_in  = parseFloat(document.getElementById('spCosP').value);
  const phi_in   = parseFloat(document.getElementById('spPhi').value);

  const hasU    = !isNaN(U_in)    && U_in    > 0;
  const hasI    = !isNaN(I_in)    && I_in    > 0;
  const hasP    = !isNaN(P_in)    && P_in    > 0;
  const hasCosP = !isNaN(cosP_in) && cosP_in > 0 && cosP_in <= 1;
  const hasPhi  = !isNaN(phi_in)  && phi_in  >= 0 && phi_in < 90;

  const errEl = document.getElementById('spError');

  // cos φ og φ er samme størrelse — teller som én
  const uniqueCount = [hasU, hasI, hasP, hasCosP || hasPhi].filter(Boolean).length;
  if (uniqueCount < 2) {
    errEl.textContent = 'Fyll inn minst to verdier.';
    errEl.classList.remove('hidden');
    document.getElementById('spResult').classList.add('hidden');
    return;
  }
  errEl.classList.add('hidden');

  const k = phases === 3 ? Math.sqrt(3) : 1;

  let U    = hasU    ? U_in    : NaN;
  let I    = hasI    ? I_in    : NaN;
  let P    = hasP    ? P_in    : NaN;

  // φ prioriteres over cos φ hvis begge er oppgitt
  let cosP = hasPhi  ? Math.cos(phi_in * Math.PI / 180)
           : hasCosP ? cosP_in
           : NaN;

  let S = NaN;
  let Q = NaN;

  // Beregn S fra U og I
  if (!isNaN(U) && !isNaN(I)) S = k * U * I;

  // Beregn S fra P og cosP
  if (isNaN(S) && !isNaN(P) && !isNaN(cosP) && cosP > 0) S = P / cosP;

  // Beregn cosP fra P og S
  if (isNaN(cosP) && !isNaN(P) && !isNaN(S) && S > 0) cosP = P / S;

  // Beregn P fra S og cosP
  if (isNaN(P) && !isNaN(S) && !isNaN(cosP)) P = S * cosP;

  // Beregn Q
  if (!isNaN(S) && !isNaN(P)) Q = Math.sqrt(Math.max(0, S * S - P * P));

  // Beregn I fra S og U
  if (isNaN(I) && !isNaN(S) && !isNaN(U) && U > 0) I = S / (k * U);

  // Beregn U fra S og I
  if (isNaN(U) && !isNaN(S) && !isNaN(I) && I > 0) U = S / (k * I);

  // Beregn I fra P, cosP og U
  if (isNaN(I) && !isNaN(P) && !isNaN(cosP) && !isNaN(U) && U > 0) {
    I = P / (k * U * cosP);
    if (isNaN(S)) S = k * U * I;
    if (isNaN(Q) && !isNaN(P)) Q = Math.sqrt(Math.max(0, S * S - P * P));
  }

  // Avledede verdier
  const phi    = !isNaN(cosP) ? Math.acos(Math.min(1, cosP)) * 180 / Math.PI : NaN;
  const U_peak = !isNaN(U)    ? U * Math.sqrt(2) : NaN;
  const U_fase = (phases === 3 && !isNaN(U)) ? U / Math.sqrt(3) : NaN;
  const I_stj  = !isNaN(I)   ? I : NaN;
  const I_trekant = !isNaN(I) ? I / Math.sqrt(3) : NaN;

  // Vis resultat
  const fmt = (n, dec) => isNaN(n) ? '—' : parseFloat(n.toFixed(dec)).toString();

  document.getElementById('spResU').textContent    = fmt(U, 1);
  document.getElementById('spResI').textContent    = fmt(I, 2);
  document.getElementById('spResP').textContent    = fmt(P, 1);
  document.getElementById('spResQ').textContent    = fmt(Q, 1);
  document.getElementById('spResS').textContent    = fmt(S, 1);
  document.getElementById('spResCosP').textContent = fmt(cosP, 3);
  document.getElementById('spResPhi').textContent  = fmt(phi, 1);
  document.getElementById('spResPeak').textContent = fmt(U_peak, 1);

  const faseRow  = document.getElementById('spResFaseRow');
  const iFaseRow = document.getElementById('spResIFaseRow');

  if (phases === 3) {
    document.getElementById('spResFase').textContent   = fmt(U_fase, 1);
    faseRow.classList.remove('hidden');
    document.getElementById('spResIFase').textContent  =
      `Stjerne: ${fmt(I_stj, 2)} A\nTrekant: ${fmt(I_trekant, 2)} A`;
    iFaseRow.classList.remove('hidden');
  } else {
    faseRow.classList.add('hidden');
    iFaseRow.classList.add('hidden');
  }

  // Merk beregnede felt — φ og cos φ behandles separat
  document.getElementById('spU').parentElement.classList.toggle('calculated', !hasU);
  document.getElementById('spI').parentElement.classList.toggle('calculated', !hasI);
  document.getElementById('spP').parentElement.classList.toggle('calculated', !hasP);
  document.getElementById('spCosP').parentElement.classList.toggle('calculated', !hasCosP);
  document.getElementById('spPhi').parentElement.classList.toggle('calculated', !hasPhi);

  document.getElementById('spResult').classList.remove('hidden');
}

function spClear() {
  ['spU', 'spI', 'spP', 'spCosP', 'spPhi'].forEach(id => {
    document.getElementById(id).value = '';
    document.getElementById(id).parentElement.classList.remove('calculated');
  });
  document.getElementById('spResult').classList.add('hidden');
  document.getElementById('spError').classList.add('hidden');
  setToggle('spPhase', '1');
}
