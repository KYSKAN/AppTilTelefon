const QUIZ_META = {
  id: 'lom-ool-motivasjon',
  title: 'Motivasjon',
  subtitle: 'Organisasjon og ledelse – Kap. 4',
  description: '30 spørsmål om Maslow, Herzberg, McGregor, Thorsrud, motivasjonstyper, SMART-mål og kompetansemobilisering.',
  cats: {
    maslow:     { label: 'Maslows behovspyramide',   color: '#8b5cf6' },
    herzberg:   { label: 'Herzbergs to-faktorteori', color: '#3b82f6' },
    mcgregor:   { label: 'Teori X og Y / Thorsrud',  color: '#10b981' },
    motivtyper: { label: 'Motivasjonstyper',          color: '#f59e0b' },
    maal:       { label: 'Mål og kompetanse',         color: '#ef4444' },
  }
};

const QUESTIONS = [
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Hva er kjernen i Maslows behovsteori?',
    opts: [
      'Alle behov er like viktige og må dekkes samtidig',
      'Mennesker motiveres av behov ordnet i et hierarki fra grunnleggende til høyere',
      'Penger er den viktigste motivasjonsfaktoren',
      'Sosiale behov er viktigere enn fysiologiske'
    ],
    correct: 1,
    explain: 'Maslow hevder at behov er hierarkisk ordnet – lavere behov (fysiologiske, sikkerhet) må i stor grad tilfredsstilles før høyere behov (sosiale, anerkjennelse, selvrealisering) aktiveres som motivatorer.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Hvilken rekkefølge er riktig fra bunn til topp i Maslows behovspyramide?',
    opts: [
      'Sikkerhet → Fysiologiske → Sosiale → Anerkjennelse → Selvrealisering',
      'Fysiologiske → Sikkerhet → Sosiale → Anerkjennelse → Selvrealisering',
      'Sosiale → Fysiologiske → Sikkerhet → Selvrealisering → Anerkjennelse',
      'Fysiologiske → Sosiale → Sikkerhet → Selvrealisering → Anerkjennelse'
    ],
    correct: 1,
    explain: 'Maslows pyramide: fysiologiske behov (mat, søvn) → sikkerhet → sosiale behov → anerkjennelse → selvrealisering øverst.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Hva representerer toppen av Maslows behovspyramide?',
    opts: [
      'Anerkjennelse og status',
      'Trygghet og forutsigbarhet',
      'Selvrealisering – å utnytte sitt fulle potensial',
      'Sosial tilhørighet og vennskap'
    ],
    correct: 2,
    explain: 'Selvrealisering er det høyeste behovet – ønsket om å vokse, lære og realisere sine evner og sitt potensial fullt ut.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Hva kjennetegner fysiologiske behov i Maslows pyramide?',
    opts: [
      'Behov for ros og anerkjennelse fra andre',
      'Grunnleggende behov som mat, vann, søvn og husly',
      'Behov for venner og tilhørighet',
      'Behov for personlig vekst og utvikling'
    ],
    correct: 1,
    explain: 'Fysiologiske behov er de mest grunnleggende overlevelsesbehovene: mat, vann, søvn, varme og husly. Disse må dekkes først.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Fast ansettelsesforhold og jobbsikkerhet dekker primært hvilket nivå i Maslows pyramide?',
    opts: [
      'Fysiologiske behov',
      'Sosiale behov',
      'Sikkerhetsbehov',
      'Anerkjennelsesbehov'
    ],
    correct: 2,
    explain: 'Fast ansettelse, trygg arbeidsplass og forutsigbar inntekt dekker sikkerhetsbehov – det andre nivået i pyramiden.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Et godt sosialt arbeidsmiljø med sterkt samhold dekker primært hvilket nivå?',
    opts: [
      'Fysiologiske behov',
      'Sikkerhetsbehov',
      'Sosiale behov',
      'Selvrealisering'
    ],
    correct: 2,
    explain: 'Sosiale behov (tredje nivå) handler om tilhørighet, vennskap og sosial kontakt – noe et godt arbeidsmiljø bidrar til.'
  },
  {
    cat: 'maslow',
    catLabel: 'Maslows behovspyramide',
    q: 'Hva kjennetegner anerkjennelsesbehov i Maslows pyramide?',
    opts: [
      'Behovet for mat og søvn',
      'Behovet for vennskap og tilhørighet',
      'Behovet for status, respekt, prestisje og selvtillit',
      'Behovet for trygghet og forutsigbarhet'
    ],
    correct: 2,
    explain: 'Anerkjennelsesbehov (fjerde nivå) handler om ønsket om status, respekt fra andre, anerkjennelse for prestasjoner og selvtillit.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Hva skiller motivasjonsfaktorer fra hygienefaktorer i Herzbergs teori?',
    opts: [
      'Motivasjonsfaktorer skaper trivsel og motivasjon; hygienefaktorer fjerner mistrivsel men skaper ikke motivasjon',
      'Hygienefaktorer øker motivasjonen; motivasjonsfaktorer fjerner bare mistrivsel',
      'Begge typene skaper motivasjon, men på ulike måter',
      'Motivasjonsfaktorer handler om lønn; hygienefaktorer handler om anerkjennelse'
    ],
    correct: 0,
    explain: 'Herzberg fant at motivasjonsfaktorer (ansvar, anerkjennelse, vekst, mestring) øker motivasjonen. Hygienefaktorer (lønn, arbeidsforhold) skaper bare mistrivsel hvis de er dårlige, men motiverer ikke i seg selv.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Hvilke er typiske HYGIENEFAKTORER ifølge Herzberg?',
    opts: [
      'Ansvar, vekst og anerkjennelse',
      'Lønn, fysiske arbeidsforhold og lederstil',
      'Mestring, interessante arbeidsoppgaver og karriereutvikling',
      'Selvrealisering, samarbeid og faglig utvikling'
    ],
    correct: 1,
    explain: 'Hygienefaktorer er ytre forhold: lønn, bedriftspolitikk, fysiske arbeidsforhold og forholdet til leder. De hindrer mistrivsel, men gir ikke motivasjon alene.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Hvilke faktorer er typiske MOTIVASJONSFAKTORER ifølge Herzberg?',
    opts: [
      'Lønn, pensjon og bedriftens retningslinjer',
      'Anerkjennelse, ansvar, interessante oppgaver og faglig vekst',
      'Arbeidsforhold, kolleger og administrasjon',
      'Jobbsikkerhet, parkeringsplass og kantine'
    ],
    correct: 1,
    explain: 'Motivasjonsfaktorer er indre faktorer: anerkjennelse for arbeidet, ansvar, meningsfylte oppgaver og mulighet for vekst og utvikling.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Hva skjer med motivasjonen dersom hygienefaktorene er på plass, men motivasjonsfaktorene mangler?',
    opts: [
      'Ansatte blir svært motiverte fordi basisbehov er dekket',
      'Ansatte mistrives ikke, men de er heller ikke motiverte',
      'Ansatte slutter umiddelbart',
      'Det spiller ingen rolle – hygienefaktorer er det viktigste'
    ],
    correct: 1,
    explain: 'Ifølge Herzberg fjerner gode hygienefaktorer mistrivsel, men de skaper ikke motivasjon. For å skape motivasjon må motivasjonsfaktorene også være til stede.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Hva er Herzbergs praktiske anbefaling til ledere?',
    opts: [
      'Fokuser utelukkende på høy lønn for å motivere ansatte',
      'Sørg for at hygienefaktorer er akseptable, og jobb aktivt med motivasjonsfaktorer',
      'Kontroller ansatte strengt og gi tydelige instrukser',
      'Hygienefaktorer er viktigere enn motivasjonsfaktorer – prioriter disse'
    ],
    correct: 1,
    explain: 'Herzbergs anbefaling er todelt: hygienefaktorer (lønn, arbeidsforhold) må være på plass for å unngå mistrivsel, og ledere bør aktivt jobbe med motivasjonsfaktorer (ansvar, vekst) for å skape motivasjon.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hva kjennetegner en leder med Teori X-syn på ansatte?',
    opts: [
      'Lederen mener ansatte er selvgående og liker ansvar',
      'Lederen mener ansatte er late, unngår ansvar og må kontrolleres strengt',
      'Lederen delegerer mye og stoler fullt på ansatte',
      'Lederen fokuserer på indre motivasjon og selvrealisering'
    ],
    correct: 1,
    explain: 'Teori X (McGregor) innebærer et negativt menneskesyn: ansatte er late, unngår ansvar og må overvåkes og kontrolleres. Lederstilen blir autoritær.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hva kjennetegner et Teori Y-syn på ansatte?',
    opts: [
      'Ansatte er late og trenger streng kontroll',
      'Ansatte er selvmotiverte, søker ansvar og kan styre seg selv',
      'Ansatte jobber kun for lønn og ytre belønning',
      'Ansatte må overvåkes nøye for å yte maksimalt'
    ],
    correct: 1,
    explain: 'Teori Y representerer et positivt menneskesyn: ansatte er kreative, selvmotiverte, søker ansvar og ønsker å bidra. Lederstilen blir tillitsbasert og delegerende.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hvilken ledelsesstil passer best med Teori Y ifølge McGregor?',
    opts: [
      'Autoritær og kontrollorientert ledelse',
      'Delegerende, tillitsbasert ledelse som gir ansvar og autonomi',
      'Mikromanagement med tett oppfølging',
      'Transaksjonsledelse med fokus på belønning og straff'
    ],
    correct: 1,
    explain: 'Teori Y forutsetter et positivt menneskesyn og passer best med delegerende ledelse, tillit, medbestemmelse og autonomi.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hvem er Einar Thorsrud, og hva er hans bidrag til arbeidslivsforskning?',
    opts: [
      'En amerikansk økonom som utviklet SMART-målmodellen',
      'En norsk forsker som bidro til den skandinaviske modellen med medbestemmelse og jobbdesign',
      'En tysk psykolog som utviklet Teori X og Y',
      'En japansk ledelsesguru som innførte LEAN i Europa'
    ],
    correct: 1,
    explain: 'Einar Thorsrud var en norsk arbeidspsykolog som, gjennom samarbeid mellom LO og NAF, utviklet den skandinaviske arbeidslivsmodellen med vekt på medbestemmelse, meningsfylte oppgaver og variasjon i arbeidet.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hva er autonomi som motivasjonsfaktor?',
    opts: [
      'Å få høy lønn og gode bonuser',
      'Å ha frihet til å bestemme hvordan man utfører sine arbeidsoppgaver',
      'Å ha mange kolleger å samarbeide med',
      'Å motta jevnlig tilbakemelding fra lederen'
    ],
    correct: 1,
    explain: 'Autonomi innebærer selvbestemmelse og kontroll over eget arbeid. Forskning viser at autonomi er en av de sterkeste kildene til indre motivasjon.'
  },
  {
    cat: 'mcgregor',
    catLabel: 'Teori X og Y / Thorsrud',
    q: 'Hvilken norsk ordning er særlig knyttet til den skandinaviske modellen Thorsrud var med å utvikle?',
    opts: [
      'Resultatbasert lønn og individuelle bonuser',
      'Medbestemmelse og verneombud i norske bedrifter',
      'Streng arbeidstidskontroll og overtidsbetaling',
      'Outsourcing og midlertidige ansettelser'
    ],
    correct: 1,
    explain: 'Den skandinaviske modellen vektlegger medbestemmelse, tillitsvalgte og verneombud – ansattes rett til å medvirke i beslutninger om eget arbeid.'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hva er indre motivasjon?',
    opts: [
      'Motivasjon som drives av lønn og karrieremuligheter',
      'Motivasjon som springer ut av interesse for, og glede ved, selve oppgaven',
      'Motivasjon som skyldes press og frykt for straff',
      'Motivasjon som skyldes kollegenes forventninger'
    ],
    correct: 1,
    explain: 'Indre motivasjon er motivasjon som kommer innenfra – aktiviteten er belønning i seg selv fordi den er interessant, engasjerende eller meningsfull.'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hva kjennetegner ytre motivasjon?',
    opts: [
      'Man jobber fordi oppgaven i seg selv er meningsfull',
      'Man jobber for å oppnå ytre belønning som lønn, bonus eller anerkjennelse',
      'Man hjelper andre fordi man bryr seg om dem',
      'Man er motivert av personlig vekst og selvrealisering'
    ],
    correct: 1,
    explain: 'Ytre motivasjon drives av faktorer utenfor selve aktiviteten – lønn, bonus, status, ros eller frykt for konsekvenser.'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hva er prososial motivasjon?',
    opts: [
      'Motivasjon for å tjene mest mulig penger',
      'Motivasjon for å hjelpe andre og bidra til fellesskapets beste',
      'Motivasjon knyttet til karriere og personlig suksess',
      'Motivasjon som skyldes konkurranse med kollegene'
    ],
    correct: 1,
    explain: 'Prososial motivasjon er ønsket om å hjelpe andre, gjøre noe meningsfylt for samfunnet eller bidra til kollegenes trivsel og suksess.'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hva kan skje med indre motivasjon dersom en person begynner å motta ytre belønning for noe de tidligere likte gratis?',
    opts: [
      'Den indre motivasjonen øker alltid fordi belønning er positiv',
      'Den indre motivasjonen kan svekkes – korrumperingseffekten',
      'Det er ingen sammenheng mellom indre og ytre motivasjon',
      'Ytre belønning forsterker alltid den indre motivasjonen'
    ],
    correct: 1,
    explain: 'Forskning viser at innføring av ytre belønning for aktiviteter man allerede er indre motivert for, kan redusere den indre motivasjonen – dette kalles korrumperingseffekten.'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hvilke tre motivasjonstyper skiller man vanligvis mellom i moderne motivasjonsteori?',
    opts: [
      'Teori X, Teori Y og Teori Z',
      'Indre motivasjon, ytre motivasjon og prososial motivasjon',
      'Maslow, Herzberg og McGregor',
      'Hygienefaktorer, motivasjonsfaktorer og kontekstfaktorer'
    ],
    correct: 1,
    explain: 'Tre sentrale motivasjonstyper: indre motivasjon (glede ved oppgaven), ytre motivasjon (lønn/belønning) og prososial motivasjon (ønske om å hjelpe andre).'
  },
  {
    cat: 'motivtyper',
    catLabel: 'Motivasjonstyper',
    q: 'Hva kjennetegner en arbeidsoppgave som fremmer indre motivasjon?',
    opts: [
      'Oppgaven er enkel og krever lite innsats',
      'Oppgaven er interessant, meningsfull og gir mestringsfølelse',
      'Oppgaven gir høy lønn og gode bonuser',
      'Oppgaven utføres i konkurranse med kollegene'
    ],
    correct: 1,
    explain: 'Indre motivasjon fremmes av oppgaver som oppleves som interessante, meningsfylte og utfordrende nok til mestringsfølelse – ikke for enkle, ikke for vanskelige.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hva betyr forkortelsen SMART i forbindelse med målsetting?',
    opts: [
      'Strategisk, Målbart, Ambisiøst, Realistisk, Tidsbegrenset',
      'Spesifikt, Målbart, Akseptert, Realistisk, Tidsbestemt',
      'Spesifikt, Motiverende, Ambisiøst, Relevant, Tidsbestemt',
      'Strategisk, Motiverende, Akseptert, Realistisk, Tidsbegrenset'
    ],
    correct: 1,
    explain: 'SMART-mål er Spesifikke, Målbare, Aksepterte (av de det gjelder), Realistiske og Tidsbestemte. Modellen brukes for å sette klare og motiverende mål.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hvorfor er det viktig at mål er "aksepterte" ifølge SMART-modellen?',
    opts: [
      'Fordi ledelsen da slipper å begrunne målene overfor ansatte',
      'Fordi mål ansatte har vært med på å sette gir høyere motivasjon og eierskap',
      'Fordi aksepterte mål alltid er lette å nå',
      'Fordi det reduserer behovet for å måle resultater'
    ],
    correct: 1,
    explain: 'Aksepterte mål – som ansatte har medvirket i å sette eller forstår og aksepterer – gir sterkere eierskap og høyere motivasjon til å nå dem.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hva mener Linda Lai med begrepet "kompetansemobilisering"?',
    opts: [
      'At bedriften rekrutterer nye medarbeidere med ønsket kompetanse',
      'At ansatte faktisk bruker og får benyttet den kompetansen de besitter i jobben sin',
      'At bedriften sender ansatte på kurs for å bygge ny kompetanse',
      'At kompetansen flyttes mellom avdelinger ved behov'
    ],
    correct: 1,
    explain: 'Kompetansemobilisering (Lai, 2011) handler om at ansattes kompetanse faktisk brukes, verdsettes og utnyttes i arbeidet – ikke bare at de innehar kompetansen.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hva er konsekvensen av lav kompetansemobilisering for en ansatt?',
    opts: [
      'Ansatte får bedre muligheter til faglig utvikling',
      'Motivasjonen og engasjementet svekkes fordi kompetansen ikke benyttes',
      'Produktiviteten øker fordi oppgavene er enkle',
      'Ansatte utvikler ny kompetanse gjennom utfordringer'
    ],
    correct: 1,
    explain: 'Lav kompetansemobilisering fører til at ansatte opplever at kompetansen deres ikke brukes, noe som svekker motivasjon, engasjement og tilfredshet.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hva er forskjellen på et SMART-mål og et vagt mål?',
    opts: [
      'SMART-mål er alltid lettere å nå enn vage mål',
      'SMART-mål er konkret, målbart og tidsbestemt; vagt mål er upresist og vanskelig å vurdere',
      'Vage mål er mer motiverende fordi de gir frihet',
      'SMART-mål brukes kun i salg og markedsføring'
    ],
    correct: 1,
    explain: 'Et SMART-mål er presist: "Øke salget med 10% innen Q2" er SMART. "Vi skal bli bedre" er vagt. Klare mål gir bedre fokus og motivasjon.'
  },
  {
    cat: 'maal',
    catLabel: 'Mål og kompetanse',
    q: 'Hva beskriver begrepet "kompetanse" i arbeidslivskontekst?',
    opts: [
      'Kun formell utdanning og sertifikater',
      'Kunnskap, ferdigheter, evner og holdninger som gjør en i stand til å utføre oppgaver',
      'Antall år med erfaring i en bransje',
      'Evnen til å samarbeide med kolleger'
    ],
    correct: 1,
    explain: 'Kompetanse i arbeidslivet omfatter kunnskap (hva man vet), ferdigheter (hva man kan gjøre), evner (potensiale) og holdninger (vilje) – alt som gjør en i stand til å utføre oppgaver effektivt.'
  },
  {
    cat: 'herzberg',
    catLabel: 'Herzbergs to-faktorteori',
    q: 'Et selskap forbedrer kantinen, maler kontorlokalene og øker parkeringsdekningen. Hvilken effekt har dette ifølge Herzberg?',
    opts: [
      'Det vil kraftig øke ansattes motivasjon og produktivitet',
      'Det vil fjerne mistrivsel, men ikke nødvendigvis øke motivasjonen',
      'Det er bortkastet – ingen av disse tiltakene har noen effekt',
      'Det vil øke ytre motivasjon som er sterkere enn indre motivasjon'
    ],
    correct: 1,
    explain: 'Kantine, kontormiljø og parkering er hygienefaktorer. Ifølge Herzberg fjerner forbedring av disse mistrivsel, men det skaper ikke motivasjon. For motivasjon trengs motivasjonsfaktorer som ansvar og utvikling.'
  },
];
