// ── Ohms lov kalkulator ──
// Formler: U=RI, P=UI, P=I²R, P=U²/R
// Fyll inn 2 av 4 verdier (V, A, Ω, W) — resten beregnes

function updateOhmBtn() {
  const filled = ['V','A','R','W'].filter(k => {
    const v = document.getElementById('in' + k).value;
    return v !== '' && !isNaN(parseFloat(v));
  }).length;
  document.getElementById('ohmCalcBtn').classList.toggle('ready', filled >= 2);
}

function ohmCalc() {
  const V = parseFloat(document.getElementById('inV').value);
  const A = parseFloat(document.getElementById('inA').value);
  const R = parseFloat(document.getElementById('inR').value);
  const W = parseFloat(document.getElementById('inW').value);
  const known = { V: !isNaN(V), A: !isNaN(A), R: !isNaN(R), W: !isNaN(W) };

  if (Object.values(known).filter(Boolean).length < 2) {
    document.getElementById('ohmHint').textContent = 'Fyll inn minst to verdier';
    return;
  }

  ['V','A','R','W'].forEach(k => document.getElementById('field' + k).classList.remove('calculated'));

  let resV = known.V ? V : NaN, resA = known.A ? A : NaN,
      resR = known.R ? R : NaN, resW = known.W ? W : NaN;

  if (known.V && known.A) { resR = resR || V / A;            resW = resW || V * A; }
  if (known.V && known.R) { resA = resA || V / R;            resW = resW || (V*V) / R; }
  if (known.V && known.W) { resA = resA || W / V;            resR = resR || (V*V) / W; }
  if (known.A && known.R) { resV = resV || A * R;            resW = resW || A*A*R; }
  if (known.A && known.W) { resV = resV || W / A;            resR = resR || W / (A*A); }
  if (known.R && known.W) { resV = resV || Math.sqrt(W * R); resA = resA || Math.sqrt(W / R); }

  const mult = parseFloat(document.getElementById('inMult').value) || 1;
  const fmt  = n => isNaN(n) ? '' : String(parseFloat((n * mult).toFixed(4)));

  Object.entries({ V: resV, A: resA, R: resR, W: resW }).forEach(([k, val]) => {
    if (!known[k] && !isNaN(val)) {
      document.getElementById('in' + k).value = fmt(val);
      document.getElementById('field' + k).classList.add('calculated');
    }
  });

  document.getElementById('ohmHint').textContent = 'Grønne felt er beregnet';
}

function ohmClear() {
  ['V','A','R','W'].forEach(k => {
    document.getElementById('in' + k).value = '';
    document.getElementById('field' + k).classList.remove('calculated');
  });
  document.getElementById('inMult').value = '1';
  document.getElementById('ohmHint').textContent = 'Fyll inn to verdier og trykk Beregn';
  updateOhmBtn();
}

document.addEventListener('DOMContentLoaded', () => {
  ['V','A','R','W'].forEach(k =>
    document.getElementById('in' + k).addEventListener('input', updateOhmBtn)
  );
});
