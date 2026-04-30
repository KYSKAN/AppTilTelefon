const QUIZ_META = {
  id: 'lom-oks-kostnader',
  title: 'Grunnlag, inntekter og kostnader',
  subtitle: 'Økonomistyring – Kap. 1-2 og 5',
  description: '30 spørsmål om økonomistyringens grunnlag, regnskapstyper, kostnadsbegreper, regnskapsprinsipper og avskrivninger.',
  cats: {
    styring:          { label: 'Økonomistyring – grunnlag',   color: '#8b5cf6' },
    kostnadsbegreper: { label: 'Kostnadsbegreper',            color: '#3b82f6' },
    regnskapsprinsipper: { label: 'Regnskapsprinsipper',     color: '#10b981' },
    avskrivninger:    { label: 'Avskrivninger',               color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er definisjonen på økonomistyring?',
    opts: [
      'Å føre regnskap og betale skatt til rett tid',
      'Å skape verdier for bedriften og sørge for at det alltid er nok penger til å betale regningene',
      'Å maksimere profitten på kort sikt',
      'Å analysere konkurrentenes økonomi og tilpasse seg markedet'
    ],
    correct: 1,
    explain: 'Økonomistyring er prosessen med å planlegge, koordinere og kontrollere en bedrifts ressurser for å skape verdier OG sikre at bedriften til enhver tid har tilstrekkelig likviditet.'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er de tre styringsnivåene i en bedrift?',
    opts: [
      'Styret, ledelse og ansatte',
      'Strategisk planlegging, økonomistyring og operativ styring',
      'Langsiktig, mellomlang og kortsiktig styring',
      'Inntektsstyring, kostnadsstyring og likviditetsstyring'
    ],
    correct: 1,
    explain: 'De tre styringsnivåene er: strategisk planlegging (langsiktige mål og retning), økonomistyring (ressursallokering og oppfølging) og operativ styring (daglig drift og kontroll).'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hvem er bedriftens typiske interessenter?',
    opts: [
      'Kun aksjonærer og styremedlemmer',
      'Leverandører, kunder, eiere, ansatte, långivere og myndigheter',
      'Kun kunder og ansatte',
      'Ledere og mellomledere'
    ],
    correct: 1,
    explain: 'Bedriftens interessenter er alle parter som har interesse i bedriftens resultater: leverandører, kunder, eiere, ansatte, långivere (banker) og myndigheter (stat, kommune).'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er de fire regnskapstypene i en bedrift?',
    opts: [
      'Lønnsregnskap, skatteregnskap, likviditetsregnskap og driftsregnskap',
      'Finansregnskap, skatteregnskap, likviditetsoversikt og driftsregnskap',
      'Budsjett, regnskap, likviditetsprognose og balanse',
      'Resultatregnskap, balanseregnskap, likviditetsregnskap og prosjektregnskap'
    ],
    correct: 1,
    explain: 'Fire regnskapstyper: Finansregnskap (lovpålagt, til eksterne), Skatteregnskap (grunnlag for skatt), Likviditetsoversikt (kontantstrøm) og Driftsregnskap (internt styringsverktøy).'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er sammenhengen mellom lønnsomhet og balansen?',
    opts: [
      'Lønnsomhet = Egenkapital × Gjeldsgrad',
      'Lønnsomhet = Inntekter − Kostnader = Resultat; Balanse = Eiendeler = Gjeld + Egenkapital',
      'Lønnsomhet måles kun i balansen som egenkapitalandel',
      'Balansen viser kun lønnsomhet, ikke gjeld'
    ],
    correct: 1,
    explain: 'Lønnsomhet = Inntekter − Kostnader = Resultat. Balanselikningen: Eiendeler = Gjeld + Egenkapital. Overskudd øker egenkapitalen i balansen over tid.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er forskjellen mellom utgift, kostnad og utbetaling?',
    opts: [
      'De er synonymer som betyr det samme',
      'Utgift = anskaffelsestidspunkt; Kostnad = forbrukstidspunkt; Utbetaling = betalingstidspunkt',
      'Utgift = betaling; Kostnad = faktura; Utbetaling = forbruk',
      'Kostnad = anskaffelse; Utgift = forbruk; Utbetaling = betaling'
    ],
    correct: 1,
    explain: 'Utgift oppstår når man anskaffer noe (f.eks. kjøper varer). Kostnad oppstår når varen forbrukes i produksjonen. Utbetaling er den faktiske kontantbetalingen – disse tre tidspunktene er ofte forskjellige.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er faste kostnader?',
    opts: [
      'Kostnader som varierer direkte med produksjonsvolumet',
      'Kostnader som er uavhengige av produksjonsvolumet innenfor et gitt intervall',
      'Kostnader som er faste i pris men variable i mengde',
      'Kun avskrivninger og rentekostnader'
    ],
    correct: 1,
    explain: 'Faste kostnader er uavhengige av produksjonsvolumet innenfor et kapasitetsintervall – f.eks. husleie, administrasjonslønn, forsikring. De endres ikke om man produserer mer eller mindre.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er sprangvise faste kostnader?',
    opts: [
      'Faste kostnader som reduseres gradvis over tid',
      'Faste kostnader som øker brått når produksjonen overstiger en kapasitetsgrense',
      'Variable kostnader som stiger raskere enn produksjonen',
      'Kostnader som bare oppstår i oppstartsfasen'
    ],
    correct: 1,
    explain: 'Sprangvise faste kostnader er faste innenfor et intervall, men stiger brått (i "sprang") når produksjonen overstiger en kapasitetsgrense – f.eks. når man må leie ett ekstra lager.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er variable kostnader, og hva er de tre undertypene?',
    opts: [
      'Kostnader som er faste på kort sikt; undertyper: direkte, indirekte og kalkulatoriske',
      'Kostnader som varierer med produksjonsvolumet; undertyper: proporsjonale, overproposjonale og underproposjonale',
      'Alle lønnskostnader; undertyper: grunnlønn, overtid og bonus',
      'Kostnader som varierer med markedsprisene; undertyper: råvarer, energi og transport'
    ],
    correct: 1,
    explain: 'Variable kostnader varierer med produksjonen. Tre typer: proporsjonale (øker likt med produksjon), overproposjonale (øker raskere enn produksjon – f.eks. overtid) og underproposjonale (øker saktere).'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er direkte kostnader?',
    opts: [
      'Kostnader som kan knyttes direkte til et bestemt produkt, prosjekt eller ordre',
      'Kostnader som betales direkte uten kreditttid',
      'Kostnader som er direkte varierende med produksjonsvolumet',
      'Alle kostnader som inngår i selvkostprisen'
    ],
    correct: 0,
    explain: 'Direkte kostnader er kostnader som kan knyttes direkte til et bestemt produkt, prosjekt eller ordre – f.eks. råvarer og direkte arbeidstid for et spesifikt produkt.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er indirekte kostnader, og hvordan håndteres de?',
    opts: [
      'Kostnader som ikke kan knyttes til ett bestemt produkt, men fordeles etter en fordelingsnøkkel',
      'Kostnader som ikke er synlige i regnskapet',
      'Kostnader som oppstår indirekte gjennom underleverandører',
      'Skjulte kostnader som ikke medregnes i selvkostprisen'
    ],
    correct: 0,
    explain: 'Indirekte kostnader (overhead) kan ikke direkte knyttes til ett produkt – f.eks. administrasjonslønn, strøm, husleie. De fordeles ut på produkter/prosjekter ved hjelp av en fordelingsnøkkel.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er kalkulatoriske kostnader?',
    opts: [
      'Kostnader som er beregnet av regnskapsfører og godkjent av revisor',
      'Kostnader som ikke medfører faktiske utbetalinger, men representerer alternativkostnad – f.eks. kalkulatorisk rente og kalkulatorisk lønn til eier',
      'Kostnader for bruk av kalkulatorer og regnskapsprogramvare',
      'Estimerte fremtidige kostnader i budsjettet'
    ],
    correct: 1,
    explain: 'Kalkulatoriske kostnader representerer alternativkostnad – hva ressurser alternativt kunne ha innbrakt. Eksempler: kalkulatorisk rente på egenkapital (avkastning man går glipp av), kalkulatorisk eierlønn og kalkulatoriske avskrivninger.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er differansepris (minimumspris)?',
    opts: [
      'Den laveste prisen man kan tilby i markedet uten å miste kunder',
      'Prisen som dekker kun de variable kostnadene pluss et lite bidrag – brukes ved tilleggsordrer med ledig kapasitet',
      'Differansen mellom markedspris og kostpris',
      'Den prisen som gir null fortjeneste (break-even-pris)'
    ],
    correct: 1,
    explain: 'Differansepris (minimumspris) er den prisen som dekker de variable kostnadene som påløper spesifikt for en ordre, pluss eventuelt et bidrag til dekning av faste kostnader. Brukes når man har ledig kapasitet.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er inntekt definert som i pensum?',
    opts: [
      'Det beløpet som er innbetalt på bankkonto i løpet av perioden',
      'Pris × Mengde – verdien av det som er solgt/levert i perioden',
      'Omsetning minus mva og avgifter',
      'Kun den fortjenesten bedriften sitter igjen med etter alle kostnader'
    ],
    correct: 1,
    explain: 'Inntekt = Pris × Mengde. Det er verdien av varer og tjenester levert til kunder i perioden – uavhengig av om betaling er mottatt. Inntekt opptjenes ved levering, ikke ved betaling.'
  },
  {
    cat: 'regnskapsprinsipper',
    catLabel: 'Regnskapsprinsipper',
    q: 'Hva sier transaksjonsprinsippet i regnskapsloven?',
    opts: [
      'Alle transaksjoner skal gjennomføres kontant',
      'Transaksjoner skal regnskapsføres til verdien på transaksjonstidspunktet',
      'Alle transaksjoner skal godkjennes av revisor',
      'Transaksjoner skal ikke bokføres før betaling er mottatt'
    ],
    correct: 1,
    explain: 'Transaksjonsprinsippet: transaksjoner skal regnskapsføres til den verdien de hadde på transaksjonstidspunktet (historisk kost). Dette gir objektivitet og etterprøvbarhet.'
  },
  {
    cat: 'regnskapsprinsipper',
    catLabel: 'Regnskapsprinsipper',
    q: 'Hva sier opptjeningsprinsippet?',
    opts: [
      'Inntekter regnskapsføres når kunden betaler',
      'Inntekter regnskapsføres når de er opptjent – dvs. når varen er levert eller tjenesten utført',
      'Inntekter regnskapsføres kun når de er sikre',
      'Inntekter opptjenes gradvis over lånets løpetid'
    ],
    correct: 1,
    explain: 'Opptjeningsprinsippet: inntekter skal regnskapsføres i den perioden de opptjenes (varen leveres eller tjenesten utføres) – ikke når betaling mottas. Dette sikrer korrekt periodematch.'
  },
  {
    cat: 'regnskapsprinsipper',
    catLabel: 'Regnskapsprinsipper',
    q: 'Hva sier sammenstillingsprinsippet?',
    opts: [
      'Inntekter og kostnader skal sammenstilles i samme budsjett',
      'Kostnader skal regnskapsføres i samme periode som de tilhørende inntektene',
      'Alle regnskapsposter skal sammenstilles i ett felles dokument',
      'Ledelsens og revisors syn skal sammenstilles i årsrapporten'
    ],
    correct: 1,
    explain: 'Sammenstillingsprinsippet: kostnader skal periodiseres og regnskapsføres i samme regnskapsperiode som de inntektene de er med på å generere – dette gir et korrekt bilde av periodens resultat.'
  },
  {
    cat: 'regnskapsprinsipper',
    catLabel: 'Regnskapsprinsipper',
    q: 'Hva sier forsiktighetsprinsippet?',
    opts: [
      'Bedriften skal alltid ha minst 6 måneders driftsreserve',
      'Urealisert tap skal regnskapsføres, men urealisert gevinst skal ikke regnskapsføres',
      'Bedriften bør alltid undervurdere inntektene sine',
      'Revisor skal alltid velge den mest konservative tolkningen av reglene'
    ],
    correct: 1,
    explain: 'Forsiktighetsprinsippet: usikre tap og nedskrivninger skal regnskapsføres når de identifiseres, men urealiserte gevinster skal IKKE tas med. Dette gir et forsiktig, ikke for optimistisk bilde.'
  },
  {
    cat: 'avskrivninger',
    catLabel: 'Avskrivninger',
    q: 'Hva er formålet med avskrivninger?',
    opts: [
      'Å spare penger til fremtidige investeringer',
      'Å fordele kostnadene for et driftsmiddel over dets levetid – kostnaden periodiseres der driftsmiddelet brukes',
      'Å redusere skatten man betaler hvert år',
      'Å vise verdifallet på driftsmidler i markedet'
    ],
    correct: 1,
    explain: 'Avskrivninger fordeler anskaffelseskostnaden for et varig driftsmiddel (maskin, bil, bygg) over den perioden det benyttes – i tråd med sammenstillingsprinsippet.'
  },
  {
    cat: 'avskrivninger',
    catLabel: 'Avskrivninger',
    q: 'Hva er lineær avskrivning?',
    opts: [
      'Avskrivning der man avskriver mer de første årene',
      'Avskrivning med likt beløp hvert år gjennom driftsmidlets levetid',
      'Avskrivning basert på faktisk bruk eller produksjon',
      'En metode der man avskriver ved skattemessige saldogrupper'
    ],
    correct: 1,
    explain: 'Lineær avskrivning: kostprisen minus eventuell restverdi deles likt på antall bruksår. Brukes i finansregnskapet. Eksempel: bil til kr 300 000 med 5 års levetid gir kr 60 000 i avskrivning per år.'
  },
  {
    cat: 'avskrivninger',
    catLabel: 'Avskrivninger',
    q: 'Hva er saldoavskrivning (skattemessig avskrivning)?',
    opts: [
      'En avskrivningsmetode der beløpet er likt hvert år',
      'En avskrivningsmetode der man avskriver en fast prosent av bokført verdi hvert år – gir fallende beløp',
      'En metode der man kun avskriver ved salg av driftsmiddelet',
      'En metode for å beregne skattemessig underskudd'
    ],
    correct: 1,
    explain: 'Saldoavskrivning er den skattemessige metoden: man avskriver en fast prosentsats av gjenstående bokført verdi (saldo) hvert år. Dette gir fallende avskrivningsbeløp over tid. Driftsmidler gruppes i saldogrupper a–j.'
  },
  {
    cat: 'avskrivninger',
    catLabel: 'Avskrivninger',
    q: 'Hva er saldogrupper i skattemessig avskrivning?',
    opts: [
      'Grupper av ansatte som sorteres etter lønn',
      'Grupper av driftsmidler (a–j) med ulik avskrivningssats bestemt av skatteloven',
      'Grupper av kostnader som kan fradragsføres',
      'Kategorier av finansielle investeringer i regnskapet'
    ],
    correct: 1,
    explain: 'Saldogrupper a–j er kategorier driftsmidler plasseres i for skattemessig avskrivning. Ulike grupper har ulike prosentsatser – f.eks. gruppe b (personbiler) avskrives med 20 %, gruppe d (maskiner) med 20 %.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Et trykkeri kjøper inn papir for 50 000 kr i mars og bruker det i produksjonen i april. Hva er utgift, kostnad og utbetaling?',
    opts: [
      'Alle tre inntreffer i mars',
      'Utgift i mars, kostnad i april, utbetaling avhenger av kredittiden til leverandøren',
      'Kostnad i mars, utgift i april, utbetaling i mars',
      'Utgift og kostnad begge i mars; utbetaling i april'
    ],
    correct: 1,
    explain: 'Utgift oppstår i mars (kjøpstidspunktet). Kostnad oppstår i april (forbrukstidspunktet). Utbetaling skjer når fakturaen betales – avhenger av kredittiden til leverandøren.'
  },
  {
    cat: 'regnskapsprinsipper',
    catLabel: 'Regnskapsprinsipper',
    q: 'Hva er tidsavgrensning i regnskap?',
    opts: [
      'At regnskapet kun gjelder for ett år',
      'Å periodisere inntekter og kostnader til riktig regnskapsperiode, uavhengig av når penger mottas eller betales',
      'Å sette tidsfrist for innlevering av skattemelding',
      'At man avskriver driftsmidler over nøyaktig den skattemessige levetiden'
    ],
    correct: 1,
    explain: 'Tidsavgrensning handler om å matche inntekter og kostnader til den perioden de faktisk tilhører, ikke til den perioden pengene strømmer. Dette er kjernen i god regnskapsføring.'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er finansregnskapet, og hvem er det primært beregnet for?',
    opts: [
      'Et internt styringsverktøy for ledelsen',
      'Et lovpålagt regnskap som viser bedriftens samlede økonomi – primært for eksterne brukere som kreditorer, eiere og myndigheter',
      'En detaljert oversikt over kostnader per produkt for interne kalkyler',
      'Et spesialregnskap for å beregne skatten'
    ],
    correct: 1,
    explain: 'Finansregnskapet er lovpålagt og viser bedriftens samlede økonomi i et standardisert format. Det er primært beregnet for eksterne interessenter: investorer, kreditorer, myndigheter og kunder.'
  },
  {
    cat: 'styring',
    catLabel: 'Økonomistyring – grunnlag',
    q: 'Hva er driftsregnskapet, og hva brukes det til?',
    opts: [
      'Et lovpålagt regnskap som rapporteres til Brønnøysundregistrene',
      'Et frivillig internt regnskap som viser lønnsomheten per produkt, prosjekt eller avdeling',
      'Et regnskap kun for å beregne lønnskostnader',
      'Et register over alle driftsavtaler og leverandørkontrakter'
    ],
    correct: 1,
    explain: 'Driftsregnskapet er ikke lovpålagt og er et internt styringsverktøy. Det gir detaljert lønnsomhetsinformasjon per produkt, prosjekt, kunde eller avdeling – grunnlaget for priskalkylering og beslutninger.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er alternativkostnad?',
    opts: [
      'Den billigste alternative leverandøren man kunne ha valgt',
      'Verdien av det man gir avkall på ved å velge ett alternativ fremfor et annet',
      'De totale kostnadene ved å produsere et alternativt produkt',
      'Kostnaden for å bytte til et annet system eller en annen leverandør'
    ],
    correct: 1,
    explain: 'Alternativkostnad er det man ofrer ved å velge ett alternativ – f.eks. om du bruker egne lokaler i stedet for å leie dem ut, er alternativkostnaden leieinntekten du mister. Viktig i kalkulatoriske kostnader.'
  },
  {
    cat: 'avskrivninger',
    catLabel: 'Avskrivninger',
    q: 'Hva er forskjellen mellom finansregnskapets lineære avskrivninger og skattemessige saldoavskrivninger?',
    opts: [
      'Det er ingen forskjell – begge metoder gir samme avskrivning',
      'Finansregnskapet bruker lineær (jevn fordeling over levetiden); skattemessig brukes saldometode (fast % av saldo – fallende beløp). De gir ulike resultat hvert år.',
      'Saldoavskrivning er alltid lavere enn lineær avskrivning',
      'Lineær avskrivning brukes kun for bygg; saldoavskrivning kun for maskiner'
    ],
    correct: 1,
    explain: 'Lineær avskrivning (finansregnskap) gir likt beløp hvert år. Saldoavskrivning (skatteregnskap) gir høyere beløp de første årene (fallende med fast %) og lavere etter hvert. Dette skaper midlertidige skattemessige forskjeller.'
  },
  {
    cat: 'kostnadsbegreper',
    catLabel: 'Kostnadsbegreper',
    q: 'Hva er proporsjonale variable kostnader?',
    opts: [
      'Kostnader som øker raskere enn produksjonsvolumet',
      'Kostnader som øker i nøyaktig samme forhold som produksjonsvolumet',
      'Kostnader som er uavhengige av produksjonen',
      'Kostnader som øker saktere enn produksjonsvolumet'
    ],
    correct: 1,
    explain: 'Proporsjonale variable kostnader øker i eksakt samme takt som produksjonsvolumet. Eksempel: råvarekostnad per enhet er konstant – dobler man produksjonen, dobles råvarekostnaden.'
  },
];
