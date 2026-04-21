// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Økonomistyring
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  28 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-okonomi',
  title: 'Økonomistyring',
  subtitle: 'LØM Fagskole',
  description: '28 spørsmål om Økonomistyring fra LØM-pensumet på fagskole.',
  cats: {
    kalkyler:{ label: 'Kalkyler & kostnader',  color: '#10b981' },
    budsjett:{ label: 'Budsjetter',             color: '#5c7cfa' },
    lovverk: { label: 'Lovverk & regelverk',    color: '#f59e0b' },
    selskap: { label: 'Selskapsformer & finans',color: '#ec4899' }
  }
};

const QUESTIONS = [

  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
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
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er nullpunktsomsetning (break-even)?',
    opts: [
      'Omsetningen der bedriften begynner å tjene mye penger',
      'Det salgsnivået der de variable kostnadene er dekket',
      'Det salgsnivået der bedriften verken har overskudd eller underskudd – totale inntekter = totale kostnader',
      'Den laveste salgsprisen bedriften kan sette uten tap'
    ],
    correct: 2,
    img: `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><line x1="28" y1="12" x2="28" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="148" x2="268" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><text x="148" y="163" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Omsetning / volum</text><line x1="28" y1="106" x2="268" y2="106" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/><line x1="28" y1="106" x2="268" y2="56" stroke="#e74c3c" stroke-width="2"/><line x1="28" y1="148" x2="268" y2="28" stroke="#10b981" stroke-width="2"/><circle cx="168" cy="84" r="5" fill="white" stroke="#5c7cfa" stroke-width="2.5"/><line x1="168" y1="84" x2="168" y2="148" stroke="#5c7cfa" stroke-width="1.5" stroke-dasharray="4,3"/><text x="244" y="104" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">FK</text><text x="244" y="50" fill="#e74c3c" font-size="9" font-family="system-ui,sans-serif">TK</text><text x="244" y="24" fill="#10b981" font-size="9" font-family="system-ui,sans-serif">Inntekt</text><text x="168" y="160" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Nullpunkt</text><text x="90" y="136" fill="#e74c3c" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">TAP</text><text x="220" y="136" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">OVERSKUDD</text></svg>`,
    explain: 'Under nullpunktet = tap. Over nullpunktet = overskudd. Formel: Nullpunktsomsetning = Faste kostnader / Dekningsgrad. For en elektrobedrift: hvis faste kostnader er 2 mill. kr/år og DG er 40 %, må bedriften omsette for 5 mill. kr for å gå i null.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er variable kostnader?',
    opts: [
      'Kostnader som alltid er like store hver måned',
      'Kostnader som varierer med produksjonsmengden (f.eks. materialer, emballasje)',
      'Kostnader knyttet til ledelse',
      'Bare lønnskostnader'
    ],
    correct: 1,
    explain: 'Variable kostnader endrer seg når aktiviteten endrer seg. Typiske eksempler: råvarer, emballasje, provisjonslønn. Jo mer man produserer, jo høyere blir totalt variable kostnader.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er faste kostnader?',
    opts: [
      'Kostnader som varierer med produksjonsmengden',
      'Kostnader som ikke varierer med produksjonsmengden (f.eks. husleie, fast lønn, forsikring)',
      'Bare ekstraordinære kostnader',
      'Kostnader som betales kontant'
    ],
    correct: 1,
    explain: 'Faste kostnader påløper uavhengig av produksjonsnivået i det relevante aktivitetsområdet. Eksempler: husleie, fastlønn til administrasjon, forsikring, lineære avskrivninger.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er direkte kostnader?',
    opts: [
      'Kostnader som bedriften betaler kontant',
      'Kostnader som kan knyttes direkte til et produkt, prosjekt eller ordre',
      'Kostnader uten moms',
      'Bare variable kostnader'
    ],
    correct: 1,
    explain: 'Direkte kostnader = kan spores direkte til et bestemt produkt/ordre (direkte materialer, direkte lønn). Indirekte kostnader (felleskostnader/OH) må fordeles via tillegg eller fordelingsnøkler.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
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
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er selvkostmetoden (selvkostkalkylen)?',
    opts: [
      'En kalkylemetode der kun variable kostnader knyttes til produktet',
      'En metode for å beregne dekningsbidraget per produkt',
      'En kalkylemetode der alle kostnader (faste og variable) fordeles på produktet for å finne totalkostnad per enhet',
      'En metode for å sette pris basert på hva markedet er villig til å betale'
    ],
    correct: 2,
    explain: 'Selvkostkalkylen: direkte materialkostnader + direkte lønnskostnader + indirekte kostnader (OH-tillegg for admin og rigg) = Selvkost. I el-entreprise er dette grunnlaget for tilbudsprisen: Selvkost + fortjenestepåslag = tilbudspris. Legger du inn for lav selvkost taper du penger på oppdraget.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er forskjellen mellom bidragsmetoden og selvkostmetoden?',
    opts: [
      'Bidragsmetoden brukes kun i produksjonsbedrifter, selvkostmetoden kun i handel',
      'Bidragsmetoden henfører kun variable kostnader til produktet; selvkostmetoden fordeler alle kostnader',
      'Det er ingen forskjell – de gir samme resultat',
      'Bidragsmetoden er for lang sikt, selvkostmetoden for kort sikt'
    ],
    correct: 1,
    explain: 'Bidragsmetoden: Salgspris − Variable kostnader = DB (faste kostnader holdes utenfor). Selvkostmetoden: Alle kostnader inkluderes for å finne full kostpris. Begge er viktige verktøy i prissetting og lønnsomhetsanalyse.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er tilvirkningskost?',
    opts: [
      'Bare direkte materialer',
      'Direkte kostnader + indirekte tilvirkningskostnader – selvkost før salgs- og administrasjonskostnader er lagt til',
      'Salgspris minus fortjeneste',
      'Alle kostnader i bedriften'
    ],
    correct: 1,
    explain: 'Tilvirkningskost = Direkte material + Direkte lønn + Indirekte tilvirkningskostnader (f.eks. fabrikkleie, maskinavskrivninger). Legger man til indirekte salgs-/adm.kostnader får man selvkost.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er kalkulatoriske kostnader?',
    opts: [
      'Kun betalbare kostnader',
      'Beregnede eller anslåtte kostnader som ikke nødvendigvis gir en utbetaling (f.eks. kalkulatorisk rente på egenkapital, kalkulatoriske avskrivninger)',
      'Feriepenger',
      'Renter på leverandørgjeld'
    ],
    correct: 1,
    explain: 'Kalkulatoriske kostnader brukes i kalkyler for å få et riktigere bilde av virkelige kostnader – selv om de ikke gir en faktisk utbetaling. Viktig for prissetting og sammenligning.'
  },
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
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
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'Hva er grunnformelen i et likviditetsbudsjett?',
    opts: [
      'Inntekter − Kostnader = Resultat',
      'IB beholdning + Innbetalinger − Utbetalinger = UB beholdning',
      'Egenkapital + Gjeld = Totalkapital',
      'Salgspris − Variable kostnader = DB'
    ],
    correct: 1,
    explain: 'IB (inngående beholdning) + alle innbetalinger i perioden − alle utbetalinger i perioden = UB (utgående beholdning). Gjøres typisk måned for måned for å forutsi likviditetsbehov.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er merverdiavgift (MVA)?',
    opts: [
      'En skatt bedriften betaler av overskuddet',
      'En generell omsetningsavgift på varer og tjenester som sluttkunden i praksis betaler, mens bedrifter videreformidler den til staten',
      'En straff for for sent innlevert regnskap',
      'En avgift kun kjøpere i utlandet betaler'
    ],
    correct: 1,
    explain: 'MVA er en statlig avgift på forbruk. Bedrifter legger til utgående mva. ved salg, trekker fra inngående mva. på innkjøp, og betaler netto til staten – normalt seks terminer i året. Standardsats i Norge er 25 %.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er en fordel med å være merverdiavgiftspliktig?',
    opts: [
      'Man slipper å føre regnskap',
      'Man får trekke fra inngående mva. på egne innkjøp og investeringer – og har mva. til gode i kassa fram til avgiftsoppgjøret (positivt for likviditeten)',
      'Man slipper å betale skatt',
      'Man får høyere overskudd automatisk'
    ],
    correct: 1,
    explain: 'Mva-registrerte bedrifter sparer 25 % på investeringer i utstyr, lokaler og driftskjøp siden mva. trekkes fra. I tillegg sitter man på mva-pengene en stund før de betales inn – gratis «lån».'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er forskjellen på et enkeltpersonforetak (ENK) og et aksjeselskap (AS)?',
    opts: [
      'Ingen forskjell i praksis',
      'ENK: eier har personlig og ubegrenset ansvar for gjeld, enkel etablering. AS: egen juridisk enhet, begrenset ansvar, krever aksjekapital og mer formaliteter',
      'ENK kan ikke drive næring',
      'AS kan kun ha én eier'
    ],
    correct: 1,
    explain: 'ENK: billig å starte, én eier, men fullt personlig ansvar. AS: krever aksjekapital (i dag 30 000 kr i Norge), egen juridisk enhet, begrenset ansvar, dyrere regnskap og krav om styre/generalforsamling.'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er minimumskravet til aksjekapital ved etablering av AS i Norge?',
    opts: [
      '10 000 kr',
      '30 000 kr',
      '100 000 kr',
      '1 000 000 kr'
    ],
    correct: 1,
    explain: 'Minimum aksjekapital i et norsk AS er 30 000 kr (redusert fra 100 000 kr i 2012). Dette er bedriftens egenkapital ved oppstart og gir et minimum av trygghet for kreditorer.'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva menes med solidarisk ansvar i et ansvarlig selskap (ANS)?',
    opts: [
      'Hver partner har ansvar bare for sin egen andel',
      'Alle partnere har fullt ansvar for selskapets gjeld – kreditor kan kreve hele beløpet av én partner hvis andre ikke kan betale',
      'Ingen partnere har ansvar',
      'Bare daglig leder har ansvar'
    ],
    correct: 1,
    explain: 'Solidarisk ansvar = hver og en kan kreves for hele gjelden. Dette er en stor risiko i ANS sammenlignet med AS. I DA (delt ansvar) er ansvaret derimot delt mellom eierne.'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er finansiering?',
    opts: [
      'Å betale lønn til ansatte',
      'Å skaffe penger/kapital til bedriften – kan være egenkapital eller fremmedkapital (lån)',
      'Å selge varer til kunder',
      'Å beregne skatt'
    ],
    correct: 1,
    explain: 'Finansiering handler om hvor kapitalen skal komme fra: egenkapital (eierinnskudd, opptjent overskudd) eller fremmedkapital (banklån, leverandørkreditt, obligasjoner). Valg av miks påvirker risiko og avkastning.'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er forskjellen mellom fisjon og fusjon?',
    opts: [
      'Fisjon = deling av et selskap; Fusjon = sammenslåing av selskaper',
      'Fisjon = sammenslåing; Fusjon = deling',
      'Begge betyr nedleggelse',
      'Det er ingen forskjell – bare ulike ord for det samme'
    ],
    correct: 0,
    explain: 'Fusjon = slå sammen to eller flere selskaper til ett (vanlig ved oppkjøp eller samarbeid). Fisjon = splitte opp ett selskap til flere (f.eks. for å skille ut et forretningsområde).'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Regnskapsloven?',
    opts: [
      'Kun regler for bokføring av bilag',
      'Hvem som er regnskapspliktig, krav til årsregnskap, regnskapsprinsipper, oppstillingsplaner og offentliggjøring',
      'Kun skatt',
      'Kun aksjeselskaper'
    ],
    correct: 1,
    explain: 'Regnskapsloven er selve rammeloven for årsregnskap i Norge. Bokføringsloven dekker daglig bokføring/dokumentasjon. Aksjeloven regulerer selskapsrettslige forhold i AS.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Bokføringsloven?',
    opts: [
      'Regler for bokføring, spesifikasjon, dokumentasjon og oppbevaring av regnskapsopplysninger',
      'Kun feriepenger',
      'Styrets oppgaver i et AS',
      'Regler om oppsigelse'
    ],
    correct: 0,
    explain: 'Bokføringsloven sier hvordan transaksjoner skal registreres, hvilke bilag som kreves, hvordan de skal lagres og hvor lenge. Gjelder alle bokføringspliktige (stort sett alle næringsdrivende).'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Ferieloven?',
    opts: [
      'Bare lønnsforhandlinger',
      'Arbeidstakers rett til feriefritid (25 virkedager) og feriepenger hvert ferieår',
      'Kun bedrifters overtid',
      'Bare permisjonsregler'
    ],
    correct: 1,
    explain: 'Ferieloven sikrer minimum 25 virkedager ferie per år. Feriepenger beregnes som 10,2 % av feriepengegrunnlaget (12 % i avtaler med 5 ukers ferie) og betales normalt ut i juni.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er formålet med Folketrygdloven?',
    opts: [
      'Å regulere aksjeselskaper',
      'Å sikre økonomisk trygghet ved sykdom, arbeidsløshet, alderdom, uførhet, fødsel m.m.',
      'Å regulere kun skatt',
      'Å fastsette mva-satsene'
    ],
    correct: 1,
    explain: 'Folketrygden er et sentralt sikkerhetsnett i Norge: sykepenger, dagpenger, alderspensjon, uføretrygd, foreldrepenger m.m. Finansieres gjennom trygdeavgift og arbeidsgiveravgift.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Permitteringslønnsloven?',
    opts: [
      'Alle feriepenger',
      'Arbeidsgivers plikt til å betale lønn i en arbeidsgiverperiode ved permittering',
      'Styrets sammensetning',
      'Aksjekapital'
    ],
    correct: 1,
    explain: 'Ved permittering må arbeidsgiver betale full lønn i arbeidsgiverperioden (normalt 15 dager). Deretter kan den permitterte søke dagpenger fra NAV. Permittering er nyttig ved midlertidig bortfall av arbeid.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er etikk i en forretningssammenheng?',
    opts: [
      'Kun det lovverket sier',
      'Læren om moral – hvordan vi bør handle, også utover det strengt lovlige. Dårlige etiske valg kan skade omdømmet',
      'Kun regnskapsregler',
      'Kun regler om markedsføring'
    ],
    correct: 1,
    explain: 'Etikk går lenger enn loven. F.eks. er det kanskje ikke ulovlig å skjule informasjon om bivirkninger ved et produkt, men det kan være uetisk – og skadelig for tillit og omdømme om det kommer ut.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er bunden kapital?',
    opts: [
      'Penger bedriften ikke kan røre pga. loven',
      'Kapital som er investert i eiendeler og ikke kan brukes til annet (f.eks. varelager, kundefordringer, inventar, bygninger)',
      'Penger som ligger i banken',
      'Eierens privatkapital'
    ],
    correct: 1,
    explain: 'Bunden kapital «ligger fast» i driften. Reduksjon av bunden kapital (f.eks. mindre varelager, raskere inndriving av fordringer) frigjør penger som kan brukes til andre formål – og reduserer rentekostnader.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hvordan beregnes gjennomsnittlig kapitalbinding i kundefordringer?',
    opts: [
      'Kredittsalg × Kredittid',
      '(Kredittsalg inkl. mva. × Kredittid) / 360',
      'Varekostnad / Varelager',
      'Omsetning / Egenkapital'
    ],
    correct: 1,
    explain: 'Gj.snittlig kundefordringer ≈ (Kredittsalg inkl. mva. × Kredittid) / 360. Eksempel: 30 mill. omsetning, 15 dagers kredittid, 25 % mva → ca. (37,5 mill × 15 / 360) = 1,56 mill. i bunden kapital.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er bruttofortjeneste i kroner?',
    opts: [
      'Salgspris inkl. mva.',
      'Salgsinntekt (ekskl. mva.) − Varekostnad',
      'Lønnskostnad + Husleie',
      'Overskudd etter skatt'
    ],
    correct: 1,
    explain: 'Bruttofortjeneste = Salgsinntekt (ekskl. mva.) − Varekostnad. Uttrykt i prosent av salgsinntekt får man BFP. Viser lønnsomheten på selve varesalget før drifts- og finanskostnader.'
  },

  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva inngår i en prosjektkalkyle for et el-installasjonsoppdrag?',
    opts: [
      'Kun materialkostnader (kabel, kurssikringer, koblingsbokser)',
      'Kun lønnskostnader for montørene',
      'Direkte materialer + direkte lønn + indirekte kostnader (rigg, bil, verktøy) + fortjenestepåslag',
      'Bare fastpris basert på antall kvadratmeter'
    ],
    correct: 2,
    explain: 'En fullstendig prosjektkalkyle inkluderer: (1) Direkte materialkostnader (innkjøpspris + svinn), (2) Direkte lønnskostnader (estimerte timer × timesats inkl. sosiale kostnader), (3) Indirekte kostnader / OH-tillegg (rigg, firmabiler, administrasjon), (4) Fortjenestepåslag. Summen gir tilbudsprisen. Feil kalkyle = tap på prosjektet.'
  },

  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er arbeidsgiveravgift, og hvor stor er standardsatsen for de fleste norske bedrifter?',
    opts: [
      'En avgift ansatte betaler av lønnen sin — 8,2 %',
      'En avgift arbeidsgiveren betaler av lønnsutbetalingene — standardsatsen er 14,1 %',
      'En avgift på bedriftens overskudd — 22 %',
      'En avgift som bare gjelder AS — 10 %'
    ],
    correct: 1,
    explain: 'Arbeidsgiveravgiften (AGA) er en skatt arbeidsgiver betaler til staten av lønnsgrunnlaget. Standardsats er 14,1 % (sone 1 — de fleste steder i landet). For en elektrobedrift er AGA en vesentlig lønnskostnad som alltid skal med i prosjektkalkylen: timesats × (1 + AGA-sats + feriepengeprosent + evt. pensjon).'
  }
];
