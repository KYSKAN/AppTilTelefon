// ════════════════════════════════════════════════════════════════
//  QUIZ-DATA: LØM Fagskole – Økonomistyring
//  Format: se quiz/QUIZ-FORMAT.md for full dokumentasjon
//  48 spørsmål
// ════════════════════════════════════════════════════════════════

const QUIZ_META = {
  id: 'lom-okonomi',
  title: 'Økonomistyring',
  subtitle: 'LØM Fagskole',
  description: '48 spørsmål om Økonomistyring fra LØM-pensumet på fagskole – kalkyler, budsjettering, investeringsanalyse og kapitalbinding.',
  cats: {
    kalkyler:      { label: 'Kalkyler & kostnader',        color: '#10b981' },
    budsjett:      { label: 'Budsjetter',                  color: '#5c7cfa' },
    investering:   { label: 'Investeringsanalyse',         color: '#a78bfa' },
    kapitalbinding:{ label: 'Kapitalbinding & lagerstyring',color: '#fb923c' },
    lovverk:       { label: 'Lovverk & regelverk',         color: '#f59e0b' },
    selskap:       { label: 'Selskapsformer & finans',     color: '#ec4899' }
  }
};

const QUESTIONS = [

  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er Dekningsbidrag (DB)?',
    opts: [
      'Totale salgsinntekter minus absolutt alle kostnader, dvs. netto overskudd',
      'Salgsinntekter minus variable kostnader',
      'Salgsinntekter fratrukket alle faste kostnader som husleie og fastlønn',
      'Totalkapital fratrukket egenkapital – tilsvarer bedriftens totale gjeldsbelastning'
    ],
    correct: 1,
    explain: 'DB = Salgsinntekter − Variable kostnader. Dekningsbidraget viser hvor mye som er igjen til å dekke faste kostnader og eventuelt gi overskudd etter at variable kostnader er betalt.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er nullpunktsomsetning (break-even)?',
    opts: [
      'Det omsetningsnivået der bedriften begynner å tjene store penger og nå maksimal lønnsomhet',
      'Det salgsnivået der de variable kostnadene akkurat er dekket, men faste kostnader gjenstår',
      'Det salgsnivået der bedriften verken har overskudd eller underskudd – totale inntekter = totale kostnader',
      'Den absolutt laveste salgsprisen bedriften kan fastsette uten å påføre seg tap på salget'
    ],
    correct: 2,
    img: `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg"><rect width="280" height="172" fill="#161927" rx="8"/><line x1="28" y1="12" x2="28" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><line x1="28" y1="148" x2="268" y2="148" stroke="#2a2f4a" stroke-width="1.5"/><text x="148" y="163" fill="#7b82a8" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Omsetning / volum</text><line x1="28" y1="106" x2="268" y2="106" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,3"/><line x1="28" y1="106" x2="268" y2="56" stroke="#e74c3c" stroke-width="2"/><line x1="28" y1="148" x2="268" y2="28" stroke="#10b981" stroke-width="2"/><circle cx="168" cy="84" r="5" fill="white" stroke="#5c7cfa" stroke-width="2.5"/><line x1="168" y1="84" x2="168" y2="148" stroke="#5c7cfa" stroke-width="1.5" stroke-dasharray="4,3"/><text x="244" y="104" fill="#f59e0b" font-size="9" font-family="system-ui,sans-serif">FK</text><text x="244" y="50" fill="#e74c3c" font-size="9" font-family="system-ui,sans-serif">TK</text><text x="244" y="24" fill="#10b981" font-size="9" font-family="system-ui,sans-serif">Inntekt</text><text x="168" y="160" fill="#5c7cfa" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">Nullpunkt</text><text x="90" y="136" fill="#e74c3c" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">TAP</text><text x="220" y="136" fill="#10b981" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">OVERSKUDD</text></svg>`,
    explain: 'Under nullpunktet = tap. Over nullpunktet = overskudd. Formel: Nullpunktsomsetning = Faste kostnader / Dekningsgrad. For en elektrobedrift: hvis faste kostnader er 2 mill. kr/år og DG er 40 %, må bedriften omsette for 5 mill. kr for å gå i null.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er variable kostnader?',
    opts: [
      'Kostnader som alltid er helt identiske og like store fra måned til måned uansett aktivitet',
      'Kostnader som varierer med produksjonsmengden (f.eks. materialer, emballasje)',
      'Kostnader som utelukkende er knyttet til ledelse og administrasjon i toppen av organisasjonen',
      'Bare og kun lønnskostnader for ansatte – ingen andre kostnadstyper inngår her'
    ],
    correct: 1,
    explain: 'Variable kostnader endrer seg når aktiviteten endrer seg. Typiske eksempler: råvarer, emballasje, provisjonslønn. Jo mer man produserer, jo høyere blir totalt variable kostnader.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er faste kostnader?',
    opts: [
      'Kostnader som øker og varierer direkte proporsjonalt med produksjonsmengden',
      'Kostnader som ikke varierer med produksjonsmengden (f.eks. husleie, fast lønn, forsikring)',
      'Bare ekstraordinære og uforutsette engangsutgifter som ikke er en del av normal drift',
      'Alle kostnader som umiddelbart betales kontant og ikke krediteres til en leverandørgjeld'
    ],
    correct: 1,
    explain: 'Faste kostnader påløper uavhengig av produksjonsnivået i det relevante aktivitetsområdet. Eksempler: husleie, fastlønn til administrasjon, forsikring, lineære avskrivninger.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er direkte kostnader?',
    opts: [
      'Kostnader som bedriften betaler umiddelbart og direkte kontant uten kreditt',
      'Kostnader som kan knyttes direkte til et produkt, prosjekt eller ordre',
      'Alle typer kostnader som er registrert uten merverdiavgift i regnskapssystemet',
      'Bare og utelukkende variable kostnader som endrer seg med produksjonsvolum'
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
      'En kalkylemetode der kun variable og direkte kostnader knyttes til det enkelte produkt',
      'En metode som utelukkende brukes for å beregne dekningsbidraget per produkt eller ordre',
      'En kalkylemetode der alle kostnader (faste og variable) fordeles på produktet for å finne totalkostnad per enhet',
      'En markedsbasert metode for å fastsette pris ut fra hva markedet maksimalt er villig til å betale'
    ],
    correct: 2,
    explain: 'Selvkostkalkylen: direkte materialkostnader + direkte lønnskostnader + indirekte kostnader (OH-tillegg for admin og rigg) = Selvkost. I el-entreprise er dette grunnlaget for tilbudsprisen: Selvkost + fortjenestepåslag = tilbudspris. Legger du inn for lav selvkost taper du penger på oppdraget.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er forskjellen mellom bidragsmetoden og selvkostmetoden?',
    opts: [
      'Bidragsmetoden brukes utelukkende i produksjonsbedrifter, selvkostmetoden kun i varehandelen',
      'Bidragsmetoden henfører kun variable kostnader til produktet; selvkostmetoden fordeler alle kostnader',
      'Det er ingen reell forskjell – begge metoder gir alltid nøyaktig det samme sluttresultatet',
      'Bidragsmetoden egner seg for langsiktige beslutninger, selvkostmetoden for kortsiktige vurderinger'
    ],
    correct: 1,
    explain: 'Bidragsmetoden: Salgspris − Variable kostnader = DB (faste kostnader holdes utenfor). Selvkostmetoden: Alle kostnader inkluderes for å finne full kostpris. Begge er viktige verktøy i prissetting og lønnsomhetsanalyse.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er tilvirkningskost?',
    opts: [
      'Bare og kun direkte materialer som inngår fysisk i det ferdige produktet',
      'Direkte kostnader + indirekte tilvirkningskostnader – selvkost før salgs- og administrasjonskostnader er lagt til',
      'Salgsprisen fratrukket fortjeneste og påslag – tilsvarer hva produktet koster å lage',
      'Samtlige kostnader bedriften har, inkludert administrasjon, salg og finanskostnader'
    ],
    correct: 1,
    explain: 'Tilvirkningskost = Direkte material + Direkte lønn + Indirekte tilvirkningskostnader (f.eks. fabrikkleie, maskinavskrivninger). Legger man til indirekte salgs-/adm.kostnader får man selvkost.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er kalkulatoriske kostnader?',
    opts: [
      'Kun de kostnadene som faktisk er betalbare og gir en konkret utbetaling i perioden',
      'Beregnede eller anslåtte kostnader som ikke nødvendigvis gir en utbetaling (f.eks. kalkulatorisk rente på egenkapital, kalkulatoriske avskrivninger)',
      'Feriepengene som bedriften er pliktig til å betale ut til ansatte i henhold til ferieloven',
      'Rentekostnader som bedriften betaler til leverandører med rentebærende leverandørgjeld'
    ],
    correct: 1,
    explain: 'Kalkulatoriske kostnader brukes i kalkyler for å få et riktigere bilde av virkelige kostnader – selv om de ikke gir en faktisk utbetaling. Viktig for prissetting og sammenligning.'
  },
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'Hva er forskjellen mellom et resultatbudsjett og et likviditetsbudsjett?',
    opts: [
      'Resultatbudsjett er kun relevant og aktuelt for store bedrifter; likviditetsbudsjett kun for de minste',
      'Resultatbudsjett viser forventede inntekter og kostnader (periodisert); likviditetsbudsjett viser forventede inn- og utbetalinger (kontantstrøm)',
      'Det er ingen praktisk forskjell mellom de to – de brukes synonymt og om hverandre i praksis',
      'Resultatbudsjettet er et historisk dokument over hva som faktisk skjedde; likviditetsbudsjettet er fremoverskuende'
    ],
    correct: 1,
    explain: 'Resultatbudsjettet = lønnsomhetsplanlegging (periodiserte inntekter/kostnader). Likviditetsbudsjettet = betalingsevneplanlegging (faktiske inn- og utbetalinger). En lønnsom bedrift kan likevel ha likviditetsproblemer hvis betalingene er feil timet.'
  },
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'Hva er grunnformelen i et likviditetsbudsjett?',
    opts: [
      'Periodiserte inntekter minus kostnader gir periodens resultat – identisk med resultatbudsjettet',
      'IB beholdning + Innbetalinger − Utbetalinger = UB beholdning',
      'Egenkapital pluss gjeld er lik totalkapital – grunntanken i balanseregnskapet',
      'Salgspris fratrukket variable kostnader per enhet er lik dekningsbidraget per enhet'
    ],
    correct: 1,
    explain: 'IB (inngående beholdning) + alle innbetalinger i perioden − alle utbetalinger i perioden = UB (utgående beholdning). Gjøres typisk måned for måned for å forutsi likviditetsbehov.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er merverdiavgift (MVA)?',
    opts: [
      'En direkte skatt som bedriften betaler av netto overskudd til staten hvert år',
      'En generell omsetningsavgift på varer og tjenester som sluttkunden i praksis betaler, mens bedrifter videreformidler den til staten',
      'En straff og gebyr for for sent innlevert eller mangelfullt regnskap til myndighetene',
      'En særavgift som utelukkende kjøpere og turister fra utlandet betaler ved kjøp i Norge'
    ],
    correct: 1,
    explain: 'MVA er en statlig avgift på forbruk. Bedrifter legger til utgående mva. ved salg, trekker fra inngående mva. på innkjøp, og betaler netto til staten – normalt seks terminer i året. Standardsats i Norge er 25 %.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er en fordel med å være merverdiavgiftspliktig?',
    opts: [
      'Man slipper å føre regnskap og sender ikke inn noen form for skattemelding',
      'Man får trekke fra inngående mva. på egne innkjøp og investeringer – og har mva. til gode i kassa fram til avgiftsoppgjøret (positivt for likviditeten)',
      'Man slipper å betale skatt og alle offentlige avgifter til staten',
      'Man oppnår automatisk høyere overskudd som direkte følge av å være mva-registrert'
    ],
    correct: 1,
    explain: 'Mva-registrerte bedrifter sparer 25 % på investeringer i utstyr, lokaler og driftskjøp siden mva. trekkes fra. I tillegg sitter man på mva-pengene en stund før de betales inn – gratis «lån».'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er forskjellen på et enkeltpersonforetak (ENK) og et aksjeselskap (AS)?',
    opts: [
      'Ingen praktisk forskjell – begge selskapsformer er underlagt identiske regler og krav',
      'ENK: eier har personlig og ubegrenset ansvar for gjeld, enkel etablering. AS: egen juridisk enhet, begrenset ansvar, krever aksjekapital og mer formaliteter',
      'ENK kan ikke lovlig drive næringsvirksomhet og er kun egnet for hobbyer og fritid',
      'AS kan kun ha én enkelt eier og aksjonær – fler eierparter er ikke tillatt i et AS'
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
      'Hver enkelt partner har ansvar kun for sin forholdsmessige andel av selskapets gjeld',
      'Alle partnere har fullt ansvar for selskapets gjeld – kreditor kan kreve hele beløpet av én partner hvis andre ikke kan betale',
      'Ingen av partnerne har noe personlig ansvar – kun selskapet selv hefter for gjelden',
      'Bare den til enhver tid sittende daglige lederen er personlig ansvarlig for all gjeld'
    ],
    correct: 1,
    explain: 'Solidarisk ansvar = hver og en kan kreves for hele gjelden. Dette er en stor risiko i ANS sammenlignet med AS. I DA (delt ansvar) er ansvaret derimot delt mellom eierne.'
  },
  {
    cat: 'selskap', catLabel: 'Selskapsformer & finans',
    q: 'Hva er finansiering?',
    opts: [
      'Å utbetale lønn og godtgjørelser til alle fast ansatte og innleide arbeidstakere',
      'Å skaffe penger/kapital til bedriften – kan være egenkapital eller fremmedkapital (lån)',
      'Å selge varer og tjenester til kunder for å generere omsetning og inntekter',
      'Å beregne og deklarere skatt og avgifter til Skatteetaten og andre myndigheter'
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
      'Utelukkende regler for daglig bokføring og registrering av enkeltbilag i regnskapssystemet',
      'Hvem som er regnskapspliktig, krav til årsregnskap, regnskapsprinsipper, oppstillingsplaner og offentliggjøring',
      'Utelukkende skatte- og avgiftsregler for næringsdrivende og selskaper',
      'Kun selskapsrettslige regler som eksklusivt gjelder for aksjeselskaper og allmennaksjeselskaper'
    ],
    correct: 1,
    explain: 'Regnskapsloven er selve rammeloven for årsregnskap i Norge. Bokføringsloven dekker daglig bokføring/dokumentasjon. Aksjeloven regulerer selskapsrettslige forhold i AS.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Bokføringsloven?',
    opts: [
      'Regler for bokføring, spesifikasjon, dokumentasjon og oppbevaring av regnskapsopplysninger',
      'Kun feriepenger og beregning av feriepengegrunnlaget for ansatte i alle bransjer',
      'Styrets sammensetning, ansvar og oppgaver i et aksjeselskap',
      'Regler om oppsigelse, avskjed og andre ansettelsesforhold for arbeidstakere'
    ],
    correct: 0,
    explain: 'Bokføringsloven sier hvordan transaksjoner skal registreres, hvilke bilag som kreves, hvordan de skal lagres og hvor lenge. Gjelder alle bokføringspliktige (stort sett alle næringsdrivende).'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Ferieloven?',
    opts: [
      'Bare lønnsforhandlinger og fastsettelse av minstelønn i ulike bransjer og tariffavtaler',
      'Arbeidstakers rett til feriefritid (25 virkedager) og feriepenger hvert ferieår',
      'Kun bedrifters plikt til å betale overtidstillegg og kompensere for merarbeid',
      'Bare permisjonsregler og rettigheter ved fødsel, adopsjon og omsorgspermisjon'
    ],
    correct: 1,
    explain: 'Ferieloven sikrer minimum 25 virkedager ferie per år. Feriepenger beregnes som 10,2 % av feriepengegrunnlaget (12 % i avtaler med 5 ukers ferie) og betales normalt ut i juni.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er formålet med Folketrygdloven?',
    opts: [
      'Å regulere aksjeselskaper, allmennaksjeselskaper og deres selskapsrettslige forhold',
      'Å sikre økonomisk trygghet ved sykdom, arbeidsløshet, alderdom, uførhet, fødsel m.m.',
      'Å utelukkende regulere skatteplikten og skattesatsene for privatpersoner og bedrifter',
      'Å fastsette de til enhver tid gjeldende satsene for merverdiavgift på varer og tjenester'
    ],
    correct: 1,
    explain: 'Folketrygden er et sentralt sikkerhetsnett i Norge: sykepenger, dagpenger, alderspensjon, uføretrygd, foreldrepenger m.m. Finansieres gjennom trygdeavgift og arbeidsgiveravgift.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva regulerer Permitteringslønnsloven?',
    opts: [
      'Alle feriepenger og utbetalingstidspunkt for feriepenger til alle arbeidstakere i Norge',
      'Arbeidsgivers plikt til å betale lønn i en arbeidsgiverperiode ved permittering',
      'Styrets sammensetning, valg og ansvarsfordeling i norske aksjeselskaper',
      'Aksjekapitalkrav og regler for kapitalforhøyelse og nedsettelse i norske selskaper'
    ],
    correct: 1,
    explain: 'Ved permittering må arbeidsgiver betale full lønn i arbeidsgiverperioden (normalt 15 dager). Deretter kan den permitterte søke dagpenger fra NAV. Permittering er nyttig ved midlertidig bortfall av arbeid.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er etikk i en forretningssammenheng?',
    opts: [
      'Kun det lovverket og forskriftene eksplisitt krever – ikke noe ut over det',
      'Læren om moral – hvordan vi bør handle, også utover det strengt lovlige. Dårlige etiske valg kan skade omdømmet',
      'Kun de regnskapsreglene og bokføringsprinsippene som er fastsatt i regnskapsloven',
      'Kun regler om markedsføring og reklame som er nedfelt i markedsføringsloven'
    ],
    correct: 1,
    explain: 'Etikk går lenger enn loven. F.eks. er det kanskje ikke ulovlig å skjule informasjon om bivirkninger ved et produkt, men det kan være uetisk – og skadelig for tillit og omdømme om det kommer ut.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er bunden kapital?',
    opts: [
      'Penger bedriften ikke kan røre fordi loven spesifikt forbyr å bruke dem til noe formål',
      'Kapital som er investert i eiendeler og ikke kan brukes til annet (f.eks. varelager, kundefordringer, inventar, bygninger)',
      'Penger som er parkert som bankinnskudd og rentegivende plasseringer i finansinstitusjoner',
      'Eierens private kapital som er adskilt fra bedriftens kapital og økonomi'
    ],
    correct: 1,
    explain: 'Bunden kapital «ligger fast» i driften. Reduksjon av bunden kapital (f.eks. mindre varelager, raskere inndriving av fordringer) frigjør penger som kan brukes til andre formål – og reduserer rentekostnader.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hvordan beregnes gjennomsnittlig kapitalbinding i kundefordringer?',
    opts: [
      'Kredittsalg multiplisert med kredittiden i dager – ingen divisjon nødvendig',
      '(Kredittsalg inkl. mva. × Kredittid) / 360',
      'Varekostnad dividert på gjennomsnittlig varelager – gir lagerets omløpshastighet',
      'Total omsetning dividert på egenkapitalen – viser egenkapitalens omsetningshastighet'
    ],
    correct: 1,
    explain: 'Gj.snittlig kundefordringer ≈ (Kredittsalg inkl. mva. × Kredittid) / 360. Eksempel: 30 mill. omsetning, 15 dagers kredittid, 25 % mva → ca. (37,5 mill × 15 / 360) = 1,56 mill. i bunden kapital.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er bruttofortjeneste i kroner?',
    opts: [
      'Salgsprisen inkludert merverdiavgift som kunden faktisk betaler ved kjøpet',
      'Salgsinntekt (ekskl. mva.) − Varekostnad',
      'Summen av lønnskostnad og husleie – bedriftens to største faste kostnadsposter',
      'Netto overskudd etter at skatt og alle finansposter er trukket fra periodens resultat'
    ],
    correct: 1,
    explain: 'Bruttofortjeneste = Salgsinntekt (ekskl. mva.) − Varekostnad. Uttrykt i prosent av salgsinntekt får man BFP. Viser lønnsomheten på selve varesalget før drifts- og finanskostnader.'
  },

  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva inngår i en prosjektkalkyle for et el-installasjonsoppdrag?',
    opts: [
      'Kun direkte materialkostnader som kabel, kurssikringer og koblingsbokser',
      'Kun de direkte lønnskostnadene for montørene som utfører installasjonsarbeidet',
      'Direkte materialer + direkte lønn + indirekte kostnader (rigg, bil, verktøy) + fortjenestepåslag',
      'Bare en sjablongbasert fastpris beregnet ut fra antall kvadratmeter som skal installeres'
    ],
    correct: 2,
    explain: 'En fullstendig prosjektkalkyle inkluderer: (1) Direkte materialkostnader (innkjøpspris + svinn), (2) Direkte lønnskostnader (estimerte timer × timesats inkl. sosiale kostnader), (3) Indirekte kostnader / OH-tillegg (rigg, firmabiler, administrasjon), (4) Fortjenestepåslag. Summen gir tilbudsprisen. Feil kalkyle = tap på prosjektet.'
  },

  // ── Budsjettering (Kap 10) ──────────────────────────────────
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'Hva er et budsjett?',
    opts: [
      'En historisk oversikt og rapportering over hva bedriften faktisk har tjent og tapt',
      'En tallmessig oppstilling av forventede økonomiske konsekvenser av planlagte aktiviteter – en økonomisk plan i kroner',
      'Et lovpålagt krav fra Skatteetaten om å rapportere alle inntekter og kostnader fortløpende',
      'En komplett liste over alle ansatte, stillingstitler og gjeldende lønnsnivåer i bedriften'
    ],
    correct: 1,
    explain: 'Budsjettet er bedriftens viktigste styringsverktøy sammen med regnskapet. Det viser forventede inntekter, kostnader, inn- og utbetalinger for en fremtidig periode og gir grunnlag for budsjettkontroll og avviksanalyse.'
  },
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'Hva er budsjettkontrollens tre trinn?',
    opts: [
      'Bokfør alle bilag → betal alle regninger → rapporter tallene til ledelsen',
      'Finn avvik → analyser årsak → sett inn tiltak',
      'Planlegg budsjettet → gjennomfør aktivitetene → evaluer resultatene i etterkant',
      'Registrer transaksjoner → kalkulér nøkkeltall → fakturer kunder for leveranser'
    ],
    correct: 1,
    explain: 'Tre-trinnsmodellen: (1) Finnes det et budsjettavvik? (2) Hva er årsaken til avviket? (3) Hvilke tiltak kan rette på avviket? Et positivt avvik er positivt for bedriften; et negativt avvik er negativt.'
  },
  {
    cat: 'budsjett', catLabel: 'Budsjetter',
    q: 'En bedrift har husleie på 120 000 kr/år som betales kvartalsvis (30 000 kr). Hva er husleiekostnaden i januar i resultatbudsjettet vs. utbetalingen i januar i likviditetsbudsjettet?',
    opts: [
      'Resultatbudsjett: 30 000 kr – Likviditetsbudsjett: 30 000 kr',
      'Resultatbudsjett: 10 000 kr – Likviditetsbudsjett: 30 000 kr',
      'Resultatbudsjett: 120 000 kr – Likviditetsbudsjett: 0 kr',
      'Resultatbudsjett: 0 kr – Likviditetsbudsjett: 10 000 kr'
    ],
    correct: 1,
    explain: 'Resultatbudsjettet periodiserer kostnaden: 120 000 / 12 = 10 000 kr per måned. Likviditetsbudsjettet viser faktisk utbetaling: 30 000 kr betales 1. januar. Februar og mars: 0 kr utbetaling i likviditetsbudsjettet.'
  },

  // ── Kalkyler utvidet ─────────────────────────────────────────
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er sprangvis faste kostnader?',
    opts: [
      'Kostnader som er null og ikke eksisterer ved lav eller ingen produksjon',
      'Faste kostnader som øker i «sprang» ved kapasitetsutvidelse (f.eks. nytt lager når produksjonen overstiger en grense)',
      'Variable kostnader som er spesielt høye og topper seg én bestemt gang i løpet av året',
      'Rentekostnader som gradvis og jevnt stiger i takt med den gjenværende lånesaldoen'
    ],
    correct: 1,
    explain: 'Sprangvis faste kostnader er konstante innenfor et aktivitetsnivå, men hopper til et høyere nivå når kapasitetsgrensen nås. Eksempel: ett lager dekker inntil 1 000 enheter; produserer man 1 001 enheter trenger man et nytt lager.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er for- og etterkalkulasjon?',
    opts: [
      'Forkalkyle er en kalkyle laget i etterkant av produksjon. Etterkalkyle er alltid laget i forkant',
      'Forkalkyle: beregning av priser og kostnader i forkant av produksjon/oppdrag. Etterkalkyle: beregning i etterkant for å sammenligne og avdekke avvik',
      'To fullstendig synonyme begreper og ulike navn på nøyaktig det samme – å beregne selvkost',
      'Forkalkyle er et verktøy utelukkende for store bedrifter; etterkalkyle brukes kun av de minste'
    ],
    correct: 1,
    explain: 'Forkalkyle = grunnlag for pris og tilbud (planlagte tall). Etterkalkyle = faktiske tall etter gjennomført oppdrag. Avviksanalysen sammenligner de to og gir grunnlag for forbedringer og mer treffsikre fremtidige kalkyler.'
  },
  {
    cat: 'kalkyler', catLabel: 'Kalkyler & kostnader',
    q: 'Hva er mengdeavvik og prisavvik i en avviksanalyse?',
    opts: [
      'Mengdeavvik: avvik mellom planlagt og faktisk salgspris per enhet. Prisavvik: avvik i antall solgte enheter',
      'Mengdeavvik: (forbrukt mengde − planlagt mengde) × planlagt pris. Prisavvik: (virkelig pris − planlagt pris) × virkelig mengde',
      'Mengdeavvik og prisavvik er nøyaktig det samme og beregnes med identiske formler',
      'Mengdeavvik: avvik mellom planlagt og faktisk antall ansatte. Prisavvik: avvik i lønnssatser og timelønninger'
    ],
    correct: 1,
    explain: 'Avviksanalyse skiller mellom to årsaker til kostnadsavvik: Mengdeavvik (brukte mer/mindre enn planlagt) og Prisavvik (materialer/timer kostet mer/mindre enn planlagt). Lar deg identifisere om problemet er i innkjøp, effektivitet eller priser.'
  },

  // ── Lovverk utvidet ──────────────────────────────────────────
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er de fire grunnleggende regnskapsprinsippene i Regnskapsloven §4-1?',
    opts: [
      'Lønnsomhet, likviditet, soliditet og rentabilitet – de fire nøkkeltallsområdene i analyse',
      'Transaksjonsprinsippet, opptjeningsprinsippet, sammenstillingsprinsippet og forsiktighetsprinsippet',
      'FIFO (først inn, først ut), LIFO (sist inn, først ut), gjennomsnittsmetoden og standardkost',
      'Kontantprinsippet, periodiseringsprinsippet, skattemessig kontinuitet og balansekontinuitet'
    ],
    correct: 1,
    explain: 'De fire grunnprinsippene: (1) Transaksjonsprinsippet – bokfør til verdien på transaksjonstidspunktet. (2) Opptjeningsprinsippet – inntekt resultatføres når opptjent. (3) Sammenstillingsprinsippet – utgifter kostnadsføres i samme periode som tilhørende inntekt. (4) Forsiktighetsprinsippet – urealisert tap resultatføres, men ikke urealisert gevinst.'
  },
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er saldoavskrivning, og hvilken saldogruppe har personbiler og maskiner?',
    opts: [
      'Lineær avskrivning der man avskriver samme beløp hvert år – personbiler er i saldogruppe h (4 %)',
      'En skattemessig avskrivningsmetode der en fast prosentandel av gjenstående saldo avskrives hvert år – personbiler og maskiner er i saldogruppe d (20 %)',
      'En avskrivningsmetode der bedriften fritt velger en ny prosentsats hvert enkelt år etter behov',
      'En avskrivningsmetode som eksklusivt og utelukkende gjelder for bygninger og fast eiendom'
    ],
    correct: 1,
    explain: 'Saldoavskrivning = skattemessig avskrivning der saldogruppe d (personbiler, maskiner, inventar) avskrives med 20 % per år. Eksempel: maskin for 1 000 000 kr → år 1: avskrivning 200 000, saldo 800 000; år 2: 160 000, saldo 640 000 osv.'
  },

  // ── Investeringsanalyse (Kap 13) ─────────────────────────────
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er tilbakebetalingsmetoden?',
    opts: [
      'En metode som beregner den interne avkastningsrenten (IRR) til et investeringsprosjekt',
      'En metode som diskonterer og beregner nåverdien av alle fremtidige kontantstrømmer fra prosjektet',
      'En metode som beregner hvor lang tid det tar å få igjen investeringsutgiften gjennom innbetalingsoverskudd',
      'En metode for å sammenligne og rangere totalkapitalrentabilitet (TKR) og egenkapitalrentabilitet (EKR)'
    ],
    correct: 2,
    explain: 'Tilbakebetalingstid = Investeringsutgift / Årlig innbetalingsoverskudd. Måler ikke lønnsomhet – kun tid til tilbakebetaling. Beslutningsregel: gjennomfør hvis tilbakebetalingstid < investeringens levetid.'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er en svakhet ved tilbakebetalingsmetoden (payback) ved slavisk bruk?',
    opts: [
      'Den er altfor komplisert og tidkrevende å beregne for hånd uten regneark',
      'Den krever at man kjenner avkastningskravet presist og nøyaktig på forhånd',
      'Den ignorerer pengenes tidsverdi og det som skjer etter tilbakebetalingsperioden',
      'Den kan kun anvendes og er bare gyldig for gjensidig utelukkende investeringsprosjekter'
    ],
    correct: 2,
    explain: 'Tilbakebetalingsmetoden ignorerer: (1) Pengenes tidsverdi (100 kr i dag er mer verdt enn 100 kr om 5 år). (2) Kontantstrømmene etter at investeringen er tilbakebetalt. Fordeler: enkel, gir fokus på likviditet og tar høyde for risiko.'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er nåverdimetoden (NNV)?',
    opts: [
      'En metode der investeringsutgiften deles på de gjennomsnittlige årlige innbetalingene',
      'En metode der man beregner investeringens interne avkastningsrente (internrente) i prosent',
      'En metode der framtidige kontantstrømmer diskonteres med avkastningskravet tilbake til i dag og sammenlignes med investeringsutgiften',
      'En budsjetteringsmetode som brukes til å beregne og analysere budsjettavvik i etterkant'
    ],
    correct: 2,
    explain: 'NNV = −I₀ + Σ [Cₙ / (1+k)ⁿ]. Positiv NNV = lønnsomt. Negativ NNV = ikke lønnsomt ved valgt avkastningskrav. For uavhengige prosjekter: godta alle med positiv NNV. For gjensidig utelukkende: velg den med høyest positiv NNV.'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva betyr positiv nåverdi (NNV > 0)?',
    opts: [
      'At investeringen absolutt ikke bør gjennomføres og bør forkastes',
      'At investeringen er lønnsom – avkastningen overstiger avkastningskravet',
      'At avkastningskravet som er benyttet i beregningen er satt for lavt',
      'At tilbakebetalingstiden er kort og investeringen betaler seg raskt tilbake'
    ],
    correct: 1,
    explain: 'NNV > 0: investeringen er lønnsom (avkastning > avkastningskrav) → gjennomfør. NNV < 0: ikke lønnsomt. For gjensidig utelukkende prosjekter: velg alltid det med høyest positiv NNV («vi lever av penger, ikke prosenter»).'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er internrentemetoden (IRR)?',
    opts: [
      'En metode som beregner den eksakte tilbakebetalingstiden i antall måneder',
      'Den avkastningsprosenten som gjør at nåverdien av investeringen = 0',
      'En metode som beregner den enkle gjennomsnittlige prosentavkastningen per år over levetiden',
      'En metode som analyserer og måler kapitalens omløpshastighet i DuPont-modellen'
    ],
    correct: 1,
    explain: 'Internrenten (IR/IRR) er den renten som gjør NNV = 0. Beslutningsregel: IR > avkastningskrav → lønnsomt. IR < avkastningskrav → ikke lønnsomt. OBS: For gjensidig utelukkende prosjekter er IRR uegnet – bruk nåverdimetoden.'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er avkastningskravet (kalkulasjonsrenten)?',
    opts: [
      'Driftsresultatet dividert på totalkapitalen – tilsvarer totalkapitalrentabiliteten (TKR)',
      'Rentekostnadene bedriften betaler på all bankgjeld og rentebærende lån',
      'Den minimumsavkastningen en investering må gi for å være akseptabel – basert på risikofri rente + risikotillegg + inflasjonstillegg',
      'Det samme som internrenten – avkastningskrav og IRR er to navn på nøyaktig det samme'
    ],
    correct: 2,
    explain: 'Avkastningskrav = Risikofri rente + Risikotillegg + Inflasjonstillegg. Brukes til å diskontere framtidige kontantstrømmer i nåverdimetoden. Jo høyere risiko i prosjektet, desto høyere avkastningskrav.'
  },
  {
    cat: 'investering', catLabel: 'Investeringsanalyse',
    q: 'Hva er forskjellen mellom uavhengige og gjensidig utelukkende investeringsprosjekter?',
    opts: [
      'Det er ingen praktisk forskjell – begge typer vurderes identisk med nøyaktig samme metode',
      'Uavhengige: alle lønnsomme prosjekter kan gjennomføres. Gjensidig utelukkende: kun ett kan velges (f.eks. tre tilbud på samme maskin) – velg det med høyest positiv NNV',
      'Uavhengige prosjekter er en beslutningsform som utelukkende benyttes i offentlig sektor og statlige etater',
      'Gjensidig utelukkende prosjekter vurderes alltid og utelukkende med internrentemetoden (IRR)'
    ],
    correct: 1,
    explain: 'Uavhengige prosjekter: godta alle med positiv NNV. Gjensidig utelukkende: kun ett alternativ kan velges (samme formål/ressurs) → velg høyest NNV, ikke høyest IR. IR kan rangere feil når prosjektene har ulik størrelse eller kontantstrømprofil.'
  },

  // ── Kapitalbinding (Kap 14) ──────────────────────────────────
  {
    cat: 'kapitalbinding', catLabel: 'Kapitalbinding & lagerstyring',
    q: 'Hva er DuPont-modellen?',
    opts: [
      'En kalkylemodell som beregner dekningsgrad og nullpunktsomsetning for et produkt',
      'En modell som viser sammenhengen mellom kapitalbinding og lønnsomhet: TKR = Resultatgrad × Kapitalens omløpshastighet',
      'En beslutningsmodell for å velge den beste og mest hensiktsmessige selskapsformen',
      'En skattemessig modell for å beregne og kontrollere saldoavskrivninger på driftsmidler'
    ],
    correct: 1,
    explain: 'DuPont: TKR = Resultatgrad × Kapitalens omløpshastighet. Resultatgrad = Resultat/Omsetning × 100. Omløpshastighet = Omsetning/Totalkapital. To veier til høy TKR: høy margin (premium) eller rask kapitalomsetning (volum).'
  },
  {
    cat: 'kapitalbinding', catLabel: 'Kapitalbinding & lagerstyring',
    q: 'Hva er ABC-analyse (Pareto-prinsippet) i lagerstyring?',
    opts: [
      'En analyse der alle varer, kunder og leverandører behandles med lik prioritet og oppmerksomhet',
      'En analyse basert på at ~20 % av varene/kundene/leverandørene står for ~80 % av verdien/omsetningen – disse prioriteres (A) fremfor de minst viktige (C)',
      'En kvantitativ metode for å beregne den optimale bestillingsmengden som minimerer lagerkostnader',
      'En porteføljeanalyse som utelukkende gjelder for finansinvesteringer og verdipapirer'
    ],
    correct: 1,
    explain: 'Pareto/80-20-regelen: 20 % av lagervarene = 80 % av lagerverdien. Varene deles i A (mest verdi, tett styring), B (middels) og C (mange varer, lav verdi, enkel styring). Brukes også på kunder, leverandører og produkter etter omsetning/DB.'
  },
  {
    cat: 'kapitalbinding', catLabel: 'Kapitalbinding & lagerstyring',
    q: 'Hva er faktoring?',
    opts: [
      'En lagerstyringsmetode for å beregne og optimalisere varelageret i bedriften',
      'En finansieringsform der bedriften selger/pantsetter kundefordringer til et factoringselskap for å få inn penger raskere',
      'En skattemessig metode for saldoavskrivning av maskiner og inventar',
      'En form for aksjekapital som tegnes av nye aksjonærer ved emisjon i selskapet'
    ],
    correct: 1,
    explain: 'Faktoring lar bedriften få inn penger fra kundefordringer umiddelbart i stedet for å vente på kunden. Factoringselskapet betaler ut beløpet (minus renter/gebyr) og tar over innkrevingen. Forbedrer likviditeten, men koster noe i renter.'
  },
  {
    cat: 'kapitalbinding', catLabel: 'Kapitalbinding & lagerstyring',
    q: 'Hva er formelen for gjennomsnittlig kredittid kunder?',
    opts: [
      'Varekostnad dividert på gjennomsnittlig varelager multiplisert med 365 dager',
      'Gjennomsnittlige kundefordringer (inkl. mva.) × 360 / Kredittsalg (inkl. mva.)',
      'Total omsetning dividert på totalkapital – gir kapitalens omløpshastighet',
      'Kortsiktig gjeld dividert på omløpsmidler, multiplisert med 360 dager'
    ],
    correct: 1,
    explain: 'Gj.snittlig kredittid kunder = (Gj.sn. kundefordringer inkl. mva. × 360) / Kredittsalg inkl. mva. Bør være kortere enn kredittid leverandører. Lang kredittid til kunder binder kapital og svekker likviditeten.'
  },
  {
    cat: 'kapitalbinding', catLabel: 'Kapitalbinding & lagerstyring',
    q: 'Hvordan påvirker økt kapitalbinding i varelager lønnsomheten?',
    opts: [
      'Økt varelager øker alltid lønnsomheten fordi man aldri mangler varer og kan levere umiddelbart',
      'Økt kapitalbinding øker totalkapitalen → øker kostnader (tapte renter/alternativkostnad) → reduserer resultatet → reduserer rentabiliteten',
      'Kapitalbinding i varelager har absolutt ingen effekt eller innvirkning på bedriftens lønnsomhet',
      'Økt varelager fører alltid og direkte til at bedriften må redusere salgsprisen for å selge det'
    ],
    correct: 1,
    explain: 'Rentabilitet = Resultat / Totalkapital. Større varelager → høyere totalkapital → høyere rentekostnader (tapte renteinntekter) → lavere resultat → lavere rentabilitet. Tiltak: ABC-analyse, JIT/Lean, kortere bestillingsintervall.'
  },

  // ── Eksisterende lovverk-spørsmål ───────────────────────────
  {
    cat: 'lovverk', catLabel: 'Lovverk & regelverk',
    q: 'Hva er arbeidsgiveravgift, og hvor stor er standardsatsen for de fleste norske bedrifter?',
    opts: [
      'En trygdeavgift de ansatte selv betaler av bruttolønnen sin — satsen er 8,2 %',
      'En avgift arbeidsgiveren betaler av lønnsutbetalingene — standardsatsen er 14,1 %',
      'En skatt på bedriftens netto overskudd som betales til staten — skattesatsen er 22 %',
      'En avgift som utelukkende gjelder for aksjeselskaper (AS) — satsen er 10 %'
    ],
    correct: 1,
    explain: 'Arbeidsgiveravgiften (AGA) er en skatt arbeidsgiver betaler til staten av lønnsgrunnlaget. Standardsats er 14,1 % (sone 1 — de fleste steder i landet). For en elektrobedrift er AGA en vesentlig lønnskostnad som alltid skal med i prosjektkalkylen: timesats × (1 + AGA-sats + feriepengeprosent + evt. pensjon).'
  }
];
