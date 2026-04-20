// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//
//  Kategorier:
//    ledelse   = Ledelse & Organisasjon   (farge: #f59e0b)
//    marked    = Markedsføringsledelse     (farge: #ec4899)
//    regnskap  = Regnskapsanalyse          (farge: #00a8e8)
//    okonomi   = Økonomistyring            (farge: #10b981)
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
  id: 'lom',
  title: 'LØM',
  subtitle: 'Fagskole',
  description: '36 spørsmål som dekker hele LØM-pensumet på fagskole.',
  cats: {
    ledelse:  { label: 'Ledelse & Organisasjon', color: '#f59e0b' },
    marked:   { label: 'Markedsføringsledelse',  color: '#ec4899' },
    regnskap: { label: 'Regnskapsanalyse',        color: '#00a8e8' },
    okonomi:  { label: 'Økonomistyring',          color: '#10b981' }
  }
};

const QUESTIONS = [

  // ── LEDELSE & ORGANISASJON  (12 spørsmål) ──────────────────────

  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er det øverste behovet i Maslows behovspyramide?',
    opts: ['Sikkerhetsbehov', 'Anerkjennelse og status', 'Selvrealisering', 'Sosiale behov'],
    correct: 2,
    explain: 'Maslows pyramide (nedenfra): Fysiologiske behov → Sikkerhetsbehov → Sosiale behov → Anerkjennelse → Selvrealisering. Man må dekke lavere nivåer før høyere nivåer blir motiverende.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er hygienefaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Faktorer som skaper sterk motivasjon og trivsel',
      'Faktorer som hindrer mistrivsel, men ikke skaper motivasjon i seg selv',
      'Faktorer knyttet til fysisk renshold på arbeidsplassen',
      'Faktorer som øker bedriftens lønnsomhet direkte'
    ],
    correct: 1,
    explain: 'Hygienefaktorer (lønn, arbeidsforhold, ledelse, trygghet) forhindrer mistrivsel hvis de er til stede – men de skaper ikke motivasjon alene. Motivasjonsfaktorer gjør det.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er motivasjonsfaktorer i Herzbergs to-faktorteori?',
    opts: [
      'Lønn, arbeidsforhold og kollegaer',
      'Trygghet, permisjonsrettigheter og pensjonsordning',
      'Ansvar, anerkjennelse, personlig vekst og meningsfullt arbeid',
      'Arbeidskontrakt, arbeidstid og pauser'
    ],
    correct: 2,
    explain: 'Motivasjonsfaktorer er knyttet til selve arbeidsinnholdet: ansvar, anerkjennelse, læring og mestring. Disse skaper reell trivsel og motivasjon – i motsetning til hygienefaktorer.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner Teori X i McGregors X-Y-teori?',
    opts: [
      'Ansatte er selvmotiverte og ønsker ansvar',
      'Ansatte er kreative og trenger autonomi for å blomstre',
      'Ansatte er late, unngår ansvar og må kontrolleres nøye',
      'Ansatte motiveres primært av sosiale relasjoner på jobben'
    ],
    correct: 2,
    explain: 'Teori X antar at mennesker er grunnleggende late og unngår ansvar – ledelsen må overvåke og kontrollere. Teori Y er det motsatte: ansatte er indre motiverte og søker ansvar.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er en linjestabsorganisasjon?',
    opts: [
      'En flat organisasjon uten noen formelle ledernivåer',
      'En organisasjon der alle ansatte er likestilte og tar beslutninger i fellesskap',
      'En organisasjon der linjeledelsen suppleres av stabsfunksjoner med rådgivende rolle',
      'En organisasjon som kun finnes i industribedrifter'
    ],
    correct: 2,
    explain: 'Linjestabsorganisasjonen kombinerer linjestrukturen (myndighet går nedover) med stabsenheter (HR, økonomi, IT) som gir faglige råd uten formell beslutningsmyndighet.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er forskjellen mellom formell og uformell organisasjon?',
    opts: [
      'Formell = stor bedrift, uformell = liten bedrift',
      'Formell = nedskrevne strukturer og roller; uformell = nettverk og relasjoner som oppstår spontant',
      'Formell = privat sektor, uformell = offentlig sektor',
      'Formell = faste ansatte, uformell = deltidsansatte'
    ],
    correct: 1,
    explain: 'Den formelle organisasjonen er det offisielle organisasjonskartet med roller og myndighetslinjer. Den uformelle oppstår naturlig gjennom vennskap, tillit og kollegiale grupperinger.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva kjennetegner en demokratisk lederstil?',
    opts: [
      'Lederen tar alle beslutninger alene og informerer etterpå',
      'Lederen delegerer alt uten å følge opp',
      'Lederen involverer de ansatte i beslutningsprosessene',
      'Lederen unngår konflikter ved å la alle gjøre som de vil'
    ],
    correct: 2,
    explain: 'Demokratisk (deltakende) lederstil = involvering og medbestemmelse. Autoritær = lederen bestemmer selv. La-det-skure (laissez-faire) = nesten ingen styring fra lederens side.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er kjernen i Hersey og Blanchards situasjonsledelse?',
    opts: [
      'En god leder bruker alltid samme lederstil overfor alle',
      'Lederstilen bør tilpasses medarbeiderens kompetanse og motivasjonsnivå',
      'Den beste lederen er alltid den som er mest autoritær',
      'Situasjonsledelse handler kun om å håndtere kriser'
    ],
    correct: 1,
    explain: 'Situasjonsledelse sier at lederen bør tilpasse atferden til medarbeiderens «modenhet» – kombinasjonen av kompetanse og motivasjon. En uerfaren og usikker medarbeider trenger mer instruksjon enn en erfaren og motivert.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva menes med organisasjonskultur?',
    opts: [
      'Bedriftens offisielle regler, rutiner og prosedyrer',
      'Antall ansatte og avdelingsinndeling i organisasjonskartet',
      'De felles verdier, normer og antakelser som preger atferden i organisasjonen',
      'Bedriftens markedsposisjon og omdømme utad'
    ],
    correct: 2,
    explain: 'Organisasjonskultur er «slik gjør vi det her» – de uskrevne reglene og verdiene som påvirker beslutninger og atferd. En sterk, positiv kultur kan være et viktig konkurransefortrinn.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er kommunikasjonsstøy?',
    opts: [
      'Høy musikk eller lydforstyrrelser på arbeidsplassen',
      'En konflikt mellom to ansatte som påvirker teamet',
      'Alt som forstyrrer eller forvrenger budskapet mellom sender og mottaker',
      'Manglende motivasjon til å kommunisere'
    ],
    correct: 2,
    explain: 'Støy i kommunikasjonsmodellen er alt som hindrer budskapet i å nå frem uforvrengt: fysisk støy, språkbarrierer, kulturelle misforståelser, stress, forutinntatthet osv.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva regulerer Arbeidsmiljøloven (AML)?',
    opts: [
      'Kun regler for oppsigelse og permisjon',
      'Kun regler for lønn og feriepenger',
      'Krav til arbeidsmiljø, arbeidstid, HMS og rettigheter for arbeidsgiver og arbeidstaker',
      'Kun regler for lærlinger og nyansatte'
    ],
    correct: 2,
    explain: 'AML setter rammer for fullt forsvarlig arbeidsmiljø: fysisk og psykososialt miljø, arbeidstid, medbestemmelse, HMS-krav, vern mot diskriminering og regler om oppsigelse.'
  },
  {
    cat: 'ledelse', catLabel: 'Ledelse & Organisasjon',
    q: 'Hva er hovedprinsippet bak LEAN-filosofien?',
    opts: [
      'Å øke antall ansatte slik at mer arbeid kan gjøres parallelt',
      'Å eliminere alle former for sløsing og skape mer verdi med færre ressurser',
      'Å outsource alle ikke-kjerneaktiviteter til underleverandører',
      'Å maksimere lagerbeholdning for å sikre jevn produksjon'
    ],
    correct: 1,
    explain: 'LEAN (opprinnelig Toyota Production System) handler om å identifisere og fjerne sløsing (muda): ventetid, overproduksjon, unødvendig transport, feil, overflødig lager m.m.'
  },

  // ── MARKEDSFØRINGSLEDELSE  (9 spørsmål) ────────────────────────

  {
    cat: 'marked', catLabel: 'Markedsføringsledelse',
    q: 'Hva er de fire P-ene i markedsmiksen?',
    opts: [
      'Produkt, Profitt, Plass, Promotering',
      'Produkt, Pris, Plass og Påvirkning',
      'Pris, Produktkvalitet, Promotering og Prosess',
      'Produkt, Person, Posisjonering og Plass'
    ],
    correct: 1,
    explain: '4P = Produkt (hva tilbyr vi?), Pris (hva koster det?), Plass/Distribusjon (hvordan når vi kunden?), Påvirkning/Promosjon (hvordan kommuniserer vi?). Disse fire virkemidlene styrer markedstilnærmingen.'
  },
  {
    cat: 'marked', catLabel: 'Markedsføringsledelse',
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
    cat: 'marked', catLabel: 'Markedsføringsledelse',
    q: 'Hva beskriver AIDA-modellen?',
    opts: [
      'En regnskapsmodell for analyse av markedsinntekter',
      'Stegene i kjøpsprosessen: Attention, Interest, Desire, Action',
      'En ledelsesmodell for medarbeiderutvikling',
      'En modell for å sette riktig pris på et produkt'
    ],
    correct: 1,
    explain: 'AIDA beskriver kommunikasjons- og kjøpsprosessen: vekke oppmerksomhet (Attention), skape interesse (Interest), bygge ønske (Desire), utløse kjøp/handling (Action).'
  },
  {
    cat: 'marked', catLabel: 'Markedsføringsledelse',
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
    cat: 'marked', catLabel: 'Markedsføringsledelse',
    q: 'Hvilke fire faser inngår i produktlivssyklusen?',
    opts: [
      'Produksjon, Distribusjon, Salg, Kassering',
      'Design, Lansering, Vekst, Modning',
      'Introduksjon, Vekst, Modenhet, Tilbakegang',
      'Lansering, Konkurranse, Rabatt, Avvikling'
    ],
    correct: 2,
    explain: 'Produktlivssyklusen: Introduksjon (lav omsetning, høye kostnader) → Vekst (raskt stigende salg) → Modenhet (stagnasjon, hard konkurranse) → Tilbakegang (fallende salg).'
  },
  {
    cat: 'marked', catLabel: 'Markedsføringsledelse',
    q: 'Hva er forskjellen mellom B2B og B2C?',
    opts: [
      'B2B er norsk markedsføring, B2C er internasjonal markedsføring',
      'B2B = bedrift selger til bedrift; B2C = bedrift selger til forbruker',
      'B2B er for billige produkter, B2C er for dyre produkter',
      'B2B = netthandel, B2C = fysisk butikk'
    ],
    correct: 1,
    explain: 'B2B (Business-to-Business) og B2C (Business-to-Consumer) har svært ulik kjøpsatferd: B2B-kjøp er gjerne mer rasjonelle, langsiktige og basert på relasjoner, mens B2C-kjøp ofte er mer impulsive og følelsesdrevne.'
  },
  {
    cat: 'marked', catLabel: 'Markedsføringsledelse',
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
    cat: 'marked', catLabel: 'Markedsføringsledelse',
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
    cat: 'marked', catLabel: 'Markedsføringsledelse',
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

  // ── REGNSKAPSANALYSE  (8 spørsmål) ────────────────────────────

  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formelen for Resultatgrad?',
    opts: [
      'Omsetning / Totalkapital × 100',
      'Ordinært resultat / Driftsinntekter × 100',
      'Egenkapital / Totalkapital × 100',
      'Driftsresultat / Varekostnad × 100'
    ],
    correct: 1,
    explain: 'Resultatgrad = (Ordinært resultat / Driftsinntekter) × 100. Den viser hvor stor prosentandel av omsetningen som er igjen som overskudd etter alle kostnader.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formelen for Likviditetsgrad 1, og hva er kravet for god likviditet?',
    opts: [
      'Omløpsmidler / Langsiktig gjeld – kravet er over 1',
      'Totalkapital / Kortsiktig gjeld – kravet er over 1,5',
      'Omløpsmidler / Kortsiktig gjeld – kravet er over 2',
      '(Omløpsmidler − Varelager) / Kortsiktig gjeld – kravet er over 1'
    ],
    correct: 2,
    explain: 'L1 = Omløpsmidler / Kortsiktig gjeld. Kravet er over 2 (men noe lavere kan godtas). Viser om bedriften har nok kortsiktige eiendeler til å betale sin kortsiktige gjeld.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formelen for Likviditetsgrad 2, og hvorfor skiller den seg fra Likviditetsgrad 1?',
    opts: [
      'Omløpsmidler / Kortsiktig gjeld – ingen forskjell fra L1',
      '(Omløpsmidler + Varelager) / Kortsiktig gjeld – inkluderer mer',
      '(Omløpsmidler − Varelager) / Kortsiktig gjeld – ekskluderer varelager siden det ikke alltid er lett å gjøre om til kontanter',
      'Egenkapital / Kortsiktig gjeld – viser soliditet'
    ],
    correct: 2,
    explain: 'L2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld. Kravet er over 1. Varelager trekkes fra fordi det kan ta tid å selge – L2 gir et mer konservativt bilde av betalingsevnen.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formelen for Egenkapitalandel, og hva viser den?',
    opts: [
      'Egenkapital / Omsetning × 100 – viser lønnsomhet',
      'Gjeld / Totalkapital × 100 – viser gjeldsbelastning',
      'Egenkapital / Totalkapital × 100 – viser soliditet',
      'Egenkapital / Langsiktig gjeld × 100 – viser finansieringsstruktur'
    ],
    correct: 2,
    explain: 'Egenkapitalandel = (Egenkapital / Totalkapital) × 100. Jo høyere andel, desto mer solid er bedriften – den tåler mer tap uten å gå konkurs.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva måler Totalkapitalrentabilitet (TKR)?',
    opts: [
      'Avkastningen eierne får på investert egenkapital',
      'Bedriftens evne til å betale kortsiktig gjeld',
      'Avkastningen på all kapital i bedriften, uavhengig av finansieringsform',
      'Forholdet mellom total gjeld og omsetning'
    ],
    correct: 2,
    explain: 'TKR = (Ordinært resultat + Finanskostnader) / Gjennomsnittlig totalkapital × 100. Måler hvor effektivt bedriften bruker all kapital (egenkapital + gjeld) til å skape avkastning.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formelen for Gjeldsgrad 1, og hva er anbefalt nivå for norske bedrifter?',
    opts: [
      'Langsiktig gjeld / Egenkapital – anbefalt under 1',
      'Total gjeld / Egenkapital – anbefalt mellom 1 og 2',
      'Kortsiktig gjeld / Totalkapital – anbefalt under 0,5',
      'Totalkapital / Egenkapital – anbefalt under 3'
    ],
    correct: 1,
    explain: 'Gjeldsgrad 1 = Total gjeld / Egenkapital. Et nivå mellom 1 og 2 regnes som akseptabelt for norske bedrifter – over 2 indikerer høy gjeldsbelastning og økt risiko.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva viser Egenkapitalrentabilitet (EKR)?',
    opts: [
      'Andelen egenkapital av totalkapitalen (soliditet)',
      'Avkastningen eierne får på investert egenkapital',
      'Bedriftens evne til å betale kortsiktig gjeld',
      'Forholdet mellom varekostnad og omsetning'
    ],
    correct: 1,
    explain: 'EKR = Ordinært resultat / Gjennomsnittlig egenkapital × 100. Viser avkastningen til eierne. En lav EKR betyr at eierne får dårlig betalt for kapitalen de har skutt inn.'
  },
  {
    cat: 'regnskap', catLabel: 'Regnskapsanalyse',
    q: 'Hva er formålet med regnskapsanalyse?',
    opts: [
      'Å registrere alle bilag og bokføre transaksjoner',
      'Å beregne skatt for skattemyndighetene',
      'Å tolke regnskapstall gjennom nøkkeltall for å vurdere bedriftens lønnsomhet, likviditet og soliditet',
      'Å lage neste års budsjett automatisk'
    ],
    correct: 2,
    explain: 'Regnskapsanalyse bruker nøkkeltall (resultatgrad, TKR, likviditetsgrader, egenkapitalandel osv.) til å vurdere bedriftens finansielle helse og identifisere forbedringsområder.'
  },

  // ── ØKONOMISTYRING  (7 spørsmål) ──────────────────────────────

  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er Dekningsbidrag (DB)?',
    opts: [
      'Totale salgsinntekter minus alle kostnader (overskudd)',
      'Salgsinntekter minus variable kostnader',
      'Salgsinntekter minus faste kostnader',
      'Totalkapital minus egenkapital'
    ],
    correct: 1,
    explain: 'DB = Salgsinntekter − Variable kostnader. Dekningsbidraget viser hvor mye som er igjen til å dekke faste kostnader og eventuelt gi overskudd etter at variable kostnader er betalt.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er nullpunktsomsetning (break-even)?',
    opts: [
      'Omsetningen der bedriften begynner å tjene mye penger',
      'Det salgsnivået der de variable kostnadene er dekket',
      'Det salgsnivået der bedriften verken har overskudd eller underskudd – totale inntekter = totale kostnader',
      'Den laveste salgsprisen bedriften kan sette uten tap'
    ],
    correct: 2,
    explain: 'Under nullpunktet = tap. Over nullpunktet = overskudd. Formelen er: Nullpunktsomsetning = Faste kostnader / Dekningsgrad. Jo lavere dekningsgrad, jo høyere omsetning trengs for å nå nullpunktet.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er formelen for Dekningsgrad (DG)?',
    opts: [
      'Faste kostnader / Variable kostnader × 100',
      'Overskudd / Totalkapital × 100',
      'Dekningsbidrag / Salgspris × 100',
      'Variable kostnader / Salgspris × 100'
    ],
    correct: 2,
    explain: 'DG = (DB / Salgspris) × 100. Viser hvor stor prosentandel av salgsprisen som bidrar til å dekke faste kostnader og overskudd. Brukes bl.a. til å beregne nullpunktsomsetning.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er selvkostmetoden (selvkostkalkylen)?',
    opts: [
      'En kalkylemetode der kun variable kostnader knyttes til produktet',
      'En metode for å beregne dekningsbidraget per produkt',
      'En kalkylemetode der alle kostnader (faste og variable) fordeles på produktet for å finne totalkostnad per enhet',
      'En metode for å sette pris basert på hva markedet er villig til å betale'
    ],
    correct: 2,
    explain: 'Selvkostkalkylen: direkte materialkostnader + direkte lønnskostnader + indirekte kostnader (tillegg for OH og admin) = Selvkost. Prisen settes over selvkost for å sikre fortjeneste.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er forskjellen mellom bidragsmetoden og selvkostmetoden?',
    opts: [
      'Bidragsmetoden brukes kun i produksjonsbedrifter, selvkostmetoden kun i handel',
      'Bidragsmetoden henføres kun variable kostnader til produktet; selvkostmetoden fordeler alle kostnader',
      'Det er ingen forskjell – de gir samme resultat',
      'Bidragsmetoden er for lang sikt, selvkostmetoden for kort sikt'
    ],
    correct: 1,
    explain: 'Bidragsmetoden: Salgspris − Variable kostnader = DB (faste kostnader holdes utenfor). Selvkostmetoden: Alle kostnader inkluderes for å finne full kostpris. Begge er viktige verktøy i prissetting og lønnsomhetsanalyse.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er forskjellen mellom et resultatbudsjett og et likviditetsbudsjett?',
    opts: [
      'Resultatbudsjett er for store bedrifter; likviditetsbudsjett er for små bedrifter',
      'Resultatbudsjett viser forventede inntekter og kostnader (periodisert); likviditetsbudsjett viser forventede inn- og utbetalinger (kontantstrøm)',
      'Det er ingen praktisk forskjell – de brukes om hverandre',
      'Resultatbudsjett er et historisk dokument; likviditetsbudsjett er fremoverskuende'
    ],
    correct: 1,
    explain: 'Resultatbudsjettet = lønnsomhetsplanlegging (periodiserte inntekter/kostnader). Likviditetsbudsjettet = betalingsevneplanlegging (faktiske inn- og utbetalinger). En lønnsom bedrift kan likevel ha likviditetsproblemer hvis betalingene er feil timet.'
  },
  {
    cat: 'okonomi', catLabel: 'Økonomistyring',
    q: 'Hva er bruttofortjenesteprosent (BFP), og hva brukes den til?',
    opts: [
      'Varekostnad / Salgsinntekter × 100 – viser kostnadsnivå',
      '(Salgsinntekter − Varekostnad) / Salgsinntekter × 100 – viser lønnsomheten på varesalg',
      'Totalkapital / Egenkapital × 100 – viser gjeldsgrad',
      'Overskudd / Salgsinntekter × 100 – viser nettofortjeneste'
    ],
    correct: 1,
    explain: 'BFP = Bruttofortjeneste / Salgsinntekter × 100. Brukes mye i varehandel for å vurdere prissetting og innkjøp. Lav BFP kan tyde på feil prissetting eller høye varekostnader.'
  }
];
