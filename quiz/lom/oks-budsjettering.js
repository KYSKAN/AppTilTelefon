const QUIZ_META = {
  id: 'lom-oks-budsjettering',
  title: 'Budsjettering',
  subtitle: 'Økonomistyring – Kap. 10',
  description: '28 spørsmål om budsjetttyper, budsjettprosess, likviditetsbudsjettet og budsjettkontroll med avviksanalyse.',
  cats: {
    budsjetttyper:     { label: 'Budsjetttyper',         color: '#8b5cf6' },
    budsjettprosess:   { label: 'Budsjettprosessen',     color: '#3b82f6' },
    likviditetsbudsjett: { label: 'Likviditetsbudsjettet', color: '#10b981' },
    budsjettkontroll:  { label: 'Budsjettkontroll',      color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er et budsjett?',
    opts: [
      'En historisk oversikt over hva bedriften har brukt penger på',
      'En tallmessig oppstilling av forventede økonomiske konsekvenser av planlagte aktiviteter',
      'Et lovpålagt dokument som skal innleveres til myndighetene',
      'En analyse av konkurrentenes kostnader og inntekter'
    ],
    correct: 1,
    explain: 'Et budsjett er en tallmessig oppstilling av de forventede økonomiske konsekvensene av planlagte aktiviteter for en fremtidig periode – bedriftens viktigste planleggings- og styringsverktøy.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er et resultatbudsjett?',
    opts: [
      'Et budsjett som viser inn- og utbetalinger i løpet av perioden',
      'Et budsjett som viser forventede inntekter og kostnader – formålet er å planlegge lønnsomheten',
      'Et budsjett over forventet balanse ved årets slutt',
      'Et budsjett kun for salgsavdelingen'
    ],
    correct: 1,
    explain: 'Resultatbudsjettet viser forventede inntekter og kostnader for perioden. Formålet er å planlegge og styre lønnsomheten. Avskrivninger og kalkulatoriske kostnader inkluderes; betalingstidspunkt ikke.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er et likviditetsbudsjett?',
    opts: [
      'Et budsjett over forventet resultat og fortjeneste',
      'Et budsjett som viser forventede innbetalinger og utbetalinger – formålet er å sikre betalingsevnen til enhver tid',
      'Et budsjett kun for likviditetsbeholdningen i banken',
      'Et budsjett som godkjennes av banken ved søknad om lån'
    ],
    correct: 1,
    explain: 'Likviditetsbudsjettet viser forventede innbetalinger og utbetalinger for å sikre at bedriften til enhver tid er i stand til å betale sine forpliktelser. Det viser likviditetsreserven over tid.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er et balansebudsjett?',
    opts: [
      'Et budsjett som balanserer inntekter og kostnader',
      'En prognose for hvordan balansen forventes å se ut ved slutten av budsjettperioden',
      'Et budsjett der alle avdelinger bidrar likt',
      'Et budsjett som balanserer mellom risikoer og muligheter'
    ],
    correct: 1,
    explain: 'Balansebudsjettet er en fremtidig balanse – en prognose for eiendeler, gjeld og egenkapital slik de forventes å bli ved slutten av budsjettperioden. Avledes fra resultat- og likviditetsbudsjettet.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er de to hovedbudsjettene i en bedrift?',
    opts: [
      'Salgsbudsjett og kostnadsbudsjett',
      'Resultatbudsjett og likviditetsbudsjett',
      'Inntektsbudsjett og investeringsbudsjett',
      'Driftsbudsjett og kapitalbudsjett'
    ],
    correct: 1,
    explain: 'De to hovedbudsjettene er: Resultatbudsjettet (planlegger lønnsomheten) og Likviditetsbudsjettet (planlegger betalingsevnen). De er nært knyttet, men viser ulike sider av virksomheten.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er de viktigste forskjellene mellom resultatbudsjett og likviditetsbudsjett?',
    opts: [
      'Resultatbudsjettet er lovpålagt; likviditetsbudsjettet er frivillig',
      'Tidsforskjell mellom bokføring og betaling, avskrivninger medtas i resultat men ikke likviditet, mva og finanstransaksjoner',
      'Resultatbudsjettet inkluderer mva; likviditetsbudsjettet ikke',
      'Likviditetsbudsjettet viser historiske tall; resultatbudsjettet fremtidige'
    ],
    correct: 1,
    explain: 'Forskjellene skyldes: (1) tidsforskjell mellom inntekts-/kostnadsføring og faktisk betaling, (2) avskrivninger er en kostnad i resultat men IKKE en utbetaling i likviditet, (3) mva er en inn/utbetaling men ikke en inntekt/kostnad, (4) finanstransaksjoner (lån, avdrag) er kun i likviditet.'
  },
  {
    cat: 'budsjettprosess',
    catLabel: 'Budsjettprosessen',
    q: 'Hva er grunnlaget for budsjettprosessen?',
    opts: [
      'Kun historiske regnskapstall fra de siste 3 år',
      'Overordnede mål/strategier, rammer fra ledelsen, regnskapsrapporter og prognoser (pris, lønn, rente)',
      'Konkurrentenes budsjetter og markedsanalyser',
      'Kun fremtidige investeringsplaner og strategiske mål'
    ],
    correct: 1,
    explain: 'Budsjettprosessen bygger på: overordnede mål og strategier, rammer fra ledelsen, regnskapsrapporter (nåsituasjon) og prognoser (forventede priser, lønns- og renteutvikling).'
  },
  {
    cat: 'budsjettprosess',
    catLabel: 'Budsjettprosessen',
    q: 'Hva er "nedenfra og opp"-budsjettering?',
    opts: [
      'Ledelsen setter alle budsjettmål; de ansatte følger opp',
      'Avdelingsledere og ansatte utarbeider budsjettforslag som sammenstilles oppover i organisasjonen',
      'Budsjettet lages av regnskapsavdelingen uten involvering av driftsenheter',
      'Budsjettet starter med en analyse av markedet nedenfra'
    ],
    correct: 1,
    explain: 'Nedenfra og opp: avdelingsledere og ansatte nær driften utarbeider egne budsjettforslag basert på lokal kunnskap. Disse sammenstilles og justeres oppover. Gir høyere eierskap, men kan resultere i for generøse mål.'
  },
  {
    cat: 'budsjettprosess',
    catLabel: 'Budsjettprosessen',
    q: 'Hva er "ovenfra og ned"-budsjettering?',
    opts: [
      'Styret vedtar budsjettet uten innspill fra ledelsen',
      'Toppledelsen setter overordnede rammer og mål som avdelingene deretter detaljerer',
      'Budsjettet utarbeides av ekstern revisor',
      'Budsjettet bestemmes av aksjonærene på generalforsamlingen'
    ],
    correct: 1,
    explain: 'Ovenfra og ned: toppledelsen fastsetter overordnede rammer, krav og mål som avdelingene deretter planlegger innenfor. Gir bedre kontroll og sammenheng, men kan gi lavere eierskap hos ansatte.'
  },
  {
    cat: 'budsjettprosess',
    catLabel: 'Budsjettprosessen',
    q: 'Hvem bør delta i budsjettprosessen?',
    opts: [
      'Kun toppledelsen og styret',
      'Kun regnskapsavdelingen',
      'Ledere og nøkkelpersoner på alle nivåer som har ansvar for inntekter og kostnader',
      'Kun avdelingene som genererer inntekter'
    ],
    correct: 2,
    explain: 'Alle ledere og nøkkelpersoner med budsjettansvar bør involveres – dette gir eierskap til budsjettet, utnytter lokalkunnskap og øker sannsynligheten for at målene nås.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hva er strukturen i likviditetsbudsjettet?',
    opts: [
      'Inntekter − Kostnader = Resultat',
      'Innbetalinger − Utbetalinger = Innbetalingsoverskudd; Likviditetsreserve IB + Innbetalingsoverskudd = Likviditetsreserve UB',
      'Eiendeler − Gjeld = Egenkapital',
      'Salg − Varekostnad = Bruttofortjeneste'
    ],
    correct: 1,
    explain: 'Likviditetsbudsjettet: Innbetalinger − Utbetalinger = Innbetalingsoverskudd (kan være negativt). Likviditetsreserve IB + Innbetalingsoverskudd = Likviditetsreserve UB.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hva er likviditetsreserve?',
    opts: [
      'Det samme som egenkapital',
      'Likviditetsbeholdning (bankinnskudd og kontanter) + ubenyttet kassekreditt',
      'Summen av alle omløpsmidler i balansen',
      'Bedriftens månedlige driftsoverskudd'
    ],
    correct: 1,
    explain: 'Likviditetsreserve = Likviditetsbeholdning (bankinnskudd + kontanter) + Ubenyttet kassekreditt (innvilget kreditgrense minus saldo). Dette er den faktiske betalingsevnen bedriften har til rådighet.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hvorfor er avskrivninger IKKE med i likviditetsbudsjettet?',
    opts: [
      'Fordi avskrivninger er for uforutsigbare til å budsjetteres',
      'Fordi avskrivninger er en kostnad som ikke medfører utbetaling – det er ingen kontantstrøm',
      'Fordi avskrivninger belastes investeringsbudsjettet',
      'Fordi avskrivninger er med i skattebudsjettet i stedet'
    ],
    correct: 1,
    explain: 'Avskrivninger er en regnskapsmessig kostnadsfordeling av kjøpsprisen over levetiden – det skjer ingen faktisk utbetaling. Utbetalingen skjedde ved kjøpstidspunktet. Dermed tas avskrivninger med i resultatbudsjettet, men IKKE i likviditetsbudsjettet.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hvordan beregner man innbetalinger fra kredittsalg i likviditetsbudsjettet?',
    opts: [
      'Kredittsalg bokføres direkte som innbetaling i salgsperioden',
      'Innbetalingene forskyves i henhold til kredittiden – salg i januar med 30 dagers kreditt innbetales i februar',
      'Man bruker en fast prosent av salget som innbetales øyeblikkelig',
      'Kredittsalg medtas kun i resultatbudsjettet, aldri i likviditetsbudsjettet'
    ],
    correct: 1,
    explain: 'Innbetalinger fra kredittsalg forskyves basert på kredittid. Eksempel: salg i januar med 30 dagers kredittid innbetales i februar. Med 15 dager kredittid: halvparten innbetales i januar og halvparten i februar.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hva er varekjøp i likviditetsbudsjettet?',
    opts: [
      'Det samme som varekostnaden i resultatbudsjettet',
      'Varekostnad ± beholdningsendring = varekjøp (uten mva); utbetalinger forskyves med leverandørenes kredittid',
      'Kun de varer som er betalt kontant',
      'Gjennomsnittlig lagerbeholdning × 12'
    ],
    correct: 1,
    explain: 'Varekjøp = Varekostnad ± Beholdningsendring. Øker man varelageret, kjøper man inn mer enn man bruker. Utbetalingene til leverandørene forskyves basert på leverandørenes kredittid (inkl. mva på skattepliktig varekjøp).'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Hvilke tiltak kan iverksettes hvis likviditetsbudsjettet viser negativ likviditetsreserve?',
    opts: [
      'Umiddelbart stenge virksomheten',
      'Forskyve inn/utbetalinger, droppe/utsette investeringer, ta opp lån, selge eiendeler, betalingsutsettelse, begrense utbytte',
      'Øke salgsprisene med umiddelbar virkning',
      'Permittere ansatte for å redusere lønnskostnader'
    ],
    correct: 1,
    explain: 'Tiltak ved forventet negativ likviditetsreserve: (1) forskyve planlagte inn/utbetalinger, (2) droppe/utsette investeringer, (3) oppta nye lån eller utvide kassekreditt, (4) selge unødvendige eiendeler, (5) be om betalingsutsettelse fra leverandører, (6) begrense utbytte.'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er budsjettkontroll?',
    opts: [
      'En ekstern revisjon av budsjettprosessen',
      'Systematisk sammenligning av regnskapsresultater mot budsjett for å identifisere og analysere avvik',
      'En intern kontroll av at budsjettet er riktig godkjent',
      'Kontroll av at alle avdelinger overholder budsjettrammene'
    ],
    correct: 1,
    explain: 'Budsjettkontroll innebærer å sammenligne faktiske regnskapstall med de budsjetterte tallene. Avvik identifiseres, årsaker analyseres og korreksjonstiltak fastsettes. Det er fortløpende og systematisk.'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er de tre trinnene i budsjettkontrollprosessen?',
    opts: [
      'Planlegg → Gjennomfør → Evaluer',
      'Finnes det avvik? → Hva er årsaken til avviket? → Hvilke tiltak skal iverksettes?',
      'Sammenlign → Analyser → Rapporter',
      'Mål → Avvik → Korreksjon → Ny plan'
    ],
    correct: 1,
    explain: '3-trinnsmodellen: (1) Finnes det avvik? (Er forskjellen mellom budsjett og regnskap vesentlig?), (2) Hva er årsaken? (Pris, mengde, svinn, markedsendring?), (3) Hvilke tiltak? (Korreksjon av drift eller budsjett?)'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva defineres som positivt avvik i budsjettkontroll?',
    opts: [
      'Avvik der kostnadene er høyere enn budsjettert',
      'Avvik der virkningen på resultatet er positiv – mer inntekt enn budsjettert eller lavere kostnad enn budsjettert',
      'Avvik der kostnader er lavere enn budsjettert, uansett effekt på resultat',
      'Alle avvik over 10% regnes som positive fordi de er vesentlige'
    ],
    correct: 1,
    explain: 'Positivt avvik = positivt for bedriften: enten mer inntekt enn budsjettert (inntektsavvik) eller lavere kostnader enn budsjettert (kostnadsavvik). Negativt avvik = negativt for bedriften.'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er formelen for inntektsavvik?',
    opts: [
      'Budsjettert inntekt − Regnskapsført inntekt',
      'Regnskapsført inntekt − Budsjettert inntekt (positiv = mer enn budsjettert)',
      'Inntekt × Avviksprosent',
      'Budsjettert inntekt / Regnskapsført inntekt × 100'
    ],
    correct: 1,
    explain: 'Inntektsavvik = Regnskapsført inntekt − Budsjettert inntekt. Positivt tall betyr at man tjente mer enn budsjettert (bra). Kostnadsavvik = Budsjetterte kostnader − Regnskapsførte kostnader. Positivt = lavere kostnader enn budsjettert (bra).'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er vanlige årsaker til positivt avvik i salgsinntekter?',
    opts: [
      'Svinn og tyveri fra lageret',
      'Mengdeavvik (solgte mer enn planlagt) eller prisavvik (oppnådde bedre pris enn budsjettert)',
      'Lavere lønnskostnader enn budsjettert',
      'Leverandørene leverte billigere enn kontraktspris'
    ],
    correct: 1,
    explain: 'Positivt salgsinntektsavvik skyldes enten mengdeavvik (solgte flere enheter enn planlagt) eller prisavvik (solgte til høyere pris enn budsjettert). Begge er gode nyheter for lønnsomheten.'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er vanlige årsaker til negativt avvik i varekostnader?',
    opts: [
      'Kortere leveringstid fra leverandørene',
      'Økt salg (mer varer selges), høyere innkjøpspriser, eller svinn (tyveri, skade, utdaterte varer)',
      'Reduserte lønnskostnader i butikken',
      'Bedre lagerstyring og lavere kapitalbinding'
    ],
    correct: 1,
    explain: 'Negativt varekostnadavvik skyldes typisk: økt salgsvolum (normalt – naturlig konsekvens av mer salg), høyere innkjøpspriser enn budsjettert (prisavvik), eller svinn (tyveri fra kunder/ansatte, skade, utdaterte varer).'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er svinn, og hvorfor er det viktig å overvåke det?',
    opts: [
      'Varer som sendes i retur fra kunder',
      'Varer som forsvinner fra lageret uten å bli registrert som solgt – tyveri, skade, feilregistrering eller utgåtte varer',
      'Kostnader som er budsjettert men ikke brukt',
      'Rabatter og tilbakebetalinger til kunder'
    ],
    correct: 1,
    explain: 'Svinn er varer som "forsvinner" – tyveri (kunder/ansatte), skade under lagring, feilregistrering ved varemottak/kasse eller varer som går ut på dato. Svinn øker varekostnaden og reduserer bruttofortjenesten.'
  },
  {
    cat: 'budsjettkontroll',
    catLabel: 'Budsjettkontroll',
    q: 'Hva er formålet med budsjettkontrollens tilbakekobling til neste periodes budsjettprosess?',
    opts: [
      'Å straffe avdelingene som ikke nådde budsjettet',
      'Å gi økt kunnskap og innsikt som forbedrer grunnlaget for neste periodes budsjetter og forutsetninger',
      'Å dokumentere alle avvik for revisoren',
      'Å beregne bonuser til ansatte som overpresterte'
    ],
    correct: 1,
    explain: 'Budsjettkontrollens viktigste læringseffekt er at kunnskap og innsikt fra avviksanalysen – om interne og eksterne betingelser – brukes aktivt til å forbedre kvaliteten på neste periodes budsjettarbeid.'
  },
  {
    cat: 'budsjetttyper',
    catLabel: 'Budsjetttyper',
    q: 'Hva er sammenhengen mellom resultatbudsjett og likviditetsbudsjett?',
    opts: [
      'De er fullstendig uavhengige og lages separat',
      'Et godt resultat gir alltid god likviditet – de er identiske over tid',
      'Et godt resultat garanterer IKKE god likviditet – tidsdifferansen mellom bokføring og betaling kan gi likviditetsproblemer selv med overskudd',
      'Likviditetsbudsjettet er alltid lik resultatbudsjettet minus avskrivninger'
    ],
    correct: 2,
    explain: 'Resultat og likviditet henger nøye sammen, men er IKKE identiske. En bedrift kan ha godt regnskapsmessig resultat men dårlig likviditet – f.eks. ved lang kredittid til kunder, store varelager eller store investeringer.'
  },
  {
    cat: 'likviditetsbudsjett',
    catLabel: 'Likviditetsbudsjettet',
    q: 'Lønnskostnaden i resultatbudsjettet inkluderer ferielønn og arbeidsgiveravgift. Hva skjer i likviditetsbudsjettet?',
    opts: [
      'Identisk – lønnskostnaden er lik i begge budsjettene',
      'I resultatbudsjettet føres lønnskostnader når de påløper; i likviditetsbudsjettet føres bruttoutbetalinger (inkl. skattetrekk) OG arbeidsgiveravgift/ferielønn når de faktisk betales (terminvis)',
      'Ferielønn og arbeidsgiveravgift utelates i likviditetsbudsjettet',
      'I likviditetsbudsjettet brukes kun nettolønnen ansatte mottar'
    ],
    correct: 1,
    explain: 'Resultatbudsjettet: alle lønnskostnader inkl. feriepenger og arb.giveravgift føres månedlig. Likviditetsbudsjettet: faktiske utbetalinger – lønn utbetales på lønningsdagen, arb.giveravgift betales terminvis (6 ganger/år), feriepenger utbetales i ferien.'
  },
  {
    cat: 'budsjettprosess',
    catLabel: 'Budsjettprosessen',
    q: 'Hva er prognose i budsjetteringssammenheng?',
    opts: [
      'En historisk analyse av hva som faktisk skjedde i fjor',
      'En fremtidsrettet, revidert vurdering av forventede priser, lønnsutvikling og markedsforhold – inngår som grunnlag i budsjettarbeidet',
      'Det endelige budsjettet vedtatt av styret',
      'En ekstern konsulents vurdering av bedriftens fremtidsutsikter'
    ],
    correct: 1,
    explain: 'Prognoser er fremtidsrettede anslag for variabler som priser, lønnsutvikling, rentenivå og markedsforhold. Disse inngår som viktige forutsetninger i budsjettarbeidet og påvirker alle budsjettlinjer.'
  },
];
