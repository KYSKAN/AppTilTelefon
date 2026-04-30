const QUIZ_META = {
  id: 'lom-ool-endring',
  title: 'Endringsledelse og organisasjonsutvikling',
  subtitle: 'Organisasjon og ledelse – Kap. 7',
  description: '32 spørsmål om endringsledelse, Kotters 8 trinn, Lewins faser, interessentanalyse, OU, TKL, LEAN, PDCA og den lærende organisasjon.',
  cats: {
    endring_def:  { label: 'Endringsledelse – grunnlag', color: '#8b5cf6' },
    modeller:     { label: 'Kotters og Lewins modeller',  color: '#3b82f6' },
    interessenter: { label: 'Interessenter og motstand',  color: '#ef4444' },
    ou_tql:       { label: 'OU, TKL, LEAN og Senge',      color: '#10b981' },
  }
};

const QUESTIONS = [
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er endringsledelse ifølge Wesenberg (2023)?',
    opts: [
      'Å innføre ny teknologi i en organisasjon',
      'En planmessig og målrettet prosess for å lede mennesker og organisasjoner gjennom ønskede endringer',
      'Å tilpasse lønns- og arbeidsvilkår til nye krav',
      'Å reorganisere organisasjonskartet og lederhierarkiet'
    ],
    correct: 1,
    explain: 'Endringsledelse er en planmessig og målrettet prosess for å lede mennesker og organisasjoner gjennom ønskede endringer, slik at endringene faktisk fester seg og gir ønskede resultater.'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hvor stor andel av endringsforsøk mislykkes ifølge forskning på feltet?',
    opts: ['30 %', '50 %', '70 %', '90 %'],
    correct: 2,
    explain: 'Forskning viser at om lag 70 % av alle endringsinitiativ i organisasjoner mislykkes – ofte fordi man undervurderer menneskesiden og fokuserer for mye på tekniske løsninger.'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er implementeringssuksess-formelen fra pensum?',
    opts: [
      'Suksess = Kvalitet × Kunnskap',
      'Suksess = Kvalitet × (Eierskap + Motivasjon + Kunnskap)',
      'Suksess = Eierskap × Motivasjon × Tid',
      'Suksess = Strategi × Ressurser × Kompetanse'
    ],
    correct: 1,
    explain: 'Implementeringssuksess = Kvalitet × (Eierskap + Motivasjon + Kunnskap). Formelen viser at god teknisk kvalitet ikke er nok – ansatte må eie endringen, være motiverte og forstå den.'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er endringskaleidoskopet, og hvilke dimensjoner inngår?',
    opts: [
      'En visuell modell for kommunikasjonsplan med 5 dimensjoner',
      'En analysemodell med 8 komponenter: makt, tid, omfang, bevaring, mangfold, kompetanse, kapasitet og forankring',
      'En prosessmodell med 3 faser inspirert av Lewin',
      'En interessentmodell med 4 kategorier basert på makt og interesse'
    ],
    correct: 1,
    explain: 'Endringskaleidoskopet er et analyseverktøy med 8 komponenter som hjelper ledere vurdere konteksten for endring: maktforhold, tid, omfang, bevaring, mangfold, kompetanse, kapasitet og forankring.'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er akseptmodellen i endringsledelse?',
    opts: [
      'En modell for å akseptere motstand og la den gå over naturlig',
      'Fire trinn ansatte må gjennom: vite → kunne → ville → ha lov',
      'En modell for å evaluere om endringen var vellykket',
      'En prosess for å akseptere tap og tilpasse seg nye omgivelser'
    ],
    correct: 1,
    explain: 'Akseptmodellen beskriver fire trinn ansatte må gjennom for å ta til seg en endring: vite (kjenne endringen), kunne (ha kompetanse), ville (være motivert) og ha lov (ha myndighet).'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er en kommunikasjonsplan i endringsarbeid?',
    opts: [
      'En plan for å informere pressen om endringer i selskapet',
      'En systematisk plan for hvem som skal informeres om hva, når og hvordan under endringsprosessen',
      'Et dokument som beskriver nye kommunikasjonskanaler etter endringen',
      'En plan for å håndtere negativ pressedekning'
    ],
    correct: 1,
    explain: 'En kommunikasjonsplan sikrer at riktig informasjon når riktige interessenter til riktig tid og via riktige kanaler – kritisk for å redusere usikkerhet og motstand mot endring.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva er de tre fasene i Lewins endringsmodell?',
    opts: [
      'Planlegge → Gjennomføre → Evaluere',
      'Analysere → Implementere → Følge opp',
      'Tine → Endre → Fryse',
      'Mobilisere → Transformere → Forankre'
    ],
    correct: 2,
    explain: 'Lewins tre faser: Tine (unfreeze – løsne opp etablerte mønstre), Endre (move – gjennomføre endringen) og Fryse (refreeze – forankre den nye tilstanden som ny norm).'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva representerer "tine"-fasen i Lewins modell?',
    opts: [
      'Å gjennomføre den planlagte endringen',
      'Å forankre den nye atferden som ny standard',
      'Å skape motivasjon og erkjennelse av at endring er nødvendig – løsne opp status quo',
      'Å evaluere resultater av endringen'
    ],
    correct: 2,
    explain: 'Tine-fasen handler om å destabilisere status quo og skape motivasjon for endring – folk må innse at det eksisterende ikke fungerer godt nok og at endring er nødvendig.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva er første steg i Kotters 8-trinnsmodell for endring?',
    opts: [
      'Skape en sterk lederkoalisjon',
      'Skape en følelse av krise og hastverk (urgency)',
      'Kommunisere visjonen bredt i organisasjonen',
      'Forankre endringer i kulturen'
    ],
    correct: 1,
    explain: 'Kotters første trinn er å skape en sterk følelse av nødvendighet og hastverk (urgency) – uten dette vil ikke folk prioritere endringen fremfor daglig drift.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva er det siste trinnet i Kotters 8-trinnsmodell?',
    opts: [
      'Kommunisere endringsvisjonen til alle ansatte',
      'Fjerne barrierer og hindringer for endringen',
      'Forankre endringene i organisasjonens kultur',
      'Feire kortsiktige seire for å opprettholde motivasjonen'
    ],
    correct: 2,
    explain: 'Kotters siste (8.) trinn er å forankre endringene dypt i organisasjonens kultur – slik at de nye måtene å jobbe på blir den nye normalen og ikke glir tilbake til gammel praksis.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva er en viktig forskjell mellom Kotters og Lewins endringsmodeller?',
    opts: [
      'Lewin passer for store endringer; Kotter for små justeringer',
      'Kotter har 8 detaljerte trinn med fokus på lederatferd; Lewin har 3 overordnede faser',
      'Kotter er kun for private bedrifter; Lewin for offentlig sektor',
      'Lewin vektlegger tekniske aspekter; Kotter vektlegger sosiale aspekter'
    ],
    correct: 1,
    explain: 'Kotter tilbyr en mer detaljert, lederorientert 8-trinnsmodell med fokus på spesifikke handlinger ledere bør ta. Lewin gir en enklere, mer overordnet 3-fasemodell.'
  },
  {
    cat: 'interessenter',
    catLabel: 'Interessenter og motstand',
    q: 'Hva er en interessentanalyse i endringsarbeid?',
    opts: [
      'En analyse av bedriftens finansielle interessenter (aksjonærer)',
      'En kartlegging av alle berørte parter etter to dimensjoner: makt og interesse – for å prioritere involvering',
      'En analyse av markedets interesse for bedriftens produkter',
      'Et verktøy for å identifisere interne konflikter'
    ],
    correct: 1,
    explain: 'Interessentanalysen kartlegger alle som berøres av endringen og plasserer dem i en 2×2 matrise etter makt (høy/lav) og interesse (høy/lav) – for å avgjøre hvor mye innsats som bør legges i å involvere dem.'
  },
  {
    cat: 'interessenter',
    catLabel: 'Interessenter og motstand',
    q: 'Hvem bør prioriteres høyest i en interessentanalyse?',
    opts: [
      'De med lav makt og høy interesse',
      'De med høy makt og lav interesse',
      'De med høy makt og høy interesse',
      'De med lav makt og lav interesse'
    ],
    correct: 2,
    explain: 'Interessenter med høy makt og høy interesse er "nøkkelspillere" som bør involveres aktivt. De har både mulighet til å blokkere endringen og sterk motivasjon til å gjøre det.'
  },
  {
    cat: 'interessenter',
    catLabel: 'Interessenter og motstand',
    q: 'Hvilke er de vanligste årsakene til motstand mot endring ifølge Kanter (1992)?',
    opts: [
      'Lat atferd og manglende arbeidsetikk',
      'Tap av kontroll, høy usikkerhet, mangel på informasjon og frykt for å tape noe man har',
      'Tekniske problemer med de nye systemene',
      'Dårlig økonomi i bedriften'
    ],
    correct: 1,
    explain: 'Kanter identifiserte motstand mot endring som drevet av: tap av kontroll, usikkerhet om fremtiden, mangel på tilstrekkelig informasjon, frykt for å miste noe man verdsetter, og bekymring for inkompetanse.'
  },
  {
    cat: 'interessenter',
    catLabel: 'Interessenter og motstand',
    q: 'Hva er det beste virkemiddelet for å redusere motstand mot endring?',
    opts: [
      'Innføre endringen raskt uten å varsle for å unngå spekulasjoner',
      'Tidlig og ærlig kommunikasjon kombinert med reell involvering av berørte parter',
      'Gi alle berørte høyere lønn for å kompensere for ubehaget',
      'Tvinge gjennom endringen med autoritet og konsekvenser'
    ],
    correct: 1,
    explain: 'Tidlig, ærlig og god kommunikasjon om hvorfor endringen skjer og hva den innebærer, kombinert med reell involvering av de berørte, er det mest effektive virkemiddelet mot motstand.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er organisasjonsutvikling (OU) sin todelte definisjon?',
    opts: [
      'Å rekruttere bedre folk og gi dem bedre verktøy',
      'Å tilpasse organisasjonen til omgivelsene OG tilfredsstille ansattes behov for vekst og utvikling',
      'Å effektivisere prosesser og redusere kostnader',
      'Å implementere nye IT-systemer og strukturer'
    ],
    correct: 1,
    explain: 'OU har to dimensjoner: (1) tilpasse organisasjonen til skiftende omgivelser og (2) tilfredsstille ansattes behov for vekst, mestring og utvikling – begge er nødvendige for varig suksess.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er Total Kvalitetsledelse (TKL/TQM)?',
    opts: [
      'Et regnskapssystem for å kontrollere kostnader',
      'En ledelsesfilosofi opprinnelig fra Japan med fokus på kontinuerlig forbedring, kundefokus og beste praksis i alle ledd',
      'Et system for å kontrollere produktkvaliteten i sluttfasen',
      'En metode for å måle ansattes prestasjoner'
    ],
    correct: 1,
    explain: 'TKL (Total Quality Management) er en helhetlig ledelsesfilosofi opprinnelig fra Japan (Deming) med fokus på kontinuerlig forbedring, totalt kundefokus og involvering av alle ansatte i kvalitetsarbeidet.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er PDCA-hjulet, og hvem er det knyttet til?',
    opts: [
      'En markedsføringssirkel (Product, Distribution, Communication, Audience) – Kotler',
      'En kvalitetsforbedringssirkel (Plan, Do, Check, Act) – Deming',
      'En endringsledelsesmodell (Prioritize, Delegate, Control, Adjust) – Kotter',
      'En budsjetteringssyklus (Plan, Distribute, Control, Assess) – Lewin'
    ],
    correct: 1,
    explain: 'PDCA-hjulet (Plan-Do-Check-Act), også kalt Deming-hjulet, er et verktøy for kontinuerlig forbedring: planlegg tiltak → gjennomfør → sjekk resultater → juster og forbedre.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er LEAN, og hva er dets hovedmål?',
    opts: [
      'En finansmodell for å beregne kapitalavkastning',
      'En ledelsesfilosofi avledet fra TKL med fokus på å eliminere all sløsing (muda) i alle prosesser',
      'En personalmodell for å effektivisere arbeidskontrakter',
      'En teknisk metode for å designe produkter med færre komponenter'
    ],
    correct: 1,
    explain: 'LEAN er en produksjons- og ledelsesfilosofi opprinnelig fra Toyota, avledet fra TKL, med fokus på å eliminere all sløsing (muda/waste) i prosesser og levere maksimal verdi til kunden.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva kjennetegner "den lærende organisasjon" slik Peter Senge beskriver det?',
    opts: [
      'En organisasjon som sender ansatte på mange kurs',
      'En organisasjon som kontinuerlig utvikler kapasitet til å skape ønskede resultater gjennom 5 disipliner',
      'En organisasjon med eget internt opplæringssenter',
      'En organisasjon der ledere er best til å lære og deretter lære opp ansatte'
    ],
    correct: 1,
    explain: 'Senges lærende organisasjon kontinuerlig utvikler og utvider sin kapasitet gjennom 5 disipliner: systemtenkning, personlig mestring, mentale modeller, felles visjon og læring i team.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er "systemtenkning" som Senges 5. og overordnede disiplin?',
    opts: [
      'Å installere gode IT-systemer for deling av kunnskap',
      'Å se helheten og sammenhengene mellom deler i organisasjonen fremfor å se på isolerte hendelser',
      'Å dele organisasjonen inn i effektive delsystemer',
      'Å bruke matematiske modeller for å planlegge ressursbruk'
    ],
    correct: 1,
    explain: 'Systemtenkning er evnen til å se organisasjonen som et komplekst system av sammenhenger og feedback-sløyfer – fremfor å fokusere på isolerte hendelser. Det er den overordnede disiplinen som binder de andre 4 sammen.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er "personlig mestring" i Senges modell?',
    opts: [
      'At lederen personlig kontrollerer alle prosesser',
      'At hvert individ forplikter seg til livslang læring og kontinuerlig utvikling av egne ferdigheter og forståelse',
      'At ansatte konkurrerer om å bli best i sine roller',
      'At ledere mestrer alle tekniske aspekter av organisasjonen'
    ],
    correct: 1,
    explain: 'Personlig mestring handler om individets forpliktelse til livslang læring, kontinuerlig klargjøring av personlig visjon og å se virkeligheten objektivt. Organisasjoner lærer bare gjennom individer som lærer.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er "felles visjon" i Senges modell?',
    opts: [
      'At ledergruppen har en felles strategiplan',
      'En ekte, delt visjon som engasjerer og forplikter alle i organisasjonen – ikke bare pålagt ovenfra',
      'Et visjonsboard som henger i resepsjonen',
      'At alle avdelinger har samme måletall'
    ],
    correct: 1,
    explain: 'Felles visjon handler om å bygge en ekte, delt forståelse av hva organisasjonen ønsker å skape – en visjon som folk genuint deler og forplikter seg til, ikke bare en slogan som er pålagt ovenfra.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hvilke OU-verktøy brukes for å fremme organisasjonsutvikling i praksis?',
    opts: [
      'Regnskapsanalyse, budsjettkontroll og kostnadsstyring',
      'Medarbeidersamtaler, kompetanseutvikling og medarbeiderundersøkelser',
      'Fusjon, oppkjøp og outsourcing',
      'Produktutvikling, markedsføring og salg'
    ],
    correct: 1,
    explain: 'Konkrete OU-verktøy inkluderer: medarbeidersamtaler (systematisk dialog), kompetanseutvikling (kurs, hospitering) og medarbeiderundersøkelser (kartlegge trivsel og utfordringer).'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er prestasjonsledelse i OU-sammenheng?',
    opts: [
      'Et system for å straffe ansatte som ikke presterer',
      'En helhetlig tilnærming for å sette mål, følge opp og utvikle ansattes prestasjoner kontinuerlig',
      'Et lønns- og bonussystem basert på individuelle resultater',
      'En teknikk for å måle produksjonseffektivitet'
    ],
    correct: 1,
    explain: 'Prestasjonsledelse er en helhetlig tilnærming for å sette tydelige mål (SMART), følge opp, gi tilbakemelding og coache ansatte til kontinuerlig utvikling og forbedrede prestasjoner.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva menes med "fryse"-fasen i Lewins modell?',
    opts: [
      'Å stoppe endringsprosessen midlertidig',
      'Å forankre den nye atferden og de nye rutinene som den nye normalen i organisasjonen',
      'Å fryse budsjettet under endringsperioden',
      'Å hindre ytterligere endringer i en periode etter implementering'
    ],
    correct: 1,
    explain: 'Fryse-fasen handler om å konsolidere og forankre endringene – de nye arbeidsmetodene, verdiene og atferdene skal bli den nye standarden som tas for gitt, ikke midlertidige unntak.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er "mentale modeller" som Senges disiplin?',
    opts: [
      'Psykologiske tester for å kartlegge ansattes tankemønstre',
      'Bevissthet om og utfordring av egne og kollektive antakelser og forestillinger som påvirker beslutninger',
      'Datamodeller som simulerer organisasjonsatferd',
      'Møtestrukturer som optimaliserer beslutningsprosesser'
    ],
    correct: 1,
    explain: 'Mentale modeller er de dype antakelsene, generaliseringene og bildene vi bærer med oss som påvirker hva vi ser og how vi handler. Disiplinen handler om å bli bevisst på og utfordre disse for bedre beslutninger.'
  },
  {
    cat: 'ou_tql',
    catLabel: 'OU, TKL, LEAN og Senge',
    q: 'Hva er "læring i team" som Senges disiplin?',
    opts: [
      'At alle teammedlemmer går på de samme kursene',
      'Kollektiv prosess der teamet tenker og lærer som en enhet – resulterer i bedre kollektive resultater enn summen av individene',
      'At leder lærer opp hvert teammedlem individuelt',
      'At teamet evaluerer hverandres prestasjoner jevnlig'
    ],
    correct: 1,
    explain: 'Læring i team handler om kollektiv tenkning og dialog – der teamets samlede intelligens overstiger summen av enkeltindividene. Dette krever evne til å sette til side antakelser og tenke fritt sammen.'
  },
  {
    cat: 'endring_def',
    catLabel: 'Endringsledelse – grunnlag',
    q: 'Hva er en prestasjonskultur?',
    opts: [
      'En kultur der ansatte konkurrerer hardt mot hverandre om bonuser',
      'En kultur der forventninger er tydelige, ansatte har eierskap til mål og kontinuerlig forbedring er normen',
      'En kultur der kun de beste beholdes og de svakeste avvikles',
      'En kultur der prestasjoner måles utelukkende i kroner og øre'
    ],
    correct: 1,
    explain: 'Prestasjonskultur innebærer at forventninger er tydelige og kjente, at ansatte tar eierskap til egne mål, og at kontinuerlig forbedring og læring er en naturlig del av hverdagen.'
  },
  {
    cat: 'modeller',
    catLabel: 'Kotters og Lewins modeller',
    q: 'Hva er "kortsiktige seire" i Kotters 8-trinnsmodell?',
    opts: [
      'Å nå kortsiktige salgsmål',
      'Å skape synlige, raske resultater av endringen for å bevise at den virker og opprettholde motivasjonen',
      'Å feire budsjettoverholdelse hvert kvartal',
      'Å raskt avslutte prosjekter som ikke gir resultater'
    ],
    correct: 1,
    explain: 'Å planlegge og synliggjøre kortsiktige seire (trinn 6 hos Kotter) er avgjørende for å opprettholde motivasjon og tro på endringen blant ansatte – det viser at kursen er riktig.'
  },
];
