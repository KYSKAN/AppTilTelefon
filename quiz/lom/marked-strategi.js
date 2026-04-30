const QUIZ_META = {
  id: 'lom-marked-strategi',
  title: 'Utforming av markedsstrategien',
  subtitle: 'Markedsføringsledelse',
  description: '30 spørsmål om vekststrategier (Ansoff), konkurransestrategier (Porter og Kotler), markedsplan og markedsmiksen 5P.',
  cats: {
    vekst:       { label: 'Vekststrategier (Ansoff)',       color: '#8b5cf6' },
    konkurranse: { label: 'Konkurransestrategier',          color: '#3b82f6' },
    markedsplan: { label: 'Markedsplan og mål',             color: '#10b981' },
    markedsmiks: { label: 'Markedsmiksen 5P',               color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva beskriver produkt/markedsmatrisen (Ansoff-matrisen)?',
    opts: [
      'Fire typer konkurransestrategier basert på kostnad og differensiering',
      'Fire vekststrategier basert på kombinasjoner av eksisterende/nye produkter og eksisterende/nye markeder',
      'Fire markedsposisjoner: leder, utfordrer, følger og nisjespesialist',
      'Fire faser i produktets livssyklus'
    ],
    correct: 1,
    explain: 'Ansoff-matrisen kombinerer produktdimensjonen (eksisterende/nye) med markedsdimensjonen (eksisterende/nye) og gir fire vekststrategier: markedspenetrasjon, markedsutvikling, produktutvikling og diversifisering.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er markedspenetrasjon som vekststrategi?',
    opts: [
      'Å selge eksisterende produkter i nye markeder',
      'Å utvikle nye produkter for eksisterende markeder',
      'Å øke salget av eksisterende produkter i eksisterende markeder',
      'Å lansere nye produkter i nye markeder'
    ],
    correct: 2,
    explain: 'Markedspenetrasjon betyr å øke markedsandelen for eksisterende produkter i eksisterende markeder – for eksempel gjennom lavere pris, mer markedsføring eller bedre distribusjon.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er markedsutvikling som vekststrategi?',
    opts: [
      'Å selge eksisterende produkter i nye markeder eller til nye kundesegmenter',
      'Å utvikle nye produkter for eksisterende kunder',
      'Å øke markedsandelen i det eksisterende markedet',
      'Å satse på helt nye produkter i helt nye markeder'
    ],
    correct: 0,
    explain: 'Markedsutvikling innebærer å ta eksisterende produkter og selge dem i nye markeder (geografisk) eller til nye kundesegmenter man ikke har betjent tidligere.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er produktutvikling som vekststrategi?',
    opts: [
      'Å selge eksisterende produkter i nye geografiske markeder',
      'Å utvikle nye produkter for å selge til eksisterende kunder og markeder',
      'Å kjøpe opp konkurrenter for å øke markedsandelen',
      'Å forbedre produksjonsprosessen for å redusere kostnader'
    ],
    correct: 1,
    explain: 'Produktutvikling innebærer å skape nye eller forbedrede produkter og selge dem til de eksisterende kundene og markedene bedriften allerede betjener.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er diversifisering som vekststrategi, og hvorfor er det den mest risikable?',
    opts: [
      'Å satse på eksisterende produkter med mer markedsføring – lite risikabelt',
      'Å lancere nye produkter i nye markeder – høy risiko fordi man har lite erfaring på begge dimensjoner',
      'Å inngå samarbeid med konkurrenter for å dele markeder',
      'Å redusere produktsortimentet for å fokusere på kjernevirksomheten'
    ],
    correct: 1,
    explain: 'Diversifisering er den mest risikable strategien – nye produkter i nye markeder – fordi bedriften mangler erfaring på begge dimensjoner. Det kan være relatert (innen kjent bransje) eller urelatert diversifisering.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er vertikal integrasjon som vekststrategi?',
    opts: [
      'Å kjøpe opp konkurrenter på samme nivå i verdikjeden',
      'Å ekspandere bakover (mot leverandør) eller fremover (mot kunde) i verdikjeden',
      'Å selge produkter i nye land og regioner',
      'Å diversifisere inn i helt ubeslektede bransjer'
    ],
    correct: 1,
    explain: 'Vertikal integrasjon betyr å ekspandere i verdikjeden: bakover (kjøpe leverandør) eller fremover (kjøpe distributør/forhandler). Det gir mer kontroll og reduserer avhengighet.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er horisontal integrasjon?',
    opts: [
      'Å ekspandere bakover til leverandørleddet',
      'Å kjøpe opp konkurrenter på samme nivå i verdikjeden for å øke markedsandelen',
      'Å inngå allianse med bedrifter i andre bransjer',
      'Å eksportere eksisterende produkter til nye land'
    ],
    correct: 1,
    explain: 'Horisontal integrasjon innebærer å kjøpe opp eller fusjonere med konkurrenter på samme nivå i verdikjeden – dette øker markedsandelen og kan gi stordriftsfordeler.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er Porters tre grunnleggende konkurransestrategier?',
    opts: [
      'Vekst, stabilitet og nedskalering',
      'Kostnadsleder, differensiering og fokusering',
      'Markedspenetrasjon, produktutvikling og diversifisering',
      'Prisleder, kvalitetsleder og innovasjonsleder'
    ],
    correct: 1,
    explain: 'Porter identifiserte tre generiske strategier: kostnadslederskap (laveste pris), differensiering (unikt produkt som kunden betaler mer for) og fokusering (betjene et smalt segment svært godt).'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er kostnadslederskap som konkurransestrategi?',
    opts: [
      'Å tilby det dyreste og mest eksklusive produktet i markedet',
      'Å ha de laveste kostnadene i bransjen, noe som muliggjør lavere priser enn konkurrentene',
      'Å fokusere på et smalt kundesegment med spesialiserte produkter',
      'Å satse på sterk merkevarebygging og emosjonell differensiering'
    ],
    correct: 1,
    explain: 'Kostnadslederskap betyr å ha de laveste produksjons- og distribusjonskostnadene i bransjen, slik at man kan selge til lavere pris enn konkurrentene og fortsatt ha god margin.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er differensiering som konkurransestrategi?',
    opts: [
      'Å ha lavere pris enn alle konkurrenter',
      'Å tilby et unikt produkt eller tjeneste som kunden er villig til å betale en premie for',
      'Å fokusere utelukkende på ett smalt markedssegment',
      'Å tilby et bredest mulig produktsortiment'
    ],
    correct: 1,
    explain: 'Differensiering innebærer å skape et produkt eller en tjeneste som oppleves som unikt av kundene – på en slik måte at de er villige til å betale en høyere pris for det.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er fokusering som Porters tredje konkurransestrategi?',
    opts: [
      'Å fokusere all markedsføring på digitale kanaler',
      'Å betjene et smalt segment ekstremt godt – enten via lavest pris eller differensiering innen segmentet',
      'Å fokusere kun på eksisterende kunder og ikke søke nye',
      'Å konsentrere all produksjon på ett produkt'
    ],
    correct: 1,
    explain: 'Fokusering betyr å velge et smalt markedssegment og betjene det bedre enn noen andre – enten via kostnadsfokus (lavest pris til segmentet) eller differensieringsfokus (unikt tilbud til segmentet).'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er de fire markedsposisjonene ifølge Kotler?',
    opts: [
      'Kostnadsleder, Differensierer, Fokuserer og Nisjespesialist',
      'Markedsleder, Markedsutfordrer, Markedsfølger og Nisjespesialist',
      'Innovatør, Imitator, Pionér og Følger',
      'Dominerende, Sterk, Gunstig og Ugunstig'
    ],
    correct: 1,
    explain: 'Kotler beskriver fire konkurranseposisjoner: Markedsleder (størst markedsandel), Markedsutfordrer (angriper lederen), Markedsfølger (kopierer lederen) og Nisjespesialist (betjener smalt segment).'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva kjennetegner en markedsutfordrer?',
    opts: [
      'Den som har størst markedsandel og setter bransjenormen',
      'En bedrift som angriper markedslederen for å ta over lederposisjonen',
      'En bedrift som kopierer markedslederen for å tjene penger uten risiko',
      'En bedrift som fokuserer kun på et smalt nisjesegment'
    ],
    correct: 1,
    explain: 'Markedsutfordreren er nummer 2 eller 3 i markedet og angriper aktivt markedslederen – gjerne via lavere priser, mer innovasjon eller aggressiv markedsføring for å ta markedsandeler.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er typisk strategi for en markedsfølger?',
    opts: [
      'Å angripe markedslederen med aggressiv prissetting',
      'Å kopierer eller tilpasse markedslederens produkter og dra nytte av markedet uten å ta store risikoer',
      'Å spesialisere seg på et svært smalt segment',
      'Å fokusere på innovasjon og produkt-differensiering'
    ],
    correct: 1,
    explain: 'Markedsfølgeren velger ikke å utfordre lederen direkte, men kopierer eller tilpasser suksessrike produkter. Dette er mindre risikabelt og krever lavere FoU-investering.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hva er en markedsstrategi?',
    opts: [
      'En detaljert annonseplan for kommende kvartal',
      'En langsiktig plan som beskriver hvordan bedriften skal nå sine markedsmål gjennom valg av målgrupper og markedsmiks',
      'En analyse av konkurrentenes svakheter',
      'En liste over produktene bedriften ønsker å selge'
    ],
    correct: 1,
    explain: 'Markedsstrategien er en overordnet, langsiktig plan som angir hvordan bedriften skal nå sine markedsmål – gjennom valg av segmenter, målgrupper og sammensetning av markedsmiksen.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hva er riktig rekkefølge for prosessen med å utarbeide en markedsplan?',
    opts: [
      'Strategi → Situasjonsanalyse → Mål → Program → Kontroll',
      'Overordnede mål → Situasjonsanalyse → Markedsmål → Strategi → Program → Aktiviteter → Kontroll',
      'Kontroll → Situasjonsanalyse → Mål → Strategi → Gjennomføring',
      'Situasjonsanalyse → Strategi → Mål → Program → Budsjett'
    ],
    correct: 1,
    explain: 'Markedsplanprosessen starter med overordnede mål og forretningsidé, går via situasjonsanalyse og SMART-markedsmål, til strategi, program, konkrete aktiviteter og til slutt kontroll av resultater.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hva er en forretningsidé?',
    opts: [
      'En beskrivelse av hvilke produkter bedriften skal selge',
      'En overordnet beskrivelse av hva bedriften gjør, for hvem og hvilken verdi som skapes',
      'En finansiell plan for de neste 5 år',
      'En detaljert beskrivelse av produksjonsprosessen'
    ],
    correct: 1,
    explain: 'Forretningsidéen er den grunnleggende ideen bak bedriften – hva som selges, til hvem, og hvilken nytte/verdi dette skaper for kundene. Den er styrende for alle strategiske valg.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hva er et markedssegment?',
    opts: [
      'En geografisk del av landet der bedriften selger produkter',
      'En gruppe kunder med felles kjennetegn, behov eller kjøpsatferd som reagerer likt på markedstiltak',
      'En del av produktsortimentet som selges til én kundetype',
      'Et prisintervall som definerer hvem som kan kjøpe produktet'
    ],
    correct: 1,
    explain: 'Et markedssegment er en gruppe potensielle kunder med felles kjennetegn (geografi, demografi, psykografi, atferd) som reagerer relativt likt på et markedsbudskap eller -tilbud.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hvorfor er segmentering viktig i markedsføring?',
    opts: [
      'Det gjør at man kan annonsere på TV i stedet for sosiale medier',
      'Det gjør at man kan tilpasse markedsbudskapet til ulike grupper og bruke ressurser mer effektivt',
      'Det betyr at man kan unngå å lage produktvarianter',
      'Det er kun viktig for store bedrifter med mange ansatte'
    ],
    correct: 1,
    explain: 'Segmentering gjør at bedriften kan skreddersy produkter, priser, distribusjon og kommunikasjon til ulike kundegrupper – noe som gir høyere effektivitet og bedre match mellom tilbud og behov.'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hva er de fem P-ene i markedsmiksen?',
    opts: [
      'Produkt, Pris, Promotering, Prosess, Posisjonering',
      'Produkt, Pris, Distribusjon (Place), Påvirkning (Promotion) og Personale',
      'Planlegging, Produkt, Pris, PR og Personale',
      'Produkt, Profitt, Plass, Promotering og PR'
    ],
    correct: 1,
    explain: 'Markedsmiksen 5P: Produkt (hva selges), Pris (hva koster det), Distribusjon/Place (hvor og hvordan kjøper kunden), Påvirkning/Promotion (hvordan kommuniseres det) og Personale (mennesker som leverer tjenesten).'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hva innebærer "Produkt"-P-en i markedsmiksen?',
    opts: [
      'Prisen som settes på produktet',
      'Alt som tilbys til kundene: fysisk produkt, service, garantier, design, merkevare og emballasje',
      'Kanalene produktet distribueres gjennom',
      'Reklamekampanjene som markedsfører produktet'
    ],
    correct: 1,
    explain: 'Produkt-P-en encompasser alt bedriften tilbyr kunden – fysiske egenskaper, design, kvalitet, merkevare, emballasje, service, garantier og tilleggstjenester.'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hva innebærer "Distribusjon" (Place) i markedsmiksen?',
    opts: [
      'Hvilken by bedriften holder til i',
      'Alle beslutninger knyttet til hvor og hvordan produktet gjøres tilgjengelig for kunden',
      'Plasseringen av annonser og reklame',
      'Utformingen av butikklokalene'
    ],
    correct: 1,
    explain: 'Distribusjon handler om valg av salgskanaler (nettsalg, butikk, grossist, direkte salg), lagrings- og logistikkløsninger og alt som sikrer at produktet er tilgjengelig der kunden ønsker det.'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hva innebærer "Påvirkning" (Promotion) i markedsmiksen?',
    opts: [
      'Å sette ned prisen for å tiltrekke kunder',
      'Alle kommunikasjonstiltak for å informere, påvirke og bygge relasjoner med kunder: reklame, PR, sosiale medier, direktesalg',
      'Å gi provisjon til selgere',
      'Å forbedre produktets fysiske egenskaper'
    ],
    correct: 1,
    explain: 'Påvirkning (Promotion) er kommunikasjonsmiksen – alle tiltak for å informere og overtale målgruppen: reklame, PR, sosiale medier, event-markedsføring, direkte markedsføring og personlig salg.'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hvorfor er "Personale" inkludert som en P i markedsmiksen?',
    opts: [
      'Fordi det er viktig å ha nok ansatte på jobb',
      'Fordi ansatte i tjenesteytende virksomheter er en del av produktet – de skaper kundeopplevelsen',
      'Fordi lønn er en del av markedsbudsjettet',
      'Fordi rekruttering er en del av markedsstrategien'
    ],
    correct: 1,
    explain: 'Personale er spesielt viktig i tjenestesektoren der ansatte er en integrert del av det som leveres – kundebehandlernes kunnskap, holdning og service påvirker direkte kundens opplevelse og tilfredshet.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er en nisjespesialist som markedsposisjon?',
    opts: [
      'Den største aktøren i et bredt massemarked',
      'En bedrift som betjener et svært spesifikt og smalt segment bedre enn noen annen aktør',
      'En bedrift som kopierer markedslederen billig',
      'En bedrift med det laveste prisingen i hele bransjen'
    ],
    correct: 1,
    explain: 'Nisjespesialisten fokuserer på et smalt og veldefinert segment – gjerne for smal for store aktører – og betjener dette segmentet langt bedre enn noen generalist kan. Høy lojalitet og ofte god margin.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Et norsk fiskeoppdrettsselskap begynner å selge laks i det kinesiske markedet. Hvilken Ansoff-strategi er dette?',
    opts: [
      'Markedspenetrasjon',
      'Markedsutvikling',
      'Produktutvikling',
      'Diversifisering'
    ],
    correct: 1,
    explain: 'Å selge et eksisterende produkt (laks) i et nytt marked (Kina) er markedsutvikling – man ekspanderer geografisk eller til nye kundesegmenter med eksisterende produkter.'
  },
  {
    cat: 'markedsplan',
    catLabel: 'Markedsplan og mål',
    q: 'Hva kjennetegner et godt markedsmål ifølge SMART-prinsippet?',
    opts: [
      '"Vi skal bli best i klassen"',
      '"Vi skal øke markedsandelen med 5 prosentpoeng innen utgangen av inneværende kalenderår"',
      '"Vi skal vokse raskt og bli ledende i bransjen"',
      '"Vi skal tilfredsstille kundene bedre enn konkurrentene"'
    ],
    correct: 1,
    explain: 'Et SMART markedsmål er Spesifikt (5 prosentpoeng), Målbart (kan verifiseres), Akseptert, Realistisk og Tidsbestemt (innen utgangen av kalenderåret). Vage formuleringer er ikke SMART.'
  },
  {
    cat: 'konkurranse',
    catLabel: 'Konkurransestrategier',
    q: 'Hva er en "strategisk felle" man bør unngå ifølge Porter?',
    opts: [
      'Å velge differensiering i stedet for kostnadslederskap',
      'Å havne "stuck in the middle" – uten klar strategi, verken lavest pris eller tydelig differensiering',
      'Å fokusere for sterkt på ett smalt segment',
      'Å bruke for mye ressurser på markedsforskning'
    ],
    correct: 1,
    explain: 'Porter advarer mot å bli "stuck in the middle" – å prøve å gjøre alt og dermed ikke lykkes med noen av strategiene. Bedrifter bør velge én tydelig konkurransestrategi og holde seg til den.'
  },
  {
    cat: 'markedsmiks',
    catLabel: 'Markedsmiksen 5P',
    q: 'Hva påvirker valg av prisstrategi for et produkt?',
    opts: [
      'Kun produksjonskostnadene',
      'Kostnader, konkurrentenes priser, kundenes betalingsvilje, posisjonering og markedsstrategi',
      'Antall ansatte i salgsavdelingen',
      'Kun hva kundene er vant til å betale for lignende produkter'
    ],
    correct: 1,
    explain: 'Prissetting er komplekst og avhenger av mange faktorer: egne kostnader, konkurrentenes priser, kundenes betalingsvilje, ønsket posisjonering (premium vs. massemarked) og overordnet markedsstrategi.'
  },
  {
    cat: 'vekst',
    catLabel: 'Vekststrategier (Ansoff)',
    q: 'Hva er en integrasjonsstrategi, og hvilke to typer finnes?',
    opts: [
      'En strategi for å integrere digitale og fysiske salgskanaler – omni-channel og multi-channel',
      'En strategi for å vokse ved å bevege seg i verdikjeden: vertikal (opp/ned i kjeden) og horisontal (konkurrenter)',
      'En strategi for å integrere internasjonale datterselskaper i konsernet',
      'En strategi for å integrere ulike produktlinjer i ett samlet tilbud'
    ],
    correct: 1,
    explain: 'Integrasjonsstrategier handler om vekst gjennom å bevege seg i verdikjeden: vertikal integrasjon (bakover mot leverandør eller fremover mot distribusjon/kunde) og horisontal integrasjon (kjøpe opp konkurrenter).'
  },
];
