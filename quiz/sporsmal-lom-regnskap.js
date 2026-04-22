// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Regnskapsanalyse
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  33 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-regnskap',
  title: 'Regnskapsanalyse',
  subtitle: 'LØM Fagskole',
  description: '33 spørsmål om Regnskapsanalyse fra LØM-pensumet på fagskole – nøkkeltall, DuPont, soliditet og likviditet.',
  cats: {
    nøkkeltall:{ label: 'Nøkkeltall & lønnsomhet', color: '#10b981' },
    balanse:   { label: 'Balanse & eiendeler',      color: '#5c7cfa' },
    likviditet:{ label: 'Likviditet & soliditet',   color: '#f59e0b' }
  }
};

const QUESTIONS = [

  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er formålet med regnskapsanalyse?',
    opts: [
      'Å manuelt registrere alle bilag og bokføre samtlige transaksjoner i regnskapssystemet',
      'Å beregne og rapportere skattepliktig inntekt og formue for skattemyndighetene',
      'Å tolke regnskapstall gjennom nøkkeltall for å vurdere bedriftens lønnsomhet, likviditet og soliditet',
      'Å automatisk generere neste års budsjett basert på historiske regnskapstall'
    ],
    correct: 2,
    explain: 'Regnskapsanalyse bruker nøkkeltall (resultatgrad, TKR, likviditetsgrader, egenkapitalandel osv.) til å vurdere bedriftens finansielle helse og identifisere forbedringsområder.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er formelen for Resultatgrad?',
    opts: [
      'Omsetning / Totalkapital × 100',
      'Ordinært resultat / Driftsinntekter × 100',
      'Egenkapital / Totalkapital × 100',
      'Driftsresultat / Varekostnad × 100'
    ],
    img: `<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="100" fill="#161927" rx="8"/><text x="22" y="26" fill="#7b82a8" font-size="11" font-family="system-ui,sans-serif" font-weight="600">Resultatgrad =</text><rect x="150" y="10" width="90" height="24" fill="#1e2235" rx="4"/><text x="195" y="26" fill="#e8eaf6" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Teller (A)</text><line x1="148" y1="36" x2="244" y2="36" stroke="#5c7cfa" stroke-width="2"/><rect x="150" y="40" width="90" height="24" fill="#1e2235" rx="4"/><text x="195" y="56" fill="#e8eaf6" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Nevner (B)</text><text x="252" y="56" fill="#7b82a8" font-size="12" font-family="system-ui,sans-serif">× 100</text><text x="22" y="82" fill="#7b82a8" font-size="9" font-family="system-ui,sans-serif">Hvilke regnskapsstørrelser er A og B?</text></svg>`,
    correct: 1,
    explain: 'Resultatgrad = (Ordinært resultat / Driftsinntekter) × 100. Den viser hvor stor prosentandel av omsetningen som er igjen som overskudd etter alle kostnader.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er formelen for Likviditetsgrad 1, og hva er kravet for god likviditet?',
    opts: [
      'Omløpsmidler delt på langsiktig gjeld – kravet er at forholdstallet er over 1',
      'Totalkapital delt på kortsiktig gjeld – kravet er at forholdstallet er over 1,5',
      'Omløpsmidler / Kortsiktig gjeld – kravet er over 2',
      '(Omløpsmidler − Varelager) / Kortsiktig gjeld – kravet er over 1'
    ],
    img: `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="130" fill="#161927" rx="8"/><text x="140" y="18" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Likviditetsgrad 1 = A ÷ B</text><rect x="20" y="28" width="86" height="72" fill="rgba(92,124,250,0.1)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="63" y="70" fill="#5c7cfa" font-size="32" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">A</text><text x="63" y="90" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Teller</text><text x="140" y="72" fill="#7b82a8" font-size="28" text-anchor="middle" font-family="system-ui,sans-serif">÷</text><rect x="174" y="50" width="86" height="50" fill="rgba(231,76,60,0.1)" rx="6" stroke="#e74c3c" stroke-width="1.5"/><text x="217" y="80" fill="#e74c3c" font-size="28" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">B</text><text x="217" y="90" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Nevner</text><text x="140" y="118" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva er A og B? Hva er kravet for god likviditet?</text></svg>`,
    correct: 2,
    explain: 'L1 = Omløpsmidler / Kortsiktig gjeld. Kravet er over 2 (men noe lavere kan godtas). Viser om bedriften har nok kortsiktige eiendeler til å betale sin kortsiktige gjeld.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er formelen for Likviditetsgrad 2, og hvorfor skiller den seg fra Likviditetsgrad 1?',
    opts: [
      'Omløpsmidler delt på kortsiktig gjeld – identisk med L1 og ingen reell forskjell',
      '(Omløpsmidler + Varelager) / Kortsiktig gjeld – inkluderer varelageret og gir dermed en høyere verdi',
      '(Omløpsmidler − Varelager) / Kortsiktig gjeld – ekskluderer varelager siden det ikke alltid er lett å gjøre om til kontanter',
      'Egenkapital dividert på kortsiktig gjeld – viser bedriftens soliditet og langsiktige betalingsevne'
    ],
    correct: 2,
    explain: 'L2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld. Kravet er over 1. Varelager trekkes fra fordi det kan ta tid å selge – L2 gir et mer konservativt bilde av betalingsevnen.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er arbeidskapital?',
    opts: [
      'Totalkapital minus egenkapital',
      'Omløpsmidler minus kortsiktig gjeld',
      'Anleggsmidler minus langsiktig gjeld',
      'Egenkapital minus gjeld'
    ],
    img: `<svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="90" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Arbeidskapital = ?</text><rect x="14" y="26" width="80" height="46" fill="rgba(92,124,250,0.12)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="54" y="53" fill="#5c7cfa" font-size="14" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Del A</text><text x="108" y="55" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">−</text><rect x="126" y="36" width="56" height="30" fill="rgba(231,76,60,0.12)" rx="6" stroke="#e74c3c" stroke-width="1.5"/><text x="154" y="55" fill="#e74c3c" font-size="14" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Del B</text><text x="196" y="55" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">=</text><rect x="212" y="26" width="56" height="46" fill="rgba(16,185,129,0.12)" rx="6" stroke="#10b981" stroke-width="1.5"/><text x="240" y="50" fill="#10b981" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="600">Arbeids-kapital</text></svg>`,
    correct: 1,
    explain: 'Arbeidskapital = Omløpsmidler − Kortsiktig gjeld. Positiv arbeidskapital betyr at langsiktig finansiering dekker anleggsmidlene og en del av omløpsmidlene – en viktig likviditetsindikator.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er formelen for Egenkapitalandel, og hva viser den?',
    opts: [
      'Egenkapital dividert på omsetning × 100 – brukes for å vurdere lønnsomhet',
      'Total gjeld dividert på totalkapital × 100 – viser bedriftens totale gjeldsbelastning',
      'Egenkapital / Totalkapital × 100 – viser soliditet',
      'Egenkapital dividert på langsiktig gjeld × 100 – viser bedriftens finansieringsstruktur og gearing'
    ],
    correct: 2,
    explain: 'Egenkapitalandel = (Egenkapital / Totalkapital) × 100. Jo høyere andel, desto mer solid er bedriften – den tåler mer tap uten å gå konkurs.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva måler Totalkapitalrentabilitet (TKR)?',
    opts: [
      'Avkastningen eierne får på den egenkapitalen de har skutt inn i bedriften',
      'Bedriftens løpende evne til å betale kortsiktig gjeld ved forfall',
      'Avkastningen på all kapital i bedriften, uavhengig av finansieringsform',
      'Det prosentvise forholdet mellom bedriftens totale gjeld og den samlede omsetningen'
    ],
    correct: 2,
    explain: 'TKR = (Ordinært resultat + Finanskostnader) / Gjennomsnittlig totalkapital × 100. Måler hvor effektivt bedriften bruker all kapital (egenkapital + gjeld) til å skape avkastning.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er formelen for Gjeldsgrad 1, og hva er anbefalt nivå for norske bedrifter?',
    opts: [
      'Langsiktig gjeld dividert på egenkapital – anbefalt nivå er under 1 for norske bedrifter',
      'Total gjeld / Egenkapital – anbefalt mellom 1 og 2',
      'Kortsiktig gjeld dividert på totalkapital – anbefalt at forholdstallet er under 0,5',
      'Totalkapital dividert på egenkapital – anbefalt at forholdstallet er under 3'
    ],
    correct: 1,
    explain: 'Gjeldsgrad 1 = Total gjeld / Egenkapital. Et nivå mellom 1 og 2 regnes som akseptabelt for norske bedrifter – over 2 indikerer høy gjeldsbelastning og økt risiko.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva viser Egenkapitalrentabilitet (EKR)?',
    opts: [
      'Andelen egenkapital av den totale kapitalen i bedriften – et mål på soliditet',
      'Avkastningen eierne får på investert egenkapital',
      'Bedriftens løpende evne til å innfri og betale kortsiktig gjeld ved forfall',
      'Det prosentvise forholdet mellom varekostnaden og den totale omsetningen i perioden'
    ],
    correct: 1,
    explain: 'EKR = Ordinært resultat / Gjennomsnittlig egenkapital × 100. Viser avkastningen til eierne. En lav EKR betyr at eierne får dårlig betalt for kapitalen de har skutt inn.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva viser et resultatregnskap?',
    opts: [
      'Bedriftens samlede eiendeler, egenkapital og gjeld på et bestemt tidspunkt',
      'Hvilke inntekter og kostnader som er registrert i en periode, samt resultatet (overskudd/underskudd)',
      'Utelukkende bedriftens historiske og fremtidige kontantstrøm fra drift og finans',
      'Utelukkende budsjettet og de planlagte tallene for kommende regnskapsår'
    ],
    correct: 1,
    explain: 'Resultatregnskapet dekker en periode (f.eks. et år): Inntekter − Kostnader = Resultat. Balanseregnskapet viser derimot status på et tidspunkt (f.eks. 31.12).'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva viser et balanseregnskap?',
    opts: [
      'Inntekter og kostnader i en periode',
      'Hva bedriften har av eiendeler, egenkapital og gjeld på et bestemt tidspunkt',
      'Kundefordringer alene',
      'Kun framtidige kontantstrømmer'
    ],
    correct: 1,
    img: `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><line x1="140" y1="10" x2="140" y2="162" stroke="#2a2f4a" stroke-width="2"/><line x1="10" y1="36" x2="270" y2="36" stroke="#2a2f4a" stroke-width="2"/><text x="75" y="28" fill="#5c7cfa" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">EIENDELER</text><text x="205" y="28" fill="#ec4899" font-size="11" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">EK + GJELD</text><text x="18" y="54" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Anleggsmidler:</text><text x="22" y="68" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Biler, verktøy, maskiner</text><text x="22" y="80" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Bygninger, datautstyr</text><text x="18" y="98" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Omløpsmidler:</text><text x="22" y="112" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Varelager, fordringer</text><text x="22" y="124" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Bank og kontanter</text><text x="148" y="54" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Egenkapital:</text><text x="152" y="68" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Aksjekapital</text><text x="152" y="80" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Opptjent overskudd</text><text x="148" y="98" fill="#7b82a8" font-size="10" font-family="system-ui,sans-serif" font-weight="600">Gjeld:</text><text x="152" y="112" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Langsiktig (banklån)</text><text x="152" y="124" fill="#e8eaf6" font-size="9" font-family="system-ui,sans-serif">Kortsiktig (lev.gjeld)</text><line x1="10" y1="142" x2="130" y2="142" stroke="#2a2f4a" stroke-width="1"/><line x1="150" y1="142" x2="270" y2="142" stroke="#2a2f4a" stroke-width="1"/><text x="75" y="157" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Sum eiendeler</text><text x="205" y="157" fill="#ec4899" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Sum EK + Gjeld</text></svg>`,
    explain: 'Balansen = øyeblikksbilde per dato (ofte 31.12). Venstresiden: eiendeler (anlegg + omløpsmidler). Høyresiden: egenkapital + gjeld. Sum eiendeler = sum EK+gjeld alltid. For en elektrobedrift er typiske anleggsmidler: firmabiler, spesialverktøy og EK-målere.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er anleggsmidler?',
    opts: [
      'Kontanter, bankinnskudd og andre likvide midler tilgjengelig i dag',
      'Varer på lager som forventes å bli solgt og omgjort til kontanter innen 1 år',
      'Varige driftsmidler som er tenkt til langvarig bruk (f.eks. bygg, maskiner, biler)',
      'Kortsiktige fordringer og krav som forfaller innen de nærmeste månedene'
    ],
    correct: 2,
    explain: 'Anleggsmidler er varige eiendeler ment for langsiktig eie, der det kan ta mer enn 1 år å gjøre dem om til kontanter. Eksempler: bygninger, produksjonsutstyr, biler, patenter.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er omløpsmidler?',
    opts: [
      'Eiendeler som er kjøpt inn for varig eie og langsiktig bruk i driften',
      'Eiendeler som kan gjøres om til kontanter innen 1 år (varelager, kundefordringer, bankinnskudd, kontanter)',
      'Langsiktig gjeld som banklån og obligasjoner med lengre nedbetalingstid',
      'Bygninger, maskiner og produksjonsutstyr som brukes i den daglige driften'
    ],
    correct: 1,
    explain: 'Omløpsmidler sirkulerer i bedriften: kontanter → varekjøp → varelager → salg på kreditt → kundefordringer → kontanter. De brukes til å dekke løpende drift og kortsiktig gjeld.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er egenkapital?',
    opts: [
      'Den samlede summen av alle eiendeler bedriften har registrert i balansen',
      'Totale eiendeler minus gjeld – den delen eierne reelt eier',
      'All gjeld, både kortsiktig og langsiktig, som bedriften har til kreditorer',
      'Den totale omsetningen bedriften har hatt gjennom hele regnskapsåret'
    ],
    correct: 1,
    explain: 'EK = Eiendeler − Gjeld. Eksempel: Hus verdt 2 mill. + lån på 1,6 mill. = egenkapital 400 000. I bedrifter består EK av aksjekapital, annen innskutt EK og opptjent EK.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er forskjellen på kortsiktig og langsiktig gjeld?',
    opts: [
      'Kortsiktig gjeld er alltid et høyere beløp enn langsiktig gjeld i norske bedrifter',
      'Kortsiktig gjeld skal betales innen 1 år; langsiktig gjeld har lengre nedbetalingstid (f.eks. huslån)',
      'Kortsiktig gjeld er alltid rentefri, mens langsiktig gjeld alltid er rentebærende',
      'Det er ingen praktisk forskjell – begge er bare gjeld som skal betales tilbake til kreditorene'
    ],
    correct: 1,
    explain: 'Kortsiktig gjeld: leverandørgjeld, skyldig mva., skyldig lønn, kassekreditt – forfaller innen 12 mnd. Langsiktig: pantelån, obligasjonslån – går over flere år. Skillet er viktig for likviditetsvurdering.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er bruttofortjenesteprosent (BFP)?',
    opts: [
      'Varekostnad dividert på salgsinntekter × 100 – viser bedriftens samlede kostnadsnivå',
      '(Salgsinntekter − Varekostnad) / Salgsinntekter × 100 – viser lønnsomheten på varesalg',
      'Totalkapital dividert på egenkapital × 100 – et mål på bedriftens gjeldsgrad',
      'Netto overskudd dividert på salgsinntekter × 100 – viser nettofortjenesteprosenten'
    ],
    correct: 1,
    explain: 'BFP = Bruttofortjeneste / Salgsinntekter × 100. Brukes mye i varehandel for å vurdere prissetting og innkjøp. Lav BFP kan tyde på feil prissetting eller høye varekostnader.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er varekostnad?',
    opts: [
      'Det butikken betaler i lønn',
      'IB varelager + Varekjøp − UB varelager',
      'Varesalg minus fortjeneste',
      'Alle kostnader utenom lønn'
    ],
    correct: 1,
    explain: 'Varekostnad = IB varelager + Varekjøp i perioden − UB varelager. Viser faktisk forbruk av varer i perioden, ikke bare det som er kjøpt inn.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er en avskrivning?',
    opts: [
      'En direkte utbetaling til banken som reduserer gjelden med det avskrevne beløpet',
      'Kostnadsføring av verditap på eiendeler (pga. alder, slitasje) fordelt over levetiden',
      'Investering i og kjøp av nytt produksjonsutstyr eller andre driftsmidler',
      'En innbetaling fra kunder som registreres som inntekt i regnskapet'
    ],
    img: `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="130" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">Bokført verdi over tid</text><line x1="28" y1="22" x2="28" y2="106" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="106" x2="268" y2="106" stroke="#2a2f4a" stroke-width="1.5"/><rect x="34" y="28" width="30" height="78" fill="#5c7cfa" rx="3" opacity="0.9"/><rect x="72" y="46" width="30" height="60" fill="#5c7cfa" rx="3" opacity="0.75"/><rect x="110" y="59" width="30" height="47" fill="#5c7cfa" rx="3" opacity="0.65"/><rect x="148" y="70" width="30" height="36" fill="#5c7cfa" rx="3" opacity="0.5"/><rect x="186" y="79" width="30" height="27" fill="#5c7cfa" rx="3" opacity="0.4"/><rect x="224" y="86" width="30" height="20" fill="#5c7cfa" rx="3" opacity="0.3"/><text x="49" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 1</text><text x="87" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 2</text><text x="125" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 3</text><text x="163" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 4</text><text x="201" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 5</text><text x="239" y="118" fill="#7b82a8" font-size="8" text-anchor="middle" font-family="system-ui,sans-serif">År 6</text></svg>`,
    correct: 1,
    explain: 'Avskrivning sprer kostnaden for et anleggsmiddel over dens levetid. F.eks. en servicebil til 300 000 kr med 6 års levetid gir 50 000 kr/år i avskrivning (lineært). Er en kostnad i resultatregnskapet, men ingen utbetaling — viktig å forstå i prosjektkalkyler.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Er avdrag en kostnad?',
    opts: [
      'Ja, avdrag er alltid en kostnad som reduserer bedriftens resultat i perioden det betales',
      'Nei – avdrag er en utbetaling og nedbetaling av gjeld, ikke en kostnad. Renten på lånet er derimot en kostnad',
      'Ja, men kun for finansinstitusjoner og banker som holder gjeld som eiendel',
      'Dersom avdraget overstiger en viss beløpsgrense per termin'
    ],
    correct: 1,
    explain: 'Viktig skille: Avdrag = nedbetaling av gjeld (påvirker kun balansen og likviditeten). Renter = kostnad (påvirker resultatregnskapet). Mange blander disse sammen.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva menes med likviditet?',
    opts: [
      'Bedriftens langsiktige lønnsomhet og evne til å generere overskudd over tid',
      'Bedriftens betalingsevne – evnen til å betale regninger ved forfall',
      'Det totale antallet fast ansatte og midlertidige ansatte i virksomheten',
      'Mengden varer og materialer bedriften har liggende på lager til enhver tid'
    ],
    correct: 1,
    explain: 'Likviditet = betalingsevne på kort sikt. En bedrift kan være lønnsom (overskudd på sikt) men likevel ha dårlig likviditet hvis betalinger er feil timet. Likviditetsbudsjett brukes for å planlegge.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er soliditet?',
    opts: [
      'Bedriftens kortsiktige evne til å betale alle regninger og krav som forfaller i dag',
      'Bedriftens evne til å tåle tap over tid – avhenger av egenkapitalandelen',
      'Bedriftens evne til å vokse og skape tilstrekkelig omsetning i markedet',
      'Hvor mange eiere og aksjonærer bedriften totalt har i sin eierstruktur'
    ],
    correct: 1,
    explain: 'Soliditet sier hvor robust bedriften er for nedgangstider og tap. Høy egenkapitalandel = høy soliditet. Nøkkeltall: Egenkapitalandel og gjeldsgrad.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er rentabilitet?',
    opts: [
      'Det samme som omsetning og driftsinntekter – rentabilitet er bare et annet ord for dette',
      'Avkastning uttrykt i prosent av investert kapital – viser lønnsomhet i forhold til kapitalbruk',
      'Renten bedriften betaler på banklån og andre rentebærende gjeldsposter',
      'Den prosenten total gjeld utgjør av bedriftens samlede totalkapital i balansen'
    ],
    correct: 1,
    explain: 'Rentabilitet = avkastning i prosent. Brukes til å sammenligne lønnsomhet mellom bedrifter og bransjer. Eksempler: TKR (totalkapital), EKR (egenkapital), SKR (sysselsatt kapital).'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er driftsresultat?',
    opts: [
      'Resultatet etter at skatt og alle finansposter er trukket fra årets inntekter',
      'Driftsinntekter minus driftskostnader – resultatet fra selve driften, før finansposter',
      'Salgsinntekter fratrukket varekostnad – det som også kalles bruttofortjeneste',
      'Den samlede summen av alle typer inntekter bedriften mottar i en regnskapsperiode'
    ],
    correct: 1,
    explain: 'Driftsresultat = Driftsinntekter − Driftskostnader. Deretter trekker man fra finanskostnader (og legger til finansinntekter) for å få ordinært resultat før skatt.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er formelen for dekningsgrad (DG)?',
    opts: [
      'Faste kostnader dividert på variable kostnader × 100 – viser kostnadsstrukturen',
      'Dekningsbidrag / Salgspris × 100',
      'Netto overskudd dividert på totalkapital × 100 – tilsvarer totalkapitalrentabiliteten',
      'Totale variable kostnader dividert på salgspris × 100 – viser kostnadsprosenten'
    ],
    correct: 1,
    explain: 'DG = (DB / Salgspris) × 100. Viser hvor stor prosentandel av salgsprisen som bidrar til å dekke faste kostnader og overskudd. Brukes bl.a. til å beregne nullpunktsomsetning.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er inntekt?',
    opts: [
      'Det totale beløpet bedriften har utbetalt i lønn og godtgjørelser til ansatte',
      'Salgsverdien av det bedriften har solgt i en periode (f.eks. salgsinntekt/driftsinntekt)',
      'Bedriftens netto resultat etter at alle kostnader og skatt er trukket fra inntektene',
      'Den samlede summen av all gjeld bedriften har til banker, leverandører og andre kreditorer'
    ],
    correct: 1,
    explain: 'Inntekt = salgsverdien av leverte varer/tjenester i en periode. Registreres i resultatregnskapet. Ikke forveksles med innbetaling (som skjer i likviditeten).'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er totalkapital?',
    opts: [
      'Egenkapitalen alene – det eierne har skutt inn og opptjent i bedriften',
      'All gjeld alene – summen av kortsiktig og langsiktig gjeld til kreditorer',
      'Summen av egenkapital og gjeld (= sum eiendeler)',
      'Anleggsmidlene alene – varige driftsmidler og immaterielle eiendeler i balansen'
    ],
    correct: 2,
    explain: 'Totalkapital = Egenkapital + Gjeld = Sum eiendeler. Uttrykker hele balansen. Brukes i nøkkeltall som TKR og egenkapitalandel.'
  },
  // ── Nøkkeltall fra lærerens pensum (Oppsummering.md) ────────
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er driftsmargin, og hva er kravet?',
    opts: [
      'Driftsinntekter dividert på totalkapital × 100 – kravet er at marginen er over 10 %',
      'Driftsresultat / Driftsinntekter × 100 – kravet er ca. 10 % og bør ha positiv utvikling',
      'Resultat etter skatt dividert på egenkapital × 100 – kravet er minst over 5 %',
      'Total omsetning dividert på antall ansatte – kravet er over 1 million kroner per ansatt'
    ],
    correct: 1,
    explain: 'Driftsmargin = Driftsresultat / Driftsinntekter × 100. Viser lønnsomheten av selve driften før finansposter. Krav ca. 10 %. Tiltak ved lav driftsmargin: øke inntekter eller redusere kostnader.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er gjennomsnittlig gjeldsrente, og hva er kravet?',
    opts: [
      'Rentekostnad / Gjennomsnittlig gjeld – bør være lavest mulig og lavere enn TKR',
      'Rentekostnad / Egenkapital – bør være under 3 %',
      'Gjeld / Egenkapital × 100 – bør være under 200 %',
      'Renteinntekter / Totalkapital – bør være høyest mulig'
    ],
    correct: 0,
    explain: 'Gj.sn. gjeldsrente = Rentekostnad / Gj.sn. gjeld. Bør være lavest mulig. TKR bør alltid være høyere enn gjeldsrenten – ellers taper bedriften penger på den lånefinansierte kapitalen (negativ «gearing»).'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er kapitalens omløpshastighet?',
    opts: [
      'Antall ganger det totale varelageret skiftes ut og fornyes i løpet av et år',
      'Driftsinntekter / Gjennomsnittlig totalkapital – viser hvor mange ganger kapitalen «omsettes» til inntekter per år',
      'Egenkapital dividert på totalkapital – et nøkkeltall som viser bedriftens soliditet',
      'Antall kunder dividert på antall ansatte – viser effektiviteten i kundebehandlingen'
    ],
    correct: 1,
    explain: 'Kapitalens omløpshastighet = Driftsinntekter / Gj.sn. totalkapital. Høyest mulig er best. DuPont: TKR = Resultatgrad × Omløpshastighet. En lavprisbutikk kan ha lav margin men høy omløpshastighet og likevel god TKR.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er avanse i prosent, og hvordan skiller den seg fra bruttofortjenesteprosent (BFP)?',
    opts: [
      'Avanse % og BFP er fullstendig identiske begreper og gir alltid nøyaktig samme prosentsats',
      'Avanse % = (Salgsinntekt − Varekostnad) / Varekostnad × 100. BFP = (Salgsinntekt − Varekostnad) / Salgsinntekt × 100 – avansen regnes av innkjøpsprisen, BFP av salgsprisen',
      'Avanse % beregnes alltid inkludert mva., mens BFP alltid beregnes ekskludert mva.',
      'Avanse brukes utelukkende i produksjonsbedrifter, mens BFP kun brukes i varehandelen'
    ],
    correct: 1,
    explain: 'Begge viser bruttofortjenesten, men nevneren er ulik: avansen regner av innkjøpsprisen (f.eks. 20 %), BFP regner av salgsprisen (f.eks. 16,7 %). Avansen er alltid høyere enn BFP. Normtall varierer sterkt etter bransje.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er finansieringsgrad 1, og hva er kravet?',
    opts: [
      'Omløpsmidler dividert på kortsiktig gjeld – kravet er at forholdstallet er over 2',
      'Total gjeld dividert på egenkapital – kravet er at forholdstallet er under 2',
      'Anleggsmidler / (Egenkapital + Langsiktig gjeld) – kravet er under 1 (AM bør finansieres langsiktig)',
      'Totalkapital dividert på egenkapital – kravet er at forholdstallet er under 3'
    ],
    correct: 2,
    explain: 'Finansieringsgrad 1 = Anleggsmidler / (EK + Langsiktig gjeld). Kravet er < 1 – anleggsmidler bør helst være langsiktig finansiert. FG1 > 1 betyr at deler av anleggsmidlene er finansiert med kortsiktig gjeld → svak soliditet.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'DuPont-modellen: TKR = Resultatgrad × Kapitalens omløpshastighet. Hva blir TKR hvis resultatgraden er 7,25 % og kapitalens omløpshastighet er 2,0?',
    opts: [
      '3,625 %',
      '9,25 %',
      '14,5 %',
      '28,7 %'
    ],
    img: `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="80" fill="#161927" rx="8"/><text x="140" y="16" fill="#7b82a8" font-size="10" text-anchor="middle" font-family="system-ui,sans-serif">DuPont: TKR = Resultatgrad × Omløpshastighet</text><rect x="14" y="26" width="76" height="32" fill="#1e2235" rx="6" stroke="#10b981" stroke-width="1"/><text x="52" y="47" fill="#10b981" font-size="16" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">7,25 %</text><text x="104" y="47" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">×</text><rect x="118" y="26" width="52" height="32" fill="#1e2235" rx="6" stroke="#10b981" stroke-width="1"/><text x="144" y="47" fill="#10b981" font-size="16" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">2,0</text><text x="186" y="47" fill="#7b82a8" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif">=</text><rect x="202" y="24" width="64" height="36" fill="rgba(92,124,250,0.15)" rx="6" stroke="#5c7cfa" stroke-width="1.5"/><text x="234" y="47" fill="#5c7cfa" font-size="22" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="700">?</text><text x="140" y="72" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Hva er TKR?</text></svg>`,
    correct: 2,
    explain: 'TKR = 7,25 % × 2,0 = 14,5 %. DuPont viser at to bedrifter kan ha lik TKR via ulike strategier: høy margin × lav omløpshastighet (premium), eller lav margin × høy omløpshastighet (volum). Nyttig for å finne flaskehalsen i lønnsomheten.'
  },

  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva kan en lav resultatgrad kombinert med høy kapitalomløpshastighet tyde på?',
    opts: [
      'At bedriften tjener lite per krone solgt, men veksler kapitalen mange ganger (typisk dagligvare/lavprismodell)',
      'At bedriften har dårlig likviditet',
      'At bedriften er en luksusforretning',
      'At bedriften vil gå konkurs'
    ],
    correct: 0,
    explain: 'Det er to klassiske lønnsomhetsstrategier: høy margin × lav omløpshastighet (luksusprodukter), eller lav margin × høy omløpshastighet (volumhandel som Rema, Kiwi). Begge kan gi god TKR.'
  }
];
