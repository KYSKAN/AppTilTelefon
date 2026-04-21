# Elektriker-App — Utviklingsdokument

## Formål
PWA og nettside for elektrikere. Fagkalkulatorer og quiz. Fungerer på Android, iOS og i alle nettlesere på mobil og PC.

## Nåværende status
PWA er oppe og kjører. Koblet til GitHub — automatisk deploy via GitHub Pages ved `git push`. URL: https://kyskan.github.io/Elektriker-App

### Implementerte kalkulatorer
- **Ohms lov** — V, A, Ω, W. Fyll inn 2, beregn 2. Støtter multiplikator.
- **Kabel og vern** — Kabeldimensjonering og vernvalg etter NEK 400. Forlegningsmetoder A1–E inkl. D1/D2 (jord). Auto-temperatur ved jordforlegning.
- **RC/RL/RLC krets** — Aktiv, reaktiv og syneffekt, impedans, strøm, fasevinkel, resonansfrekvens.

### Quiz-app (`quiz/`)
- **LØM – Ledelse & Organisasjon** — 28 spørsmål
- **LØM – Markedsføringsledelse** — 35 spørsmål
- **LØM – Regnskapsanalyse** — 27 spørsmål
- **LØM – Økonomistyring** — 28 spørsmål
- **RLC kretser** — Fagspørsmål om RC/RL/RLC
- Quiz-velger + flertemastøtte via `?tema=`-URL-param

---

## Teknologi
| Hva | Valg |
|---|---|
| Markup | HTML5 |
| Logikk | Vanilla JavaScript (én fil per kalkulator) |
| Styling | CSS (`css/style.css`) |
| Distribusjonsformat | PWA (Android/iOS) + nettside (alle nettlesere) |
| Hosting | GitHub Pages (auto-deploy via GitHub) |
| Versjonskontroll | Git + GitHub (KYSKAN/Elektriker-App) |

---

---

## Backlog

### Kabel og vern — faglig
- [x] **Cos φ** — eget felt, default 1,0. Brukes i lasstrøm-beregning ved W-modus.
- [ ] **Samlefaktor** — korreksjon for flere kabler i samme rør/grøft (NEK 400)
- [x] **Aluminium-tabeller** — egne `izAlPVC`/`izAlPEX` fra IEC 60364-5-52 (B.52.2/B.52.3)
- [x] **Jordtemperatur-korreksjon** — `tCorrGroundPVC`/`tCorrGroundPEX` med ref. 20°C (tab. B.52.15)

### Kabel og vern — brukervennlighet
- [x] **Last i W eller A** — toggle mellom effekt (W) og strøm (A) direkte
- [x] **Cos φ skjules ved A-enhet** — ved A-valg tolkes innputt som total strøm; cos φ-felt skjules og nullstilles til 1

### Planlagte kalkulatorer
- [ ] **Kortslutningsstrøm** — Icc-beregning for vernkoordinering
- [ ] **Jordfeil / isolasjonsmåling** — veiledende verdier

---

## Notater
- Støtter Android, iOS og desktop-nettlesere
- Hold all logikk i frontend — ingen server nødvendig
- Legg til ny kalkulator: se instruksjoner i `CLAUDE.md`
- **Husk:** Bump `CACHE`-versjon i `service-worker.js` linje 1 ved hver deploy
