const QUIZ_META = {
  id: 'lom-oks-regnskapsanalyse',
  title: 'Regnskapsanalyse',
  subtitle: 'Økonomistyring – Kap. 8',
  description: '35 spørsmål om alle nøkkeltall for lønnsomhet, soliditet og likviditet – inkludert formler, krav og tiltak for forbedring.',
  cats: {
    lonnsomhet: { label: 'Lønnsomhetsnøkkeltall',  color: '#8b5cf6' },
    soliditet:  { label: 'Soliditetsnøkkeltall',   color: '#3b82f6' },
    likviditet: { label: 'Likviditetsnøkkeltall',  color: '#10b981' },
    tiltak:     { label: 'Tiltak og vurdering',    color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er hensikten med regnskapsanalyse?',
    opts: [
      'Kun å beregne skatten bedriften skal betale',
      'Å vurdere bedriftens lønnsomhet, soliditet og likviditet basert på regnskapstall',
      'Å sammenligne lønnsomheten med budsjett',
      'Å beregne verdien av bedriften ved salg'
    ],
    correct: 1,
    explain: 'Regnskapsanalyse brukes for å vurdere bedriftens finansielle helse på tre dimensjoner: lønnsomhet (tjener man nok?), soliditet (tåler man tap?) og likviditet (kan man betale regningene?).'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er resultatmargin (resultatgrad), og hva er en typisk norm?',
    opts: [
      'Resultatmargin = Driftsresultat / Salgsinntekter × 100; norm: over 20%',
      'Resultatmargin = Resultat før skatt / Salgsinntekter × 100; indikerer andelen av omsetningen som er nettoresultat',
      'Resultatmargin = Bruttofortjeneste / Salgsinntekter × 100; bør være over 50%',
      'Resultatmargin = Årsresultat / Totalkapital × 100; krav 10%'
    ],
    correct: 1,
    explain: 'Resultatmargin = Resultat før skatt / Salgsinntekter × 100. Viser andelen av omsetningen som er igjen etter alle kostnader. Sammenlignes med bransjenormer – varierer mye mellom bransjer.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er driftsmargin, og hva er kravet?',
    opts: [
      'Driftsresultat / Totale eiendeler × 100; krav: over 20%',
      'Driftsresultat / Salgsinntekter × 100; krav: ~10% eller mer',
      'Salgsinntekter / Driftskostnader × 100; krav: over 100%',
      'Bruttofortjeneste / Driftsresultat × 100; krav: over 50%'
    ],
    correct: 1,
    explain: 'Driftsmargin = Driftsresultat / Salgsinntekter × 100. Viser driftsoverskuddet som andel av omsetningen. Et krav på ca. 10% er vanlig – under dette anses driften som lite lønnsom.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er bruttofortjeneste og bruttofortjenesteprosent?',
    opts: [
      'Bruttofortjeneste = Salgsinntekter − Alle driftskostnader; BFP = BF / Salgsinntekter × 100',
      'Bruttofortjeneste = Salgsinntekter − Varekostnader (i kr); BFP = BF / Salgsinntekter × 100',
      'Bruttofortjeneste = Varekostnader − Salgsinntekter; BFP beregnes av varekostnaden',
      'Bruttofortjeneste = Driftsresultat + Rentekostnader; BFP = 10%'
    ],
    correct: 1,
    explain: 'Bruttofortjeneste = Salgsinntekter − Varekostnad (i kr). BFP = Bruttofortjeneste / Salgsinntekter × 100. Viser andelen av salgsprisene som ikke går til varekostnader.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er avanse, og hvordan skiller det seg fra bruttofortjenesteprosent?',
    opts: [
      'Avanse = Bruttofortjeneste / Salgsinntekter × 100 – det er det samme som BFP',
      'Avanse = Bruttofortjeneste / Varekostnaden × 100 – beregnes av innkjøpsprisen, ikke salgsprisen',
      'Avanse = Salgsinntekter / Innkjøpspris × 100',
      'Avanse og BFP gir alltid samme prosenttall'
    ],
    correct: 1,
    explain: 'Avanse = Bruttofortjeneste / Varekostnad × 100. BFP beregnes av salgsprisen, avansen av innkjøpsprisen. Eksempel: vare kjøpt for 100, solgt for 150: BFP = 33%, avanse = 50%.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er totalkapitalrentabilitet (TKR), og hva er kravet?',
    opts: [
      'TKR = Årsresultat / Egenkapital × 100; krav: over 20%',
      'TKR = (Driftsresultat + Renteinntekter) / Gjennomsnittlig totalkapital × 100; krav: 8–10%',
      'TKR = Salgsinntekter / Totalkapital × 100; krav: over 1',
      'TKR = Egenkapital / Gjeld × 100; krav: over 35%'
    ],
    correct: 1,
    explain: 'TKR = (Driftsresultat + Renteinntekter) / Gjennomsnittlig totalkapital × 100. Viser avkastningen på all kapital (egenkapital + gjeld) uavhengig av finansiering. Krav: minst 8–10%, bør overstige gjeldsrenten.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er egenkapitalrentabilitet (EKR), og hva er kravet?',
    opts: [
      'EKR = Driftsresultat / Totalkapital × 100; krav: 8–10%',
      'EKR = Årsresultat / Gjennomsnittlig egenkapital × 100; krav: 18–20%',
      'EKR = Egenkapital / Totalkapital × 100; krav: over 35%',
      'EKR = Salgsinntekter / Egenkapital × 100; krav: over 2'
    ],
    correct: 1,
    explain: 'EKR = Årsresultat / Gjennomsnittlig egenkapital × 100. Viser avkastningen eierne får på sin investering. Krav: 18–20% er vanlig referanse – bør minst overstige alternativ avkastning (aksjeindeks e.l.).'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er kapitalens omløpshastighet, og hva viser den?',
    opts: [
      'Antall ganger varelager selges per år',
      'Driftsinntekter / Gjennomsnittlig totalkapital – viser hvor effektivt kapitalen brukes til å generere omsetning',
      'Antall ganger bedriften snur egenkapitalen på ett år',
      'Totalkapital / Salgsinntekter – viser kapitalintensiteten'
    ],
    correct: 1,
    explain: 'Kapitalens omløpshastighet = Driftsinntekter / Gjennomsnittlig totalkapital. Viser hvor mange ganger i løpet av et år omsettes totalkapitalen. Høyere er bedre – mer omsetning per krone investert.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er DuPont-modellen?',
    opts: [
      'En modell for å beregne alle nøkkeltall i ett trinn',
      'TKR = Kapitalens omløpshastighet × Resultatgrad – viser de to veiene til bedre lønnsomhet',
      'En modell for å beregne egenkapitalrentabilitet fra soliditetstall',
      'En formel for å sammenligne lønnsomhet mellom bransjer'
    ],
    correct: 1,
    explain: 'DuPont-modellen: TKR = Kapitalens omløpshastighet × Resultatgrad. Viser at lønnsomheten kan bedres enten ved å øke effektiviteten (mer omsetning per krone kapital) eller øke marginene (bedre resultatgrad).'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er soliditet, og hva viser soliditetsnøkkeltallene?',
    opts: [
      'Bedriftens evne til å betale regninger på kort sikt',
      'Bedriftens evne til å tåle tap over tid – jo mer egenkapital, jo bedre rustet mot nedturer',
      'Bedriftens evne til å generere god avkastning',
      'Bedriftens omdømme og kredittverdighet i markedet'
    ],
    correct: 1,
    explain: 'Soliditet handler om bedriftens langsiktige finansielle styrke – evnen til å tåle tap og motstå kriser. Jo høyere andel egenkapital i forhold til total kapital, jo mer solid er bedriften.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er arbeidskapital, og hva er normen?',
    opts: [
      'Arbeidskapital = Omløpsmidler − Kortsiktig gjeld; bør være positiv',
      'Arbeidskapital = Egenkapital − Langsiktig gjeld; krav: over null',
      'Arbeidskapital = Totalkapital / Antall ansatte',
      'Arbeidskapital = Varelager + Bankinnskudd'
    ],
    correct: 0,
    explain: 'Arbeidskapital = Omløpsmidler − Kortsiktig gjeld. Viser den frie kapitalen som er tilgjengelig for driften. Bør være positiv – negativ arbeidskapital er et faresignal for likviditeten.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er egenkapitalprosent, og hva er kravet?',
    opts: [
      'Egenkapital / Salgsinntekter × 100; krav: over 10%',
      'Egenkapital / Totalkapital × 100; krav: ~35% eller mer',
      'Egenkapital / Gjeld × 100; krav: minst 50%',
      'Årsresultat / Egenkapital × 100; krav: over 18%'
    ],
    correct: 1,
    explain: 'Egenkapitalprosent = Egenkapital / Totalkapital × 100. Viser andelen av totalkapitalen som er finansiert av eiere (ikke lån). Krav: ~35% er en vanlig norm – jo høyere, jo mer solid.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er gjeldsgrad, og hva er normen?',
    opts: [
      'Gjeldsgrad = Gjeld / Egenkapital; norm: under 2',
      'Gjeldsgrad = Gjeld / Egenkapital; norm: under 7 (men lavere er bedre)',
      'Gjeldsgrad = Egenkapital / Gjeld; krav: over 1',
      'Gjeldsgrad = Langsiktig gjeld / Totalkapital × 100'
    ],
    correct: 1,
    explain: 'Gjeldsgrad = Gjeld / Egenkapital. Viser forholdet mellom fremmedkapital og egenkapital. Norm: under 7, men lav gjeldsgrad er bedre. Høy gjeldsgrad gir sårbarhet for renteøkninger og nedturer.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er finansieringsgrad 1, og hva er normen?',
    opts: [
      'Kortsiktig gjeld / Omløpsmidler; krav: under 1',
      'Anleggsmidler / (Egenkapital + Langsiktig gjeld); krav: under 1 – anleggsmidler bør finansieres av langsiktig kapital',
      'Totalkapital / Egenkapital; krav: under 3',
      'Salgsinntekter / Totalkapital; krav: over 1'
    ],
    correct: 1,
    explain: 'Finansieringsgrad 1 = Anleggsmidler / (Egenkapital + Langsiktig gjeld). Krav: under 1. Viser om anleggsmidler er finansiert av langsiktig kapital. Over 1 betyr at kortsiktig gjeld finansierer anleggsmidler – uheldig.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'Hva er likviditetsgrad 1 (LG1), og hva er kravet?',
    opts: [
      'LG1 = Omløpsmidler / Langsiktig gjeld; krav: over 1',
      'LG1 = Omløpsmidler / Kortsiktig gjeld; krav: over 2',
      'LG1 = Kortsiktig gjeld / Omløpsmidler; krav: under 2',
      'LG1 = Bankinnskudd / Kortsiktig gjeld; krav: over 1'
    ],
    correct: 1,
    explain: 'LG1 = Omløpsmidler / Kortsiktig gjeld. Krav: over 2 (dvs. omløpsmidler bør minst være dobbelt så store som kortsiktig gjeld). LG1 mellom 1 og 2 er advarsel; under 1 er kritisk.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'Hva er likviditetsgrad 2 (LG2), og hva er kravet?',
    opts: [
      'LG2 = Omløpsmidler / Kortsiktig gjeld; krav: over 2',
      'LG2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld; krav: over 1',
      'LG2 = Bankinnskudd + Kasse / Kortsiktig gjeld; krav: over 0,5',
      'LG2 = Kundefordringer / Kortsiktig gjeld; krav: over 1'
    ],
    correct: 1,
    explain: 'LG2 = (Omløpsmidler − Varelager) / Kortsiktig gjeld. Krav: over 1. Viser om de mest likvide omløpsmidlene (ekskl. varelager som kan være vanskelig å selge raskt) dekker kortsiktig gjeld.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'Hva er varelagerets omløpshastighet, og hva er en god verdi?',
    opts: [
      'Varekostnad / Gjennomsnittlig varelager; høy verdi er bra (betyr hurtig omsetning)',
      'Varelager / Varekostnad × 365; lav verdi er bra',
      'Salgsinntekter / Varelager; bør være over 10',
      'Varelager × 365 / Varekostnad; bør overstige 60 dager'
    ],
    correct: 0,
    explain: 'Varelagerets omløpshastighet = Varekostnad / Gjennomsnittlig varelager. Høy verdi betyr at varelageret omsettes raskt – lite kapital bundet opp i lager. Lav verdi kan indikere svakt salg eller overfylt lager.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'Hva er kredittid for kunder, og hva beregner den?',
    opts: [
      'Antall dager fra kunden mottar faktura til betaling i gjennomsnitt; = Gjennomsnittlige kundefordringer × 360 / Kredittsalg inkl. mva',
      'Antall dager kunden får kreditt ifølge kontrakten',
      'Omsetning fra kredittkunder / Total omsetning × 100',
      'Gjeld til kunder / Daglig omsetning'
    ],
    correct: 0,
    explain: 'Kredittid kunder = Gjennomsnittlige kundefordringer × 360 / Kredittsalg inkl. mva. Viser gjennomsnittlig antall dager fra fakturering til betaling. Kort kredittid er bedre for likviditeten.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'Hva er kredittid for leverandører?',
    opts: [
      'Gjennomsnittlig leverandørgjeld × 360 / Varekjøp inkl. mva – viser hvor lenge man utsetter betaling til leverandører',
      'Antall dager leverandøren gir kredit ifølge kontrakten',
      'Leverandørgjeld / Daglig varekjøp',
      'Gjennomsnittlig betalingstid målt i dager per kontrakt'
    ],
    correct: 0,
    explain: 'Kredittid leverandører = Gjennomsnittlig leverandørgjeld × 360 / Varekjøp inkl. mva. Viser gjennomsnittlig antall dager man venter med å betale leverandørene. Lengre kredittid bedrer likviditeten på kort sikt, men kan skade leverandørforholdet.'
  },
  {
    cat: 'tiltak',
    catLabel: 'Tiltak og vurdering',
    q: 'Hvilke tiltak kan bedre lønnsomheten?',
    opts: [
      'Kun redusere antall ansatte',
      'Øke salgsprisene, redusere varekostnaden, øke bruttofortjenesteprosenten, kutte kostnader og øke omsetning',
      'Ta opp mer lån for å finansiere vekst',
      'Øke varelageret for å sikre leveringsdyktighet'
    ],
    correct: 1,
    explain: 'Lønnsomheten bedres ved: øke inntekter (høyere pris, mer salg), bedre varekostnad (forhandlinger, redusere svinn), kutte unødvendige kostnader, forbedre bruttofortjeneste og øke kapitaleffektiviteten.'
  },
  {
    cat: 'tiltak',
    catLabel: 'Tiltak og vurdering',
    q: 'Hvilke tiltak kan bedre soliditeten?',
    opts: [
      'Øke kortsiktig gjeld for å finansiere omløpsmidler',
      'Tilbakeholde overskudd (ikke dele ut utbytte), skyte inn ny egenkapital, nedbetale gjeld',
      'Ta opp mer langsiktig lån og investere i anleggsmidler',
      'Selge varelager og bruke pengene til utbytte'
    ],
    correct: 1,
    explain: 'Soliditeten (egenkapitalandelen) bedres ved: tilbakeholde overskudd i stedet for å dele ut utbytte, skyte inn ny egenkapital fra eiere, betale ned gjeld og unngå unødvendige lån.'
  },
  {
    cat: 'tiltak',
    catLabel: 'Tiltak og vurdering',
    q: 'Hvilke tiltak kan bedre likviditeten?',
    opts: [
      'Øke varelageret for å unngå at varer går tom',
      'Kortere kredittid til kunder, bedre innkrevingsrutiner, redusere varelager, utvide kassekreditt, utsette utbytte',
      'Dele ut mer utbytte for å tiltrekke investorer',
      'Investere i nye anleggsmidler som gir fremtidig inntjening'
    ],
    correct: 1,
    explain: 'Likviditeten bedres ved: raskere innbetaling fra kunder (kortere kredittid, faktoring), redusere varelager, forhandle lengre kredittid fra leverandører, kutte unødvendige utbetalinger og holde tilbake utbytte.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er gjennomsnittsberegning av kapital i rentabilitetsnøkkeltall?',
    opts: [
      'Man bruker siste årets tall for å forenkle beregningen',
      'Gjennomsnittlig kapital = (Kapital IB + Kapital UB) / 2 – for å ta hensyn til endringer i løpet av året',
      'Man bruker alltid kapital per 31.12 (utgående balanse)',
      'Gjennomsnitt beregnes av de siste tre årsregnskapene'
    ],
    correct: 1,
    explain: 'Gjennomsnittlig kapital = (Inngående balanse + Utgående balanse) / 2. Brukes i rentabilitetsnøkkeltall (TKR, EKR) fordi kapitalen kan endre seg gjennom året, og gjennomsnittet gir et mer korrekt bilde.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva er sammenhengen mellom lønnsomhet og soliditet over tid?',
    opts: [
      'Det er ingen sammenheng – de er uavhengige størrelser',
      'God lønnsomhet gir overskudd som kan tilbakeholdes og øke egenkapitalen – bedrer soliditeten over tid',
      'Høy soliditet er alltid negativt for lønnsomheten',
      'Bedre soliditet gir automatisk bedre lønnsomhet'
    ],
    correct: 1,
    explain: 'Lønnsomhet og soliditet henger nøye sammen: overskudd fra god lønnsomhet kan tilbakeholdes og øker egenkapitalen, noe som styrker soliditeten. Dermed bidrar lønnsom drift til finansiell styrke over tid.'
  },
  {
    cat: 'tiltak',
    catLabel: 'Tiltak og vurdering',
    q: 'Hva er den viktigste årsaken til dårlig likviditet?',
    opts: [
      'For lav bruttofortjenesteprosent',
      'For lav egenkapitalprosent i balansen',
      'Lang kredittid til kunder, stor kapital bundet i varelager, sesonmessige svingninger og investeringer',
      'For høy omløpshastighet på varelageret'
    ],
    correct: 2,
    explain: 'Dårlig likviditet skyldes typisk: lang innbetalingstid fra kunder, store varelager som binder kapital, sesongsvingninger, store investeringer og store utbyttebetalinger. God lønnsomhet garanterer ikke god likviditet.'
  },
  {
    cat: 'likviditet',
    catLabel: 'Likviditetsnøkkeltall',
    q: 'En bedrift har LG1 = 1,4 og LG2 = 0,7. Hva sier dette om likviditeten?',
    opts: [
      'Begge nøkkeltallene er gode – likviditeten er tilfredsstillende',
      'LG1 under 2 er et advarselssignal, LG2 under 1 er kritisk – bedriften kan ha problemer med å betale kortsiktig gjeld',
      'LG1 viser god likviditet; LG2 er irrelevant i dette tilfellet',
      'Begge nøkkeltallene er for høye – bedriften har for mye kapital bundet i omløpsmidler'
    ],
    correct: 1,
    explain: 'LG1 = 1,4 er under kravet på 2 (advarsel). LG2 = 0,7 er under kravet på 1 (kritisk – de likvide omløpsmidlene dekker ikke kortsiktig gjeld). Bedriften bør iverksette tiltak for å bedre likviditeten.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'Hva er benchmarking i regnskapsanalyse?',
    opts: [
      'En metode for å falsifisere regnskapstall',
      'Å sammenligne bedriftens nøkkeltall med bransjenormer, konkurrenter eller historiske tall for å vurdere prestasjoner',
      'En metode for å fastsette budsjettmål',
      'Revisjonsprosessen der regnskapet kontrolleres mot referansestandarder'
    ],
    correct: 1,
    explain: 'Benchmarking i regnskapsanalyse betyr å sammenligne egne nøkkeltall mot relevante referanser: bransjegjennomsnitt, konkurrenter og egne historiske tall. Dette gir kontekst for vurderingen.'
  },
  {
    cat: 'tiltak',
    catLabel: 'Tiltak og vurdering',
    q: 'Hva er faktoring, og hva brukes det til for å bedre likviditeten?',
    opts: [
      'En metode for å redusere varelageret',
      'Å selge kundefordringer til et factoringselskap mot umiddelbar betaling (minus en avgift) – gir raskere innbetaling',
      'En form for eksportfinansiering for internasjonale kunder',
      'En metode for å unngå at kunder ikke betaler'
    ],
    correct: 1,
    explain: 'Faktoring innebærer at bedriften selger sine kundefordringer til et factoringselskap som betaler umiddelbart (minus en avgift). Dette omgjør kortsiktige fordringer til kontanter og bedrer likviditeten raskt.'
  },
  {
    cat: 'lonnsomhet',
    catLabel: 'Lønnsomhetsnøkkeltall',
    q: 'En bedrift har TKR = 6% og gjennomsnittlig lånerente = 8%. Hva sier dette?',
    opts: [
      'Bedriften tjener god avkastning på all investert kapital',
      'Bedriften har negativ gearingeffekt – gjeldsfinansieringen koster mer enn avkastningen, noe som svekker EKR',
      'Lav TKR betyr at bedriften bør ta opp mer gjeld',
      'Det er ingen sammenheng mellom TKR og lånerente'
    ],
    correct: 1,
    explain: 'Når TKR (6%) er lavere enn lånerenten (8%), gir gjeld negativ gearingeffekt – man betaler mer for lånet enn man tjener på kapitalen. Dette svekker egenkapitalrentabiliteten. TKR bør overstige gjeldsrenten.'
  },
  {
    cat: 'soliditet',
    catLabel: 'Soliditetsnøkkeltall',
    q: 'Hva viser finansieringsgrad 1 over 1?',
    opts: [
      'At bedriften er svært solid med god buffer',
      'At anleggsmidler finansieres av kortsiktig gjeld – en ugunstig og risikabel situasjon',
      'At omløpsmidler er større enn kortsiktig gjeld',
      'At bedriften har for mye egenkapital'
    ],
    correct: 1,
    explain: 'Finansieringsgrad 1 > 1 betyr at egenkapital + langsiktig gjeld ikke dekker anleggsmidlene – deler av anleggsmidlene finansieres av kortsiktig gjeld. Dette er risikabelt fordi kortsiktig gjeld må fornyes hyppig.'
  },
];
