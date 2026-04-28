# Elektriker-App — Utviklingsdokument

## Formål
PWA og nettside for elektrikere. Fagkalkulatorer og quiz. Fungerer på Android, iOS og i alle nettlesere på mobil og PC.

## Nåværende status
PWA er oppe og kjører på https://kyskan.github.io/Elektriker-App. Koblet til GitHub — automatisk deploy via GitHub Pages ved `git push`. Service worker på v156.

**Backend:** Supabase (PostgreSQL) — tabeller `scores` (toppliste) og `svar` (alle svar per spørsmål).

---

## Implementerte kalkulatorer
- **Ohms lov** — V, A, Ω, W. Fyll inn 2, beregn 2. Støtter multiplikator.
- **Kabel og vern** — Kabeldimensjonering og vernvalg etter NEK 400. Forlegningsmetoder A1–E inkl. D1/D2 (jord). Auto-temperatur ved jordforlegning. Støtter kobber og aluminium.
- **Spenningsfall** — Spenningsfallkalkulator.
- **RC/RL/RLC krets** — Aktiv, reaktiv og syneffekt, impedans, strøm, fasevinkel, resonansfrekvens.

---

## Quiz-temaer (13 totalt, 415 spørsmål)

### LØM (Fagskole)
| Tema             | Slug            | Spørsmål | Toppliste |
|------------------|-----------------|----------|-----------|
| Ledelse & Org.   | lom-ledelse     | 30       | ✓         |
| Markedsføring    | lom-marked      | 36       | ✓         |
| Regnskapsanalyse | lom-regnskap    | 33       | ✓         |
| Økonomistyring   | lom-okonomi     | 50       | ✓         |
| Lover & Avtaler  | lom-lovavtale   | 29       | ✓         |

### Elektro
| Tema       | Slug | Spørsmål | Toppliste |
|------------|------|----------|-----------|
| RLC-kretser | rlc | 28       | ✓         |

### Elektroniske (Bjørns)
| Tema             | Slug            | Spørsmål | Toppliste |
|------------------|-----------------|----------|-----------|
| Boolsk algebra   | boolsk          | 31       |           |
| Logiske porter   | porter          | 26       |           |
| Mikrokontroller  | mikrokontroller | 25       | ✓         |
| Dataminne        | minne           | 25       | ✓         |
| Tallsystemer     | tallsystemer    | 30       |           |
| Vipper (FF)      | vipper          | 22       |           |
| TRH-1EK prøve    | trh1ek          | 50       | ✓         |

---

## Teknologi
| Hva              | Valg                                          |
|------------------|-----------------------------------------------|
| Markup           | HTML5                                         |
| Logikk           | Vanilla JavaScript (én fil per kalkulator)    |
| Styling          | CSS (`kalkulator/css/style.css`)              |
| Backend/database | Supabase (PostgreSQL + REST API)              |
| Distribusjonsformat | PWA (Android/iOS) + nettside              |
| Hosting          | GitHub Pages (auto-deploy via git push)       |
| Versjonskontroll | Git + GitHub (KYSKAN/Elektriker-App)          |

---

## Backlog

### Kabel og vern — faglig
- [x] Cos φ — eget felt, default 1,0
- [x] Aluminium-tabeller (IEC 60364-5-52 B.52.2/B.52.3)
- [x] Jordtemperatur-korreksjon (tab. B.52.15, ref. 20°C)
- [x] Last i W eller A (toggle)
- [ ] Samlefaktor — korreksjon for flere kabler i samme rør/grøft (NEK 400)
- [ ] Kortslutningsstrøm — Icc-beregning for vernkoordinering
- [ ] Jordfeil / isolasjonsmåling — veiledende verdier

### Quiz — toppliste
- [x] RLC, TRH-1EK, Minne, Mikrokontroller
- [x] Alle LØM-temaer
- [ ] Boolsk, Porter, Tallsystemer, Vipper mangler toppliste

### Quiz — dataanalyse (Supabase)
- [x] Alle svar logges til `svar`-tabellen med tema, sporsmal_idx, cat, riktig, navn
- [x] Navn påkrevd for LØM-quizzene (lagres med hvert svar)
- [ ] Dashboard / visning av svar-statistikk (hvilke spørsmål er vanskeligst?)
- [ ] Gjennomsnittscore per tema vist på quiz-velger-siden

### Potensielle nye funksjoner
- [ ] Klassekode — lærer oppretter kode, elever kobler seg til, lærer ser alle resultater
- [ ] Personlig historikk — skriv navn, se dine egne resultater over tid
- [ ] Daglig utfordring — alle tar samme 10 spørsmål, felles toppliste

---

## Notater
- Støtter Android, iOS og desktop-nettlesere
- All logikk i frontend — Supabase er eneste ekstern tjeneste
- Legg til ny kalkulator: se instruksjoner i `CLAUDE.md`
- Legg til nytt quiz-tema: se instruksjoner i `CLAUDE.md`
- **Husk:** Bump `CACHE`-versjon i `service-worker.js` linje 1 ved hver deploy
- **Husk:** Bruk `git add <spesifikke filer>` — ikke `git add -A` (unngå å committe .claude/)
- **.nojekyll** i rot er kritisk — uten den feiler GitHub Pages-deploy
