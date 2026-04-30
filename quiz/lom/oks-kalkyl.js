const QUIZ_META = {
  id: 'lom-oks-kalkyl',
  title: 'Driftsregnskap og kalkyler',
  subtitle: 'Økonomistyring – Kap. 9 og 11',
  description: '30 spørsmål om driftsregnskap, selvkostmetoden, bidragsmetoden, kalkylasjon i handelsbedrifter og avviksanalyse.',
  cats: {
    driftsregnskap: { label: 'Driftsregnskap',     color: '#8b5cf6' },
    selvkost:       { label: 'Selvkostmetoden',    color: '#3b82f6' },
    bidrag:         { label: 'Bidragsmetoden',     color: '#10b981' },
    avviksanalyse:  { label: 'Kalkylasjon og avviksanalyse', color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'driftsregnskap',
    catLabel: 'Driftsregnskap',
    q: 'Hva er formålet med driftsregnskapet?',
    opts: [
      'Å rapportere til Skatteetaten og aksjonærene',
      'Å gi intern styringsinformasjon om lønnsomheten per produkt, prosjekt eller avdeling – grunnlag for priskalkylering',
      'Å føre det lovpålagte finansregnskapet',
      'Å beregne skattbart overskudd'
    ],
    correct: 1,
    explain: 'Driftsregnskapet er et internt, frivillig styringsverktøy. Det viser lønnsomheten per produkt, prosjekt, avdeling eller kunde – og er grunnlaget for priskalkylering og ledelsesbeslutninger.'
  },
  {
    cat: 'driftsregnskap',
    catLabel: 'Driftsregnskap',
    q: 'Hvilke typer driftsregnskap finnes?',
    opts: [
      'Finansregnskap, skatteregnskap og likviditetsregnskap',
      'Avdelingsregnskap, prosjektregnskap og produktregnskap',
      'Resultatregnskap, balanseregnskap og kontantstrømoppstilling',
      'Budsjett, prognose og årsregnskap'
    ],
    correct: 1,
    explain: 'Driftsregnskapet finnes i flere former: avdelingsregnskap (per avdeling), prosjektregnskap (per oppdrag) og produktregnskap (per produkt). Alle gir mer detaljert informasjon enn finansregnskapet.'
  },
  {
    cat: 'driftsregnskap',
    catLabel: 'Driftsregnskap',
    q: 'Hva er koblingen mellom driftsregnskapet og kalkylene?',
    opts: [
      'Kalkylere brukes for å lage driftsregnskapet',
      'Driftsregnskapet fra ferdige prosjekter gir tilleggssatser som brukes til å kalkulere priser for fremtidige prosjekter',
      'Driftsregnskapet erstatter behovet for kalkylering',
      'Det er ingen direkte kobling mellom dem'
    ],
    correct: 1,
    explain: 'Flytdiagrammet viser sammenhengen: Ferdige prosjekter → Driftsregnskap → Beregning av tilleggssatser (%) → Kalkyler → Kalkulere pris for kommende prosjekter. Historisk data driver fremtidige kalkyler.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er selvkostmetoden?',
    opts: [
      'En metode som kun tar med variable kostnader i produktkalkylen',
      'En metode som tar med ALLE kostnader (direkte og indirekte, faste og variable) i produktets kalkyle',
      'En metode for å beregne dekningsbidraget per produkt',
      'En metode for å beregne minimumsavkastning på kapital'
    ],
    correct: 1,
    explain: 'Selvkostmetoden inkluderer alle kostnader i produktkalkylen: direkte materialkostnader + direkte lønnskostnader + indirekte produksjonskostnader + indirekte salgs- og administrasjonskostnader = selvkost.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er oppbygningen av selvkostprisen?',
    opts: [
      'Variable kostnader + Dekningsbidrag = Selvkost',
      'Direkte materialkostnad + Direkte lønnskostnad = Tilvirkningskost; + Indirekte S&A-kostnader = Selvkost; + Fortjeneste = Salgsinntekt',
      'Alle variable kostnader + Faste kostnader = Selvkost; + Skatt = Salgspris',
      'Innkjøpspris + Frakt + Toll = Selvkost + Avanse = Salgspris'
    ],
    correct: 1,
    explain: 'Selvkostmetoden: Direkte materialkostnad + Direkte lønnskostnad + Andre direkte kostnader = Tilvirkningskost. Tilvirkningskost + Indirekte salgs- og administrasjonskostnader = Selvkost. Selvkost + Fortjeneste = Salgsinntekt.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er differensierte tillegg i selvkostkalkylen?',
    opts: [
      'Ulike priser til ulike kunder basert på rabatter',
      'Ulike tilleggssatser for ulike kategorier av indirekte kostnader: materialtillegg, driftstillegg, administrasjonstillegg og salgstillegg',
      'Differanse mellom budsjetterte og faktiske kostnader',
      'Tillegg som varierer med markedsprisene'
    ],
    correct: 1,
    explain: 'Differensierte tillegg betyr at indirekte kostnader fordeles med ulike satser for ulike kostnadskategorier: materialtillegg (% av materialkostnad), driftstillegg (% av direkte lønn), administrasjonstillegg og salgstillegg.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er en potensiell ulempe med selvkostmetoden?',
    opts: [
      'Den er for enkel og gir ikke nok informasjon',
      '"Urettferdige tillegg" der produkter med høy direkte lønn belastes mye indirekte kost – kan føre til avvisning av lønnsomme tilleggsordrer',
      'Den tar ikke med faste kostnader, noe som undervurderer kostnadene',
      'Den krever svært avansert regnskapsprogramvare'
    ],
    correct: 1,
    explain: 'Selvkostmetodens svakhet er at fordelingen av indirekte kostnader kan slå uheldig ut: produkter med høy direkte lønnskostnad får uforholdsmessig høy andel av felleskostnader, og kan feilaktig virke ulønnsomme.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er tillegg for indirekte kostnader per faktureringstime?',
    opts: [
      'Andel indirekte kostnader / Antall fakturaer',
      'Andel indirekte kostnader / Antall fakturerte timer – gir en timesats for indirekte kostnader',
      'Totale kostnader / Totale timer (inkl. ikke-fakturerte)',
      'Indirekte kostnader / Direkte lønnskostnader × 100'
    ],
    correct: 1,
    explain: 'Tillegg per faktureringstime = Total andel indirekte kostnader / Antall fakturerte timer. Dette gir en timesats som legges til direkte timer i kalkylene for å dekke indirekte kostnader.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er bidragsmetoden?',
    opts: [
      'En metode som tar med alle kostnader i kalkylen',
      'En metode som kun inkluderer de produksjonsavhengige (variable) kostnadene i produktkalkylen – faste kostnader holdes utenfor',
      'En metode for å beregne tilskudd fra NAV',
      'En metode for å fordele faste kostnader på produkter'
    ],
    correct: 1,
    explain: 'Bidragsmetoden inkluderer kun de variable kostnadene i produktkalkylen. Faste kostnader behandles som periodekostnader. Salgspris − Variable kostnader = Dekningsbidrag (DB).'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er dekningsbidrag (DB)?',
    opts: [
      'Salgspris minus alle kostnader inkl. faste = nettoresultatet',
      'Salgspris minus variable kostnader = bidraget til dekning av faste kostnader og fortjeneste',
      'Bruttofortjeneste fratrukket avskrivninger',
      'Driftsresultat fratrukket rentekostnader'
    ],
    correct: 1,
    explain: 'DB = Salgspris − Variable kostnader. Dekningsbidraget viser hva produktet bidrar med til å dekke faste kostnader og fortjeneste. Summen av DB fra alle produkter minus samlede faste kostnader = resultat.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er dekningsgrad (DG)?',
    opts: [
      'DG = Faste kostnader / Salgsinntekter × 100',
      'DG = Dekningsbidrag / Salgsinntekter × 100 – viser DB som andel av salgsprisen',
      'DG = Salgsinntekter / Variable kostnader × 100',
      'DG = Driftsresultat / Totalkapital × 100'
    ],
    correct: 1,
    explain: 'DG = Dekningsbidrag / Salgsinntekter × 100. Viser hvor stor andel av salgsprisen som er igjen etter at variable kostnader er dekket. Høy DG er bra – mer bidrag per salgskrone.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er forutsetningene for at bidragsmetoden er gyldig?',
    opts: [
      'At alle kostnader er variable og at faste kostnader kan ignoreres',
      'Proporsjonale variable kostnader, stabile faste kostnader og fast salgspris innenfor det relevante kapasitetsintervallet',
      'At bedriften kun produserer ett produkt',
      'At salgsprisen alltid overstiger selvkostnaden'
    ],
    correct: 1,
    explain: 'Bidragsmetoden forutsetter: (1) proporsjonale variable kostnader (konstant DB per enhet), (2) stabile faste kostnader innenfor kapasitetsintervallet, og (3) fast pris uavhengig av mengde.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Når anbefales bidragsmetoden fremfor selvkostmetoden?',
    opts: [
      'Alltid – bidragsmetoden er overlegen',
      'I spesialtilfeller: lavsesong med ledig kapasitet, tilleggsordrer og midlertidige prisforhandlinger – men ikke for langsiktig prissetting',
      'Kun i varehandel – ikke i produksjon',
      'Når man ønsker å unngå å beregne faste kostnader'
    ],
    correct: 1,
    explain: 'Selvkostmetoden anbefales for langsiktig prissetting (alle kostnader må dekkes). Bidragsmetoden brukes kortsiktig ved ledig kapasitet, tilleggsordrer, lavsesong eller etterspørselssvikt – da er det lønnsomt å ta ordrer som gir positivt DB.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er salgsmerkost (minimumskostnad) i bidragsmetoden?',
    opts: [
      'Summen av alle kostnader ved å selge produktet',
      'Den laveste prisen et produkt kan selges for og gi positivt bidrag – dvs. de variable kostnadene for ordren',
      'Salgskostnader pluss markedsføringskostnader',
      'Selvkostprisen minus fortjenesten'
    ],
    correct: 1,
    explain: 'Salgsmerkost (minimumspris/differansepris) = de variable kostnadene som direkte påløper for ordren. Alt over denne prisen gir positivt dekningsbidrag og kan aksepteres når det er ledig kapasitet.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva er bruttofortjeneste i varehandel, og hva er avanse?',
    opts: [
      'Bruttofortjeneste = Salgspris − Alle kostnader; Avanse = Bruttofortjeneste / Salgspris × 100',
      'Bruttofortjeneste = Salgsinntekter − Varekostnad (i kr); Avanse = Bruttofortjeneste / Varekostnad × 100',
      'Begge beregnes av salgsprisen og gir alltid samme prosent',
      'Bruttofortjeneste = Salgspris × Avanseprosent; Avanse = Salgspris − Innkjøpspris'
    ],
    correct: 1,
    explain: 'I varehandel: BF = Salgsinntekter − Varekostnad (i kr). BFP = BF / Salgsinntekter × 100 (av salgsprisen). Avanse = BF / Varekostnad × 100 (av innkjøpsprisen). Avansen er alltid høyere enn BFP.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva er forkalkyler og etterkalkyler?',
    opts: [
      'Forkalkyler er historiske analyser; etterkalkyler er fremtidsrettede planer',
      'Forkalkyler beregnes FØR jobben/prosjektet (prisgrunnlag); etterkalkyler beregnes ETTER (faktiske kostnader – grunnlag for avviksanalyse)',
      'Forkalkyler er foreløpige budsjetter; etterkalkyler er reviderte budsjetter',
      'Begge gjøres under produksjonen for løpende kontroll'
    ],
    correct: 1,
    explain: 'Forkalkyler utarbeides FØR jobben starter og brukes som grunnlag for prissetting. Etterkalkyler beregnes ETTER jobben er ferdig basert på faktiske kostnader – og sammenlignes med forkalkylen for avviksanalyse.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva er mengdeavvik i avviksanalyse?',
    opts: [
      'Avvik i antall solgte enheter mot budsjettet',
      '(Faktisk forbrukt mengde − Planlagt mengde) × Planlagt pris – viser effektivitetsavvik',
      'Differansen mellom budsjettert og faktisk salgspris',
      'Avviket i antall arbeidstimer brukt på prosjektet'
    ],
    correct: 1,
    explain: 'Mengdeavvik = (Faktisk forbrukt mengde − Planlagt mengde) × Planlagt pris. Viser om man brukte mer eller mindre materialer/tid enn planlagt. Positivt avvik = brukte mer enn planlagt (negativt for resultat).'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva er prisavvik i avviksanalyse?',
    opts: [
      '(Faktisk mengde − Planlagt mengde) × Planlagt pris',
      '(Virkelig pris − Planlagt pris) × Faktisk mengde – viser om man betalte mer eller mindre enn planlagt',
      'Differansen mellom faktisk og budsjettert salgspris',
      'Avvik i salgspris mellom ulike kundegrupper'
    ],
    correct: 1,
    explain: 'Prisavvik = (Virkelig pris − Planlagt pris) × Faktisk forbrukt mengde. Viser om prisene på innsatsfaktorer (materialer, arbeidstimer) ble som planlagt. Positivt avvik = betalte mer enn planlagt.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva brukes avviksanalyse til?',
    opts: [
      'Å finne ut hvem som er ansvarlig for feilene i produksjonen',
      'Å identifisere årsaker til avvik mellom planlagte og faktiske kostnader – grunnlag for tiltak, prissetting og budsjettforbedring',
      'Å beregne nye tilleggssatser for neste år',
      'Å dokumentere avvik for revisjonsformål'
    ],
    correct: 1,
    explain: 'Avviksanalyse gir innsikt i HOW og HVORFOR det oppsto avvik mellom planlagt og faktisk. Dette gir grunnlag for: tiltak, korreksjon av fremtidige kalkyler og forbedring av budsjettering.'
  },
  {
    cat: 'driftsregnskap',
    catLabel: 'Driftsregnskap',
    q: 'Hva er forskjellen mellom direkte og indirekte kostnader i driftsregnskapet?',
    opts: [
      'Direkte kostnader er variable; indirekte er faste',
      'Direkte kostnader kan knyttes direkte til et produkt/prosjekt; indirekte kostnader kan ikke det og fordeles med fordelingsnøkkel',
      'Direkte kostnader betales direkte; indirekte via fakturer',
      'Det er ingen praktisk forskjell – begge belastes produktet'
    ],
    correct: 1,
    explain: 'Direkte kostnader er sporbare til ett bestemt produkt eller prosjekt (f.eks. råvarer til produkt A). Indirekte kostnader (overhead) kan ikke direkte tilordnes og fordeles på produkter via en fordelingsnøkkel.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er tilvirkningskost?',
    opts: [
      'Summen av alle kostnader inkl. administrasjon og salg',
      'Summen av direkte produksjonskostnader (materialer + lønn + andre direkte) + indirekte produksjonskostnader',
      'Kun råvarer og direkte materialkostnader',
      'Selvkost minus salgskostnader'
    ],
    correct: 1,
    explain: 'Tilvirkningskost = Direkte materialkostnader + Direkte lønnskostnader + Andre direkte kostnader + Indirekte produksjonskostnader. Dette er kostnadene knyttet til selve produksjonen – ekskludert salgs- og administrasjonskostnader.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'Hva er "salgsmerkost = minimumskostnad" i praktisk sammenheng?',
    opts: [
      'Den pris man minimum kan ta for å dekke alle kostnader',
      'Den prisen man minimum kan ta for å ikke tape penger på én enkelt ordre ved ledig kapasitet – dvs. kun variable kostnader for den konkrete ordren',
      'Selvkostpris minus fortjeneste',
      'Gjennomsnittlig salgspris i bransjen'
    ],
    correct: 1,
    explain: 'Salgsmerkost (minimumspris) ved ledig kapasitet = de variable kostnadene for den spesifikke ordren. Alt over denne prisen gir positivt DB og bidrar til å dekke faste kostnader. Gjelder kun på kort sikt og ved ledig kapasitet.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'En snekker beregner at et skap skal koste 2 000 kr i materialer, men faktisk forbruk er 2 400 kr. Hva er avviket og hva kan årsaken være?',
    opts: [
      'Positivt avvik på kr 400 – lavere kostnad enn planlagt',
      'Negativt mengdeavvik og/eller prisavvik på kr 400 – mer forbruk, høyere innkjøpspris, eller svinn',
      'Positivt prisavvik – snekkerens timelønn er for høy',
      'Ingen avvik – 20% mer er innenfor normal toleranse'
    ],
    correct: 1,
    explain: 'Avviktet på kr 400 kan skyldes mengdeavvik (brukte mer materiale enn planlagt p.g.a. feil eller svinn) og/eller prisavvik (innkjøpsprisene var høyere). Avviksanalysen er grunnlaget for å finne årsaken.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er påslag for materialer i kalkylasjon?',
    opts: [
      'Materialenes andel av salgsprisen',
      'Andel indirekte kostnader / Direkte materialkostnader × 100 – et prosenttillegg på materialkostnader for å dekke indirekte materialkostnader',
      'Transportkostnader for materialer som et prosenttillegg',
      'Tollsatsen på importerte materialer'
    ],
    correct: 1,
    explain: 'Påslag for materialer = Andel indirekte materialkostnader / Direkte materialkostnader × 100. Dette prosenttillegget legges på direkte materialkostnader i kalkylen for å fordele indirekte lagerkostnader, innkjøpskostnader osv.'
  },
  {
    cat: 'avviksanalyse',
    catLabel: 'Kalkylasjon og avviksanalyse',
    q: 'Hva er for- og etterkalkylers verdi for budsjettprosessen?',
    opts: [
      'De brukes kun for skattemessige formål',
      'Etterkalkyler gir faktiske kostnadstall som forbedrer grunnlaget for neste periodes forkalkyler og budsjetter',
      'Forkalkyler brukes til å kontrollere etterkalkyler',
      'De er kun relevante for store prosjekter over 500 000 kr'
    ],
    correct: 1,
    explain: 'Etterkalkyler gir faktiske kostnadsdata som systematisk forbedrer neste periodes forkalkyler og budsjetter. Avviksanalysen identifiserer hva som gikk annerledes og gir kunnskap som gjør fremtidige kalkyler mer presise.'
  },
  {
    cat: 'bidrag',
    catLabel: 'Bidragsmetoden',
    q: 'En bedrift selger produkt A for kr 500 og har variable kostnader på kr 300. Hva er dekningsbidraget og dekningsgraden?',
    opts: [
      'DB = kr 200; DG = 40%',
      'DB = kr 300; DG = 60%',
      'DB = kr 200; DG = 60%',
      'DB = kr 500; DG = 100%'
    ],
    correct: 0,
    explain: 'DB = Salgspris − Variable kostnader = 500 − 300 = kr 200. DG = DB / Salgspris × 100 = 200/500 × 100 = 40%. 40 øre av hver krone i salg bidrar til å dekke faste kostnader og fortjeneste.'
  },
  {
    cat: 'driftsregnskap',
    catLabel: 'Driftsregnskap',
    q: 'Hva er et prosjektregnskap?',
    opts: [
      'Et regnskap som kun viser investeringsprosjekter',
      'Et driftsregnskap som viser alle inntekter og kostnader knyttet til ett bestemt oppdrag eller prosjekt',
      'Et framtidsrettet budsjett for planlagte prosjekter',
      'En oversikt over alle pågående prosjekter i bedriften'
    ],
    correct: 1,
    explain: 'Et prosjektregnskap er et driftsregnskap for ett spesifikt prosjekt eller oppdrag. Det viser alle direkte og indirekte kostnader belastet prosjektet, samt inntekter – og gir et bilde av prosjektets lønnsomhet.'
  },
  {
    cat: 'selvkost',
    catLabel: 'Selvkostmetoden',
    q: 'Hva er anbefalingen for langsiktig prissetting – selvkost eller bidragsmetode?',
    opts: [
      'Bidragsmetoden – den er alltid mest lønnsom',
      'Selvkostmetoden – på lang sikt må ALLE kostnader dekkes for at bedriften skal overleve',
      'Begge metoder er like gode på lang sikt',
      'Det avhenger av bransjen – det er ingen generell anbefaling'
    ],
    correct: 1,
    explain: 'Selvkostmetoden anbefales for langsiktig prissetting fordi alle kostnader (faste og variable) må dekkes over tid for at bedriften skal overleve. Bidragsmetoden er et kortsiktig hjelpemiddel ved spesielle situasjoner.'
  },
];
