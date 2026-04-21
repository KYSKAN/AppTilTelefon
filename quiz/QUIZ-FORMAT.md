# Quiz – Filformat og bruksanvisning

## Filstruktur

```
quiz/
├── index.html                  Quiz-velger — temavelger med ett kort per tema
├── spill.html                  Quiz-motoren — laster spørsmålsfil dynamisk via ?tema=X
├── sporsmal-lom-ledelse.js     Spørsmålsdata: LØM – Ledelse & Organisasjon (28 spørsmål)
├── sporsmal-lom-marked.js      Spørsmålsdata: LØM – Markedsføringsledelse (35 spørsmål)
├── sporsmal-lom-regnskap.js    Spørsmålsdata: LØM – Regnskapsanalyse (27 spørsmål)
├── sporsmal-lom-okonomi.js     Spørsmålsdata: LØM – Økonomistyring (28 spørsmål)
├── sporsmal-rlc.js             Spørsmålsdata: RLC kretser
└── QUIZ-FORMAT.md              Denne filen
```

---

## Arkitektur

`index.html` er temavelgeren. Hvert kort lenker til `spill.html?tema=<nøkkel>`.
`spill.html` leser `?tema=`-parameteren og laster `sporsmal-${tema}.js` dynamisk.

---

## Slik legger du til et nytt quiztema

1. Lag en ny fil, f.eks. `sporsmal-elektro.js`, med samme format som `sporsmal-lom-ledelse.js`
2. I `quiz/index.html`, legg til et nytt kort:
   ```html
   <a class="quiz-card" href="spill.html?tema=elektro">
     <div class="quiz-card-title">Elektro</div>
     <div class="quiz-card-sub">XX spørsmål · kategorier …</div>
   </a>
   ```
3. Bump cache-versjon i `service-worker.js`, legg til `'./quiz/sporsmal-elektro.js'` i `FILES`, og push.

---

## Format for spørsmålsfilen

Filen eksporterer én global variabel: `const QUESTIONS = [ ... ]`

Hvert element i arrayet ser slik ut:

```js
{
  cat: 'kategorinøkkel',       // kort nøkkel, kun bokstaver (ingen mellomrom)
  catLabel: 'Visningsnavn',    // vises som badge på spørsmålskortet
  q: 'Spørsmålsteksten?',      // selve spørsmålet
  opts: [
    'Alternativ A',
    'Alternativ B',
    'Alternativ C',
    'Alternativ D'
  ],
  correct: 2,                  // indeks (0–3) for riktig svar
  explain: 'Forklaringstekst som vises etter svar.'
}
```

### Kategorier i LØM-filen

| `cat`-nøkkel | Visningsnavn            | Farge   |
|--------------|-------------------------|---------|
| `ledelse`    | Ledelse & Organisasjon  | #f59e0b |
| `marked`     | Markedsføringsledelse   | #ec4899 |
| `regnskap`   | Regnskapsanalyse        | #00a8e8 |
| `okonomi`    | Økonomistyring          | #10b981 |

---

## Slik legger du til nye kategorier

1. Legg til spørsmål med en ny `cat`-nøkkel i spørsmålsfilen.
2. I `quiz/spill.html`, finn `CAT_META`-objektet og legg til en ny rad:
   ```js
   nykategori: { label: 'Visningsnavn', color: '#hexfarge' }
   ```
3. Legg eventuelt til en CSS-klasse for badge-farge i `<style>`-blokken:
   ```css
   .cat-nykategori { background: rgba(r,g,b,0.15); color: var(--cat-nykategori); }
   ```
   Og CSS-variabelen i `:root`:
   ```css
   --cat-nykategori: #hexfarge;
   ```

---

## Slik legger du til et nytt spørsmål

Kopier et eksisterende spørsmål i spørsmålsfilen og rediger feltene. Sjekk at:
- `correct` er riktig indeks (teller fra 0)
- `cat` matcher en nøkkel i `CAT_META` i `spill.html`
- `opts` har nøyaktig 4 elementer

---

## Husk etter endringer

- Bump `CACHE`-versjonen i `service-worker.js` linje 1
- Legg til nye JS-filer i `FILES`-arrayet i `service-worker.js`
- `git add . && git commit -m "..." && git push`
