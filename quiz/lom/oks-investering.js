const QUIZ_META = {
  id: 'lom-oks-investering',
  title: 'Investering og kapitalbinding',
  subtitle: 'Økonomistyring – Kap. 13 og 14',
  description: '30 spørsmål om investeringsanalyse (TBT, NV, IRR), gjensidig utelukkende prosjekter, kapitalbinding, ABC-analyse og DuPont-modellen.',
  cats: {
    investeringsmetoder: { label: 'Investeringsmetoder',         color: '#8b5cf6' },
    gjensidig:           { label: 'Gjensidig utelukkende',       color: '#3b82f6' },
    kapitalbinding:      { label: 'Kapitalbinding og logistikk', color: '#10b981' },
    abc_dupont:          { label: 'ABC-analyse og DuPont',       color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en realinvestering?',
    opts: [
      'Investering i aksjer og verdipapirer',
      'Investering i fysiske driftsmidler som maskiner, bygg og utstyr som genererer fremtidig inntjening',
      'Bankinnskudd med fast rente',
      'Investering i kompetanseutvikling av ansatte'
    ],
    correct: 1,
    explain: 'Realinvesteringer er investeringer i fysiske eiendeler: maskiner, bygg, transportmidler, IT-systemer. Disse er til bruk i driften og genererer fremtidig inntjening eller besparelse – i motsetning til finansinvesteringer (aksjer, obligasjoner).'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er avkastningskrav i investeringsanalyse?',
    opts: [
      'Den renten banken krever for å gi lån',
      'Den minimumavkastning en investering må gi for å være akseptabel – inkluderer risikofri rente, risikotillegg og inflasjonstillegg',
      'Den avkastningen bedriften fikk på forrige investering',
      'Kravet fra styret til utbytte til aksjonærene'
    ],
    correct: 1,
    explain: 'Avkastningskrav (= kalkulasjonsrente = diskonteringsrente) er minimumavkastningen en investering må gi. Det beregnes som: risikofri rente + risikotillegg + inflasjonstillegg. Investeringer med lavere avkastning enn kravet bør avvises.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er kontantstrøm i investeringsanalyse?',
    opts: [
      'Det samme som driftsresultatet i regnskapet',
      'Innbetalinger minus utbetalinger – de faktiske kontante inn- og utstrømmene',
      'Salgsinntekter minus alle kostnader inkl. avskrivninger',
      'Resultatet etter skatt'
    ],
    correct: 1,
    explain: 'Kontantstrøm = Innbetalinger − Utbetalinger. Viktig: avskrivninger er IKKE utbetalinger og holdes utenfor. Gjeldsrenter holdes utenfor (avkastningskravet dekker dette). Sunk costs (allerede pådratte kostnader) holdes utenfor.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er pengenes tidsverdi?',
    opts: [
      'At penger er verdt mer i dag enn samme beløp i fremtiden',
      'At priser stiger over tid på grunn av inflasjon',
      'At penger i banken tjener renter og vokser over tid',
      'Alle over er riktige – de er ulike sider av samme prinsipp'
    ],
    correct: 3,
    explain: 'Pengenes tidsverdi er det grunnleggende prinsippet om at kr 1 i dag er mer verdt enn kr 1 i fremtiden – fordi penger i dag kan investeres og gi avkastning, og fordi fremtidig beløp er mer usikkert og inflasjon reduserer kjøpekraften.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er tilbakebetalingsmetoden (TBT)?',
    opts: [
      'En metode som beregner avkastningen i prosent av investeringen',
      'En metode som beregner hvor lang tid det tar å tjene inn investeringsbeløpet: TBT = Investeringsutgift / Årlig innbetalingsoverskudd',
      'En metode som diskonterer fremtidige kontantstrømmer til nåverdi',
      'En metode som sammenligner internrenten med avkastningskravet'
    ],
    correct: 1,
    explain: 'TBT = Investeringsutgift / Årlig innbetalingsoverskudd (ved jevn strøm). Enkel å beregne. Beslutningsregel: gjennomfør hvis TBT < levetiden. Fordeler: enkel, likviditetsfokus. Ulemper: ignorerer pengenes tidsverdi og kontantstrøm etter TBT-perioden.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en svakhet ved tilbakebetalingsmetoden?',
    opts: [
      'Den er for kompleks å beregne i praksis',
      'Den ignorerer pengenes tidsverdi og hva som skjer etter tilbakebetalingsperioden',
      'Den tar ikke hensyn til investeringens størrelse',
      'Den krever at kontantstrømmene er kjente på forhånd'
    ],
    correct: 1,
    explain: 'TBT-metodens to store svakheter: (1) den ignorerer pengenes tidsverdi (kr i år 1 og år 5 behandles likt), og (2) den ser ikke på hva som skjer etter tilbakebetalingsperioden – en lønnsom investering kan bli avvist.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er nåverdimetoden, og hva er beslutningsregelen?',
    opts: [
      'En metode som diskonterer fremtidige kontantstrømmer til nåverdier; gjennomfør hvis NV > 0',
      'En metode som beregner gjennomsnittsavkastning; gjennomfør hvis snitt > avkastningskrav',
      'En metode som beregner tilbakebetalingstid; gjennomfør hvis TBT < levetid',
      'En metode som sammenligner internrenter; velg prosjektet med høyest IR'
    ],
    correct: 0,
    explain: 'NV-metoden: NV = −I₀ + Σ Cn/(1+k)^n. Fremtidige kontantstrømmer diskonteres til dagens verdi med avkastningskravet k. Beslutningsregel: positiv NV → lønnsomt; ved valg mellom prosjekter → velg høyest positiv NV.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er internrentemetoden (IRR)?',
    opts: [
      'En metode for å beregne den interne kostnadsraten',
      'Den avkastningsraten som gjør nåverdien av prosjektet = 0; gjennomfør hvis IR > avkastningskrav',
      'En metode for å beregne rentekostnadene på lån',
      'En metode som beregner avkastning på egenkapitalen'
    ],
    correct: 1,
    explain: 'Internrente (IR) er det avkastningskravet som nettopp gjør NV = 0. Beslutningsregel for uavhengige prosjekter: gjennomfør alle prosjekter med IR > avkastningskrav. Høyere IR = bedre avkastning.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'Hva er en nåverdiprofil?',
    opts: [
      'En profil av investorens risikotoleranse',
      'En grafisk fremstilling av nåverdien som funksjon av avkastningskravet – viser ved hvilken rente NV = 0 (internrenten)',
      'En oversikt over alle nåverdipositive prosjekter bedriften vurderer',
      'Et diagram som viser kontantstrømmene over prosjektets levetid'
    ],
    correct: 1,
    explain: 'Nåverdiprofilen viser NV på y-aksen mot avkastningskravet på x-aksen. Der kurven krysser x-aksen (NV = 0) er internrenten. Profilen viser tydelig sammenhengen mellom avkastningskrav og lønnsomhet.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er gjensidig utelukkende prosjekter?',
    opts: [
      'Prosjekter som ikke kan gjennomføres i samme periode',
      'Prosjekter der valg av ett alternativ utelukker de andre – f.eks. tre tilbud på nytt produksjonsutstyr der man kun kan velge ett',
      'Prosjekter med lik investering og lik levetid',
      'Prosjekter som konkurrerer om de samme ressursene'
    ],
    correct: 1,
    explain: 'Gjensidig utelukkende prosjekter er alternativer der man BARE kan velge ett – de utelukker hverandre. Eksempel: bytte produksjonsutstyr der man mottar 3 tilbud men kun kan kjøpe ett.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hvorfor er internrentemetoden (IRR) UEGNET ved gjensidig utelukkende prosjekter?',
    opts: [
      'IRR er alltid feil – man bør alltid bruke TBT',
      'IRR måler prosentavkastning uten å ta hensyn til prosjektets størrelse – et lite prosjekt med høy % kan gi lavere faktisk fortjeneste (kr) enn et større prosjekt med lavere %',
      'IRR er bare egnet for prosjekter med likelier kontantstrøm',
      'IRR tar ikke hensyn til skatt og avskrivninger'
    ],
    correct: 1,
    explain: '"Det er pengene vi lever av, ikke prosentene." IRR viser prosentavkastning uten å ta hensyn til størrelse. Et prosjekt med IR = 100% og NV = 1 kr er dårligere enn ett med IR = 50% og NV = 50 kr. NV-metoden velger riktig.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er beslutningsregelen for gjensidig utelukkende prosjekter med nåverdimetoden?',
    opts: [
      'Velg det prosjektet med kortest tilbakebetalingstid',
      'Velg det prosjektet med høyest positiv nåverdi',
      'Velg det prosjektet med høyest internrente',
      'Gjennomfør alle prosjekter med positiv nåverdi'
    ],
    correct: 1,
    explain: 'Ved gjensidig utelukkende prosjekter: bruk nåverdimetoden og velg prosjektet med HØYEST POSITIV nåverdi. Dette er fordi NV viser den faktiske verdiskapingen i kroner.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er beslutningsregelen for UAVHENGIGE prosjekter med internrentemetoden?',
    opts: [
      'Velg prosjektet med høyest IR, kun ett kan gjennomføres',
      'Gjennomfør ALLE prosjekter med IR > avkastningskravet, forutsatt tilgjengelig kapital',
      'Gjennomfør kun prosjektet med høyest nåverdi',
      'Ignorer IR og bruk alltid TBT for uavhengige prosjekter'
    ],
    correct: 1,
    explain: 'For uavhengige prosjekter (man kan gjennomføre flere) er IRR nyttig: gjennomfør alle prosjekter der IR > avkastningskrav. Hvert prosjekt vurderes for seg, og alle lønnsomme gjennomføres hvis kapital tillater det.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er følsomhetsanalyse i investeringsanalyse?',
    opts: [
      'En analyse av de ansattes holdninger til investeringen',
      'Man endrer én og én forutsetning i kalkylen for å se konsekvensene for nåverdien – vurderer usikkerhet i kontantstrømmene',
      'En analyse av investorens risikoaversjon',
      'En test av om prosjektet er sensitivt for politiske beslutninger'
    ],
    correct: 1,
    explain: 'Følsomhetsanalyse: man endrer én og én forutsetning (salgspris, volum, investeringsbeløp, avkastningskrav) og beregner ny NV. Viser hvilke forutsetninger prosjektet er mest følsomt for og hvor mye som kan gå galt før prosjektet blir ulønnsomt.'
  },
  {
    cat: 'gjensidig',
    catLabel: 'Gjensidig utelukkende',
    q: 'Hva er en sunk cost, og hvorfor holdes den utenfor investeringsanalysen?',
    opts: [
      'En kalkulatorisk kostnad som ikke er betalt ennå',
      'En allerede pådratt kostnad som ikke kan gjenvinnes – irrelevant for fremtidige beslutninger fordi den påløper uansett hva man velger',
      'En kostnad som er skjult i kalkylen',
      'En fremtidig kostnad som er svært usikker'
    ],
    correct: 1,
    explain: 'Sunk cost er en kostnad som allerede er pådratt og ikke kan gjenvinnes. Den er irrelevant for investeringsbeslutningen fordi den påløper uansett hva man bestemmer seg for. Å inkludere sunk costs leder til dårlige beslutninger.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er kapitalbinding i omløpsmidler?',
    opts: [
      'Investeringer i aksjer og finansielle instrumenter',
      'Kapital investert i kundefordringer, varelager og råvarer – kapital som ikke gir direkte avkastning og representerer en kostnad',
      'Den kapital som er bundet i anleggsmidler som bygg og maskiner',
      'Egenkapitalen som er bundet i selskapet av eierne'
    ],
    correct: 1,
    explain: 'Kapitalbinding i omløpsmidler er kapital "fanget" i fordringer, varelager og råvarer. Denne kapitalen er ikke tilgjengelig for annen bruk og representerer en alternativkostnad – den kunne alternativt gitt avkastning andre steder.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er konsekvensen av økt kapitalbinding for lønnsomheten (TKR)?',
    opts: [
      'Økt kapitalbinding gir alltid bedre TKR fordi man investerer mer',
      'Økt kapitalbinding øker totalkapitalen og dermed reduseres TKR = Resultat / Totalkapital × 100',
      'Økt kapitalbinding påvirker ikke TKR – de er uavhengige',
      'Økt kapitalbinding gir økt omsetning som kompenserer for høyere kapital'
    ],
    correct: 1,
    explain: 'TKR = Resultat / Totalkapital × 100. Økt kapitalbinding (større varelager, lengre kredittid til kunder) øker totalkapitalen uten nødvendigvis å øke resultatet – dermed faller TKR. Effektiv kapitalbinding gir bedre TKR.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er faktoring som virkemiddel for å redusere kapitalbinding i kundefordringer?',
    opts: [
      'Å gi kundene lengre kredittid for å øke salget',
      'Å selge kundefordringer til et factoringselskap mot umiddelbar betaling (minus avgift) – reduserer kapital bundet i fordringer og gir kredittforsikring',
      'Å innføre strengere kredittvurdering av nye kunder',
      'Å kreve forskuddsbetaling av alle kunder'
    ],
    correct: 1,
    explain: 'Faktoring: bedriften selger kundefordringene til et factoringselskap som betaler umiddelbart (minus en avgift). Fordeler: reduserer kapitalbinding, gir kredittforsikring (beskyttelse mot tap) og frigjør ressurser fra kredittadministrasjon.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er defensiv vs. offensiv kredittstyring?',
    opts: [
      'Defensiv = gi lang kreditt; offensiv = kreve kontant',
      'Defensiv = unngå tap gjennom strenge purrerutiner og kredittvurdering; offensiv = bruke kredittpolitikk proaktivt som konkurransefortrinn',
      'Defensiv = intern kredittstyring; offensiv = bruk av factoringselskap',
      'Defensiv = korte betalingsfrister; offensiv = lange betalingsfrister'
    ],
    correct: 1,
    explain: 'Defensiv kredittstyring fokuserer på å unngå tap – grundig kredittvurdering, purrerutiner og innkreving. Offensiv kredittstyring bruker kredittpolitikken strategisk – bedre kredittbetingelser som konkurransefortrinn for å vinne kunder.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er lagringskostnader, og hva inngår?',
    opts: [
      'Kun transportkostnader for varer til og fra lageret',
      'Svinn og ukurans, avskrivning lagerbygg, renter på bundet kapital, forsikring og servicekostnader – oppgis som % av lagerverdi',
      'Kun leiekostnad for lagerlokalet',
      'Kun arbeidslønnen til lagerarbeiderne'
    ],
    correct: 1,
    explain: 'Lagringskostnader = svinn/ukurans + avskrivning lagerbygg + renter på bundet kapital + forsikring + servicekostnader. Disse oppgis typisk som en prosentandel av gjennomsnittlig lagerverdi per år.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er leveringsservicenivå?',
    opts: [
      'Antall dager fra bestilling til levering',
      'Andelen av den totale etterspørselen som kan leveres direkte fra lager – høyere servicenivå krever mer kapital bundet i lager',
      'Kundetilfredshet målt på en skala fra 1–10',
      'Antall leveranser per år til en bestemt kunde'
    ],
    correct: 1,
    explain: 'Leveringsservicenivå = andel av etterspørselen som leveres direkte fra lager uten forsinkelse. Jo høyere servicenivå man ønsker, jo mer lager må holdes – og lagerkostnadene stiger eksponentielt for å nå meget høye servicenivåer.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er optimalt bestillingsvolum/-tidspunkt?',
    opts: [
      'Det punktet der lagringskostnadene er på sitt laveste',
      'Det punkt der totale lagerkostnader er lavest – der lagringskostnader og bestillingskostnader er like store',
      'Det volum der man aldri går tom for varer',
      'Det volum som gir høyest leverandørrabatt'
    ],
    correct: 1,
    explain: 'Totale lagerkostnader = lagringskostnader + bestillingskostnader. Lagringskostnader stiger med større lager; bestillingskostnader faller med færre og større bestillinger. Optimalt volum er der summen er lavest – der de to kurvene krysses.'
  },
  {
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er ABC-analyse (Paretoprinsippet)?',
    opts: [
      'En metode for å klassifisere ansatte etter prestasjoner',
      'En metode basert på 20/80-regelen: 20% av varene/kundene/produktene står for 80% av lagerverdi/omsetning/dekningsbidrag',
      'En metode for å kategorisere kostnader i A (direkte), B (indirekte) og C (kalkulatoriske)',
      'En analyse av de tre viktigste budsjettpunktene'
    ],
    correct: 1,
    explain: 'ABC-analyse bygger på Paretoprinsippet (80/20): typisk vil 20% av varene utgjøre 80% av lagerverdien (A-varer), 30% utgjøre 15% (B-varer), og 50% utgjøre 5% (C-varer). A-varer krever tett oppfølging.'
  },
  {
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er praktisk bruk av ABC-analyse i lagerstyring?',
    opts: [
      'Alle varer behandles likt for å unngå favorisering',
      'A-varer (høy verdi): tett oppfølging og hyppige tellinger; B-varer: middels; C-varer (lav verdi): enklere rutiner og større sikkerhetslagre',
      'C-varer prioriteres fordi de utgjør flest antall varenummer',
      'ABC-analyse brukes kun for å kategorisere leverandører, ikke varer'
    ],
    correct: 1,
    explain: 'ABC-analyse gir ulike styringsprinsipper: A-varer (høy verdi, 20% av varenummer, 80% av verdi): hyppige tellinger, tett styring. C-varer (lav verdi, 50% av varenummer, 5% av verdi): enklere rutiner, kan ha større sikkerhetslagre.'
  },
  {
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er DuPont-modellens formel og hva viser den?',
    opts: [
      'TKR = Egenkapital / Totalkapital × Resultatgrad',
      'TKR = Kapitalens omløpshastighet × Resultatgrad – viser de to veiene til bedre totalkapitalrentabilitet',
      'TKR = Bruttofortjeneste / Salgsinntekter × 100',
      'TKR = Driftsresultat / Gjeld × Egenkapitalprosent'
    ],
    correct: 1,
    explain: 'DuPont: TKR = Kapitalens omløpshastighet (Driftsinntekter/Totalkapital) × Resultatgrad (Resultat/Driftsinntekter × 100). Viser at man kan forbedre TKR enten via effektivitet (mer salg per krone kapital) eller marginer (bedre resultatgrad).'
  },
  {
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hva er kapitalens omløpshastighet som del av DuPont-modellen?',
    opts: [
      'Varelagerets omløpshastighet',
      'Driftsinntekter / Gjennomsnittlig totalkapital – viser effektiviteten i kapitalbruken',
      'Totalkapital / Egenkapital – gearingfaktoren',
      'Antall ganger kapital reinvesteres per år'
    ],
    correct: 1,
    explain: 'Kapitalens omløpshastighet = Driftsinntekter / Gjennomsnittlig totalkapital. Høy omløpshastighet betyr at bedriften genererer mye omsetning per krone investert kapital – effektiv kapitalbruk. Lav omløpshastighet indikerer for mye kapital bundet.'
  },
  {
    cat: 'investeringsmetoder',
    catLabel: 'Investeringsmetoder',
    q: 'En bedrift vurderer investering A (TBT = 2 år) og investering B (TBT = 3 år), begge med 5 års levetid. Investering B har mye større kontantstrøm etter år 3. Hva bør velges?',
    opts: [
      'Investering A alltid – kortere TBT er alltid bedre',
      'Det avhenger av nåverdien – TBT-metoden kan være misvisende fordi den ignorerer kontantstrøm etter tilbakebetalingstiden',
      'Investering B alltid – lengre levetid gir alltid mer verdi',
      'Begge er like gode – TBT er eneste relevante kriterium'
    ],
    correct: 1,
    explain: 'TBT-metoden er misvisende her: investering A har kortere TBT, men B kan ha mye høyere nåverdi fordi den genererer store kontantstrømmer etter år 3 som TBT-metoden fullstendig ignorerer. Bruk nåverdimetoden for riktig beslutning.'
  },
  {
    cat: 'kapitalbinding',
    catLabel: 'Kapitalbinding og logistikk',
    q: 'Hva er JIT (Just-In-Time) og LEAN i logistikksammenheng?',
    opts: [
      'Metoder for å automatisere produksjonen',
      'JIT: levere materialer akkurat når de trengs – minimerer lager; LEAN: eliminere all sløsing i prosessene inkl. overproduksjon og unødvendig lager',
      'Dataverktøy for lageroptimalisering',
      'Strategier for å øke leveringsservicenivået'
    ],
    correct: 1,
    explain: 'JIT (Just-In-Time): varer ankommer produksjonen akkurat når de trengs – minimerer varelagerbinding. LEAN eliminerer alle former for muda (sløsing) i prosessen, inkludert overproduksjon, unødvendig lager, venting og unødvendige bevegelser.'
  },
  {
    cat: 'abc_dupont',
    catLabel: 'ABC-analyse og DuPont',
    q: 'Hvilke to tiltak kan bedre DuPont-modellens TKR?',
    opts: [
      'Øke egenkapitalen og redusere gjelden',
      'Øke kapitalens omløpshastighet (mer salg per krone kapital) og/eller øke resultatgraden (bedre marginer)',
      'Øke varelageret og utvide kassekreditten',
      'Ansette flere selgere og øke markedsbudsjettet'
    ],
    correct: 1,
    explain: 'DuPont-modellen viser klart to veier til bedre TKR: (1) øke kapitalens omløpshastighet – bruk mindre kapital for å generere samme omsetning (reduser varelager, fordringer), eller (2) øke resultatgraden – bedre marginer via høyere priser eller lavere kostnader.'
  },
];
