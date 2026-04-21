// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Markedsføringsledelse
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  35 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-marked',
  title: 'Markedsføring',
  subtitle: 'LØM Fagskole',
  description: '35 spørsmål om Markedsføringsledelse fra LØM-pensumet på fagskole.',
  cats: {
    grunnlag:  { label: 'Markedsgrunnlag',      color: '#ec4899' },
    miks:      { label: 'Markedsmiks & STP',     color: '#8b5cf6' },
    strategi:  { label: 'Markedsstrategi',       color: '#f59e0b' },
    analyse:   { label: 'Analyse & planlegging', color: '#10b981' },
    elbransjen:{ label: 'El-bransjen',           color: '#00a8e8' }
  }
};

const QUESTIONS = [

  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er definisjonen på et marked ifølge Kotler?',
    opts: [
      'Et fysisk sted hvor varer selges',
      'Summen av alle nåværende og potensielle kjøpere av et produkt',
      'En gruppe konkurrenter i samme bransje',
      'En digital plattform for handel'
    ],
    correct: 1,
    explain: 'Kotler definerer et marked som «summen av alle nåværende og potensielle kjøpere av et produkt». Markedet omfatter altså både dem som kjøper nå og dem som kan tenkes å kjøpe i framtiden.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er forskjellen mellom primærmarked og sekundærmarked?',
    opts: [
      'Primær er det største markedet i antall, sekundær er det minste',
      'Primærmarkedet er det markedet produktet først og fremst er ment for; sekundærmarkedet er et tilleggsmarked som også kan ha behov for produktet',
      'Primær er innenlandsk, sekundær er utenlandsk',
      'Primær er nytt salg, sekundær er bruktmarked'
    ],
    correct: 1,
    explain: 'Eksempel: En varebil som Caddy er laget primært for bedrifter (primærmarked), men selges også til privatpersoner (sekundærmarked). Begge er viktige å forstå i markedsføringen.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er markedsføring?',
    opts: [
      'Bare reklame og annonsering',
      'Alle aktivitetene bedriften utfører for å avdekke og imøtekomme markedets behov på en lønnsom måte',
      'Salg av varer til eksisterende kunder',
      'Regnskap og rapportering'
    ],
    correct: 1,
    explain: 'Markedsføring er bred: markedsundersøkelse, produktutvikling, prissetting, distribusjon, kommunikasjon og kundeoppfølging – alt for å avdekke og tilfredsstille kundens behov lønnsomt.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva er de fire P-ene i markedsmiksen?',
    opts: [
      'Produkt, Profitt, Plass, Promotering',
      'Produkt, Pris, Plass og Påvirkning',
      'Pris, Produktkvalitet, Promotering og Prosess',
      'Produkt, Person, Posisjonering og Plass'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="162" fill="#161927" rx="8"/><rect x="8" y="8" width="124" height="70" rx="6" fill="#5c7cfa" opacity="0.2"/><rect x="148" y="8" width="124" height="70" rx="6" fill="#ec4899" opacity="0.2"/><rect x="8" y="86" width="124" height="70" rx="6" fill="#10b981" opacity="0.2"/><rect x="148" y="86" width="124" height="70" rx="6" fill="#f59e0b" opacity="0.2"/><text x="70" y="38" fill="#5c7cfa" font-size="17" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Produkt</text><text x="70" y="56" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva tilbyr vi?</text><text x="210" y="38" fill="#ec4899" font-size="17" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Pris</text><text x="210" y="56" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva koster det?</text><text x="70" y="117" fill="#10b981" font-size="15" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Plass/Dist.</text><text x="70" y="134" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hvordan nå kunden?</text><text x="210" y="117" fill="#f59e0b" font-size="14" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">Påvirkning</text><text x="210" y="134" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hvordan kommunisere?</text></svg>`,
    explain: '4P = Produkt (hva tilbyr vi?), Pris (hva koster det?), Plass/Distribusjon (hvordan når vi kunden?), Påvirkning/Promosjon (hvordan kommuniserer vi?). For en elektrobedrift: Produkt = installasjonstjenester, Pris = timepris/fastpris, Plass = lokalt/regionalt, Påvirkning = referanser og nettverksmarkedsføring.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva er den femte P-en som ofte tas med for tjenestebedrifter?',
    opts: [
      'Planlegging',
      'Personell (Personale)',
      'Profitt',
      'Psykologi'
    ],
    correct: 1,
    explain: 'I tjenestemarkedsføring brukes ofte 5P: Produkt, Pris, Plass, Påvirkning og Personell. De ansatte er en del av tjenesten, derfor blir de et konkurransemiddel. Noen inkluderer også Prosess og Physical evidence (7P).'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hvorfor kalles virkemidlene i markedsmiksen «konkurransemidler»?',
    opts: [
      'Fordi de brukes i konkurranse om kundene',
      'Fordi de er laget for idrettsbedrifter',
      'Fordi de alltid koster penger',
      'Fordi de er regulert av konkurranseloven'
    ],
    correct: 0,
    explain: 'Konkurransemidlene (5P) er nettopp virkemidler bedriften bruker for å vinne i konkurransen om kundene. Riktig miks og bruk gir konkurransefortrinn.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva er STP-prosessen i markedsføring?',
    opts: [
      'Salg, Tilbud og Pris',
      'Strategi, Taktikk og Planlegging',
      'Segmentering, Targeting (målretting) og Posisjonering',
      'Salgskanal, Tilgjengelighet og Prisstrategi'
    ],
    correct: 2,
    explain: 'STP er kjernen i markedsstrategien: Segmenter markedet → Velg målsegment (Target) → Posisjoner tilbudet slik at det skiller seg ut i kundens bevissthet.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva er markedssegmentering?',
    opts: [
      'Å bygge ett produkt som passer alle',
      'Å dele totalmarkedet inn i grupper av kjøpere med like behov, ønsker eller kjennetegn',
      'Å finne konkurrentene i bransjen',
      'Å beregne markedsandel'
    ],
    correct: 1,
    explain: 'Segmentering deler markedet inn etter f.eks. demografi (alder, kjønn), geografi, livsstil, atferd eller fordeler kunden søker. Poenget er å finne grupper man kan betjene best mulig.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva beskriver AIDA-modellen?',
    opts: [
      'En regnskapsmodell for analyse av markedsinntekter',
      'Stegene i kjøpsprosessen: Attention, Interest, Desire, Action',
      'En ledelsesmodell for medarbeiderutvikling',
      'En modell for å sette riktig pris på et produkt'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><polygon points="10,10 270,10 242,50 38,50" fill="#5c7cfa" opacity="0.8"/><polygon points="38,56 242,56 214,96 66,96" fill="#00a8e8" opacity="0.8"/><polygon points="66,102 214,102 190,137 90,137" fill="#10b981" opacity="0.8"/><polygon points="90,143 190,143 172,165 108,165" fill="#f59e0b" opacity="0.8"/><text x="140" y="35" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A – Attention (oppmerksomhet)</text><text x="140" y="80" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">I – Interest (interesse)</text><text x="140" y="124" fill="white" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">D – Desire (ønske)</text><text x="140" y="158" fill="white" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A – Action</text></svg>`,
    explain: 'AIDA beskriver kommunikasjons- og kjøpsprosessen: vekke oppmerksomhet (Attention), skape interesse (Interest), bygge ønske (Desire), utløse kjøp/handling (Action). For en elektrobedrift: annonse → referanseprosjekter → pristilbud → signert kontrakt.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva menes med posisjonering i markedsføring?',
    opts: [
      'Plassering av varer i butikkhyllen',
      'Valg av hvilke distribusjonskanaler man skal bruke',
      'Å skape et bestemt bilde av produktet i kundens bevissthet, sett opp mot konkurrentene',
      'Å beregne riktig pris basert på kostnadene'
    ],
    correct: 2,
    explain: 'Posisjonering handler om å differensiere seg og eie en klar, attraktiv plass i målgruppens bevissthet. «Hva assosierer kunden med oss, og er det annerledes enn konkurrentene?»'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hvilke fire faser inngår i produktlivssyklusen?',
    opts: [
      'Produksjon, Distribusjon, Salg, Kassering',
      'Design, Lansering, Vekst, Modning',
      'Introduksjon, Vekst, Modenhet, Tilbakegang',
      'Lansering, Konkurranse, Rabatt, Avvikling'
    ],
    correct: 2,
    img: `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="162" fill="#161927" rx="8"/><line x1="22" y1="10" x2="22" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><line x1="22" y1="138" x2="268" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><text x="145" y="155" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Tid</text><path d="M22,133 C38,133 48,122 63,98 C78,73 98,38 128,26 C158,14 182,30 206,64 C224,90 240,118 268,133" fill="none" stroke="#5c7cfa" stroke-width="2.5" stroke-linecap="round"/><line x1="70" y1="14" x2="70" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="138" y1="14" x2="138" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="206" y1="14" x2="206" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><text x="46" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Intro</text><text x="104" y="12" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Vekst</text><text x="172" y="12" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Modenhet</text><text x="237" y="12" fill="#f59e0b" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Tilbakegang</text></svg>`,
    explain: 'Produktlivssyklusen: Introduksjon (lav omsetning, høye lanserings-kostnader) → Vekst (raskt stigende salg) → Modenhet (stagnasjon, hard konkurranse) → Tilbakegang (fallende salg). Gjelder også tjenester — f.eks. er tradisjonell installasjon av oljefyr i tilbakegangsfase, mens lading for elbil er i vekstfasen.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er forskjellen mellom B2B og B2C?',
    opts: [
      'B2B er norsk markedsføring, B2C er internasjonal markedsføring',
      'B2B = bedrift selger til bedrift; B2C = bedrift selger til forbruker',
      'B2B er for billige produkter, B2C er for dyre produkter',
      'B2B = netthandel, B2C = fysisk butikk'
    ],
    correct: 1,
    explain: 'B2B (Business-to-Business) og B2C (Business-to-Consumer) har svært ulik kjøpsatferd: B2B-kjøp er gjerne mer rasjonelle, langsiktige og basert på relasjoner, mens B2C-kjøp ofte er mer impulsive og følelsesdrevne. Elektroinstallasjons-bedrifter jobber primært B2B: kunder er utbyggere, eiendomsforvaltere, industri og offentlige etater. Anbud og relasjoner er de viktigste salgskanalene.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er et kjennetegn ved rasjonell kjøpsatferd?',
    opts: [
      'Kjøpet skjer spontant, drevet av følelser og inntrykk',
      'Kjøpet er planlagt og basert på systematisk vurdering av pris, kvalitet og alternativer',
      'Kjøpet skjer som følge av sosialt press fra omgangskrets',
      'Kjøpet er vanedrevet og skjer uten bevisst tanke'
    ],
    correct: 1,
    explain: 'Rasjonell kjøpsatferd innebærer grundig informasjonssøk og evaluering – typisk for dyre, viktige kjøp. Impulsatferd = kjøp uten planlegging, styrt av følelser eller situasjonen.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er en markedsplan?',
    opts: [
      'En plan for å etablere en ny butikk',
      'En oversikt over bedriftens finansielle mål og budsjetter',
      'Et styringsdokument med mål, målgrupper, strategi og tiltak for markedsarbeidet',
      'En juridisk kontrakt med reklamebyråer og leverandører'
    ],
    correct: 2,
    explain: 'Markedsplanen inneholder typisk: situasjonsanalyse (SWOT/PESTEL), markedsmål, målgruppe, posisjonering, markedsmiks (4P) og handlingsplan med budsjett og tidsplan.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen mellom en markedsplan og en forretningsplan?',
    opts: [
      'Det er ingen praktisk forskjell',
      'Markedsplanen dekker markedsaktivitetene i en periode; forretningsplanen dekker hele bedriftens utvikling og lages ofte i etableringsfasen',
      'Forretningsplanen lages månedlig, markedsplanen årlig',
      'Markedsplanen er juridisk bindende, forretningsplanen ikke'
    ],
    correct: 1,
    explain: 'Forretningsplanen gir helhetsbildet (forretningsidé, kapital, organisasjon, marked, strategi) og brukes ofte ved oppstart eller store veivalg. Markedsplanen er snevrere og rullerer, gjerne årlig.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er hensikten med en markedsundersøkelse?',
    opts: [
      'Å kontrollere at bedriften overholder markedsføringsloven',
      'Å sjekke konkurrentenes priser én gang i måneden',
      'Å samle og analysere informasjon om markedet, kundene og konkurrentene for å ta bedre beslutninger',
      'Å lage reklamemateriell til en ny produktlansering'
    ],
    correct: 2,
    explain: 'Markedsundersøkelse gir innsikt som reduserer usikkerhet. Man skiller mellom primærdata (innsamlet selv, f.eks. spørreundersøkelse) og sekundærdata (eksisterende data, f.eks. statistikk).'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen mellom primærdata og sekundærdata?',
    opts: [
      'Primærdata er gratis, sekundærdata koster penger',
      'Primærdata samles inn spesifikt for et formål (f.eks. egen spørreundersøkelse); sekundærdata finnes fra før (f.eks. SSB-statistikk)',
      'Primærdata er alltid kvalitativ, sekundærdata er alltid kvantitativ',
      'Primærdata er gamle data, sekundærdata er nye data'
    ],
    correct: 1,
    explain: 'Primærdata er «ferskvare» samlet for din undersøkelse – mer relevant, men dyrere. Sekundærdata finnes allerede (SSB, bransjerapporter, forskning) – raskere og billigere, men ikke alltid helt relevant.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva betyr huskeregelen BOMOF om hovedmarkedene?',
    opts: [
      'Bedrift, Organisasjon, Marked, Offentlig, Forbruker',
      'Bedriftsmarkedet, Offentlige marked, Mellomhandlermarkedet, Organisasjonsmarkedet, Forbrukermarkedet',
      'Bygg, Olje, Mat, Offshore, Finans',
      'Business, Online, Mobile, Offline, Field'
    ],
    correct: 1,
    explain: 'BOMOF er en huskeregel for de fem hovedmarkedene: Bedrifts-, Offentlige, Mellomhandler-, Organisasjons- og Forbrukermarkedet. Bedrifts- og mellomhandlermarkedet kalles ofte «de profesjonelle markedene».'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva kjennetegner mellomhandlermarkedet?',
    opts: [
      'Sluttbrukere som kjøper varer til eget forbruk',
      'Aktører som kjøper varer for videresalg – ikke sluttbrukere',
      'Frivillige organisasjoner',
      'Statlige etater'
    ],
    correct: 1,
    explain: 'Mellomhandlere (grossister, detaljister) kjøper for å videreselge. Deres «produksjon» er å transportere, lagre og sette sammen vareutvalg. Hører til de profesjonelle markedene.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva kjennetegner forbrukermarkedet?',
    opts: [
      'Summen av enkeltmennesker som kjøper til eget bruk, ofte drevet av følelser i kjøpsprosessen',
      'Kun bedrifter som kjøper varer til drift',
      'Kun offentlige etater',
      'Kun frivillige organisasjoner'
    ],
    correct: 0,
    explain: 'Forbrukermarkedet består av enkeltpersoner og husholdninger som kjøper til eget forbruk. Kjøpet skjer ofte alene eller med familie/venner, og er mer utsatt for følelsesmessige og sosiale påvirkninger enn B2B.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva kjennetegner en markedsorientert bedrift?',
    opts: [
      'Den fokuserer mest på å produsere billig',
      'Den finner ut hva kundene trenger og ønsker, og tilbyr løsninger basert på dette',
      'Den forsøker å selge det den allerede produserer, uansett etterspørsel',
      'Den bruker alt av ressurser på reklame'
    ],
    correct: 1,
    explain: 'Markedsorientering = utgangspunkt i kundens behov. Motsatser: produksjonsorientert (fokus på effektiv produksjon), produktorientert (fokus på kvalitet på produktet) og salgsorientert (fokus på aggressivt salg).'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er samfunnsorientert markedsføring?',
    opts: [
      'Markedsføring som kun retter seg mot offentlig sektor',
      'Markedsføring som tar hensyn til samfunnets langsiktige beste, f.eks. miljø og etikk – ikke bare bedriftens og kundens kortsiktige interesser',
      'Gratis markedsføring i lokale aviser',
      'Kun veldedige organisasjoners markedsføring'
    ],
    correct: 1,
    explain: 'Samfunnsorientert markedsføring balanserer bedriftens profitt, kundens behov og samfunnets velferd (bærekraft, etikk, miljø). Stadig viktigere i en tid med klimakrise og økt forbrukerbevissthet.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva står SMART for når man formulerer mål?',
    opts: [
      'Stor, Massiv, Ambisiøs, Reell, Tøff',
      'Spesifikk, Målbar, Akseptert, Realistisk, Tidsbestemt',
      'Salg, Markedsføring, Administrasjon, Regnskap, Teknologi',
      'Strategisk, Moderat, Aktuelt, Riktig, Trygt'
    ],
    correct: 1,
    explain: 'SMART-mål: Spesifikke (konkrete), Målbare (tellbare), Aksepterte (avtalte), Realistiske (oppnåelige) og Tidsbestemte (med frist). Gode styringsmål skal være kvantitative.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er en visjon?',
    opts: [
      'En detaljert plan for neste kvartal',
      'Et drømmesyn som sier hvor bedriften ønsker å være i framtiden, gjerne i et lengre perspektiv',
      'Bedriftens årsregnskap',
      'En konkret arbeidsoppgave'
    ],
    correct: 1,
    explain: 'Visjonen er ofte svevende og inspirerende – den peker retning langt fram. Eksempel: Posten Norges visjon «Verdens mest framtidsrettede post- og logistikkonsern». Kjerneverdier og forretningsidé er mer konkrete.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva skal en forretningsidé fokusere på?',
    opts: [
      'Kun teknologien bedriften bruker',
      'Behov, med et konkurransefortrinn som kan bevares over tid, formulert enkelt og klart',
      'Kun lønnsomhet',
      'Hva eierne selv liker å jobbe med'
    ],
    correct: 1,
    explain: 'En god forretningsidé svarer på: Hvilke behov skal vi dekke? Hvilke produkter/tjenester? Hvem er kunden? Hvor opererer vi? Hvorfor velge oss? Hvordan tjener vi penger? Skal virke som ledestjerne for alle medarbeidere.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hvilke fire vekststrategier finnes i Ansoffs matrise?',
    opts: [
      'Markedspenetrering, Markedsutvikling, Produktutvikling, Diversifisering',
      'Segmentering, Targeting, Posisjonering, Prising',
      'Lavpris, Differensiering, Fokus, Nisje',
      'Styrker, Svakheter, Muligheter, Trusler'
    ],
    correct: 0,
    explain: 'Ansoffs matrise: Markedspenetrering (eksisterende produkt/marked), Markedsutvikling (eksisterende produkt, nytt marked), Produktutvikling (nytt produkt, eksisterende marked), Diversifisering (nytt/nytt – høyest risiko).'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er Porters generiske konkurransestrategier?',
    opts: [
      '4P, 5C, 7S og STP',
      'Kostnadslederskap, Differensiering og Fokus (med kostnads- eller differensieringsvarianter)',
      'Eksport, Import, Distribusjon og Produksjon',
      'Inntekt, Kostnad, Overskudd og Margin'
    ],
    correct: 1,
    explain: 'Porter: Kostnadslederskap (være billigst i bred markedsføring), Differensiering (skille seg ut med unik verdi) og Fokus (snevert segment – enten med lave kostnader eller differensiering). Ikke bli stuck in the middle.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva kjennetegner en nisjestrategi (Kotler)?',
    opts: [
      'Man retter seg mot hele massemarkedet',
      'Man tilpasser seg spesielle, mindre segmenter og spesialiserer seg (produkt, kunde, geografi osv.)',
      'Man kopierer markedslederen direkte',
      'Man er nr. 2 i markedet og utfordrer nr. 1'
    ],
    correct: 1,
    explain: 'Nisjebedrifter overlever ved å være best for noen få. Typer: produktspesialist, kundespesialist, geografisk spesialist, servicespesialist m.fl. Gir høy lønnsomhet i små volum.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er Porters fem konkurransekrefter?',
    opts: [
      'Pris, Produkt, Plass, Påvirkning, Personell',
      'Etableringstrussel, Konkurranseintensitet, Substitutter, Kjøpermakt, Leverandørmakt',
      'Styrker, Svakheter, Muligheter, Trusler, Strategier',
      'Segmenter, Target, Posisjon, Pris, Produkt'
    ],
    correct: 1,
    explain: 'Porters 5 krefter analyserer bransjens attraktivitet: 1) trussel fra nye aktører, 2) rivalisering mellom eksisterende, 3) trussel fra substitutter, 4) kunders forhandlingsmakt, 5) leverandørers forhandlingsmakt.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva viser Porters verdikjede?',
    opts: [
      'Bare bedriftens fysiske varelevering',
      'Alle primær- og støtteaktiviteter bedriften gjør for å skape verdi – hjelper å finne konkurransefortrinn',
      'En liste over leverandører',
      'Bedriftens finansielle resultater'
    ],
    correct: 1,
    explain: 'Porters verdikjede: 5 primæraktiviteter (inngående logistikk, produksjon, utgående logistikk, markedsføring/salg, service) og 4 støtteaktiviteter (innkjøp, teknologi, HR, infrastruktur). Brukes for å finne hvor bedriften skaper mest verdi.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva står bokstavene i SOFT/SWOT-analyse for?',
    opts: [
      'Sales, Opportunities, Finance, Tactics',
      'Styrker (Strengths), Svakheter (Faults/Weaknesses), Muligheter (Opportunities), Trusler (Threats)',
      'Strategi, Organisasjon, Funksjon, Teknologi',
      'Segmenter, Oppdag, Fokuser, Test'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 182" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="182" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Internt →</text><text x="140" y="104" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Eksternt →</text><rect x="8" y="18" width="120" height="74" rx="6" fill="#10b981" opacity="0.18"/><rect x="152" y="18" width="120" height="74" rx="6" fill="#e74c3c" opacity="0.18"/><rect x="8" y="106" width="120" height="72" rx="6" fill="#5c7cfa" opacity="0.18"/><rect x="152" y="106" width="120" height="72" rx="6" fill="#f59e0b" opacity="0.18"/><text x="68" y="62" fill="#10b981" font-size="34" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">S</text><text x="212" y="62" fill="#e74c3c" font-size="34" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">W</text><text x="68" y="149" fill="#5c7cfa" font-size="34" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">O</text><text x="212" y="149" fill="#f59e0b" font-size="34" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">T</text><text x="68" y="82" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Styrker</text><text x="212" y="82" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Svakheter</text><text x="68" y="168" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Muligheter</text><text x="212" y="168" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Trusler</text></svg>`,
    explain: 'SOFT/SWOT ser på Styrker og Svakheter (internt) samt Muligheter og Trusler (eksternt). Eksempel for elektrobedrift: Styrke = sertifiserte fagarbeidere, Svakhet = liten markedsavdeling, Mulighet = elbil-ladeinstallasjoner, Trussel = prispress fra lavkostkonkurrenter.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen på interne og eksterne arbeidsbetingelser?',
    opts: [
      'Interne er alltid viktigere enn eksterne',
      'Interne er forhold bedriften kan gjøre noe med selv; eksterne er forhold bedriften må tilpasse seg (kan prøve å påvirke, men vanskelig)',
      'Interne er finansielle, eksterne er operasjonelle',
      'Interne finnes kun i store bedrifter'
    ],
    correct: 1,
    explain: 'Interne: personalet, ledelse, økonomi, konkurransemidler, teknologi – vi kan endre disse. Eksterne: marked, konkurrenter, leverandører, distributører, samfunn – disse må bedriften tilpasse seg.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hvordan beregnes markedsandel i prosent?',
    opts: [
      'Egen omsetning × totalt salg i markedet',
      '(Egen omsetning / totalt salg i markedet) × 100',
      'Totalt salg i markedet / egen omsetning',
      'Egen omsetning − totalt salg'
    ],
    correct: 1,
    explain: 'Markedsandel = (eget salg / totalt salg i markedet) × 100. Kan måles i kroner, antall enheter eller antall kunder. Eksempel: 10 955 Teslaer av 67 718 totalt personbilsalg = 16,2 %.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er et konkurransefortrinn?',
    opts: [
      'En fordel ethvert selskap har automatisk',
      'Den effekten bedriften får ved å ha og bruke en ressurs eller kompetanse som gir fordeler i konkurransen',
      'En lovpålagt rettighet',
      'En kortsiktig kampanje'
    ],
    correct: 1,
    explain: 'Konkurransefortrinn skal være varig og vanskelig å kopiere – f.eks. sterkt merkenavn, unik teknologi, stordriftsfordeler, spesialkompetanse eller eksklusive distribusjonskanaler.'
  },

  {
    cat: 'elbransjen', catLabel: 'El-bransjen',
    q: 'Hva er en anbudskonkurranse, og hvorfor er den sentral i elektrobransjen?',
    opts: [
      'En intern konkurranse mellom avdelinger om hvem som selger mest',
      'En prosess der oppdragsgiver inviterer leverandører til å levere tilbud, og velger leverandør basert på pris, kompetanse og kvalitet',
      'En messe der elektrobedrifter markedsfører seg',
      'En offentlig prisstatistikk for elektrotjenester'
    ],
    correct: 1,
    explain: 'I elektrobransjen skjer salg til store kunder (offentlig sektor, utbyggere, industri) ofte gjennom anbud. Elektrobedriften leverer et tilbud med kalkulert pris basert på mengdeuttak (material + timer). Vinner man anbudet, sikrer man oppdrag. Å kalkulere riktig er avgjørende – for lav pris gir tap, for høy pris gir tapt anbud.'
  },

  {
    cat: 'elbransjen', catLabel: 'El-bransjen',
    q: 'Hva menes med relasjonsmarkedsføring, og hvorfor er det viktig for elektrobedrifter?',
    opts: [
      'Markedsføring som kun bruker sosiale medier',
      'Å bygge og vedlikeholde langsiktige, lønnsomme relasjoner med kunder og samarbeidspartnere',
      'Å selge til lavest mulig pris for å beholde kunder',
      'Massemarkedsføring mot privatpersoner'
    ],
    correct: 1,
    explain: 'Relasjonsmarkedsføring handler om tillit og langsiktighet fremfor enkeltransaksjon. For elektrobedrifter er dette svært viktig: en fornøyd utbygger gir gjentatte oppdrag og anbefaler bedriften videre. Referanser og rykte er de sterkeste salgsinstrumentene i bransjen.'
  }
];
