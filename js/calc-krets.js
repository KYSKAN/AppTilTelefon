// ── RC / RL / RLC krets-kalkulator ──
// Merk: getToggle() er definert i calc-kabel.js og delt globalt
// Beregner aktiv, reaktiv og syneffekt + impedans, strøm, fasevinkel
// Frekvensreferanse: 50 Hz (norsk nett)

function updateKretsInputs() {
  const type = getToggle('kcType');
  document.getElementById('kcRowL').classList.toggle('hidden', type === 'RC');
  document.getElementById('kcRowC').classList.toggle('hidden', type === 'RL');
  document.getElementById('kcResFreq').classList.add('hidden');
  kretsReset();
}

function kretsReset() {
  document.getElementById('kcResult').classList.add('hidden');
}

function kretsCalc() {
  const type = getToggle('kcType');
  const U    = parseFloat(document.getElementById('kcU').value);
  const f    = parseFloat(document.getElementById('kcF').value) || 50;
  const R    = parseFloat(document.getElementById('kcR').value);
  const Lmh  = parseFloat(document.getElementById('kcL').value);
  const Cuf  = parseFloat(document.getElementById('kcC').value);

  // ── Validering ──
  const errors = [];
  if (isNaN(U) || U <= 0) errors.push('Spenning må være større enn 0 V.');
  if (isNaN(R) || R < 0)  errors.push('Motstand kan ikke være negativ.');
  if (f <= 0)              errors.push('Frekvens må være større enn 0 Hz.');
  if (type !== 'RC' && (isNaN(Lmh) || Lmh <= 0)) errors.push('Induktans må være større enn 0 mH.');
  if (type !== 'RL' && (isNaN(Cuf) || Cuf <= 0))  errors.push('Kapasitans må være større enn 0 μF.');

  const errEl = document.getElementById('kcError');
  if (errors.length) {
    errEl.textContent = errors.join('\n');
    errEl.classList.remove('hidden');
    document.getElementById('kcResult').classList.add('hidden');
    return;
  }
  errEl.classList.add('hidden');

  const L  = Lmh * 1e-3;       // mH → H
  const C  = Cuf * 1e-6;       // μF → F
  const w  = 2 * Math.PI * f;  // vinkelfrekvens

  // ── Reaktanser ──
  const XL = type !== 'RC' ? w * L : 0;
  const XC = type !== 'RL' ? 1 / (w * C) : 0;
  const X  = XL - XC;          // netto reaktans

  // ── Impedans og strøm ──
  const Z   = Math.sqrt(R * R + X * X);
  const I   = U / Z;
  const phi = Math.atan2(X, R) * (180 / Math.PI);  // grader

  // ── Effekter ──
  const P    = I * I * R;        // aktiv (W)
  const Q    = I * I * Math.abs(X); // reaktiv (VAR)
  const S    = U * I;            // syn (VA)
  const cosP = R / Z;            // effektfaktor

  // ── Resonansfrekvens (kun RLC) ──
  let f0 = null;
  if (type === 'RLC') {
    f0 = 1 / (2 * Math.PI * Math.sqrt(L * C));
  }

  // ── Vis resultat ──
  const fmt2 = n => parseFloat(n.toFixed(2));
  const fmt4 = n => parseFloat(n.toFixed(4));

  document.getElementById('kcResP').textContent    = fmt2(P);
  document.getElementById('kcResQ').textContent    = fmt2(Q);
  document.getElementById('kcResS').textContent    = fmt2(S);
  document.getElementById('kcResCosP').textContent = fmt4(cosP);
  document.getElementById('kcResZ').textContent    = fmt2(Z);
  document.getElementById('kcResI').textContent    = fmt4(I);
  document.getElementById('kcResPhi').textContent  = fmt2(phi);

  const resFreqEl = document.getElementById('kcResFreq');
  if (f0 !== null) {
    document.getElementById('kcResF0').textContent = fmt2(f0);
    resFreqEl.classList.remove('hidden');
  } else {
    resFreqEl.classList.add('hidden');
  }

  // ── Karakter-label (kapasitiv / induktiv / resistiv) ──
  const charEl = document.getElementById('kcChar');
  if (Math.abs(phi) < 1)       charEl.textContent = 'Resistiv krets (φ ≈ 0°)';
  else if (phi > 0)             charEl.textContent = 'Induktiv krets (XL > XC)';
  else                          charEl.textContent = 'Kapasitiv krets (XC > XL)';

  document.getElementById('kcResult').classList.remove('hidden');

  // ── Utregning ──
  const lines = [
    `── Inngangsverdier ──`,
    `U = ${U} V,  f = ${f} Hz,  R = ${R} Ω`,
    type !== 'RC' ? `L = ${Lmh} mH  →  XL = 2π × ${f} × ${Lmh/1000} = ${fmt2(XL)} Ω` : '',
    type !== 'RL' ? `C = ${Cuf} μF  →  XC = 1/(2π × ${f} × ${Cuf/1e6}) = ${fmt2(XC)} Ω` : '',
    ``,
    `── Impedans ──`,
    type === 'RC'  ? `X = -XC = -${fmt2(XC)} Ω` : '',
    type === 'RL'  ? `X = XL = ${fmt2(XL)} Ω` : '',
    type === 'RLC' ? `X = XL - XC = ${fmt2(XL)} - ${fmt2(XC)} = ${fmt2(X)} Ω` : '',
    `Z = √(R² + X²) = √(${fmt2(R*R)} + ${fmt2(X*X)}) = ${fmt2(Z)} Ω`,
    ``,
    `── Strøm og fasevinkel ──`,
    `I = U / Z = ${U} / ${fmt2(Z)} = ${fmt4(I)} A`,
    `φ = arctan(X/R) = arctan(${fmt2(X)}/${R}) = ${fmt2(phi)}°`,
    `cos φ = R/Z = ${R}/${fmt2(Z)} = ${fmt4(cosP)}`,
    ``,
    `── Effekter ──`,
    `P = I²R = ${fmt4(I)}² × ${R} = ${fmt2(P)} W`,
    `Q = I²|X| = ${fmt4(I)}² × ${fmt2(Math.abs(X))} = ${fmt2(Q)} VAR`,
    `S = U×I = ${U} × ${fmt4(I)} = ${fmt2(S)} VA`,
    f0 !== null ? `\n── Resonansfrekvens ──\nf₀ = 1/(2π√LC) = ${fmt2(f0)} Hz` : '',
  ].filter(l => l !== '');

  document.getElementById('kcUtregning').textContent = lines.join('\n');
  document.getElementById('kcUtregningBox').classList.remove('hidden');
}

function kretsClear() {
  ['kcU','kcF','kcR','kcL','kcC'].forEach(id => {
    const el = document.getElementById(id);
    if (id === 'kcF') el.value = '50';
    else el.value = '';
  });
  document.getElementById('kcResult').classList.add('hidden');
  document.getElementById('kcUtregningBox').classList.add('hidden');
  document.getElementById('kcError').classList.add('hidden');
}
