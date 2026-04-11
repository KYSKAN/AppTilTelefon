# AppTilTelefon — Utviklingsdokument

## Formål
Personlig PWA-app til eget bruk på Android. Elektriker-verktøy med fagkalkulatorer.

## Nåværende status
PWA er oppe og kjører på telefon. Koblet til GitHub — automatisk deploy via GitHub Pages ved `git push`. URL: https://kyskan.github.io/AppTilTelefon

### Implementerte kalkulatorer
- **Ohms lov** — V, A, Ω, W. Fyll inn 2, beregn 2. Støtter multiplikator.
- **Kabel og vern** — Kabeldimensjonering og vernvalg etter NEK 400. Forlegningsmetoder A1–E inkl. D1/D2 (jord). Auto-temperatur ved jordforlegning.
- **RC/RL/RLC krets** — Aktiv, reaktiv og syneffekt, impedans, strøm, fasevinkel, resonansfrekvens.

---

## Teknologi
| Hva | Valg |
|---|---|
| Markup | HTML5 |
| Logikk | Vanilla JavaScript (én fil per kalkulator) |
| Styling | CSS (`css/style.css`) |
| Distribusjonsformat | PWA — Android / Chrome |
| Hosting | GitHub Pages (auto-deploy via GitHub) |
| Versjonskontroll | Git + GitHub (KYSKAN/AppTilTelefon) |

---

## Filstruktur
```
AppTilTelefon/
├── index.html
├── manifest.json
├── service-worker.js      (nåværende versjon: v20)
├── CLAUDE.md
├── DEVELOPMENT.md
├── css/
│   └── style.css
├── js/
│   ├── menu.js
│   ├── calc-ohm.js
│   ├── calc-kabel.js
│   └── calc-krets.js
└── icons/
    └── icon.svg
```

---

## Backlog

### Kabel og vern — faglig
- [x] **Cos φ** — eget felt, default 1,0. Brukes i lasstrøm-beregning ved W-modus.
- [ ] **Samlefaktor** — korreksjon for flere kabler i samme rør/grøft (NEK 400)
- [x] **Aluminium-tabeller** — egne `izAlPVC`/`izAlPEX` fra IEC 60364-5-52 (B.52.2/B.52.3)
- [x] **Jordtemperatur-korreksjon** — `tCorrGroundPVC`/`tCorrGroundPEX` med ref. 20°C (tab. B.52.15)

### Kabel og vern — brukervennlighet
- [x] **Last i W eller A** — toggle mellom effekt (W) og strøm (A) direkte

### Planlagte kalkulatorer
- [ ] **Kortslutningsstrøm** — Icc-beregning for vernkoordinering
- [ ] **Jordfeil / isolasjonsmåling** — veiledende verdier

---

## Notater
- Android-only, ingen iOS/Safari-hensyn
- Hold all logikk i frontend — ingen server nødvendig
- Legg til ny kalkulator: se instruksjoner i `CLAUDE.md`
- **Husk:** Bump `CACHE`-versjon i `service-worker.js` ved hver deploy
