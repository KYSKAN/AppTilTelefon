// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Regnskapsanalyse
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  27 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-regnskap',
  title: 'Regnskapsanalyse',
  subtitle: 'LØM Fagskole',
  description: '27 spørsmål om Regnskapsanalyse fra LØM-pensumet på fagskole.',
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
      'Å registrere alle bilag og bokføre transaksjoner',
      'Å beregne skatt for skattemyndighetene',
      'Å tolke regnskapstall gjennom nøkkeltall for å vurdere bedriftens lønnsomhet, likviditet og soliditet',
      'Å lage neste års budsjett automatisk'
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
    correct: 1,
    explain: 'Resultatgrad = (Ordinært resultat / Driftsinntekter) × 100. Den viser hvor stor prosentandel av omsetningen som er igjen som overskudd etter alle kostnader.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
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
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
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
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er arbeidskapital?',
    opts: [
      'Totalkapital minus egenkapital',
      'Omløpsmidler minus kortsiktig gjeld',
      'Anleggsmidler minus langsiktig gjeld',
      'Egenkapital minus gjeld'
    ],
    correct: 1,
    explain: 'Arbeidskapital = Omløpsmidler − Kortsiktig gjeld. Positiv arbeidskapital betyr at langsiktig finansiering dekker anleggsmidlene og en del av omløpsmidlene – en viktig likviditetsindikator.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
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
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
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
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
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
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
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
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva viser et resultatregnskap?',
    opts: [
      'Bedriftens eiendeler og gjeld på et gitt tidspunkt',
      'Hvilke inntekter og kostnader som er registrert i en periode, samt resultatet (overskudd/underskudd)',
      'Kun bedriftens kontantstrøm',
      'Kun budsjett for kommende år'
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
      'Kontanter og bankinnskudd',
      'Varer på lager som selges innen 1 år',
      'Varige driftsmidler som er tenkt til langvarig bruk (f.eks. bygg, maskiner, biler)',
      'Kortsiktige fordringer'
    ],
    correct: 2,
    explain: 'Anleggsmidler er varige eiendeler ment for langsiktig eie, der det kan ta mer enn 1 år å gjøre dem om til kontanter. Eksempler: bygninger, produksjonsutstyr, biler, patenter.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er omløpsmidler?',
    opts: [
      'Eiendeler tenkt til varig eie',
      'Eiendeler som kan gjøres om til kontanter innen 1 år (varelager, kundefordringer, bankinnskudd, kontanter)',
      'Langsiktig gjeld',
      'Bygninger og maskiner'
    ],
    correct: 1,
    explain: 'Omløpsmidler sirkulerer i bedriften: kontanter → varekjøp → varelager → salg på kreditt → kundefordringer → kontanter. De brukes til å dekke løpende drift og kortsiktig gjeld.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er egenkapital?',
    opts: [
      'Sum av alle eiendeler',
      'Totale eiendeler minus gjeld – den delen eierne reelt eier',
      'All gjeld bedriften har',
      'Total omsetning i året'
    ],
    correct: 1,
    explain: 'EK = Eiendeler − Gjeld. Eksempel: Hus verdt 2 mill. + lån på 1,6 mill. = egenkapital 400 000. I bedrifter består EK av aksjekapital, annen innskutt EK og opptjent EK.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er forskjellen på kortsiktig og langsiktig gjeld?',
    opts: [
      'Kortsiktig gjeld er alltid høyere enn langsiktig',
      'Kortsiktig gjeld skal betales innen 1 år; langsiktig gjeld har lengre nedbetalingstid (f.eks. huslån)',
      'Kortsiktig er gratis, langsiktig koster renter',
      'Det er ingen praktisk forskjell'
    ],
    correct: 1,
    explain: 'Kortsiktig gjeld: leverandørgjeld, skyldig mva., skyldig lønn, kassekreditt – forfaller innen 12 mnd. Langsiktig: pantelån, obligasjonslån – går over flere år. Skillet er viktig for likviditetsvurdering.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er bruttofortjenesteprosent (BFP)?',
    opts: [
      'Varekostnad / Salgsinntekter × 100 – viser kostnadsnivå',
      '(Salgsinntekter − Varekostnad) / Salgsinntekter × 100 – viser lønnsomheten på varesalg',
      'Totalkapital / Egenkapital × 100 – viser gjeldsgrad',
      'Overskudd / Salgsinntekter × 100 – viser nettofortjeneste'
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
      'En utbetaling til banken',
      'Kostnadsføring av verditap på eiendeler (pga. alder, slitasje) fordelt over levetiden',
      'Kjøp av nytt utstyr',
      'Innbetaling fra kunder'
    ],
    correct: 1,
    explain: 'Avskrivning sprer kostnaden for et anleggsmiddel over dens levetid. F.eks. en servicebil til 300 000 kr med 6 års levetid gir 50 000 kr/år i avskrivning (lineært). Er en kostnad i resultatregnskapet, men ingen utbetaling — viktig å forstå i prosjektkalkyler.'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Er avdrag en kostnad?',
    opts: [
      'Ja, avdrag er alltid en kostnad',
      'Nei – avdrag er en utbetaling og nedbetaling av gjeld, ikke en kostnad. Renten på lånet er derimot en kostnad',
      'Ja, men bare for banker',
      'Kun hvis avdraget er over 10 000'
    ],
    correct: 1,
    explain: 'Viktig skille: Avdrag = nedbetaling av gjeld (påvirker kun balansen og likviditeten). Renter = kostnad (påvirker resultatregnskapet). Mange blander disse sammen.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva menes med likviditet?',
    opts: [
      'Bedriftens langsiktige lønnsomhet',
      'Bedriftens betalingsevne – evnen til å betale regninger ved forfall',
      'Antall ansatte',
      'Mengden varer på lager'
    ],
    correct: 1,
    explain: 'Likviditet = betalingsevne på kort sikt. En bedrift kan være lønnsom (overskudd på sikt) men likevel ha dårlig likviditet hvis betalinger er feil timet. Likviditetsbudsjett brukes for å planlegge.'
  },
  {
    cat: 'likviditet', catLabel: 'Likviditet & soliditet',
    q: 'Hva er soliditet?',
    opts: [
      'Bedriftens evne til å betale regninger i dag',
      'Bedriftens evne til å tåle tap over tid – avhenger av egenkapitalandelen',
      'Bedriftens evne til å skape omsetning',
      'Hvor mange eiere bedriften har'
    ],
    correct: 1,
    explain: 'Soliditet sier hvor robust bedriften er for nedgangstider og tap. Høy egenkapitalandel = høy soliditet. Nøkkeltall: Egenkapitalandel og gjeldsgrad.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er rentabilitet?',
    opts: [
      'Det samme som omsetning',
      'Avkastning uttrykt i prosent av investert kapital – viser lønnsomhet i forhold til kapitalbruk',
      'Rente på banklån',
      'Prosenten gjeld utgjør av totalkapital'
    ],
    correct: 1,
    explain: 'Rentabilitet = avkastning i prosent. Brukes til å sammenligne lønnsomhet mellom bedrifter og bransjer. Eksempler: TKR (totalkapital), EKR (egenkapital), SKR (sysselsatt kapital).'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er driftsresultat?',
    opts: [
      'Resultat etter skatt',
      'Driftsinntekter minus driftskostnader – resultatet fra selve driften, før finansposter',
      'Salgsinntekter minus varekostnad',
      'Summen av alle inntekter'
    ],
    correct: 1,
    explain: 'Driftsresultat = Driftsinntekter − Driftskostnader. Deretter trekker man fra finanskostnader (og legger til finansinntekter) for å få ordinært resultat før skatt.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er formelen for dekningsgrad (DG)?',
    opts: [
      'Faste kostnader / Variable kostnader × 100',
      'Dekningsbidrag / Salgspris × 100',
      'Overskudd / Totalkapital × 100',
      'Variable kostnader / Salgspris × 100'
    ],
    correct: 1,
    explain: 'DG = (DB / Salgspris) × 100. Viser hvor stor prosentandel av salgsprisen som bidrar til å dekke faste kostnader og overskudd. Brukes bl.a. til å beregne nullpunktsomsetning.'
  },
  {
    cat: 'nøkkeltall', catLabel: 'Nøkkeltall & lønnsomhet',
    q: 'Hva er inntekt?',
    opts: [
      'Det bedriften har betalt ut i lønn',
      'Salgsverdien av det bedriften har solgt i en periode (f.eks. salgsinntekt/driftsinntekt)',
      'Bedriftens resultat',
      'Summen av gjeld bedriften har'
    ],
    correct: 1,
    explain: 'Inntekt = salgsverdien av leverte varer/tjenester i en periode. Registreres i resultatregnskapet. Ikke forveksles med innbetaling (som skjer i likviditeten).'
  },
  {
    cat: 'balanse', catLabel: 'Balanse & eiendeler',
    q: 'Hva er totalkapital?',
    opts: [
      'Egenkapital alene',
      'Gjeld alene',
      'Summen av egenkapital og gjeld (= sum eiendeler)',
      'Anleggsmidler alene'
    ],
    correct: 2,
    explain: 'Totalkapital = Egenkapital + Gjeld = Sum eiendeler. Uttrykker hele balansen. Brukes i nøkkeltall som TKR og egenkapitalandel.'
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
