'use strict';
const QUIZ_META = {
  id: 'boolsk',
  title: 'Boolsk algebra',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    lover:   { label: 'Boolske lover', color: '#5c7cfa' },
    uttrykk: { label: 'Forenkling',    color: '#f59e0b' },
  }
};

const QUESTIONS = [

  // ── Boolske lover ────────────────────────────────────────────

  {
    cat: 'lover',
    q: 'Hva er resultatet av dobbel negasjon — <span class="dbl-not">A</span>?',
    opts: [
      '<span class="not">A</span> — signalet forblir invertert',
      'A — to inverteringer opphever hverandre',
      '0 — signalet tilbakestilles til lav',
      '1 — signalet settes til høy'
    ],
    correct: 1,
    explain: 'Dobbel negasjon: <span class="dbl-not">A</span> = A. Inverteres et signal to ganger kommer du tilbake til det originale signalet.'
  },

  {
    cat: 'lover',
    q: 'Hva er 0 + A?',
    opts: ['0', '1', 'A', '<span class="not">A</span>'],
    correct: 2,
    explain: 'Identitetslov for OR: 0 + A = A. OR med 0 endrer ikke signalet — 0 er identitetselementet for OR.'
  },

  {
    cat: 'lover',
    q: 'Hva er 1 + A?',
    opts: ['A', '0', '<span class="not">A</span>', '1'],
    correct: 3,
    explain: 'Dominerende element for OR: 1 + A = 1. Siden minst én inngang alltid er høy, vil utgangen alltid være 1 uavhengig av A.'
  },

  {
    cat: 'lover',
    q: 'Hva er A + <span class="not">A</span>?',
    opts: ['0', '<span class="not">A</span>', 'A', '1'],
    correct: 3,
    explain: 'Komplementlov for OR: A + <span class="not">A</span> = 1. En variabel OR-et med sin komplement gir alltid 1 — én av dem er alltid sann.'
  },

  {
    cat: 'lover',
    q: 'Hva er A + A?',
    opts: ['2A', '0', 'A', 'A²'],
    correct: 2,
    explain: 'Idempotentlov for OR: A + A = A. I boolsk algebra gjelder ikke vanlig aritmetikk — en variabel OR-et med seg selv gir den samme variabelen.'
  },

  {
    cat: 'lover',
    q: 'Hva er 1·A?',
    opts: ['1', '<span class="not">A</span>', '0', 'A'],
    correct: 3,
    explain: 'Identitetslov for AND: 1·A = A. AND med 1 endrer ikke signalet — 1 er identitetselementet for AND.'
  },

  {
    cat: 'lover',
    q: 'Hva er 0·A?',
    opts: ['A', '<span class="not">A</span>', '0', '1'],
    correct: 2,
    explain: 'Dominerende element for AND: 0·A = 0. AND med 0 gir alltid 0 uavhengig av A — 0 er det dominerende elementet for AND.'
  },

  {
    cat: 'lover',
    q: 'Hva er A · <span class="not">A</span>?',
    opts: ['1', 'A', '<span class="not">A</span>', '0'],
    correct: 3,
    explain: 'Komplementlov for AND: A · <span class="not">A</span> = 0. En variabel AND-et med sin komplement gir alltid 0 — én av dem er alltid lav.'
  },

  {
    cat: 'lover',
    q: 'Hva er A · A?',
    opts: ['A²', '0', 'A', '2A'],
    correct: 2,
    explain: 'Idempotentlov for AND: A · A = A. En variabel AND-et med seg selv gir den samme variabelen.'
  },

  {
    cat: 'lover',
    q: 'Hva sier den kommutative loven for OR?',
    opts: ['A + B = A·B', 'A + B = B + A', '(A+B)+C = A+(B+C)', 'A + A = A'],
    correct: 1,
    explain: 'Kommutativ lov for OR: A + B = B + A. Rekkefølgen på inngangene spiller ingen rolle for resultatet.'
  },

  {
    cat: 'lover',
    q: 'Hva sier den kommutative loven for AND?',
    opts: ['A·B = A+B', 'A·A = A', 'A·B = B·A', '(A·B)·C = A·(B·C)'],
    correct: 2,
    explain: 'Kommutativ lov for AND: A·B = B·A. Rekkefølgen på inngangene spiller ingen rolle — AND er kommutativt akkurat som multiplikasjon.'
  },

  {
    cat: 'lover',
    q: 'Hva sier den assosiative loven for OR?',
    opts: [
      'A + (B·C) = (A+B)·(A+C)',
      '(A+B)+C = A+(B+C)',
      'A + B = B + A',
      'A + B·C = (A+B)·(A+C)'
    ],
    correct: 1,
    explain: 'Assosiativ lov for OR: (A+B)+C = A+(B+C). Grupperingen av OR-operander er uten betydning — resultatet er det samme uansett.'
  },

  {
    cat: 'lover',
    q: 'Hva sier den assosiative loven for AND?',
    opts: ['A·B = B·A', 'A·(B+C) = A·B + A·C', 'A·A = A', '(A·B)·C = A·(B·C)'],
    correct: 3,
    explain: 'Assosiativ lov for AND: (A·B)·C = A·(B·C). Grupperingen av AND-operander spiller ingen rolle for resultatet.'
  },

  // ── Forenkling ───────────────────────────────────────────────

  {
    cat: 'uttrykk',
    q: 'Hva er riktig forenkling av A·B + A·C?',
    opts: ['A + B·C', 'A + B + C', 'A·B·C', 'A·(B+C)'],
    correct: 3,
    explain: 'Distributiv lov: A·B + A·C = A·(B+C). A faktoriseres ut, akkurat som i vanlig algebra. Nyttig for å forenkle logiske kretser.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er riktig forenkling av (A+B)·(A+C)?',
    opts: ['A·(B+C)', 'A·B + B·C', 'A + B + C', 'A + B·C'],
    correct: 3,
    explain: 'Distributiv lov 2: (A+B)·(A+C) = A + B·C. En viktig boolsk identitet uten direkte parallell i vanlig algebra.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er A + A·B forenklet?',
    opts: ['A·B', 'A + B', 'B', 'A'],
    correct: 3,
    explain: 'Absorpsjonslov: A + A·B = A. Bevis: A + A·B = A·(1+B) = A·1 = A. Det sammensatte leddet absorberes av det enkle.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er A·(A+B) forenklet?',
    opts: ['A + B', 'B', 'A·B', 'A'],
    correct: 3,
    explain: 'Absorpsjonslov: A·(A+B) = A. Bevis: A·A + A·B = A + A·B = A (første absorpsjonslov). A dominerer det større OR-uttrykket.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er A + <span class="not">A</span>·B forenklet?',
    opts: ['A·B', '<span class="not">A</span> + B', 'A', 'A + B'],
    correct: 3,
    explain: 'Regel: A + <span class="not">A</span>·B = A + B. Bevis via distributiv: (A + <span class="not">A</span>)·(A+B) = 1·(A+B) = A+B.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er <span class="not">A</span>·B + A·B forenklet?',
    opts: ['A·B', 'A + B', 'A', 'B'],
    correct: 3,
    explain: '<span class="not">A</span>·B + A·B = B·(<span class="not">A</span>+A) = B·1 = B. B faktoriseres ut og komplementloven gir <span class="not">A</span>+A = 1.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er A·B + A·<span class="not">B</span> forenklet?',
    opts: ['B', 'A + B', '<span class="not">A</span>', 'A'],
    correct: 3,
    explain: 'A·B + A·<span class="not">B</span> = A·(B + <span class="not">B</span>) = A·1 = A. <span class="not">B</span>-faktoren elimineres ved komplementloven B + <span class="not">B</span> = 1.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er <span class="not">A</span>·<span class="not">B</span> + <span class="not">A</span>·B forenklet?',
    opts: ['A', 'B', '<span class="not">A</span>', '<span class="not">B</span>'],
    correct: 2,
    explain: '<span class="not">A</span>·<span class="not">B</span> + <span class="not">A</span>·B = <span class="not">A</span>·(<span class="not">B</span>+B) = <span class="not">A</span>·1 = <span class="not">A</span>. B-faktoren elimineres ved komplementloven.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er <span class="not">A·B</span> forenklet?',
    opts: [
      '<span class="not">A</span> · <span class="not">B</span>',
      'A + B',
      '<span class="not">A</span> + <span class="not">B</span>',
      '<span class="not">A+B</span>'
    ],
    img: `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">De Morgans lover — to ekvivalente former</text><rect x="14" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="69" y="47" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace"><tspan text-decoration="overline">A·B</tspan> = ?</text><text x="136" y="47" fill="#7b82a8" font-size="20" text-anchor="middle">→</text><rect x="156" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#7b82a8" stroke-width="1" stroke-dasharray="4,3"/><text x="211" y="47" fill="#7b82a8" font-size="13" text-anchor="middle" font-family="monospace">?</text><text x="140" y="78" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hvilken av alternativene fyller inn i høyre boks?</text></svg>`,
    correct: 2,
    explain: 'De Morgans 1. lov: <span class="not">A·B</span> = <span class="not">A</span> + <span class="not">B</span>. En NAND-port kan realiseres som inverterte innganger med en OR-port.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er <span class="not">A+B</span> forenklet?',
    opts: [
      '<span class="not">A</span> + <span class="not">B</span>',
      '<span class="not">A</span> · <span class="not">B</span>',
      '<span class="not">A·B</span>',
      'A · B'
    ],
    correct: 1,
    explain: 'De Morgans 2. lov: <span class="not">A+B</span> = <span class="not">A</span> · <span class="not">B</span>. En NOR-port kan realiseres som inverterte innganger med en AND-port.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er sannhetsverdien til F = A·B + C når A=1, B=0, C=1?',
    img: `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="15" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Husk: AND evalueres før OR</text><rect x="40" y="24" width="200" height="46" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="140" y="40" fill="#5c7cfa" font-size="12" text-anchor="middle" font-family="monospace">A=1, B=0, C=1</text><text x="140" y="60" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">F = A·B + C = ?</text></svg>`,
    opts: ['0', 'A', 'B', '1'],
    correct: 3,
    explain: 'AND evalueres alltid før OR (som i vanlig algebra): A·B = 1·0 = 0. Deretter: 0 + C = 0 + 1 = 1. F = 1.'
  },

  {
    cat: 'uttrykk',
    q: 'Hva er sannhetsverdien til F = <span class="not">A</span>·B + A·<span class="not">B</span> når A=1, B=0?',
    img: `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="15" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Dette er XOR-uttrykket — evaluer for A=1, B=0</text><rect x="40" y="24" width="200" height="46" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="140" y="40" fill="#5c7cfa" font-size="12" text-anchor="middle" font-family="monospace">A=1, B=0</text><text x="140" y="60" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace"><tspan text-decoration="overline">A</tspan>·B + A·<tspan text-decoration="overline">B</tspan> = ?</text></svg>`,
    opts: ['0', '1', 'A', 'B'],
    correct: 1,
    explain: '<span class="not">A</span>=0, B=0: første ledd 0·0=0. A=1, <span class="not">B</span>=1: andre ledd 1·1=1. F = 0+1 = 1. Dette er XOR-uttrykket: gir 1 når A≠B.'
  },

];
