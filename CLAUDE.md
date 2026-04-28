# CLAUDE.md — Prosjektoversikt

## Hva er dette?
PWA og nettside for elektrikere. Fagkalkulatorer og quiz. Fungerer som installerbar PWA på Android og iOS, og som nettside i alle nettlesere på mobil og PC. Hostet på GitHub Pages — automatisk deploy ved `git push`. URL: https://kyskan.github.io/Elektriker-App

## Filstruktur
```
AppTilTelefon/
├── index.html             Rot-redirect eller landingsside
├── manifest.json          PWA-konfig: navn, ikon, farger, display-modus
├── service-worker.js      Offline-caching (Network-first) — HUSK: bump CACHE ved deploy
├── .nojekyll              Hindrer GitHub Pages fra å kjøre Jekyll (viktig for rask deploy)
├── CLAUDE.md              Denne filen — alltid i kontekst
├── DEVELOPMENT.md         Utviklingsplan, backlog og roadmap
├── icons/
│   └── icon.svg           App-ikon (gult lyn på mørk bakgrunn)
├── kalkulator/
│   ├── index.html         Kalkulator-app (hoved-HTML, laster all CSS og JS)
│   ├── css/
│   │   └── style.css      All styling, seksjoner kommentert med /* ── Navn ── */
│   └── js/
│       ├── menu.js        Dropdown-navigasjon, switchTo(), toggle-init (delt)
│       ├── calc-ohm.js    Ohms lov: V/A/Ω/W — fyll inn 2, beregn 2
│       ├── kabel-data.js  Tabeller og konstanter for kabel og vern (IEC 60364-5-52)
│       ├── calc-kabel.js  Kabel og vern: NEK 400, IT/TN, logikk og utregning
│       ├── calc-spenning.js  Spenningsfallkalkulator
│       └── calc-krets.js  RC/RL/RLC: impedans, effekter, fasevinkel
└── quiz/
    ├── index.html          Quiz LØM — velger, lenker til spill.html?tema=X
    ├── index-elektro.html  Quiz Elektro — velger
    ├── index-bjrons.html   Quiz Elektroniske (Bjørns) — velger
    ├── spill.html          Quiz-motor — laster quiz-fil dynamisk fra temaFil[tema]
    ├── illustrations.js    SVG-illustrasjoner lastet FØR quiz-fil evalueres
    ├── lom/
    │   ├── ledelse.js      LØM – Ledelse & Organisasjon (30 spørsmål)
    │   ├── marked.js       LØM – Markedsføringsledelse (36 spørsmål)
    │   ├── regnskap.js     LØM – Regnskapsanalyse (33 spørsmål)
    │   ├── okonomi.js      LØM – Økonomistyring (50 spørsmål)
    │   └── lovavtale.js    LØM – Lover & Avtaler (29 spørsmål)
    ├── elektro/
    │   └── rlc.js          RLC-kretser (28 spørsmål)
    └── bjrons/
        ├── boolsk.js           Boolsk algebra (31 spørsmål)
        ├── porter.js           Logiske porter (26 spørsmål)
        ├── mikrokontroller.js  Mikrokontroller (25 spørsmål)
        ├── minne.js            Dataminne (25 spørsmål)
        ├── tallsystemer.js     Tallsystemer (30 spørsmål)
        ├── vipper.js           Vipper/Flip-flops (22 spørsmål)
        └── trh1ek.js           TRH-1EK – Avsluttende prøve (50 spørsmål)
```

## Kalkulatorer
Alle kalkulatorer ligger i `kalkulator/`. HTML er i `kalkulator/index.html`, JS i `kalkulator/js/`.

| Meny-ID   | JS-fil           | View-ID      | Funksjon                               |
|-----------|------------------|--------------|----------------------------------------|
| ohm       | calc-ohm.js      | viewOhm      | Ohms lov med multiplikator             |
| kabel     | calc-kabel.js    | viewKabel    | Kabeldimensjonering etter NEK 400      |
| spenning  | calc-spenning.js | viewSpenning | Spenningsfallkalkulator                |
| krets     | calc-krets.js    | viewKrets    | RC/RL/RLC: P, Q, S, cos φ, Z, I, φ    |

## Quiz (quiz/)
Tre separate quiz-velger-sider lenket fra hoved-appen. Felles quiz-motor i `spill.html`.

### Alle quiz-temaer
| Slug              | Fil                       | Spørsmål | Hub               | Toppliste |
|-------------------|---------------------------|----------|-------------------|-----------|
| lom-ledelse       | lom/ledelse.js            | 30       | index.html        | ✓         |
| lom-marked        | lom/marked.js             | 36       | index.html        | ✓         |
| lom-regnskap      | lom/regnskap.js           | 33       | index.html        | ✓         |
| lom-okonomi       | lom/okonomi.js            | 50       | index.html        | ✓         |
| lom-lovavtale     | lom/lovavtale.js          | 29       | index.html        | ✓         |
| rlc               | elektro/rlc.js            | 28       | index-elektro.html | ✓        |
| boolsk            | bjrons/boolsk.js          | 31       | index-bjrons.html  |          |
| porter            | bjrons/porter.js          | 26       | index-bjrons.html  |          |
| mikrokontroller   | bjrons/mikrokontroller.js | 25       | index-bjrons.html  | ✓        |
| minne             | bjrons/minne.js           | 25       | index-bjrons.html  | ✓        |
| tallsystemer      | bjrons/tallsystemer.js    | 30       | index-bjrons.html  |          |
| vipper            | bjrons/vipper.js          | 22       | index-bjrons.html  |          |
| trh1ek            | bjrons/trh1ek.js          | 50       | index-bjrons.html  | ✓        |

**Totalt: 415 spørsmål fordelt på 13 temaer**

### Slik fungerer spill.html
- Leser `?tema=X` fra URL og slår opp filen i `temaFil`-tabellen
- Støtter multi-tema: `?tema=tema1,tema2` — slår sammen QUESTIONS og CAT_META
- `isLom = temas.some(t => t.startsWith('lom-'))` — styrer navigasjon og navn-krav
- `isBjrons = temas.some(t => bjrons.includes(t))` — styrer «Tilbake»-knapp
- `bjrons`-array: `['boolsk', 'porter', 'mikrokontroller', 'minne', 'tallsystemer', 'vipper', 'trh1ek']`

### localStorage-nøkler
- `quiz_progress_{tema}` — Progresjon (order, idx, score, cats, wrongs)
- `quiz_history_{tema}` — Beste 3 resultater (score, pct, date)
- `quiz_kallenavn` — Brukerens kallenavn (delt på tvers av alle temaer)

### LØM-quiz: påkrevd navn
LØM-quizzene krever at brukeren skriver inn et kallenavn på startskjermen FØR quizen starter. Navnet brukes i `svar`-tabellen (per svar) og i `scores`-tabellen (totalresultat). Styres av `isLom`-variabelen og `currentNavn`-state.

### Legg til nytt tema
1. Opprett JS-fil i riktig mappe med `QUIZ_META` og `QUESTIONS`
2. Legg til i `temaFil`-tabellen i `spill.html`
3. Legg til i `bjrons`-array hvis det er en Bjørns-quiz
4. Legg til i `LB_TEMAS`-array i `spill.html` hvis det skal ha toppliste
5. Legg til quiz-kort i riktig index-fil
6. Legg til i combine-listen i riktig index-fil (index.html / index-bjrons.html)
7. Legg til i `#quiz-select` i `index.html` (innstillinger → nullstill én quiz)
8. Legg til i `FILES`-listen i `service-worker.js` og bump `CACHE`

## Supabase (backend/database)
Prosjekt-URL: `https://cimobeaszhycobffsjes.supabase.co`
Anon-nøkkel ligger i `spill.html` — brukes for INSERT og SELECT fra nettleseren.

### Tabeller
| Tabell   | Kolonner                                          | Formål                        |
|----------|---------------------------------------------------|-------------------------------|
| `scores` | id, navn, score, total, tema, created_at          | Toppliste per tema            |
| `svar`   | id, tema, sporsmal_idx, cat, riktig, navn, created_at | Hvert enkelt svar loggføres |

### RLS (Row Level Security)
- `scores`: anon kan INSERT og SELECT
- `svar`: anon kan INSERT (ikke SELECT — leses kun via Supabase dashboard)

### Supabase-funksjoner i spill.html
| Funksjon                     | Hva den gjør                                        |
|------------------------------|-----------------------------------------------------|
| `sbHeaders(extra)`           | Bygger API-headers med anon-nøkkel                  |
| `fetchLeaderboard(tema)`     | Henter top 10 scores for tema                       |
| `saveScore(navn, sc, tot, t)`| Poster totalresultat til `scores`                   |
| `saveAnswer(q, isCorrect)`   | Logger hvert svar til `svar` (alltid, alle temaer)  |
| `renderLeaderboard(navn)`    | Viser toppliste på resultat-skjermen                |
| `renderStartLeaderboard()`   | Viser toppliste på start-skjermen                   |
| `handleScoreSubmit()`        | Håndterer navn-input og lagrer score                |

`saveAnswer` kalles fra `selectAnswer()` (enkeltvalg) og `confirmAnswer()` (flervalg) for hvert svar.

## Viktige regler
- **Service worker:** Bump `CACHE` (v156 → v157 osv.) i `service-worker.js` linje 1 ved HVER deploy
- **Deploy:** `git add <filer> && git commit -m "..." && git push` — GitHub Pages deployer automatisk
- **Legg aldri til `-A` i git add** — legg til spesifikke filer for å unngå å committe .claude/
- **.nojekyll:** Må alltid ligge i rot — uten den krasjer GitHub Pages-builden etter 15 min
- **Platform:** PWA på Android og iOS, nettside i alle nettlesere på mobil og PC
- **Stil:** Mørkt tema — bakgrunn `#1a1a2e`, kort `#16213e`, aksentblå `#63b3ed`
- **Knapper:** Aktive toggle/beregn-knapper bruker gradient `#3b82f6 → #6366f1`

## Slik legger du til en ny kalkulator
1. Opprett `kalkulator/js/calc-ny.js` med logikk og `calcNyClear()`
2. Legg til HTML-view i `kalkulator/index.html` med `id="viewNy"`
3. I `kalkulator/js/menu.js`: legg til i `views`, `labels`, `menuIdx`
4. I `kalkulator/index.html`: legg til `<div class="dropdown-item">` og `<script src="js/calc-ny.js">`
5. I `service-worker.js`: legg til `'./kalkulator/js/calc-ny.js'` i `FILES` og bump `CACHE`

## Quiz-spørsmålsformat
Hver quiz-fil eksporterer to konstanter: `QUIZ_META` og `QUESTIONS`.

```javascript
const QUIZ_META = {
  id: 'lom-lovavtale',           // unik slug, samme som URL-parameteret
  title: 'Lover & Avtaler',      // vises i UI
  subtitle: 'LØM Fagskole',      // vises under tittel
  description: '28 spørsmål...', // vises på startskjermen
  cats: {
    aml:   { label: 'Arbeidsmiljøloven', color: '#8b5cf6' },
    ferie: { label: 'Ferieloven',        color: '#f59e0b' },
    // én entry per kategori
  }
};

const QUESTIONS = [
  {
    cat: 'aml',                          // nøkkel fra cats-objektet
    catLabel: 'Arbeidsmiljøloven',       // visningsnavn (lik cats[cat].label)
    q: 'Spørsmålstekst her?',
    opts: ['Alternativ A', 'Alternativ B', 'Alternativ C', 'Alternativ D'],
    correct: 2,                          // indeks i opts (0-basert). Array for flervalg: [0, 2]
    explain: 'Forklaring som vises etter svar. Henvis gjerne til paragraf/standard.'
  },
  // ...
];
```

**Regler:**
- `correct` er ett tall (enkeltvalg) eller array av tall (flervalg, bekreftes med knapp)
- Alltid 4 svaralternativer — quizmotoren shuffler dem tilfeldig
- `catLabel` må matche `cats[cat].label` eksakt
- Filen evalueres som vanlig JS via `new Function()` i spill.html — ikke bruk ES-modules (`import`/`export`)

## kabel-data.js — tabeller og konstanter
- `izCuPVC` / `izCuPEX`: strømkapasitetstabeller kobber (IEC 60364-5-52), metoder A1–E
- `izAlPVC` / `izAlPEX`: strømkapasitetstabeller aluminium, min. 16 mm²
- `tCorrPVC` / `tCorrPEX`: temperaturkorreksjon luft, ref. 30°C (tab. B.52.14)
- `tCorrGroundPVC` / `tCorrGroundPEX`: temperaturkorreksjon jord, ref. 20°C (tab. B.52.15)
- `rhoMap`: resistivitet (Ω·mm²/m) ved driftstemperatur
- `crossSections`, `breakerSizes`: tilgjengelige tverrsnitt og vernstørrelser

## calc-kabel.js — nøkkelpunkter
- Bruker tabeller fra `kabel-data.js` (lastes før i kalkulator/index.html)
- `updateTempForInstall()`: setter automatisk 20°C ved D1/D2, 30°C ellers
- IT 230V vs TN 400V styrer `U_I` (lasstrøm) og `U_ref` (spenningsfallreferanse)
- NEK 400-5-52: maks 4% spenningsfall (bolig), 5% (industri)
- NEK 400-43: vernkrav `Ib ≤ In ≤ Iz`
- Aluminium: egne `izAlPVC` / `izAlPEX`-tabeller fra IEC 60364-5-52 (B.52.2/B.52.3), min. 16 mm²
- Jordforlegning (D1/D2): `tCorrGroundPVC` / `tCorrGroundPEX` med ref. 20°C (tab. B.52.15)
- Luftforlegning (A1–C, E): `tCorrPVC` / `tCorrPEX` med ref. 30°C (tab. B.52.14)

## calc-krets.js — nøkkelpunkter
- Støtter RC, RL, RLC — C-felt skjules for RL, L-felt for RC
- `updateKretsInputs()` kjøres etter toggle-handler via egen DOMContentLoaded-lytter
- Resonansfrekvens f₀ vises kun for RLC
- `getToggle()` er definert i calc-kabel.js og tilgjengelig globalt
