// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: RLC-kretser
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//
//  Kategorier:
//    grunnlag   = Grunnleggende teori     (farge: #f59e0b)
//    resistans  = Resistans & Ohms lov    (farge: #ec4899)
//    kondensator = Kondensatorer & C      (farge: #00a8e8)
//    spole      = Spoler & Induktans      (farge: #10b981)
//    rlckrets   = RLC-kretser & resonans  (farge: #8b5cf6)
//
//  Hvert spørsmål:
//    cat:      kategori-nøkkel (se over)
//    catLabel: visningsnavn
//    q:        spørsmålstekst
//    opts:     array med 4 svaralternativer
//    correct:  indeks (0–3) for riktig svar
//    explain:  forklaringstekst som vises etter svar
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'rlc',
  title: 'RLC-kretser',
  subtitle: 'Elektroteori',
  description: '28 spørsmål om grunnleggende elektroteori, komponenter og RLC-kretser.',
  cats: {
    grunnlag:    { label: 'Grunnleggende teori',        color: '#f59e0b' },
    resistans:   { label: 'Resistans & Ohms lov',       color: '#ec4899' },
    kondensator: { label: 'Kondensatorer & kapasitans',  color: '#00a8e8' },
    spole:       { label: 'Spoler & induktans',          color: '#10b981' },
    rlckrets:    { label: 'RLC-kretser & resonans',      color: '#8b5cf6' }
  }
};

const QUESTIONS = [

  // ── GRUNNLEGGENDE TEORI  (6 spørsmål) ──────────────────────────

  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er Ohms lov?',
    opts: [
      'U = I × R',
      'U = I / R',
      'U = R / I',
      'U = I² × R'
    ],
    correct: 0,
    explain: 'Ohms lov: U = I × R. Spenningen (U) er lik strømmen (I) multiplisert med resistansen (R). Enhetene er volt (V), ampere (A) og ohm (Ω).'
  },
  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er frekvens, og hvilken enhet måles den i?',
    opts: [
      'Antall svingninger per sekund – måles i hertz (Hz)',
      'Tiden for én full svingning – måles i sekunder (s)',
      'Amplituden til en vekselspenning – måles i volt (V)',
      'Fasevinkelen mellom strøm og spenning – måles i grader (°)'
    ],
    correct: 0,
    explain: 'Frekvensen f angir hvor mange svingninger som skjer per sekund, og måles i hertz (Hz). Perioden T = 1/f er tiden for én full svingning.'
  },
  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er vinkelhastighet (ω), og hva er formelen?',
    opts: [
      'ω = f / 2π – forholdet mellom frekvens og bølgelengde',
      'ω = 2π × f – antall radianer per sekund',
      'ω = 1 / (2π × f) – invers av frekvens',
      'ω = f² × π – effektiv vinkelfrekvens'
    ],
    correct: 1,
    explain: 'Vinkelhastigheten ω = 2πf måles i rad/s. Den beskriver hvor raskt fasevinkelen endrer seg over tid, og brukes mye i beregning av reaktans for spoler og kondensatorer.'
  },
  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er forskjellen mellom likestrøm (DC) og vekselstrøm (AC)?',
    opts: [
      'DC varierer med frekvensen; AC er konstant',
      'DC flyter bare i ett retning; AC skifter retning periodisk',
      'DC brukes kun i høyspentanlegg; AC i lavspenning',
      'Det er ingen praktisk forskjell – de er like farlige'
    ],
    correct: 1,
    explain: 'Likestrøm (DC) flyter konstant i én retning. Vekselstrøm (AC) skifter retning periodisk – i Norge med 50 Hz, altså 50 ganger per sekund.'
  },
  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er impedans (Z)?',
    opts: [
      'Den totale motstanden i en DC-krets, lik summen av alle resistanser',
      'Den totale motstanden i en AC-krets, som inkluderer resistans og reaktans',
      'Kun motstanden fra kondensatorer i en krets',
      'Forholdet mellom effekt og spenning i en krets'
    ],
    correct: 1,
    explain: 'Impedans Z er den totale motstanden i en AC-krets. Den inkluderer resistans (R) og reaktans (X), og måles i ohm (Ω). Formelen er Z = √(R² + X²).'
  },
  {
    cat: 'grunnlag', catLabel: 'Grunnleggende teori',
    q: 'Hva er faseforskyving i en AC-krets?',
    opts: [
      'Differansen i amplitude mellom spenning og strøm',
      'Tidsforskjellen mellom to signaler med samme frekvens, uttrykt i grader eller radianer',
      'Forholdet mellom reaktiv og aktiv effekt',
      'Frekvensforskjellen mellom inn- og utgangssignal'
    ],
    correct: 1,
    explain: 'Faseforskyving φ er vinkelen mellom spennings- og strømbølgen i en AC-krets. I en ren kondensatorkrets er strømmen 90° foran spenningen; i en ren spole er spenningen 90° foran strømmen.'
  },

  // ── RESISTANS  (5 spørsmål) ─────────────────────────────────────

  {
    cat: 'resistans', catLabel: 'Resistans & Ohms lov',
    q: 'Hva skjer med total resistans når to resistorer kobles i serie?',
    opts: [
      'Total resistans er lik den minste av de to',
      'Total resistans er lik produktet av de to delt på summen',
      'Total resistans er lik summen av de to: R_total = R1 + R2',
      'Total resistans er uendret'
    ],
    correct: 2,
    explain: 'Seriekobling: R_total = R1 + R2 + ... Strømmen er den samme gjennom alle komponentene, mens spenningen fordeler seg.'
  },
  {
    cat: 'resistans', catLabel: 'Resistans & Ohms lov',
    q: 'Hva skjer med total resistans når to like resistorer kobles i parallell?',
    opts: [
      'Total resistans dobles',
      'Total resistans er lik én av resistorene',
      'Total resistans halveres',
      'Total resistans er null'
    ],
    correct: 2,
    explain: 'For to like resistorer i parallell: R_total = R/2. Generelt: 1/R_total = 1/R1 + 1/R2. Spenningen er lik over alle parallelle grener, mens strømmen fordeler seg.'
  },
  {
    cat: 'resistans', catLabel: 'Resistans & Ohms lov',
    q: 'Hva er effektformelen for en resistor?',
    opts: [
      'P = U / I',
      'P = U × I = I² × R = U² / R',
      'P = U² × R',
      'P = I / R'
    ],
    correct: 1,
    explain: 'Effekt P = U × I = I² × R = U² / R. Alle tre former er ekvivalente via Ohms lov. Enheten er watt (W). En resistor omsetter all elektrisk effekt til varme.'
  },
  {
    cat: 'resistans', catLabel: 'Resistans & Ohms lov',
    q: 'Hva påvirker resistansen til en leder?',
    opts: [
      'Kun temperaturen',
      'Kun tverrsnittsarealet',
      'Materialet (resistivitet), lengden, tverrsnittsarealet og temperaturen',
      'Kun spenningen over lederen'
    ],
    correct: 2,
    explain: 'R = ρ × L / A, der ρ er resistiviteten til materialet, L er lengden og A er tverrsnittsarealet. I tillegg øker resistansen for de fleste metaller med temperaturen.'
  },
  {
    cat: 'resistans', catLabel: 'Resistans & Ohms lov',
    q: 'Hva er reaktans, og hvordan skiller det seg fra resistans?',
    opts: [
      'Reaktans er det samme som resistans – bare et annet ord',
      'Reaktans er frekvensuavhengig motstand; resistans avhenger av frekvens',
      'Reaktans er frekvensavhengig motstand fra spoler og kondensatorer; resistans er frekvensuavhengig',
      'Reaktans finnes kun i DC-kretser'
    ],
    correct: 2,
    explain: 'Resistans (R) er frekvensuavhengig og omsetter energi til varme. Reaktans (X) oppstår i spoler (XL = ωL) og kondensatorer (XC = 1/ωC) og avhenger av frekvensen. Reaktansen lagrer og frigir energi.'
  },

  // ── KONDENSATORER  (5 spørsmål) ─────────────────────────────────

  {
    cat: 'kondensator', catLabel: 'Kondensatorer & kapasitans',
    q: 'Hva er kapasitans, og hvilken enhet måles den i?',
    opts: [
      'Evnen til å motstå strømendringer – måles i henry (H)',
      'Evnen til å lagre elektrisk ladning – måles i farad (F)',
      'Forholdet mellom spenning og strøm – måles i ohm (Ω)',
      'Energien lagret i det magnetiske feltet – måles i joule (J)'
    ],
    correct: 1,
    explain: 'Kapasitans C er et mål på kondensatorens evne til å lagre elektrisk ladning. Enheten er farad (F). Q = C × U, der Q er ladningen og U er spenningen over kondensatoren.'
  },
  {
    cat: 'kondensator', catLabel: 'Kondensatorer & kapasitans',
    q: 'Hva er kapasitiv reaktans (XC), og hva er formelen?',
    opts: [
      'XC = ω × C – øker med frekvensen',
      'XC = 1 / (ω × C) – avtar med frekvensen',
      'XC = ω / C – proporsjonal med frekvens',
      'XC = C / ω – uavhengig av frekvens'
    ],
    correct: 1,
    explain: 'XC = 1 / (ωC) = 1 / (2πfC). Ved lav frekvens er XC stor (kondensatoren blokkerer strøm), ved høy frekvens er XC liten (kondensatoren slipper lett strøm gjennom). Enheten er ohm (Ω).'
  },
  {
    cat: 'kondensator', catLabel: 'Kondensatorer & kapasitans',
    q: 'Hvordan er faserelasjonen mellom strøm og spenning i en ren kondensatorkrets?',
    opts: [
      'Strøm og spenning er i fase (φ = 0°)',
      'Spenningen er 90° foran strømmen',
      'Strømmen er 90° foran spenningen',
      'Strøm og spenning er 180° forskjøvet'
    ],
    correct: 2,
    explain: 'I en ren kondensatorkrets leder strømmen spenningen med 90°. Huskeregel: "ICE" – I (strøm) før C (kondensator) i forhold til E (EMF/spenning).'
  },
  {
    cat: 'kondensator', catLabel: 'Kondensatorer & kapasitans',
    q: 'Hva skjer med total kapasitans når kondensatorer kobles i parallell?',
    opts: [
      'Total kapasitans er lik den minste kondensatoren',
      'Total kapasitans er lik summen: C_total = C1 + C2 + ...',
      'Total kapasitans beregnes som 1/C_total = 1/C1 + 1/C2',
      'Total kapasitans halveres'
    ],
    correct: 1,
    explain: 'Kondensatorer i parallell: C_total = C1 + C2 + ... (samme som resistorer i serie). I serie: 1/C_total = 1/C1 + 1/C2 (samme som resistorer i parallell). Det er motsatt av resistorer!'
  },
  {
    cat: 'kondensator', catLabel: 'Kondensatorer & kapasitans',
    q: 'Hva er energien lagret i en kondensator?',
    opts: [
      'E = C × U',
      'E = ½ × C × U²',
      'E = C² × U',
      'E = U / C'
    ],
    correct: 1,
    explain: 'Energien i en kondensator: E = ½CU². Kondensatoren lagrer energi i det elektriske feltet mellom platene. Dobler du spenningen, firedobles energien.'
  },

  // ── SPOLER & INDUKTANS  (5 spørsmål) ───────────────────────────

  {
    cat: 'spole', catLabel: 'Spoler & induktans',
    q: 'Hva er induktans, og hvilken enhet måles den i?',
    opts: [
      'Evnen til å lagre elektrisk ladning – måles i farad (F)',
      'Evnen til å motstå endringer i strøm ved å lagre energi i et magnetfelt – måles i henry (H)',
      'Den elektriske motstanden i en spole – måles i ohm (Ω)',
      'Frekvensen der spoler resonnerer – måles i hertz (Hz)'
    ],
    correct: 1,
    explain: 'Induktansen L er et mål på spolens evne til å motstå endringer i strøm. Enheten er henry (H). En strømendring dI/dt induserer en spenning U = L × dI/dt.'
  },
  {
    cat: 'spole', catLabel: 'Spoler & induktans',
    q: 'Hva er induktiv reaktans (XL), og hva er formelen?',
    opts: [
      'XL = 1 / (ω × L) – avtar med frekvensen',
      'XL = ω × L = 2π × f × L – øker med frekvensen',
      'XL = L / ω – proporsjonal med perioden',
      'XL = ω / L – uavhengig av induktans'
    ],
    correct: 1,
    explain: 'XL = ωL = 2πfL. Jo høyere frekvens, jo større reaktans – spolen blokkerer høyfrekvente signaler bedre. Ved DC (f = 0) er XL = 0, og spolen opptrer som en ren leder.'
  },
  {
    cat: 'spole', catLabel: 'Spoler & induktans',
    q: 'Hvordan er faserelasjonen mellom strøm og spenning i en ren spole?',
    opts: [
      'Strøm og spenning er i fase (φ = 0°)',
      'Spenningen er 90° foran strømmen',
      'Strømmen er 90° foran spenningen',
      'Strøm og spenning er 180° forskjøvet'
    ],
    correct: 1,
    explain: 'I en ren spole leder spenningen strømmen med 90°. Huskeregel: "ELI" – E (spenning) før L (spole) i forhold til I (strøm). Husk: ELI the ICEman.'
  },
  {
    cat: 'spole', catLabel: 'Spoler & induktans',
    q: 'Hva er energien lagret i en spole?',
    opts: [
      'E = L × I',
      'E = ½ × L × I²',
      'E = L² × I',
      'E = I / L'
    ],
    correct: 1,
    explain: 'Energien i en spole: E = ½LI². Spolen lagrer energi i det magnetiske feltet rundt viklingsrekkene. Dobler du strømmen, firedobles energien.'
  },
  {
    cat: 'spole', catLabel: 'Spoler & induktans',
    q: 'Hva skjer med total induktans når spoler kobles i serie (uten magnetisk kobling)?',
    opts: [
      'L_total = L1 × L2 / (L1 + L2)',
      'L_total = L1 + L2 + ...',
      '1/L_total = 1/L1 + 1/L2',
      'L_total er uendret'
    ],
    correct: 1,
    explain: 'Spoler i serie (uten magnetisk kobling): L_total = L1 + L2 + ... – samme prinsipp som resistorer i serie. I parallell: 1/L_total = 1/L1 + 1/L2.'
  },

  // ── RLC-KRETSER & RESONANS  (7 spørsmål) ───────────────────────

  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er total reaktans (X) i en serie-RLC-krets?',
    opts: [
      'X = XL × XC',
      'X = XL + XC',
      'X = XL − XC',
      'X = XL / XC'
    ],
    correct: 2,
    explain: 'Total reaktans X = XL − XC. Siden XL og XC er i motfase (180° forskjøvet), trekkes de fra hverandre. Hvis XL > XC er kretsen induktiv; hvis XC > XL er den kapasitiv.'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er impedansen Z i en serie-RLC-krets?',
    opts: [
      'Z = R + XL + XC',
      'Z = R + XL − XC',
      'Z = √(R² + (XL − XC)²)',
      'Z = R × (XL − XC)'
    ],
    correct: 2,
    explain: 'Z = √(R² + (XL − XC)²). R og reaktansen (XL − XC) er 90° på hverandre i fasediagrammet, så man bruker Pytagoras. Enheten er ohm (Ω).'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er resonansfrekvensen i en RLC-krets, og hva skjer ved resonans?',
    opts: [
      'f₀ = 2π√(LC) – ved resonans er impedansen maksimal',
      'f₀ = 1 / (2π√(LC)) – ved resonans er XL = XC og impedansen er lik R',
      'f₀ = R / (2πL) – bestemt kun av resistans og induktans',
      'f₀ = 1 / (2πRC) – bestemt kun av resistans og kapasitans'
    ],
    correct: 1,
    explain: 'Resonansfrekvens: f₀ = 1/(2π√(LC)). Ved resonans er XL = XC, reaktansen kansellerer ut, og impedansen er på sitt minimum (Z = R). Strømmen er på sitt maksimum i en seriekrets.'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er Q-faktoren (godhetsfaktoren) i en RLC-krets?',
    opts: [
      'Forholdet mellom aktiv og reaktiv effekt',
      'Et mål på hvor skarpt kretsen resonnerer – høy Q = smal båndbredde',
      'Forholdet mellom spenning og strøm ved resonans',
      'Effektiviteten til kondensatoren i kretsen'
    ],
    correct: 1,
    explain: 'Q = f₀ / BW = (1/R)×√(L/C). Høy Q-faktor betyr at kretsen resonerer skarpt med smal båndbredde – den er selektiv. Lav Q gir bred resonanskurve. Brukes mye i filterdesign og radiotuning.'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er cosφ (effektfaktoren), og hva betyr cosφ = 1?',
    opts: [
      'Forholdet mellom reaktiv og tilsynelatende effekt – cosφ = 1 betyr all effekt er reaktiv',
      'Forholdet mellom aktiv og tilsynelatende effekt – cosφ = 1 betyr at all effekt er aktiv (rent resistiv last)',
      'Fasevinkelen mellom strøm og spenning – cosφ = 1 betyr 90° faseforskyving',
      'Forholdet mellom induktiv og kapasitiv reaktans'
    ],
    correct: 1,
    explain: 'Effektfaktoren cosφ = P/S, der P er aktiv effekt (W) og S er tilsynelatende effekt (VA). cosφ = 1 betyr φ = 0° – strøm og spenning er i fase, og all effekt utnyttes som nyttig arbeid. cosφ < 1 indikerer reaktiv last.'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er forskjellen mellom aktiv, reaktiv og tilsynelatende effekt?',
    opts: [
      'Det er tre navn på samme størrelse, brukt i ulike sammenhenger',
      'Aktiv (P, W) = nyttig effekt; Reaktiv (Q, VAr) = lagret/returnert effekt; Tilsynelatende (S, VA) = total effekt = √(P² + Q²)',
      'Aktiv effekt brukes i DC; reaktiv og tilsynelatende kun i AC',
      'Reaktiv effekt er alltid større enn aktiv effekt'
    ],
    correct: 1,
    explain: 'P (watt) er effekten som gjør nyttig arbeid (varme, lys, mekanisk). Q (VAr) er effekten som pendler mellom kilde og reaktive komponenter. S (VA) = √(P² + Q²) er det produktet av total strøm og spenning. Effekttrekanten forbinder alle tre.'
  },
  {
    cat: 'rlckrets', catLabel: 'RLC-kretser & resonans',
    q: 'Hva er en lavpassfilter, og hva brukes det til?',
    opts: [
      'En krets som slipper gjennom høye frekvenser og demper lave',
      'En krets som slipper gjennom lave frekvenser og demper høye – brukes f.eks. til å fjerne støy',
      'En krets som kun slipper gjennom resonansfrekvensen',
      'En krets som inverterer fasevinkelen til inngangssignalet'
    ],
    correct: 1,
    explain: 'Et lavpassfilter slipper gjennom frekvenser under knekkfrekvensen (f_c) og demper høyere frekvenser. Enkelt eksempel: RC-krets der utgangen tas over kondensatoren. Brukes til støyfjerning og signalbehandling.'
  }
];
