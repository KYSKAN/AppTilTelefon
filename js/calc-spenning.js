// ── Vekselspenning kalkulator ──
// Fyll inn det du vet (minst 2 verdier), beregn resten
// Støtter 1-fase og 3-fase

function spUpdateBtn() {
  const filled = ['spU','spI','spP','spCosP'].filter(id => {
    const v = document.getElementById(id).value;
    return v !== '' && !isNaN(parseFloat(v));
  }).length;
  document.getElementById('spCalcBtnEl').classList.toggle('ready', filled >= 2);
}

function spCalc() {
  const phases  = parseInt(getToggle('spPhase'));
  const U_in    = parseFloat(document.getElementById('spU').value);
  const I_in    = parseFloat(document.getElementById('spI').value);
  const P_in    = parseFloat(document.getElementById('spP').value);
  const cosP_in = parseFloat(document.getElementById('spCosP').value);

  const hasU    = !isNaN(U_in)    && U_in    > 0;
  const hasI    = !isNaN(I_in)    && I_in    > 0;
  const hasP    = !isNaN(P_in)    && P_in    > 0;
  const hasCosP = !isNaN(cosP_in) && cosP_in > 0 && cosP_in <= 1;

  const errEl = document.getElementById('spError');

  if ([hasU, hasI, hasP, hasCosP].filter(Boolean).length < 2) {
    errEl.textContent = 'Fyll inn minst to verdier.';
    errEl.classList.remove('hidden');
    document.getElementById('spResult').classList.add('hidden');
    return;
  }

  if (hasCosP && (cosP_in <= 0 || cosP_in > 1)) {
    errEl.textContent = 'Cos φ må være mellom 0,01 og 1,0.';
    errEl.classList.remove('hidden');
    return;
  }
  errEl.classList.add('hidden');

  const k = phases === 3 ? Math.sqrt(3) : 1;  // S = k × U × I

  let U    = hasU    ? U_in    : NaN;
  let I    = hasI    ? I_in    : NaN;
  let P    = hasP    ? P_in    : NaN;
  let cosP = hasCosP ? cosP_in : NaN;
  let S    = NaN;
  let Q    = NaN;

  // Beregn S fra U og I
  if (!isNaN(U) && !isNaN(I)) S = k * U * I;

  // Beregn S fra P og cosP
  if (isNaN(S) && !isNaN(P) && !isNaN(cosP)) S = P / cosP;

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

  // Fasespenning for 3-fase
  const U_fase = (phases === 3 && !isNaN(U)) ? U / Math.sqrt(3) : null;

  // Vis resultat
  const fmt = (n, dec) => isNaN(n) ? '—' : parseFloat(n.toFixed(dec)).toString();

  document.getElementById('spResU').textContent    = fmt(U, 1);
  document.getElementById('spResI').textContent    = fmt(I, 2);
  document.getElementById('spResP').textContent    = fmt(P, 1);
  document.getElementById('spResQ').textContent    = fmt(Q, 1);
  document.getElementById('spResS').textContent    = fmt(S, 1);
  document.getElementById('spResCosP').textContent = fmt(cosP, 3);

  const faseRow = document.getElementById('spResFaseRow');
  if (U_fase !== null) {
    document.getElementById('spResFase').textContent = fmt(U_fase, 1);
    faseRow.classList.remove('hidden');
  } else {
    faseRow.classList.add('hidden');
  }

  // Merk beregnede felt med grønn farge
  const ids = { spU: hasU, spI: hasI, spP: hasP, spCosP: hasCosP };
  Object.entries(ids).forEach(([id, wasGiven]) => {
    document.getElementById(id).parentElement.classList.toggle('calculated', !wasGiven);
  });

  document.getElementById('spResult').classList.remove('hidden');
}

function spClear() {
  ['spU', 'spI', 'spP'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('spCosP').value = '1';
  ['spU', 'spI', 'spP', 'spCosP'].forEach(id =>
    document.getElementById(id).parentElement.classList.remove('calculated')
  );
  document.getElementById('spResult').classList.add('hidden');
  document.getElementById('spError').classList.add('hidden');
  setToggle('spPhase', '1');
  spUpdateBtn();
}

document.addEventListener('DOMContentLoaded', () => {
  ['spU', 'spI', 'spP', 'spCosP'].forEach(id =>
    document.getElementById(id).addEventListener('input', spUpdateBtn)
  );
});
