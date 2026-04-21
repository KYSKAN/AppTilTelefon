// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Lover & Avtaler
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  28 spørsmål — relevant for Elkraft-studenter på fagskole
//  Dekker: arbeidsmiljøloven, ferieloven, tariffavtaler,
//          ansettelse/kontrakt, HMS og internkontroll
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-lovavtale',
  title: 'Lover & Avtaler',
  subtitle: 'LØM Fagskole',
  description: '28 spørsmål om lover og avtaler relevante for elektrobransjen — arbeidsmiljøloven, ferieloven, tariffavtaler og HMS.',
  cats: {
    aml:       { label: 'Arbeidsmiljøloven', color: '#8b5cf6' },
    ferie:     { label: 'Ferieloven',        color: '#f59e0b' },
    tariff:    { label: 'Tariffavtaler',     color: '#ec4899' },
    ansettelse:{ label: 'Ansettelse',        color: '#00a8e8' },
    hms:       { label: 'HMS',              color: '#10b981' }
  }
};

const QUESTIONS = [

  // ── Arbeidsmiljøloven ──────────────────────────────────────────

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hvem har det overordnede ansvaret for arbeidsmiljøet på arbeidsplassen etter arbeidsmiljøloven?',
    opts: ['Verneombudet', 'Arbeidstakerne i fellesskap', 'Arbeidsgiveren', 'Bedriftshelsetjenesten'],
    correct: 2,
    explain: 'Aml. § 2-1: Arbeidsgiver er ansvarlig for at bestemmelsene i arbeidsmiljøloven blir overholdt, inkludert at ingen arbeidstakere skades eller blir syke som følge av arbeidsforhold.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hva er den alminnelige ukentlige arbeidstiden etter arbeidsmiljøloven?',
    opts: ['37,5 timer', '36 timer', '40 timer', '45 timer'],
    correct: 2,
    explain: 'Aml. § 10-4 (1): Alminnelig arbeidstid må ikke overstige 9 timer per 24 timer og 40 timer per 7 dager. Tariffavtaler kan avtale kortere arbeidstid.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hva er minimumstillegget for overtidsarbeid etter arbeidsmiljøloven?',
    opts: ['25 %', '40 %', '50 %', '100 %'],
    correct: 1,
    explain: 'Aml. § 10-6 (11): Arbeidstaker har krav på et tillegg på minst 40 % for overtidsarbeid. Landsoverenskomsten for elektrofagene gir 50 % på hverdager — bedre enn lovens minimum.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hvor mange overtidstimer per uke kan arbeidsgiver maksimalt pålegge?',
    opts: ['5 timer', '8 timer', '10 timer', '15 timer'],
    correct: 2,
    explain: 'Aml. § 10-6 (4): Arbeidstaker kan ikke pålegges overtid ut over 10 timer per 7 dager. Grensen for samlet overtid er 25 timer per 4 sammenhengende uker og 200 timer per år.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hva er verneombudets hovedoppgave?',
    opts: [
      'Ansette og si opp arbeidstakere',
      'Ivareta arbeidstakernes interesser i arbeidsmiljøspørsmål',
      'Utarbeide virksomhetens budsjetter',
      'Godkjenne elektriske installasjoner'
    ],
    correct: 1,
    explain: 'Aml. § 6-2: Verneombudet skal ivareta arbeidstakernes interesser i saker som angår arbeidsmiljøet og kan stanse farlig arbeid inntil Arbeidstilsynet har vurdert situasjonen.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Fra hvilken virksomhetsstørrelse er det lovpålagt å ha arbeidsmiljøutvalg (AMU)?',
    opts: ['Fra 10 ansatte', 'Fra 20 ansatte', 'Fra 50 ansatte', 'Fra 100 ansatte'],
    correct: 2,
    explain: 'Aml. § 7-1: I virksomheter med minst 50 arbeidstakere skal det opprettes arbeidsmiljøutvalg (AMU). I virksomheter med 20–49 ansatte kan en av partene kreve AMU.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hva er oppsigelsesfristen for en ansatt med 5 års sammenhengende ansettelse i virksomheten?',
    opts: ['1 måned', '2 måneder', '3 måneder', '6 måneder'],
    correct: 1,
    explain: 'Aml. § 15-3 (3): Etter 5 år i virksomheten er den gjensidige oppsigelsesfristen 2 måneder. Etter 10 år er den 3 måneder.'
  },

  {
    cat: 'aml', catLabel: 'Arbeidsmiljøloven',
    q: 'Hvilken myndighet fører tilsyn med at arbeidsmiljøloven overholdes?',
    opts: ['DSB', 'Arbeidstilsynet', 'Skatteetaten', 'NAV'],
    correct: 1,
    explain: 'Arbeidstilsynet er statens tilsynsorgan for arbeidsmiljølovgivningen. DSB fører tilsyn med el-sikkerhetsforskrifter (FSE, FEL), mens Arbeidstilsynet håndterer arbeidsmiljø og arbeidsvilkår.'
  },

  // ── Ferieloven ─────────────────────────────────────────────────

  {
    cat: 'ferie', catLabel: 'Ferieloven',
    q: 'Hvor mange virkedager ferie har arbeidstakere krav på etter ferieloven?',
    opts: ['21 virkedager (3 uker)', '25 virkedager (4 uker + 1 dag)', '30 virkedager (5 uker)', '28 virkedager'],
    correct: 1,
    explain: 'Ferieloven § 5 (1): Arbeidstakere har rett til 25 virkedager ferie per år — det tilsvarer 4 uker og 1 dag (lørdag regnes som virkedag). Mange tariffavtaler, inkl. Landsoverenskomsten for elektrofagene, gir 5 fulle uker.'
  },

  {
    cat: 'ferie', catLabel: 'Ferieloven',
    q: 'Hva er feriepengesatsen etter ferieloven for arbeidstakere under 60 år?',
    opts: ['8,0 %', '10,2 %', '12,0 %', '12,5 %'],
    correct: 1,
    explain: 'Ferieloven § 10 (2): Feriepengene utgjør 10,2 % av feriepengegrunnlaget for arbeidstakere med 25 virkedager ferie. Mange tariffavtaler gir 12 % (5 uker).'
  },

  {
    cat: 'ferie', catLabel: 'Ferieloven',
    q: 'Hva er feriepengesatsen for arbeidstakere som er 60 år eller eldre?',
    opts: ['10,2 %', '11,0 %', '12,5 %', '14,3 %'],
    correct: 2,
    explain: 'Ferieloven § 10 (3): Arbeidstakere over 60 år som benytter den ekstra ferieuka har rett til 12,5 % feriepenger (de øvrige 25 dagene = 10,2 %).'
  },

  {
    cat: 'ferie', catLabel: 'Ferieloven',
    q: 'I hvilken periode kan arbeidstaker kreve å ta ut hovedferien (3 uker sammenhengende)?',
    opts: [
      'Hele kalenderåret',
      '1. mai – 31. august',
      '1. juni – 30. september',
      '15. juni – 15. august'
    ],
    correct: 2,
    explain: 'Ferieloven § 7 (1): Arbeidstaker kan kreve at 18 virkedager (3 uker) av ferien avvikles som sammenhengende ferie i perioden 1. juni – 30. september.'
  },

  {
    cat: 'ferie', catLabel: 'Ferieloven',
    q: 'Hva skjer dersom arbeidstaker ikke har opptjent nok feriepenger til å dekke ferieperioden?',
    opts: [
      'Arbeidstaker mister retten til fri',
      'Arbeidsgiver plikter å betale full lønn uansett',
      'Arbeidstaker har fremdeles rett til feriefritid, men det trekkes i lønn',
      'Ferie kan ikke avvikles før neste opptjeningsår'
    ],
    correct: 2,
    explain: 'Ferieloven skiller mellom rett til feriefritid og rett til feriepenger. Retten til feriefritid gjelder uansett opptjening, men dersom feriepengene ikke dekker hele perioden trekkes det i ordinær lønn.'
  },

  // ── Tariffavtaler ──────────────────────────────────────────────

  {
    cat: 'tariff', catLabel: 'Tariffavtaler',
    q: 'Hva er Landsoverenskomsten for elektrofagene?',
    opts: [
      'En lov vedtatt av Stortinget',
      'En HMS-forskrift fra DSB',
      'En tariffavtale mellom NHO Elektro og EL & IT Forbundet',
      'En bransjeavtale om priser og anbud'
    ],
    correct: 2,
    explain: 'Landsoverenskomsten for elektrofagene er en tariffavtale (kollektiv avtale) forhandlet frem mellom NHO Elektro (arbeidsgivere) og EL & IT Forbundet (arbeidstakere). Den fastsetter minstelønn, arbeidstid og øvrige arbeidsvilkår.'
  },

  {
    cat: 'tariff', catLabel: 'Tariffavtaler',
    q: 'Hva er det viktigste prinsippet ved forholdet mellom tariffavtale og individuell arbeidsavtale?',
    opts: [
      'Arbeidsavtalen overstyrer alltid tariffavtalen',
      'Den individuelle arbeidsavtalen kan ikke gi dårligere vilkår enn tariffavtalen',
      'Tariffavtalen gjelder kun for fagorganiserte',
      'De to avtaletypene er helt uavhengige av hverandre'
    ],
    correct: 1,
    explain: 'Tariffavtalens ufravikelighetsprinsipp innebærer at individuelle avtaler ikke kan gi dårligere vilkår enn det tariffavtalen fastsetter. Bedre individuelle vilkår er tillatt.'
  },

  {
    cat: 'tariff', catLabel: 'Tariffavtaler',
    q: 'Hvilket forbund organiserer elektrikere og forhandler tariffavtaler på arbeidstakersiden?',
    opts: ['Fellesforbundet', 'EL & IT Forbundet', 'Fagforbundet', 'Norsk Arbeidsmandsforbund'],
    correct: 1,
    explain: 'EL & IT Forbundet (tilknyttet LO) er fagforbundet som organiserer elektrikere og andre el- og IT-arbeidere. De forhandler tariffavtalen mot NHO Elektro på arbeidsgiversiden.'
  },

  {
    cat: 'tariff', catLabel: 'Tariffavtaler',
    q: 'Hva er overtidstillegget for elektrikere på hverdager frem til kl. 21:00 etter Landsoverenskomsten?',
    opts: ['25 %', '40 %', '50 %', '100 %'],
    correct: 2,
    explain: 'Landsoverenskomsten for elektrofagene gir 50 % overtidstillegg på hverdager frem til kl. 21:00, og 100 % etter dette. Dette er bedre enn arbeidsmiljølovens lovpålagte minimum på 40 %.'
  },

  {
    cat: 'tariff', catLabel: 'Tariffavtaler',
    q: 'Hva kjennetegner et tariffoppgjør?',
    opts: [
      'En ensidig beslutning fra arbeidsgiver om lønnsjustering',
      'Forhandlinger mellom fagforeninger og arbeidsgiverorganisasjoner om lønns- og arbeidsvilkår',
      'En domstolsavgjørelse om arbeidstvister',
      'En statlig fastsettelse av minstelønn'
    ],
    correct: 1,
    explain: 'Tariffoppgjøret er forhandlinger mellom partene i arbeidslivet (fagforeninger og arbeidsgiverorganisasjoner) om innholdet i tariffavtalene, typisk lønn, arbeidstid og andre arbeidsvilkår. I Norge skjer dette normalt hvert 2. år.'
  },

  // ── Ansettelse og kontrakt ─────────────────────────────────────

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hva er hovedregelen for ansettelsesform etter arbeidsmiljøloven?',
    opts: [
      'Midlertidig ansettelse er det normale',
      'Innleie via bemanningsbyrå er mest brukt',
      'Fast ansettelse er hovedregelen',
      'Arbeidsgiveren velger fritt ansettelsesform'
    ],
    correct: 2,
    explain: 'Aml. § 14-9 (1): Arbeidstaker skal ansettes fast. Fast ansettelse betyr at ansettelsen er løpende og tidsubegrenset. Midlertidig ansettelse krever lovhjemmel.'
  },

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hva er maksimal prøvetid i et arbeidsforhold?',
    opts: ['3 måneder', '6 måneder', '9 måneder', '12 måneder'],
    correct: 1,
    explain: 'Aml. § 15-6 (1): Prøvetid kan avtales skriftlig til inntil 6 måneder. I prøvetiden er det kortere oppsigelsestid (14 dager) og arbeidsgiver kan si opp ved manglende tilpasning, faglig dyktighet eller pålitelighet.'
  },

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hva er oppsigelsesfristen i prøvetiden?',
    opts: ['3 dager', '7 dager', '14 dager', '1 måned'],
    correct: 2,
    explain: 'Aml. § 15-6 (4): Den gjensidige oppsigelsesfristen i prøvetiden er 14 dager, med mindre noe annet er skriftlig avtalt eller fastsatt i tariffavtale.'
  },

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hva skal alltid inngå i en skriftlig arbeidsavtale etter arbeidsmiljøloven?',
    opts: [
      'Kun lønn og stillingstittel',
      'Arbeidssted, stillingstittel, startdato, arbeidstid og lønn',
      'Kun ansettelsestidspunkt og oppsigelsestid',
      'Bostedsadresse og personnummer'
    ],
    correct: 1,
    explain: 'Aml. § 14-6 krever at arbeidsavtalen inneholder bl.a. arbeidssted, stillingstittel/-beskrivelse, startdato, forventet varighet (ved midlertidig), avtalt arbeidstid, lønn, og oppsigelsesfrister.'
  },

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hva er permittering?',
    opts: [
      'Permanent oppsigelse av ansatte',
      'Midlertidig fritak fra arbeidsplikt ved mangel på arbeid — arbeidsforholdet består',
      'En form for disiplinærstraff',
      'Frivillig permisjon søkt av arbeidstaker'
    ],
    correct: 1,
    explain: 'Permittering innebærer at arbeidstaker midlertidig fritas fra arbeidsplikten, mens arbeidsforholdet opprettholdes. Arbeidsgiver betaler lønn i lønnspliktperioden (normalt 10 dager), deretter overtar NAV med dagpenger.'
  },

  {
    cat: 'ansettelse', catLabel: 'Ansettelse',
    q: 'Hvilken lov regulerer retten til sykepenger?',
    opts: ['Ferieloven', 'Arbeidsmiljøloven', 'Folketrygdloven', 'Tariffavtalen alene'],
    correct: 2,
    explain: 'Retten til sykepenger er regulert i folketrygdloven kapittel 8. Arbeidsgiver betaler de første 16 kalenderdagene (arbeidsgiverperioden). Etter dette overtar NAV, forutsatt at arbeidstaker har opptjent rett.'
  },

  // ── HMS og internkontroll ──────────────────────────────────────

  {
    cat: 'hms', catLabel: 'HMS',
    q: 'Hva er formålet med Internkontrollforskriften (IK-HMS)?',
    opts: [
      'Å kontrollere arbeidstakernes timerapportering',
      'Å sikre systematisk og forebyggende HMS-arbeid i virksomheten',
      'Å godkjenne elektriske installasjoner',
      'Å regulere priser i elektrobransjen'
    ],
    correct: 1,
    explain: 'Internkontrollforskriften (forskrift om systematisk helse-, miljø- og sikkerhetsarbeid i virksomheter) pålegger virksomheter å jobbe systematisk og forebyggende med HMS — kartlegge risiko, sette mål og dokumentere tiltak.'
  },

  {
    cat: 'hms', catLabel: 'HMS',
    q: 'Hva betyr forkortelsen SHA i bygge- og anleggsprosjekter?',
    opts: [
      'Sertifisering, Håndbok og Anlegg',
      'Sikkerhet, Helse og Arbeidsmiljø',
      'Standard, HMS og Avfall',
      'Skade, Hendelse og Avvik'
    ],
    correct: 1,
    explain: 'SHA-plan (Sikkerhet, Helse og Arbeidsmiljø-plan) er lovpålagt for bygge- og anleggsprosjekter etter byggherreforskriften. Som elektriker på byggeplass vil du møte kravet om SHA-plan hos totalentreprenør.'
  },

  {
    cat: 'hms', catLabel: 'HMS',
    q: 'Hva er et SJA (sikker jobb-analyse)?',
    opts: [
      'En juridisk kontrakt mellom arbeidsgiver og arbeidstaker',
      'En systematisk gjennomgang av risiko og tiltak før farlig arbeid utføres',
      'Et sertifikat for elektrikere',
      'En rapport som sendes til Arbeidstilsynet etter ulykker'
    ],
    correct: 1,
    explain: 'SJA (sikker jobb-analyse) er en metode for å identifisere farer, vurdere risiko og planlegge sikkerhetstiltak før farlig eller uvanlig arbeid. Vanlig i elektrobransjen ved arbeid i høyspenningsanlegg og annet risikoarbeid.'
  },

  {
    cat: 'hms', catLabel: 'HMS',
    q: 'Hva er HSE/HMS-kortets formål på norske byggeplasser?',
    opts: [
      'Dokumentere at arbeidstaker har betalt fagforeningskontingent',
      'Bevise fagbrev',
      'Legitimere at arbeidstaker er lovlig ansatt og registrert i Arbeidsgiver- og arbeidstakerregisteret',
      'Dokumentere at arbeidstaker har gyldig sertifikat for kran'
    ],
    correct: 2,
    explain: 'HMS-kortet (id-kortet) på byggeplasser skal vise at arbeidstakeren er lovlig ansatt. Det skal inneholde navn, bilde, arbeidsgiver, og at vedkommende er registrert i AA-registeret (Arbeidsgiver- og arbeidstakerregisteret).'
  },

  {
    cat: 'hms', catLabel: 'HMS',
    q: 'Hvem har plikt til å melde alvorlige arbeidsulykker til myndighetene?',
    opts: [
      'Den skadede arbeidstakeren selv',
      'Verneombudet',
      'Arbeidsgiveren',
      'Bedriftshelsetjenesten'
    ],
    correct: 2,
    explain: 'Aml. § 5-2: Arbeidsgiveren har plikt til å melde alvorlige personskader eller dødsfall umiddelbart til Arbeidstilsynet og nærmeste politimyndighet. Verneombudet og tillitsvalgte skal varsles.'
  }

];
