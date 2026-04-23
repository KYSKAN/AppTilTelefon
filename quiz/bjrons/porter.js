'use strict';
const QUIZ_META = {
  id: 'porter',
  title: 'Logiske porter',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    grunnlag: { label: 'Grunnleggende',   color: '#5c7cfa' },
    tabell:   { label: 'Sannhetstabeller', color: '#f59e0b' },
    avansert: { label: 'Avansert',         color: '#10b981' },
  }
};

// SVG-hjelper for 2-inngangs sannhetstabell
function tt2(f00, f01, f10, f11) {
  const col = v => v === '1' ? '#2ecc71' : '#e74c3c';
  return `<svg viewBox="0 0 280 138" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="138" fill="#161927" rx="8"/>
    <text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Sannhetstabell for ukjent port</text>
    <line x1="20" y1="43" x2="260" y2="43" stroke="#2a2f4a" stroke-width="1"/>
    <line x1="103" y1="22" x2="103" y2="130" stroke="#2a2f4a" stroke-width="1"/>
    <line x1="177" y1="22" x2="177" y2="130" stroke="#2a2f4a" stroke-width="1"/>
    <text x="61"  y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">A</text>
    <text x="140" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">B</text>
    <text x="219" y="37" fill="#5c7cfa" font-size="13" text-anchor="middle" font-family="monospace" font-weight="700">F</text>
    <text x="61"  y="60"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="140" y="60"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="219" y="60"  fill="${col(f00)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f00}</text>
    <text x="61"  y="82"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="140" y="82"  fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="219" y="82"  fill="${col(f01)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f01}</text>
    <text x="61"  y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="140" y="104" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">0</text>
    <text x="219" y="104" fill="${col(f10)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f10}</text>
    <text x="61"  y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="140" y="126" fill="#e8eaf6" font-size="13" text-anchor="middle" font-family="monospace">1</text>
    <text x="219" y="126" fill="${col(f11)}" font-size="14" text-anchor="middle" font-family="monospace" font-weight="700">${f11}</text>
  </svg>`;
}

const QUESTIONS = [

  // ── Grunnleggende ─────────────────────────────────────────────

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en AND-port?',
    opts: ['F = A + B', 'F = A·B', 'F = <span class="not">A+B</span>', 'F = <span class="not">A·B</span>'],
    correct: 1,
    explain: 'AND-porten: F = A·B. Utgangen er 1 kun når alle innganger er 1. Tilsvarer multiplikasjon i boolsk algebra.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en OR-port?',
    opts: ['F = A·B', 'F = A + B', 'F = <span class="not">A+B</span>', 'F = <span class="not">A·B</span>'],
    correct: 1,
    explain: 'OR-porten: F = A + B. Utgangen er 1 når minst én inngang er 1. Tilsvarer addisjon i boolsk algebra.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en NOT-port (inverter)?',
    opts: ['F = A·B', 'F = <span class="not">A·B</span>', 'F = A + B', 'F = <span class="not">A</span>'],
    correct: 3,
    explain: 'NOT-porten: F = <span class="not">A</span>. Inverterer inngangssignalet — 0 blir 1 og 1 blir 0. Eneste logiske port med én inngang.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en NAND-port?',
    opts: ['F = <span class="not">A+B</span>', 'F = A·B', 'F = <span class="not">A·B</span>', 'F = A + B'],
    correct: 2,
    explain: 'NAND-porten: F = <span class="not">A·B</span>. Utgangen er 0 kun når alle innganger er 1. NAND er en universalport — alle andre porter kan bygges med NAND alene.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en NOR-port?',
    opts: ['F = <span class="not">A·B</span>', 'F = <span class="not">A+B</span>', 'F = A·B', 'F = A⊕B'],
    correct: 1,
    explain: 'NOR-porten: F = <span class="not">A+B</span>. Utgangen er 1 kun når alle innganger er 0. NOR er også en universalport på lik linje med NAND.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en XOR-port?',
    opts: ['F = A·B', 'F = A + B', 'F = <span class="not">A·B</span>', 'F = A⊕B'],
    correct: 3,
    explain: 'XOR-porten: F = A⊕B = A·<span class="not">B</span> + <span class="not">A</span>·B. Utgangen er 1 kun når inngangene er forskjellige.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilken boolsk funksjon beskriver en XNOR-port?',
    opts: ['F = A⊕B', 'F = <span class="not">A⊕B</span>', 'F = A·B', 'F = A+B'],
    correct: 1,
    explain: 'XNOR-porten: F = <span class="not">A⊕B</span> = A·B + <span class="not">A</span>·<span class="not">B</span>. Utgangen er 1 kun når inngangene er like — det motsatte av XOR.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva er spesielt med NAND- og NOR-portene?',
    opts: [
      'De har alltid tre eller flere innganger for å håndtere komplekse uttrykk',
      'De er universalporter — alle logiske funksjoner kan bygges med kun én av dem',
      'De bruker vesentlig mindre strøm enn tilsvarende AND- og OR-porter',
      'De er kun tilgjengelige i TTL og finnes ikke i moderne CMOS-kretser'
    ],
    correct: 1,
    explain: 'NAND og NOR er universalporter: ethvert logisk uttrykk kan realiseres utelukkende med NAND-porter (eller kun NOR-porter). AND, OR og NOT alene gir ikke denne egenskapen.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva er en NAND-port konstruert av?',
    opts: ['OR etterfulgt av NOT', 'AND etterfulgt av NOT', 'NOT etterfulgt av AND', 'XOR etterfulgt av NOT'],
    correct: 1,
    explain: 'NAND = AND + NOT. Resultatet av AND-porten inverteres av NOT-porten. F = <span class="not">A·B</span>. Navnet NAND kommer av Not-AND.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva er en NOR-port konstruert av?',
    opts: ['NAND etterfulgt av NOT', 'XOR etterfulgt av NOT', 'OR etterfulgt av NOT', 'NOT etterfulgt av OR'],
    correct: 2,
    explain: 'NOR = OR + NOT. Resultatet av OR-porten inverteres av NOT-porten. F = <span class="not">A+B</span>. Navnet NOR kommer av Not-OR.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilket matematisk symbol tilsvarer AND-porten i boolsk algebra?',
    opts: ['Pluss (+)', 'Gangetegn (·)', 'Minus (−)', 'Divisjon (÷)'],
    correct: 1,
    explain: 'AND-porten tilsvarer multiplikasjon (·) i boolsk algebra. A AND B skrives A·B. Akkurat som i vanlig algebra gir 0·1 = 0 og 1·1 = 1.'
  },

  {
    cat: 'grunnlag',
    q: 'Hvilket matematisk symbol tilsvarer OR-porten i boolsk algebra?',
    opts: ['Gangetegn (·)', 'Minus (−)', 'Pluss (+)', 'Divisjon (÷)'],
    correct: 2,
    explain: 'OR-porten tilsvarer addisjon (+) i boolsk algebra. A OR B skrives A+B. Merk at 1+1=1 i boolsk algebra — resultatet er alltid 0 eller 1.'
  },

  // ── Sannhetstabeller ─────────────────────────────────────────

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 0,0,0,1)',
    img: tt2('0','0','0','1'),
    opts: ['OR — F = A+B', 'NAND — F = <span class="not">A·B</span>', 'AND — F = A·B', 'XOR — F = A⊕B'],
    correct: 2,
    explain: 'AND-porten: F = A·B. Utgangen er 1 kun når begge innganger er 1. Mønsteret 0,0,0,1 er signaturen til AND.'
  },

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 0,1,1,1)',
    img: tt2('0','1','1','1'),
    opts: ['AND — F = A·B', 'NOR — F = <span class="not">A+B</span>', 'NAND — F = <span class="not">A·B</span>', 'OR — F = A+B'],
    correct: 3,
    explain: 'OR-porten: F = A+B. Utgangen er 0 kun når begge innganger er 0. Mønsteret 0,1,1,1 er signaturen til OR.'
  },

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 1,1,1,0)',
    img: tt2('1','1','1','0'),
    opts: ['AND — F = A·B', 'NOR — F = <span class="not">A+B</span>', 'NAND — F = <span class="not">A·B</span>', 'OR — F = A+B'],
    correct: 2,
    explain: 'NAND-porten: F = <span class="not">A·B</span>. Utgangen er 0 kun når begge innganger er 1 — speilet AND. Mønsteret 1,1,1,0 er signaturen til NAND.'
  },

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 1,0,0,0)',
    img: tt2('1','0','0','0'),
    opts: ['AND — F = A·B', 'NOR — F = <span class="not">A+B</span>', 'NAND — F = <span class="not">A·B</span>', 'OR — F = A+B'],
    correct: 1,
    explain: 'NOR-porten: F = <span class="not">A+B</span>. Utgangen er 1 kun når begge innganger er 0 — speilet OR. Mønsteret 1,0,0,0 er signaturen til NOR.'
  },

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 0,1,1,0)',
    img: tt2('0','1','1','0'),
    opts: ['OR — F = A+B', 'XNOR — F = <span class="not">A⊕B</span>', 'NAND — F = <span class="not">A·B</span>', 'XOR — F = A⊕B'],
    correct: 3,
    explain: 'XOR-porten: F = A⊕B. Utgangen er 1 når inngangene er forskjellige (0,1 eller 1,0) og 0 når de er like. Mønsteret 0,1,1,0 er XOR-signaturen.'
  },

  {
    cat: 'tabell',
    q: 'Hvilken port har denne sannhetstabellen? (F = 1,0,0,1)',
    img: tt2('1','0','0','1'),
    opts: ['XOR — F = A⊕B', 'XNOR — F = <span class="not">A⊕B</span>', 'NOR — F = <span class="not">A+B</span>', 'AND — F = A·B'],
    correct: 1,
    explain: 'XNOR-porten: F = <span class="not">A⊕B</span>. Utgangen er 1 når inngangene er like og 0 når de er forskjellige — speilet XOR. Mønsteret 1,0,0,1 er XNOR-signaturen.'
  },

  {
    cat: 'tabell',
    q: 'En NAND-port: hva er F når A=1 og B=1?',
    opts: ['1', '0', 'A', 'udefinert'],
    correct: 1,
    explain: 'NAND: F = <span class="not">A·B</span>. A·B = 1·1 = 1, og NAND inverterer dette til 0. NAND gir 0 kun for kombinasjonen A=1, B=1.'
  },

  {
    cat: 'tabell',
    q: 'En NOR-port: hva er F når A=0 og B=0?',
    opts: ['0', 'udefinert', 'A', '1'],
    correct: 3,
    explain: 'NOR: F = <span class="not">A+B</span>. A+B = 0+0 = 0, og NOR inverterer dette til 1. NOR gir 1 kun for kombinasjonen A=0, B=0.'
  },

  {
    cat: 'tabell',
    q: 'En XOR-port: hva er F når A=1 og B=1?',
    opts: ['1', '0', 'udefinert', 'A'],
    correct: 1,
    explain: 'XOR: F = A⊕B. Utgangen er 1 kun når inngangene er forskjellige. Når A=B=1 er inngangene like, så F = 0.'
  },

  // ── Avansert ─────────────────────────────────────────────────

  {
    cat: 'avansert',
    q: 'Hvilken port gir output 1 kun når inngangene er forskjellige?',
    opts: ['AND-port', 'OR-port', 'XNOR-port', 'XOR-port'],
    correct: 3,
    explain: 'XOR: F = A⊕B. Gir 1 ved 0,1 eller 1,0 og 0 ved 0,0 eller 1,1. Brukes mye i adderkretser og paritetskontroll.'
  },

  {
    cat: 'avansert',
    q: 'Hva er resultatet av A XOR A (samme signal inn på begge innganger)?',
    opts: ['A', '1', '0', '<span class="not">A</span>'],
    correct: 2,
    explain: 'A⊕A = 0 alltid. XOR gir 1 kun når inngangene er forskjellige — to like signaler gir alltid 0. Nyttig for å nullstille en verdi.'
  },

  {
    cat: 'avansert',
    q: 'Hva er resultatet av A XNOR A (samme signal inn på begge innganger)?',
    opts: ['0', 'A', '<span class="not">A</span>', '1'],
    correct: 3,
    explain: '<span class="not">A⊕A</span> = 1 alltid. XNOR gir 1 når inngangene er like — to identiske signaler er alltid "like", så utgangen er alltid 1.'
  },

  {
    cat: 'avansert',
    q: 'Hvilke to porter kan bygge alle andre logiske funksjoner alene?',
    opts: ['AND og OR', 'NOT og XOR', 'NAND og NOR', 'OR og XOR'],
    correct: 2,
    explain: 'NAND og NOR er begge universalporter. Med kun NAND-porter kan man lage NOT, AND, OR og alle andre funksjoner. Det samme gjelder for NOR-porter alene.'
  },

  {
    cat: 'avansert',
    q: 'Hvordan lages en NOT-port fra én NAND-port?',
    opts: [
      'Koble A til den ene og B til den andre inngangen',
      'Koble samme signal til begge innganger på NAND',
      'Koble utgangen tilbake til inngangen',
      'Det er ikke mulig'
    ],
    correct: 1,
    explain: 'En NAND-port med begge innganger koblet til samme signal A gir: <span class="not">A·A</span> = <span class="not">A</span> (idempotentlov). Dette er en NOT-port laget av én NAND.'
  },

];
