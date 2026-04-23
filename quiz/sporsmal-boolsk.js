'use strict';
const QUIZ_META = {
  id: 'boolsk',
  title: 'Boolsk algebra',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    boolsk: { label: 'Boolske lover', color: '#5c7cfa' },
    porter: { label: 'Logiske porter', color: '#f59e0b' }
  }
};

const QUESTIONS = [

  // ── Boolske lover ────────────────────────────────────────────

  {
    cat: 'boolsk',
    q: 'Hva er resultatet av dobbel negasjon — <span class="dbl-not">A</span>? (regel 1)',
    opts: [
      '<span class="not">A</span> — signalet forblir invertert',
      'A — to inverteringer opphever hverandre',
      '0 — signalet tilbakestilles til lav',
      '1 — signalet settes til høy'
    ],
    correct: 1,
    explain: 'Dobbel negasjon (regel 1): <span class="dbl-not">A</span> = A. Inverteres et signal to ganger kommer du tilbake til det originale signalet.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er 0 + A? (regel 2 — identitetslov for OR)',
    opts: ['0', '1', 'A', '<span class="not">A</span>'],
    correct: 2,
    explain: 'Identitetslov for OR (regel 2): 0 + A = A. OR med 0 endrer ikke signalet — 0 er identitetselementet for OR-operasjonen.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er 1 + A? (regel 3 — dominerende element for OR)',
    opts: ['A', '0', '<span class="not">A</span>', '1'],
    correct: 3,
    explain: 'Dominerende element for OR (regel 3): 1 + A = 1. Siden minst én inngang er høy, vil utgangen alltid være 1 uavhengig av A.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er A + <span class="not">A</span>? (regel 4 — komplementlov for OR)',
    opts: ['0', '<span class="not">A</span>', 'A', '1'],
    correct: 3,
    explain: 'Komplementlov for OR (regel 4): A + <span class="not">A</span> = 1. En variabel OR-et med sin komplement gir alltid 1 — én av dem er alltid sann.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er A + A? (regel 5 — idempotentlov for OR)',
    opts: ['2A', '0', 'A', 'A²'],
    correct: 2,
    explain: 'Idempotentlov for OR (regel 5): A + A = A. I boolsk algebra gjelder ikke vanlig aritmetikk — en variabel OR-et med seg selv gir den samme variabelen.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er 1·A? (regel 6 — identitetslov for AND)',
    opts: ['1', '<span class="not">A</span>', '0', 'A'],
    correct: 3,
    explain: 'Identitetslov for AND (regel 6): 1·A = A. AND med 1 endrer ikke signalet — 1 er identitetselementet for AND-operasjonen.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er 0·A? (regel 7 — dominerende element for AND)',
    opts: ['A', '<span class="not">A</span>', '0', '1'],
    correct: 2,
    explain: 'Dominerende element for AND (regel 7): 0·A = 0. AND med 0 gir alltid 0 uavhengig av A — 0 er det dominerende elementet for AND.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er A · <span class="not">A</span>? (regel 8 — komplementlov for AND)',
    opts: ['1', 'A', '<span class="not">A</span>', '0'],
    correct: 3,
    explain: 'Komplementlov for AND (regel 8): A · <span class="not">A</span> = 0. En variabel AND-et med sin komplement gir alltid 0 — én av dem er alltid lav.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er A · A? (regel 9 — idempotentlov for AND)',
    opts: ['A²', '0', 'A', '2A'],
    correct: 2,
    explain: 'Idempotentlov for AND (regel 9): A · A = A. En variabel AND-et med seg selv gir den samme variabelen.'
  },

  {
    cat: 'boolsk',
    q: 'Den distributive lov — hva er riktig forenkling av A·B + A·C? (regel 14)',
    opts: ['A + B·C', 'A + B + C', 'A·B·C', 'A·(B+C)'],
    correct: 3,
    explain: 'Distributiv lov (regel 14): A·B + A·C = A·(B+C). A faktoriseres ut på samme måte som i vanlig algebra. Nyttig for å forenkle logiske kretser.'
  },

  {
    cat: 'boolsk',
    q: 'Den distributive lov 2 — hva er riktig forenkling av (A+B)·(A+C)? (regel 15)',
    opts: ['A·(B+C)', 'A·B + B·C', 'A + B + C', 'A + B·C'],
    correct: 3,
    explain: 'Distributiv lov 2 (regel 15): (A+B)·(A+C) = A + B·C. En viktig boolsk identitet som ikke har direkte parallell i vanlig algebra.'
  },

  {
    cat: 'boolsk',
    q: 'Absorpsjonslov — hva er A + A·B? (regel 16)',
    opts: ['A·B', 'A + B', 'B', 'A'],
    correct: 3,
    explain: 'Absorpsjonslov (regel 16): A + A·B = A. Det sammensatte leddet A·B "absorberes" av det enkle leddet A. Kan verifiseres med sannhetstabell.'
  },

  {
    cat: 'boolsk',
    q: 'Absorpsjonslov — hva er A·(A+B)? (regel 17)',
    opts: ['A + B', 'B', 'A·B', 'A'],
    correct: 3,
    explain: 'Absorpsjonslov (regel 17): A·(A+B) = A. A absorberer det større OR-uttrykket. Svarer til at den ene faktoren dominerer.'
  },

  {
    cat: 'boolsk',
    q: 'Hva er A + <span class="not">A</span>·B forenklet? (regel 18)',
    opts: ['A·B', '<span class="not">A</span> + B', 'A', 'A + B'],
    correct: 3,
    explain: 'Regel 18: A + <span class="not">A</span>·B = A + B. <span class="not">A</span>-faktoren i det andre leddet kan fjernes fordi A allerede er til stede i OR.'
  },

  {
    cat: 'boolsk',
    q: 'De Morgans første lov — hva er <span class="not">A·B</span>? (regel 19)',
    opts: [
      '<span class="not">A</span> · <span class="not">B</span>',
      'A + B',
      '<span class="not">A</span> + <span class="not">B</span>',
      '<span class="not">A+B</span>'
    ],
    img: `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">De Morgans lover — to ekvivalente former</text><rect x="14" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="69" y="47" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace"><tspan text-decoration="overline">A·B</tspan> = ?</text><text x="136" y="47" fill="#7b82a8" font-size="20" text-anchor="middle">→</text><rect x="156" y="26" width="110" height="34" fill="#1e2235" rx="6" stroke="#7b82a8" stroke-width="1" stroke-dasharray="4,3"/><text x="211" y="47" fill="#7b82a8" font-size="13" text-anchor="middle" font-family="monospace">?</text><text x="140" y="78" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hvilken av alternativene fyller inn i høyre boks?</text></svg>`,
    correct: 2,
    explain: 'De Morgans 1. lov (regel 19): <span class="not">A·B</span> = <span class="not">A</span> + <span class="not">B</span>. En NAND-port kan realiseres som inverterte innganger med en OR-port. Sentralt verktøy for kretssimplifikasjon.'
  },

  {
    cat: 'boolsk',
    q: 'De Morgans andre lov — hva er <span class="not">A+B</span>? (regel 20)',
    opts: [
      '<span class="not">A</span> + <span class="not">B</span>',
      '<span class="not">A</span> · <span class="not">B</span>',
      '<span class="not">A·B</span>',
      'A · B'
    ],
    correct: 1,
    explain: 'De Morgans 2. lov (regel 20): <span class="not">A+B</span> = <span class="not">A</span> · <span class="not">B</span>. En NOR-port kan realiseres som inverterte innganger med en AND-port. Speilet versjon av den første De Morgan-loven.'
  },

  // ── Logiske porter ───────────────────────────────────────────

  {
    cat: 'porter',
    q: 'Hvilket matematisk symbol tilsvarer AND-porten i boolsk algebra?',
    opts: [
      'Pluss (+)',
      'Gangetegn (·)',
      'Minus (−)',
      'Divisjon (÷)'
    ],
    correct: 1,
    explain: 'AND-porten tilsvarer multiplikasjon i boolsk algebra. A AND B skrives A · B (eller bare AB). Akkurat som i vanlig algebra gir 0 · 1 = 0, og 1 · 1 = 1.'
  },

  {
    cat: 'porter',
    q: 'Hvilket matematisk symbol tilsvarer OR-porten i boolsk algebra?',
    opts: [
      'Gangetegn (·)',
      'Minus (−)',
      'Pluss (+)',
      'Divisjon (÷)'
    ],
    correct: 2,
    explain: 'OR-porten tilsvarer addisjon i boolsk algebra. A OR B skrives A + B. Merk at 1 + 1 = 1 i boolsk algebra (ikke 2), siden resultatet alltid er 0 eller 1.'
  },

  {
    cat: 'porter',
    q: 'Hvilken port har denne sannhetstabellen?',
    img: `<svg viewBox="0 0 280 138" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="138" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Sannhetstabell for ukjent port</text><line x1="20" y1="43" x2="260" y2="43" stroke="#2a2f4a" stroke-width="1"/><line x1="103" y1="22" x2="103" y2="130" stroke="#2a2f4a" stroke-width="1"/><line x1="177" y1="22" x2="177" y2="130" stroke="#2a2f4a" stroke-width="1"/><text x="61" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">A</text><text x="140" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">B</text><text x="219" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">F</text><text x="61" y="60" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="140" y="60" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="219" y="60" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text><text x="61" y="82" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="140" y="82" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="219" y="82" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text><text x="61" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="140" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="219" y="104" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text><text x="61" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="140" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="219" y="126" fill="#2ecc71" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">1</text></svg>`,
    opts: [
      'OR-port — F = A + B',
      'NAND-port — F = <span class="not">A·B</span>',
      'AND-port — F = A·B',
      'XOR-port — F = A⊕B'
    ],
    correct: 2,
    explain: 'AND-porten: F = A·B. Utgangen er 1 kun når begge innganger er 1. Sannhetstabellen viser F = 0,0,0,1 for kombinasjonene 00, 01, 10, 11.'
  },

  {
    cat: 'porter',
    q: 'Hvilken port har denne sannhetstabellen?',
    img: `<svg viewBox="0 0 280 138" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="138" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Sannhetstabell for ukjent port</text><line x1="20" y1="43" x2="260" y2="43" stroke="#2a2f4a" stroke-width="1"/><line x1="103" y1="22" x2="103" y2="130" stroke="#2a2f4a" stroke-width="1"/><line x1="177" y1="22" x2="177" y2="130" stroke="#2a2f4a" stroke-width="1"/><text x="61" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">A</text><text x="140" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">B</text><text x="219" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">F</text><text x="61" y="60" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="140" y="60" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="219" y="60" fill="#2ecc71" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">1</text><text x="61" y="82" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="140" y="82" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="219" y="82" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text><text x="61" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="140" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text><text x="219" y="104" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text><text x="61" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="140" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text><text x="219" y="126" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">0</text></svg>`,
    opts: [
      'AND-port — F = A·B',
      'NOR-port — F = <span class="not">A+B</span>',
      'NAND-port — F = <span class="not">A·B</span>',
      'OR-port — F = A + B'
    ],
    correct: 1,
    explain: 'NOR-porten: F = <span class="not">A+B</span>. Utgangen er 1 kun når begge innganger er 0. Sannhetstabellen viser F = 1,0,0,0 — det motsatte av OR-porten.'
  },

  {
    cat: 'porter',
    q: 'Hvilken boolsk funksjon beskriver en OR-port?',
    opts: [
      'F = A·B',
      'F = A + B',
      'F = <span class="not">A+B</span>',
      'F = <span class="not">A·B</span>'
    ],
    correct: 1,
    explain: 'OR-porten: F = A + B. Utgangen er 1 når minst én inngang er 1.'
  },

  {
    cat: 'porter',
    q: 'Hvilken boolsk funksjon beskriver en NOT-port (inverter)?',
    opts: [
      'F = A·B',
      'F = <span class="not">A·B</span>',
      'F = A + B',
      'F = <span class="not">A</span>'
    ],
    correct: 3,
    explain: 'NOT-porten (inverter): F = <span class="not">A</span>. Inverterer inngangssignalet. Eneste logiske port med én inngang.'
  },

  {
    cat: 'porter',
    q: 'Hvilken boolsk funksjon beskriver en NAND-port?',
    opts: [
      'F = <span class="not">A+B</span>',
      'F = A·B',
      'F = <span class="not">A·B</span>',
      'F = A + B'
    ],
    correct: 2,
    explain: 'NAND-porten: F = <span class="not">A·B</span>. Utgangen er 0 kun når begge innganger er 1. NAND er en universalport — alle andre porter kan bygges med NAND-porter alene.'
  },

  {
    cat: 'porter',
    q: 'Hvilken boolsk funksjon beskriver en NOR-port?',
    opts: [
      'F = <span class="not">A·B</span>',
      'F = <span class="not">A+B</span>',
      'F = A·B',
      'F = A⊕B'
    ],
    correct: 1,
    explain: 'NOR-porten: F = <span class="not">A+B</span>. Utgangen er 1 kun når begge innganger er 0. NOR er også en universalport, på lik linje med NAND.'
  },

  {
    cat: 'porter',
    q: 'Hvilken boolsk funksjon beskriver en XOR-port?',
    opts: [
      'F = A·B',
      'F = A + B',
      'F = <span class="not">A·B</span>',
      'F = A⊕B'
    ],
    correct: 3,
    explain: 'XOR-porten: F = A⊕B = A·<span class="not">B</span> + <span class="not">A</span>·B. Utgangen er 1 når inngangene er forskjellige — men 0 når begge er like.'
  },

  {
    cat: 'porter',
    q: 'Hva er spesielt med NAND- og NOR-portene sammenlignet med AND, OR og NOT?',
    opts: [
      'De har tre innganger i stedet for to',
      'De er universalporter — alle logiske funksjoner kan bygges med kun én av dem',
      'De bruker mindre strøm enn andre porter',
      'De er kun tilgjengelige i TTL-teknologi'
    ],
    correct: 1,
    explain: 'NAND og NOR er universalporter: ethvert logisk uttrykk kan realiseres utelukkende med NAND-porter (eller utelukkende med NOR-porter). AND, OR og NOT alene gir ikke denne egenskapen.'
  },

  {
    cat: 'porter',
    q: 'En NAND-port har innganger A = 1 og B = 1. Hva er utgangen F?',
    opts: ['1', '0', 'A', 'udefinert'],
    correct: 1,
    explain: 'NAND: F = <span class="not">A·B</span>. Når A = 1 og B = 1 er AND-resultatet 1, og NAND inverterer dette til 0. NAND gir 0 kun for kombinasjonen 1,1.'
  },

  {
    cat: 'porter',
    q: 'Hvilken port gir output 1 kun når inngangene er forskjellige?',
    opts: ['AND-port', 'OR-port', 'XNOR-port', 'XOR-port'],
    correct: 3,
    explain: 'XOR-porten: F = A⊕B. Utgangen er 1 når A ≠ B (dvs. 0,1 eller 1,0) og 0 når A = B (dvs. 0,0 eller 1,1). Brukes mye i adderkretser og paritetskontroll.'
  },

  {
    cat: 'porter',
    q: 'Hvilken port er ekvivalent med en AND-port etterfulgt av en NOT-port (inverter)?',
    opts: ['NOR-port', 'OR-port', 'NAND-port', 'XOR-port'],
    correct: 2,
    explain: 'NAND = NOT + AND. F = <span class="not">A·B</span> er det samme som å ta AND-resultatet (A·B) og invertere det. Navnet NAND kommer av Not-AND.'
  },

  {
    cat: 'porter',
    q: 'Hvilken port er ekvivalent med en OR-port etterfulgt av en NOT-port (inverter)?',
    opts: ['NAND-port', 'XOR-port', 'AND-port', 'NOR-port'],
    correct: 3,
    explain: 'NOR = NOT + OR. F = <span class="not">A+B</span> er det samme som å ta OR-resultatet (A + B) og invertere det. Navnet NOR kommer av Not-OR.'
  }

];
