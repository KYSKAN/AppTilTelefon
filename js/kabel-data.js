// ── Kabel og vern — tabeller og konstanter ──
// Kilde: IEC 60364-5-52 / NEK 400-5-52
// Forlegningsmetoder:
//   A1 — Enkeltleder i rør i termisk isolert vegg
//   A2 — Flerleder i rør i termisk isolert vegg
//   B1 — Enkeltleder i rør på vegg / i vegg
//   B2 — Flerleder i rør på vegg / i vegg
//   C  — Direkte på vegg eller tak (klamret)
//   D1 — Nedgravd i rør i jord (ref. 20°C)
//   D2 — Direkte nedgravd i jord (ref. 20°C)
//   E  — På perforert kabelbro / fritt i luft

// ── Strømkapasitet (A), kobber, flerleder — IEC 60364-5-52 tab. B.52.2 / B.52.4 ──
const izCuPVC = {
  1.5:  { A1:11,  A2:13,  B1:13,  B2:15,  C:17.5, D1:22,  D2:26,  E:19.5 },
  2.5:  { A1:15,  A2:17,  B1:18,  B2:20,  C:24,   D1:29,  D2:34,  E:27   },
  4:    { A1:20,  A2:23,  B1:24,  B2:27,  C:32,   D1:38,  D2:44,  E:36   },
  6:    { A1:25,  A2:29,  B1:31,  B2:34,  C:41,   D1:47,  D2:56,  E:46   },
  10:   { A1:34,  A2:39,  B1:42,  B2:46,  C:57,   D1:63,  D2:73,  E:63   },
  16:   { A1:45,  A2:52,  B1:56,  B2:62,  C:76,   D1:81,  D2:95,  E:85   },
  25:   { A1:60,  A2:68,  B1:73,  B2:80,  C:99,   D1:104, D2:121, E:112  },
  35:   { A1:73,  A2:83,  B1:89,  B2:99,  C:119,  D1:125, D2:146, E:138  },
  50:   { A1:87,  A2:99,  B1:108, B2:118, C:144,  D1:148, D2:173, E:168  },
  70:   { A1:111, A2:125, B1:136, B2:149, C:184,  D1:183, D2:213, E:213  },
  95:   { A1:133, A2:150, B1:164, B2:179, C:223,  D1:216, D2:252, E:258  },
  120:  { A1:153, A2:172, B1:188, B2:206, C:259,  D1:246, D2:287, E:299  },
};

const izCuPEX = {
  1.5:  { A1:13,  A2:15,  B1:15,  B2:18,  C:21,   D1:25,  D2:30,  E:23  },
  2.5:  { A1:18,  A2:21,  B1:21,  B2:25,  C:28,   D1:33,  D2:40,  E:32  },
  4:    { A1:24,  A2:28,  B1:28,  B2:33,  C:38,   D1:44,  D2:52,  E:43  },
  6:    { A1:31,  A2:36,  B1:36,  B2:42,  C:49,   D1:56,  D2:66,  E:55  },
  10:   { A1:42,  A2:50,  B1:50,  B2:57,  C:68,   D1:74,  D2:86,  E:76  },
  16:   { A1:56,  A2:66,  B1:68,  B2:76,  C:91,   D1:96,  D2:112, E:101 },
  25:   { A1:73,  A2:84,  B1:89,  B2:99,  C:116,  D1:121, D2:142, E:130 },
  35:   { A1:89,  A2:101, B1:108, B2:120, C:139,  D1:144, D2:169, E:158 },
  50:   { A1:108, A2:121, B1:130, B2:144, C:168,  D1:169, D2:198, E:192 },
  70:   { A1:136, A2:154, B1:165, B2:182, C:213,  D1:209, D2:245, E:246 },
  95:   { A1:164, A2:188, B1:198, B2:220, C:258,  D1:248, D2:290, E:298 },
  120:  { A1:188, A2:216, B1:228, B2:253, C:299,  D1:284, D2:331, E:346 },
};

// ── Strømkapasitet (A), aluminium, flerleder — IEC 60364-5-52 tab. B.52.2 / B.52.4 (Al) ──
// Minsteverdi: 16 mm²
const izAlPVC = {
  16:  { A1:35,  A2:41,  B1:44,  B2:49,  C:59,   D1:64,  D2:74,  E:66  },
  25:  { A1:46,  A2:53,  B1:57,  B2:63,  C:77,   D1:82,  D2:95,  E:87  },
  35:  { A1:57,  A2:65,  B1:70,  B2:78,  C:93,   D1:98,  D2:114, E:107 },
  50:  { A1:68,  A2:78,  B1:84,  B2:94,  C:112,  D1:116, D2:135, E:131 },
  70:  { A1:86,  A2:98,  B1:107, B2:117, C:143,  D1:143, D2:166, E:166 },
  95:  { A1:102, A2:118, B1:128, B2:140, C:173,  D1:169, D2:197, E:201 },
  120: { A1:119, A2:135, B1:149, B2:162, C:201,  D1:193, D2:225, E:232 },
};

// Kilde: IEC 60364-5-52 tab. B.52.3 / B.52.5 (Al XLPE)
const izAlPEX = {
  16:  { A1:44,  A2:51,  B1:53,  B2:60,  C:71,   D1:75,  D2:88,  E:79  },
  25:  { A1:57,  A2:67,  B1:70,  B2:80,  C:90,   D1:96,  D2:110, E:101 },
  35:  { A1:70,  A2:82,  B1:86,  B2:98,  C:110,  D1:115, D2:132, E:122 },
  50:  { A1:84,  A2:96,  B1:102, B2:116, C:132,  D1:133, D2:154, E:149 },
  70:  { A1:107, A2:122, B1:129, B2:145, C:167,  D1:165, D2:192, E:192 },
  95:  { A1:128, A2:147, B1:155, B2:175, C:201,  D1:197, D2:227, E:232 },
  120: { A1:149, A2:171, B1:179, B2:202, C:232,  D1:225, D2:261, E:269 },
};

// ── Tilgjengelige tverrsnitt (mm²) og vernstørrelser (A) ──
const crossSections = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
const breakerSizes  = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];

// ── Temperaturkorreksjon — luft, ref. 30°C (NEK 400 tab. B.52.14) ──
const tCorrPVC = { 10:1.22, 15:1.17, 20:1.12, 25:1.06, 30:1.00, 35:0.94, 40:0.87, 45:0.79, 50:0.71 };
const tCorrPEX = { 10:1.15, 15:1.12, 20:1.08, 25:1.04, 30:1.00, 35:0.96, 40:0.91, 45:0.87, 50:0.82 };

// ── Temperaturkorreksjon — jord, ref. 20°C (NEK 400 tab. B.52.15) ──
const tCorrGroundPVC = { 10:1.10, 15:1.05, 20:1.00, 25:0.95, 30:0.89, 35:0.84, 40:0.77, 45:0.71, 50:0.63 };
const tCorrGroundPEX = { 10:1.07, 15:1.04, 20:1.00, 25:0.96, 30:0.93, 35:0.89, 40:0.85, 45:0.80, 50:0.76 };

// ── Resistivitet ved driftstemperatur (Ω·mm²/m) ──
const rhoMap = { Cu_PVC: 0.0225, Cu_PEX: 0.0246, Al_PVC: 0.036, Al_PEX: 0.040 };

// ── Maks vernstørrelse (A) per tverrsnitt — bolig (NEK 400 særnorske krav) ──
// 1,5 mm² → under 16 A → maks 13 A, 2,5 mm² → under 20 A → maks 16 A
const maxBreakerBolig = {
  1.5: 13,
  2.5: 16,
};
