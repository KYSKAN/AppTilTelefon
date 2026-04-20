// ── RC / RL / RLC krets-kalkulator ──
// Merk: getToggle() er definert i calc-kabel.js og delt globalt
// Beregner aktiv, reaktiv og syneffekt + impedans, strøm, fasevinkel
// Støtter serie- og parallellkobling. Frekvensreferanse: 50 Hz (norsk nett)

function updateKretsInputs() {
  const type = getToggle('kcType');
  document.getElementById('kcRowL').classList.toggle('hidden', type === 'RC');
  document.getElementById('kcRowC').classList.toggle('hidden', type === 'RL');
  kretsReset();
}

function kretsReset() {
  document.getElementById('kcResult').classList.add('hidden');
  document.getElementById('kcUtregningBox').classList.add('hidden');
  document.getElementById('kcError').classList.add('hidden');
}

// Lytter spesifikt på kcType og kcConn — kjører etter den generiske toggle-handleren
// slik at getToggle() leser riktig aktiv verdi
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#kcType .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => updateKretsInputs());
  });
  document.querySelectorAll('#kcConn .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => kretsReset());
  });
});

function kretsCalc() {
  const type = getToggle('kcType');
  const conn = getToggle('kcConn');   // 'serie' | 'parallell'
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

  const fmt2 = n => parseFloat(n.toFixed(2));
  const fmt4 = n => parseFloat(n.toFixed(4));

  let Z, I, phi, P, Q, S, cosP;
  let lines;

  if (conn === 'serie') {
    const X = XL - XC;
    Z    = Math.sqrt(R * R + X * X);
    I    = U / Z;
    phi  = Math.atan2(X, R) * (180 / Math.PI);
    P    = I * I * R;
    Q    = I * I * Math.abs(X);
    S    = U * I;
    cosP = R / Z;

    lines = [
      `── Inngangsverdier (serie) ──`,
      `U = ${U} V,  f = ${f} Hz,  R = ${R} Ω`,
      type !== 'RC' ? `L = ${Lmh} mH  →  XL = 2π × ${f} × ${Lmh/1000} = ${fmt2(XL)} Ω` : '',
      type !== 'RL' ? `C = ${Cuf} μF  →  XC = 1/(2π × ${f} × ${Cuf/1e6}) = ${fmt2(XC)} Ω` : '',
      ``,
      `── Impedans ──`,
      type === 'RC'  ? `X = -XC = -${fmt2(XC)} Ω` : '',
      type === 'RL'  ? `X = XL = ${fmt2(XL)} Ω` : '',
      type === 'RLC' ? `X = XL - XC = ${fmt2(XL)} - ${fmt2(XC)} = ${fmt2(XL - XC)} Ω` : '',
      `Z = √(R² + X²) = √(${fmt2(R*R)} + ${fmt2((XL-XC)**2)}) = ${fmt2(Z)} Ω`,
      ``,
      `── Strøm og fasevinkel ──`,
      `I = U / Z = ${U} / ${fmt2(Z)} = ${fmt4(I)} A`,
      `φ = arctan(X/R) = arctan(${fmt2(XL-XC)}/${R}) = ${fmt2(phi)}°`,
      `cos φ = R/Z = ${R}/${fmt2(Z)} = ${fmt4(cosP)}`,
      ``,
      `── Effekter ──`,
      `P = I²R = ${fmt4(I)}² × ${R} = ${fmt2(P)} W`,
      `Q = I²|X| = ${fmt4(I)}² × ${fmt2(Math.abs(XL-XC))} = ${fmt2(Q)} VAR`,
      `S = U×I = ${U} × ${fmt4(I)} = ${fmt2(S)} VA`,
    ];
  } else {
    // ── Parallell ──
    // Admittanser: GR = 1/R, BL = 1/XL, BC = 1/XC
    const GR = R > 0 ? 1 / R : 0;
    const BL = XL > 0 ? 1 / XL : 0;
    const BC = XC > 0 ? 1 / XC : 0;
    const B  = BC - BL;                        // netto susceptans
    const Y  = Math.sqrt(GR * GR + B * B);    // total admittans
    Z    = Y > 0 ? 1 / Y : Infinity;
    I    = U * Y;
    phi  = Math.atan2(-B, GR) * (180 / Math.PI);  // parallell: negativ B gir samme fortegn som serie
    P    = U * U * GR;
    Q    = U * U * Math.abs(B);
    S    = U * I;
    cosP = Y > 0 ? GR / Y : 1;

    const IR = fmt4(U * GR);
    const IL = XL > 0 ? fmt4(U / XL) : '0';
    const IC = XC > 0 ? fmt4(U / XC) : '0';

    lines = [
      `── Inngangsverdier (parallell) ──`,
      `U = ${U} V,  f = ${f} Hz,  R = ${R} Ω`,
      type !== 'RC' ? `L = ${Lmh} mH  →  XL = 2π × ${f} × ${Lmh/1000} = ${fmt2(XL)} Ω` : '',
      type !== 'RL' ? `C = ${Cuf} μF  →  XC = 1/(2π × ${f} × ${Cuf/1e6}) = ${fmt2(XC)} Ω` : '',
      ``,
      `── Grenstrømmer ──`,
      `IR = U/R = ${U}/${R} = ${IR} A`,
      type !== 'RC' ? `IL = U/XL = ${U}/${fmt2(XL)} = ${IL} A` : '',
      type !== 'RL' ? `IC = U/XC = ${U}/${fmt2(XC)} = ${IC} A` : '',
      ``,
      `── Admittans ──`,
      `GR = 1/R = ${fmt4(GR)} S`,
      type !== 'RC' ? `BL = 1/XL = ${fmt4(BL)} S` : '',
      type !== 'RL' ? `BC = 1/XC = ${fmt4(BC)} S` : '',
      type === 'RC'  ? `B = BC = ${fmt4(BC)} S` : '',
      type === 'RL'  ? `B = -BL = -${fmt4(BL)} S` : '',
      type === 'RLC' ? `B = BC - BL = ${fmt4(BC)} - ${fmt4(BL)} = ${fmt4(B)} S` : '',
      `Y = √(GR² + B²) = √(${fmt4(GR*GR)} + ${fmt4(B*B)}) = ${fmt4(Y)} S`,
      `Z = 1/Y = ${fmt2(Z)} Ω`,
      ``,
      `── Totalstrøm og fasevinkel ──`,
      `I = U × Y = ${U} × ${fmt4(Y)} = ${fmt4(I)} A`,
      `φ = arctan(-B/GR) = ${fmt2(phi)}°`,
      `cos φ = GR/Y = ${fmt4(GR)}/${fmt4(Y)} = ${fmt4(cosP)}`,
      ``,
      `── Effekter ──`,
      `P = U²×GR = ${U}² × ${fmt4(GR)} = ${fmt2(P)} W`,
      `Q = U²×|B| = ${U}² × ${fmt4(Math.abs(B))} = ${fmt2(Q)} VAR`,
      `S = U×I = ${U} × ${fmt4(I)} = ${fmt2(S)} VA`,
    ];
  }

  // ── Resonansfrekvens (kun RLC) ──
  let f0 = null;
  if (type === 'RLC') {
    f0 = 1 / (2 * Math.PI * Math.sqrt(L * C));
    lines.push(`\n── Resonansfrekvens ──\nf₀ = 1/(2π√LC) = ${fmt2(f0)} Hz`);
  }

  // ── Vis resultat ──
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

  // ── Karakter-label ──
  const charEl = document.getElementById('kcChar');
  if (Math.abs(phi) < 1)  charEl.textContent = 'Resistiv krets (φ ≈ 0°)';
  else if (phi > 0)        charEl.textContent = 'Induktiv krets';
  else                     charEl.textContent = 'Kapasitiv krets';

  document.getElementById('kcResult').classList.remove('hidden');

  document.getElementById('kcUtregning').textContent = lines.filter(l => l !== '').join('\n');
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
