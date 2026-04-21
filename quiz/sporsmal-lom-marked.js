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
      'Et fysisk, geografisk sted der varer og tjenester selges og byttes',
      'Summen av alle nåværende og potensielle kjøpere av et produkt',
      'En avgrenset gruppe av konkurrenter som opererer i samme bransje og marked',
      'En digital plattform eller nettside der handel foregår elektronisk'
    ],
    correct: 1,
    explain: 'Kotler definerer et marked som «summen av alle nåværende og potensielle kjøpere av et produkt». Markedet omfatter altså både dem som kjøper nå og dem som kan tenkes å kjøpe i framtiden.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er forskjellen mellom primærmarked og sekundærmarked?',
    opts: [
      'Primærmarked er det største markedet målt i antall kjøpere, sekundærmarked er det minste',
      'Primærmarkedet er det markedet produktet først og fremst er ment for; sekundærmarkedet er et tilleggsmarked som også kan ha behov for produktet',
      'Primærmarked er innenlandsk omsetning, sekundærmarked er eksport til utlandet',
      'Primærmarked er salg av nye produkter, sekundærmarked er handel med brukte produkter'
    ],
    correct: 1,
    explain: 'Eksempel: En varebil som Caddy er laget primært for bedrifter (primærmarked), men selges også til privatpersoner (sekundærmarked). Begge er viktige å forstå i markedsføringen.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er markedsføring?',
    opts: [
      'Bare reklame, annonsering og betalt promotering av produkter og tjenester',
      'Alle aktivitetene bedriften utfører for å avdekke og imøtekomme markedets behov på en lønnsom måte',
      'Kun salg og mersalg av varer og tjenester til eksisterende og lojale kunder',
      'Regnskap, rapportering og finansiell styring av bedriftens inntekter og kostnader'
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
      'Salg, Tilbud og Prisfastsettelse for bedriftens produkter',
      'Strategi, Taktikk og operativ Planlegging av markedsarbeidet',
      'Segmentering, Targeting (målretting) og Posisjonering',
      'Salgskanal, Tilgjengelighet og Prissettingsstrategi overfor ulike målgrupper'
    ],
    correct: 2,
    explain: 'STP er kjernen i markedsstrategien: Segmenter markedet → Velg målsegment (Target) → Posisjoner tilbudet slik at det skiller seg ut i kundens bevissthet.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva er markedssegmentering?',
    opts: [
      'Å utvikle og bygge ett standardprodukt som er ment å passe alle mulige kjøpere',
      'Å dele totalmarkedet inn i grupper av kjøpere med like behov, ønsker eller kjennetegn',
      'Å kartlegge og identifisere alle konkurrenter som opererer i samme bransje',
      'Å beregne og sammenligne markedsandeler mellom bedrifter i bransjen'
    ],
    correct: 1,
    explain: 'Segmentering deler markedet inn etter f.eks. demografi (alder, kjønn), geografi, livsstil, atferd eller fordeler kunden søker. Poenget er å finne grupper man kan betjene best mulig.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva beskriver AIDA-modellen?',
    opts: [
      'En regnskapsmodell som brukes til å analysere og kategorisere markedsinntekter over tid',
      'Stegene i kjøpsprosessen: Attention, Interest, Desire, Action',
      'En ledelsesmodell som brukes til systematisk medarbeiderutvikling og kompetansebygging',
      'En prismodell for å beregne og fastsette riktig salgspris på et gitt produkt'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><polygon points="10,10 270,10 242,50 38,50" fill="#5c7cfa" opacity="0.8"/><polygon points="38,56 242,56 214,96 66,96" fill="#00a8e8" opacity="0.8"/><polygon points="66,102 214,102 190,137 90,137" fill="#10b981" opacity="0.8"/><polygon points="90,143 190,143 172,165 108,165" fill="#f59e0b" opacity="0.8"/><text x="140" y="35" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A – Attention (oppmerksomhet)</text><text x="140" y="80" fill="white" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">I – Interest (interesse)</text><text x="140" y="124" fill="white" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">D – Desire (ønske)</text><text x="140" y="158" fill="white" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A – Action</text></svg>`,
    explain: 'AIDA beskriver kommunikasjons- og kjøpsprosessen: vekke oppmerksomhet (Attention), skape interesse (Interest), bygge ønske (Desire), utløse kjøp/handling (Action). For en elektrobedrift: annonse → referanseprosjekter → pristilbud → signert kontrakt.'
  },
  {
    cat: 'miks', catLabel: 'Markedsmiks & STP',
    q: 'Hva menes med posisjonering i markedsføring?',
    opts: [
      'Å fysisk plassere og eksponere varer optimalt i butikkhyllen for best mulig synlighet',
      'Å velge og sette opp de riktige distribusjons- og salgskanalene for produktet',
      'Å skape et bestemt bilde av produktet i kundens bevissthet, sett opp mot konkurrentene',
      'Å beregne og fastsette riktig salgspris basert på kostnader og ønsket fortjeneste'
    ],
    correct: 2,
    explain: 'Posisjonering handler om å differensiere seg og eie en klar, attraktiv plass i målgruppens bevissthet. «Hva assosierer kunden med oss, og er det annerledes enn konkurrentene?»'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hvilke fire faser inngår i produktlivssyklusen?',
    opts: [
      'Produksjon, Distribusjon, Salg og Kassering av produktet',
      'Design og utvikling, Lansering, Vekstfase og Modningsfase',
      'Introduksjon, Vekst, Modenhet, Tilbakegang',
      'Lansering i markedet, Konkurranse med rivaler, Rabattkrig og endelig Avvikling'
    ],
    correct: 2,
    img: `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="162" fill="#161927" rx="8"/><line x1="22" y1="10" x2="22" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><line x1="22" y1="138" x2="268" y2="138" stroke="#2a2f4a" stroke-width="1.5"/><text x="145" y="155" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Tid</text><path d="M22,133 C38,133 48,122 63,98 C78,73 98,38 128,26 C158,14 182,30 206,64 C224,90 240,118 268,133" fill="none" stroke="#5c7cfa" stroke-width="2.5" stroke-linecap="round"/><line x1="70" y1="14" x2="70" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="138" y1="14" x2="138" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><line x1="206" y1="14" x2="206" y2="138" stroke="#2a2f4a" stroke-width="1" stroke-dasharray="4,3"/><text x="46" y="12" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Intro</text><text x="104" y="12" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Vekst</text><text x="172" y="12" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Modenhet</text><text x="237" y="12" fill="#f59e0b" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Tilbakegang</text></svg>`,
    explain: 'Produktlivssyklusen: Introduksjon (lav omsetning, høye lanserings-kostnader) → Vekst (raskt stigende salg) → Modenhet (stagnasjon, hard konkurranse) → Tilbakegang (fallende salg). Gjelder også tjenester — f.eks. er tradisjonell installasjon av oljefyr i tilbakegangsfase, mens lading for elbil er i vekstfasen.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er forskjellen mellom B2B og B2C?',
    opts: [
      'B2B er markedsføring rettet mot norske bedrifter, B2C er internasjonal markedsføring mot konsumenter',
      'B2B = bedrift selger til bedrift; B2C = bedrift selger til forbruker',
      'B2B brukes kun for billige masseprodukte, B2C brukes for dyre og eksklusive produkter',
      'B2B foregår utelukkende via netthandel og digitale kanaler, B2C kun i fysiske butikklokaler'
    ],
    correct: 1,
    explain: 'B2B (Business-to-Business) og B2C (Business-to-Consumer) har svært ulik kjøpsatferd: B2B-kjøp er gjerne mer rasjonelle, langsiktige og basert på relasjoner, mens B2C-kjøp ofte er mer impulsive og følelsesdrevne. Elektroinstallasjons-bedrifter jobber primært B2B: kunder er utbyggere, eiendomsforvaltere, industri og offentlige etater. Anbud og relasjoner er de viktigste salgskanalene.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva er et kjennetegn ved rasjonell kjøpsatferd?',
    opts: [
      'Kjøpet skjer spontant og impulsivt, drevet av øyeblikkets følelser og inntrykk',
      'Kjøpet er planlagt og basert på systematisk vurdering av pris, kvalitet og alternativer',
      'Kjøpet skjer som et direkte resultat av sosialt press og påvirkning fra omgangskrets',
      'Kjøpet er vanedrevet og skjer automatisk uten noen form for bevisst tanke eller overveielse'
    ],
    correct: 1,
    explain: 'Rasjonell kjøpsatferd innebærer grundig informasjonssøk og evaluering – typisk for dyre, viktige kjøp. Impulsatferd = kjøp uten planlegging, styrt av følelser eller situasjonen.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er en markedsplan?',
    opts: [
      'En detaljert plan for å etablere og åpne en ny butikk eller salgspunkt',
      'En finansiell oversikt over bedriftens mål, budsjetter og resultatforventninger',
      'Et styringsdokument med mål, målgrupper, strategi og tiltak for markedsarbeidet',
      'En juridisk bindende kontrakt som inngås mellom bedriften, reklamebyråer og leverandører'
    ],
    correct: 2,
    explain: 'Markedsplanen inneholder typisk: situasjonsanalyse (SWOT/PESTEL), markedsmål, målgruppe, posisjonering, markedsmiks (4P) og handlingsplan med budsjett og tidsplan.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen mellom en markedsplan og en forretningsplan?',
    opts: [
      'Det er ingen praktisk forskjell – begge dekker nøyaktig de samme temaene og formålene',
      'Markedsplanen dekker markedsaktivitetene i en periode; forretningsplanen dekker hele bedriftens utvikling og lages ofte i etableringsfasen',
      'Forretningsplanen lages og oppdateres månedlig, mens markedsplanen alltid er et årsdokument',
      'Markedsplanen er juridisk bindende og kan brukes i rettssaker, forretningsplanen er ikke det'
    ],
    correct: 1,
    explain: 'Forretningsplanen gir helhetsbildet (forretningsidé, kapital, organisasjon, marked, strategi) og brukes ofte ved oppstart eller store veivalg. Markedsplanen er snevrere og rullerer, gjerne årlig.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er hensikten med en markedsundersøkelse?',
    opts: [
      'Å kontrollere og dokumentere at bedriften til enhver tid overholder markedsføringsloven',
      'Å overvåke og sjekke konkurrentenes priser og tilbud jevnlig, minst én gang i måneden',
      'Å samle og analysere informasjon om markedet, kundene og konkurrentene for å ta bedre beslutninger',
      'Å produsere og utarbeide reklamemateriell og kampanjemateriell til en ny produktlansering'
    ],
    correct: 2,
    explain: 'Markedsundersøkelse gir innsikt som reduserer usikkerhet. Man skiller mellom primærdata (innsamlet selv, f.eks. spørreundersøkelse) og sekundærdata (eksisterende data, f.eks. statistikk).'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen mellom primærdata og sekundærdata?',
    opts: [
      'Primærdata er alltid gratis å skaffe, mens sekundærdata alltid koster penger å kjøpe',
      'Primærdata samles inn spesifikt for et formål (f.eks. egen spørreundersøkelse); sekundærdata finnes fra før (f.eks. SSB-statistikk)',
      'Primærdata er alltid av kvalitativ natur, mens sekundærdata alltid er kvantitativ og tallfestet',
      'Primærdata er alltid gamle og utdaterte data, mens sekundærdata alltid er nye og ferske data'
    ],
    correct: 1,
    explain: 'Primærdata er «ferskvare» samlet for din undersøkelse – mer relevant, men dyrere. Sekundærdata finnes allerede (SSB, bransjerapporter, forskning) – raskere og billigere, men ikke alltid helt relevant.'
  },
  {
    cat: 'grunnlag', catLabel: 'Markedsgrunnlag',
    q: 'Hva betyr huskeregelen BOMOF om hovedmarkedene?',
    opts: [
      'Bedrift, Organisasjon, Marked, Offentlig sektor og Forbruker',
      'Bedriftsmarkedet, Offentlige marked, Mellomhandlermarkedet, Organisasjonsmarkedet, Forbrukermarkedet',
      'Bygg og anlegg, Olje og gass, Matproduksjon, Offshore og Finansnæringen',
      'Business, Online handel, Mobile tjenester, Offline salg og Field service'
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
      'Den fokuserer mest på å produsere så billig og effektivt som mulig, uansett hva kundene vil ha',
      'Den finner ut hva kundene trenger og ønsker, og tilbyr løsninger basert på dette',
      'Den forsøker aggressivt å selge det den allerede produserer, uavhengig av faktisk etterspørsel',
      'Den bruker nær sagt alle tilgjengelige ressurser og budsjetter på reklame og synlighet'
    ],
    correct: 1,
    explain: 'Markedsorientering = utgangspunkt i kundens behov. Motsatser: produksjonsorientert (fokus på effektiv produksjon), produktorientert (fokus på kvalitet på produktet) og salgsorientert (fokus på aggressivt salg).'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er samfunnsorientert markedsføring?',
    opts: [
      'Markedsføring som utelukkende retter seg mot offentlig sektor og statlige etater',
      'Markedsføring som tar hensyn til samfunnets langsiktige beste, f.eks. miljø og etikk – ikke bare bedriftens og kundens kortsiktige interesser',
      'Gratis eller svært rimelig markedsføring i lokale aviser og gratisblader',
      'Markedsføring som kun utøves av veldedige organisasjoner og ideelle stiftelser'
    ],
    correct: 1,
    explain: 'Samfunnsorientert markedsføring balanserer bedriftens profitt, kundens behov og samfunnets velferd (bærekraft, etikk, miljø). Stadig viktigere i en tid med klimakrise og økt forbrukerbevissthet.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva står SMART for når man formulerer mål?',
    opts: [
      'Stor, Massiv, Ambisiøs, Reell og Tøff – mål som strekker seg maksimalt',
      'Spesifikk, Målbar, Akseptert, Realistisk, Tidsbestemt',
      'Salg, Markedsføring, Administrasjon, Regnskap og Teknologibruk i virksomheten',
      'Strategisk, Moderat, Aktuelt, Riktig formulert og Trygt å gjennomføre'
    ],
    correct: 1,
    explain: 'SMART-mål: Spesifikke (konkrete), Målbare (tellbare), Aksepterte (avtalte), Realistiske (oppnåelige) og Tidsbestemte (med frist). Gode styringsmål skal være kvantitative.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er en visjon?',
    opts: [
      'En svært detaljert og konkret handlingsplan som styrer aktivitetene for neste kvartal',
      'Et drømmesyn som sier hvor bedriften ønsker å være i framtiden, gjerne i et lengre perspektiv',
      'Bedriftens årsregnskap med inntekter, kostnader og resultat for siste regnskapsår',
      'En konkret og avgrenset arbeidsoppgave som skal utføres innen en gitt frist'
    ],
    correct: 1,
    explain: 'Visjonen er ofte svevende og inspirerende – den peker retning langt fram. Eksempel: Posten Norges visjon «Verdens mest framtidsrettede post- og logistikkonsern». Kjerneverdier og forretningsidé er mer konkrete.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva skal en forretningsidé fokusere på?',
    opts: [
      'Utelukkende den teknologien og de systemene bedriften benytter i sin produksjon',
      'Behov, med et konkurransefortrinn som kan bevares over tid, formulert enkelt og klart',
      'Kun lønnsomhet og avkastning på investert kapital for eierne',
      'Hva de nåværende eierne og gründerne selv liker å jobbe med og har interesse for'
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
      'Pris, Produkt, Plass, Påvirkning og Personell – de fem P-ene i markedsmiksen',
      'Etableringstrussel, Konkurranseintensitet, Substitutter, Kjøpermakt, Leverandørmakt',
      'Styrker, Svakheter, Muligheter, Trusler og Strategier fra SWOT-analysen',
      'Segmentering, Targeting, Posisjonering, Prissetting og Produktutvikling'
    ],
    correct: 1,
    explain: 'Porters 5 krefter analyserer bransjens attraktivitet: 1) trussel fra nye aktører, 2) rivalisering mellom eksisterende, 3) trussel fra substitutter, 4) kunders forhandlingsmakt, 5) leverandørers forhandlingsmakt.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva viser Porters verdikjede?',
    opts: [
      'Bare bedriftens fysiske varelevering fra lager til sluttkunde',
      'Alle primær- og støtteaktiviteter bedriften gjør for å skape verdi – hjelper å finne konkurransefortrinn',
      'En komplett liste over alle bedriftens godkjente leverandører og innkjøpskilder',
      'Bedriftens finansielle resultater, nøkkeltall og lønnsomhetsutvikling over tid'
    ],
    correct: 1,
    explain: 'Porters verdikjede: 5 primæraktiviteter (inngående logistikk, produksjon, utgående logistikk, markedsføring/salg, service) og 4 støtteaktiviteter (innkjøp, teknologi, HR, infrastruktur). Brukes for å finne hvor bedriften skaper mest verdi.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva står bokstavene i SOFT/SWOT-analyse for?',
    opts: [
      'Sales performance, Opportunities pipeline, Finance review og Tactical planning',
      'Styrker (Strengths), Svakheter (Faults/Weaknesses), Muligheter (Opportunities), Trusler (Threats)',
      'Strategi, Organisasjonsstruktur, Funksjonell inndeling og Teknologibruk',
      'Segmenter markedet, Oppdag behov, Fokuser innsatsen og Test tilnærmingen'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 182" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="182" fill="#161927" rx="8"/><text x="140" y="14" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Internt →</text><text x="140" y="104" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">← Eksternt →</text><rect x="8" y="18" width="120" height="74" rx="6" fill="#10b981" opacity="0.18"/><rect x="152" y="18" width="120" height="74" rx="6" fill="#e74c3c" opacity="0.18"/><rect x="8" y="106" width="120" height="72" rx="6" fill="#5c7cfa" opacity="0.18"/><rect x="152" y="106" width="120" height="72" rx="6" fill="#f59e0b" opacity="0.18"/><text x="68" y="72" fill="#10b981" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Positivt / intern</text><text x="212" y="72" fill="#e74c3c" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Negativt / intern</text><text x="68" y="148" fill="#5c7cfa" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Positivt / ekstern</text><text x="212" y="148" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Negativt / ekstern</text><text x="140" y="175" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">2×2-matrise – hva heter de fire feltene?</text></svg>`,
    explain: 'SOFT/SWOT ser på Styrker og Svakheter (internt) samt Muligheter og Trusler (eksternt). Eksempel for elektrobedrift: Styrke = sertifiserte fagarbeidere, Svakhet = liten markedsavdeling, Mulighet = elbil-ladeinstallasjoner, Trussel = prispress fra lavkostkonkurrenter.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hva er forskjellen på interne og eksterne arbeidsbetingelser?',
    opts: [
      'Interne arbeidsbetingelser er alltid viktigere og mer avgjørende enn de eksterne',
      'Interne er forhold bedriften kan gjøre noe med selv; eksterne er forhold bedriften må tilpasse seg (kan prøve å påvirke, men vanskelig)',
      'Interne betingelser er alltid finansielle og tallbaserte, eksterne er alltid operasjonelle og praktiske',
      'Interne arbeidsbetingelser eksisterer og er relevante kun i store og komplekse bedrifter'
    ],
    correct: 1,
    explain: 'Interne: personalet, ledelse, økonomi, konkurransemidler, teknologi – vi kan endre disse. Eksterne: marked, konkurrenter, leverandører, distributører, samfunn – disse må bedriften tilpasse seg.'
  },
  {
    cat: 'analyse', catLabel: 'Analyse & planlegging',
    q: 'Hvordan beregnes markedsandel i prosent?',
    opts: [
      'Egen omsetning multiplisert med totalt salg i markedet i perioden',
      '(Egen omsetning / totalt salg i markedet) × 100',
      'Totalt salg i hele markedet dividert på bedriftens egen omsetning',
      'Bedriftens egen omsetning trukket fra det totale salget i markedet'
    ],
    correct: 1,
    explain: 'Markedsandel = (eget salg / totalt salg i markedet) × 100. Kan måles i kroner, antall enheter eller antall kunder. Eksempel: 10 955 Teslaer av 67 718 totalt personbilsalg = 16,2 %.'
  },
  {
    cat: 'strategi', catLabel: 'Markedsstrategi',
    q: 'Hva er et konkurransefortrinn?',
    opts: [
      'En strategisk fordel ethvert selskap automatisk innehar i sitt marked',
      'Den effekten bedriften får ved å ha og bruke en ressurs eller kompetanse som gir fordeler i konkurransen',
      'En lovpålagt rettighet som myndighetene tildeler til spesifikke virksomheter',
      'En kortsiktig reklamekampanje som midlertidig øker salget i en begrenset periode'
    ],
    correct: 1,
    explain: 'Konkurransefortrinn skal være varig og vanskelig å kopiere – f.eks. sterkt merkenavn, unik teknologi, stordriftsfordeler, spesialkompetanse eller eksklusive distribusjonskanaler.'
  },

  {
    cat: 'elbransjen', catLabel: 'El-bransjen',
    q: 'Hva er en anbudskonkurranse, og hvorfor er den sentral i elektrobransjen?',
    opts: [
      'En intern konkurranse mellom avdelinger eller montørlag om hvem som selger mest i en periode',
      'En prosess der oppdragsgiver inviterer leverandører til å levere tilbud, og velger leverandør basert på pris, kompetanse og kvalitet',
      'En fagmesse eller bransjemesse der elektrobedrifter markedsfører og viser frem sine tjenester',
      'En offentlig og offisiell prisstatistikk for elektrotjenester utgitt av bransjeorganisasjoner'
    ],
    correct: 1,
    explain: 'I elektrobransjen skjer salg til store kunder (offentlig sektor, utbyggere, industri) ofte gjennom anbud. Elektrobedriften leverer et tilbud med kalkulert pris basert på mengdeuttak (material + timer). Vinner man anbudet, sikrer man oppdrag. Å kalkulere riktig er avgjørende – for lav pris gir tap, for høy pris gir tapt anbud.'
  },

  {
    cat: 'elbransjen', catLabel: 'El-bransjen',
    q: 'Hva menes med relasjonsmarkedsføring, og hvorfor er det viktig for elektrobedrifter?',
    opts: [
      'Markedsføring som utelukkende gjennomføres via sosiale medier og digitale plattformer',
      'Å bygge og vedlikeholde langsiktige, lønnsomme relasjoner med kunder og samarbeidspartnere',
      'Å alltid selge til lavest mulig pris for å sikre kundelojalitet og hindre at kunder går til konkurrenter',
      'Anonym massemarkedsføring rettet mot alle privatpersoner uten segmentering eller personalisering'
    ],
    correct: 1,
    explain: 'Relasjonsmarkedsføring handler om tillit og langsiktighet fremfor enkeltransaksjon. For elektrobedrifter er dette svært viktig: en fornøyd utbygger gir gjentatte oppdrag og anbefaler bedriften videre. Referanser og rykte er de sterkeste salgsinstrumentene i bransjen.'
  }
];
