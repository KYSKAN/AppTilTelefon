const QUIZ_META = {
  id: 'lom-ool-kultur',
  title: 'Organisasjonskultur',
  subtitle: 'Organisasjon og ledelse – Kap. 5',
  description: '30 spørsmål om Scheins kulturmodell, de 4 kulturtypene, subkulturer, gruppetenkning og Belbins 9 grupperoller.',
  cats: {
    schein:      { label: 'Scheins kulturmodell',  color: '#8b5cf6' },
    kulturtyper: { label: 'De fire kulturtypene',  color: '#3b82f6' },
    subkulturer: { label: 'Subkulturer og dynamikk', color: '#10b981' },
    belbin:      { label: 'Belbins grupperoller',  color: '#f59e0b' },
  }
};

const QUESTIONS = [
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hvem utviklet den mest brukte definisjonen av organisasjonskultur som "et mønster av felles grunnleggende antakelser"?',
    opts: [
      'Peter Senge',
      'Edgar Schein',
      'Douglas McGregor',
      'Meredith Belbin'
    ],
    correct: 1,
    explain: 'Edgar Schein definerte organisasjonskultur som et mønster av felles grunnleggende antakelser som en gruppe har lært seg gjennom å løse problemer med ekstern tilpasning og intern integrasjon.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva er artefakter i Scheins kulturmodell?',
    opts: [
      'De dypeste, ubevisste antakelsene i organisasjonen',
      'De synlige, overfladiske uttrykkene for kultur: symboler, ritualer, kleskode, kontorlandskap',
      'De formelle verdiene ledelsen har vedtatt',
      'De skriftlige normene i personalhåndboken'
    ],
    correct: 1,
    explain: 'Artefakter er det synlige og øverste nivået i Scheins modell – fysiske og atferdsmessige uttrykk for kulturen: logoer, ritualer, kleskode, kontorlandskap og språk.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva representerer "verdier og normer" som det midtre nivået i Scheins modell?',
    opts: [
      'Det som er lett observerbart og synlig for utenforstående',
      'Delte oppfatninger om hva som er riktig atferd – delvis bevisst og kan diskuteres',
      'Fullstendig ubevisste antakelser som tas for gitt',
      'Formelle regler og prosedyrer nedskrevet i håndbøker'
    ],
    correct: 1,
    explain: 'Verdier og normer er det midtre nivået – felles oppfatninger om hva som er riktig, viktig og ønskelig atferd. De er delvis bevisste og kan diskuteres, men er ikke alltid synlige for utenforstående.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva er grunnleggende antakelser i Scheins kulturmodell?',
    opts: [
      'De synlige symbolene og ritualene i organisasjonen',
      'De nedskrevne verdiene i årsrapporten',
      'Dype, ubevisste antagelser om virkeligheten som tas fullstendig for gitt',
      'De formelle målene i strategiplanen'
    ],
    correct: 2,
    explain: 'Grunnleggende antakelser er det dypeste og mest usynlige nivået – ubevisste antagelser om verden, mennesket og relasjoner som tas helt for gitt og sjelden stilles spørsmål ved.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva illustrerer isfjellmodellen i organisasjonskulturens kontekst?',
    opts: [
      'At organisasjonskultur bare finnes i store bedrifter',
      'At den synlige delen (artefakter) er liten, mens den usynlige delen (verdier, antakelser) er mye større og dypere',
      'At kulturen er frossen og ikke kan endres',
      'At bare ledelsen forstår organisasjonskulturen'
    ],
    correct: 1,
    explain: 'Isfjellmodellen illustrerer at bare en liten del av kulturen er synlig (artefakter over vannflaten), mens den største og viktigste delen (verdier, normer og grunnleggende antakelser) er usynlig under overflaten.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva er ekstern tilpasning som funksjon for organisasjonskultur?',
    opts: [
      'Å ansette folk utenfra for å fornye kulturen',
      'At kulturen hjelper organisasjonen å forstå og tilpasse seg omgivelsene – marked, konkurrenter, samfunn',
      'At organisasjonen kopierer kulturen til konkurrentene',
      'At kulturen tilpasses ny teknologi automatisk'
    ],
    correct: 1,
    explain: 'Ekstern tilpasning handler om at kulturen gir felles forståelse for mål, strategi og metoder som hjelper organisasjonen navigere og tilpasse seg ytre omgivelser.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hva er intern integrasjon som funksjon for organisasjonskultur?',
    opts: [
      'At alle ansatte har samme stillingstittel',
      'At kulturen skaper felles identitet, samhold og felles forståelse internt i organisasjonen',
      'At alle avdelinger bruker de samme IT-systemene',
      'At lønnen er lik for alle'
    ],
    correct: 1,
    explain: 'Intern integrasjon innebærer at kulturen skaper et felles "vi" – felles identitet, kommunikasjonsmåter, grenser for inn- og utgrupper, og felles forståelse for makt og status.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hva kjennetegner klankultur?',
    opts: [
      'Sterk fokus på konkurranse, resultater og markedsandeler',
      'Rigid hierarki med klare regler, prosedyrer og kontroll',
      'Familie-lignende atmosfære med høy lojalitet, samarbeid og omsorg for ansatte',
      'Innovasjon, risikovilje og kreativitet fremfor stabilitet'
    ],
    correct: 2,
    explain: 'Klankultur er kjennetegnet av et familie-lignende miljø med sterk lojalitet, samarbeid, deltakelse og omsorg for de ansatte. Ledere fungerer som mentorer.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hva kjennetegner adhockultur?',
    opts: [
      'Stabilitet, kontroll og klare prosedyrer',
      'Sterk konkurranseorientering mot markedet og kundene',
      'Innovasjon, kreativitet, fleksibilitet og villighet til å ta risiko',
      'Tett familiefølelse og omsorg for ansattes trivsel'
    ],
    correct: 2,
    explain: 'Adhockultur kjennetegnes av dynamisme, kreativitet og risikovilje. Organisasjonen er villig til å prøve nytt og aksepterer usikkerhet. Typisk i oppstartsbedrifter og FoU-miljøer.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hva kjennetegner hierarkikultur?',
    opts: [
      'Innovasjon og kreativitet er de viktigste verdiene',
      'Formelle regler, klare prosedyrer, stabilitet og effektivitet gjennom kontroll',
      'Sterkt fokus på å vinne i markedet og slå konkurrentene',
      'Uformell, familie-lignende atmosfære'
    ],
    correct: 1,
    explain: 'Hierarkikultur vektlegger formelle regler, prosedyrer, standardisering og stabilitet. Lederne er koordinatorer og organisatorer. Typisk i offentlige etater og tradisjonelle produksjonsbedrifter.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hva kjennetegner markedskultur?',
    opts: [
      'Omsorg for ansatte og uformelt arbeidsmiljø',
      'Kreativitet og vilje til å ta risiko',
      'Resultatorientering, konkurranse og fokus på å nå markedsmål',
      'Strenge regler, prosedyrer og hierarki'
    ],
    correct: 2,
    explain: 'Markedskultur er resultat- og konkurranseorientert. Fokuset er på å nå mål, vinne markedsandeler og slå konkurrentene. Ledere er pådrivere og krevende.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hvilken kulturtype passer best for en offentlig etat med mange regler og standardiserte prosedyrer?',
    opts: [
      'Adhockultur',
      'Klankultur',
      'Hierarkikultur',
      'Markedskultur'
    ],
    correct: 2,
    explain: 'Hierarkikultur med vekt på regler, prosedyrer, stabilitet og kontroll passer best for offentlige etater og organisasjoner som krever høy grad av standardisering.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'Hvilken kulturtype vil typisk dominere i en startup-bedrift som utvikler ny teknologi?',
    opts: [
      'Hierarkikultur',
      'Markedskultur',
      'Klankultur',
      'Adhockultur'
    ],
    correct: 3,
    explain: 'Adhockultur med vekt på innovasjon, fleksibilitet, risikovilje og kreativitet er typisk for oppstartsbedrifter og teknologiselskaper i vekst.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hva er en subkultur i en organisasjon?',
    opts: [
      'En kultur som er svakere enn den dominante kulturen og vil forsvinne',
      'En distinkt kultur som eksisterer innenfor den dominerende organisasjonskulturen – gjerne i en avdeling eller faggruppe',
      'En kultur som bare finnes i multinasjonale selskaper',
      'En uformell sosial gruppe uten kulturell betydning'
    ],
    correct: 1,
    explain: 'Subkulturer er distinkte kulturer som oppstår i undergrupper av organisasjonen (avdelinger, faggrupper, lokasjoner). De kan sameksistere med og styrke dominantkulturen.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hva kjennetegner en motkultur i en organisasjon?',
    opts: [
      'En kultur som støtter og forsterker organisasjonens offisielle verdier',
      'En kultur som aktivt utfordrer og motarbeider den dominerende organisasjonskulturen',
      'En kultur som oppstår i utenlandske datterselskaper',
      'En midlertidig kultur under omstillingsprosesser'
    ],
    correct: 1,
    explain: 'En motkultur er en gruppe som ikke bare er annerledes, men som aktivt motarbeider den dominerende kulturen. Dette kan hemme endringsprosesser og skape konflikter.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hva er gruppetenkning (groupthink) ifølge Irving Janis?',
    opts: [
      'En metode for effektiv gruppebrainstorming',
      'Et fenomen der press for konformitet i gruppen undertrykker kritisk tenkning og fører til dårlige beslutninger',
      'En teknikk for å bygge teamkultur raskt',
      'Evnen til å tenke som en enhet i pressede situasjoner'
    ],
    correct: 1,
    explain: 'Gruppetenkning (Janis) oppstår når press for konsensus i gruppen undertrykker kritisk tenkning. Gruppen unngår uenighet, og dette kan føre til svært dårlige beslutninger – som ved Bay of Pigs-invasjonen.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hva er dysfunksjonell organisasjonskultur?',
    opts: [
      'En kultur som mangler skriftlige verdier og normer',
      'En kultur som hemmer organisasjonens effektivitet, trivsel og måloppnåelse',
      'En kultur som er for sterk og ekskluderer nye medarbeidere',
      'En kultur som kun finnes i kriserammede organisasjoner'
    ],
    correct: 1,
    explain: 'Dysfunksjonell kultur er en kultur som aktivt hemmer organisasjonens evne til å fungere godt – f.eks. gjennom taushetsnormer, fryktkultur, nepotisme eller gruppetenkning.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hvilken rolle spiller leder i kulturbygging?',
    opts: [
      'Ledere har minimal innflytelse på kulturen – den oppstår naturlig',
      'Ledere setter eksempel, definerer hva som belønnes og straffer, og former ritualene i organisasjonen',
      'Ledere endrer kulturen ved å skrive nye retningslinjer og håndbøker',
      'Kulturen styres utelukkende av de ansatte selv'
    ],
    correct: 1,
    explain: 'Ledere er de viktigste kulturbærerne og -skaperne. Gjennom hva de prioriterer, belønner, straffer, sier og gjør, sender de kontinuerlige signaler om hva som er viktig i organisasjonen.'
  },
  {
    cat: 'subkulturer',
    catLabel: 'Subkulturer og dynamikk',
    q: 'Hva kan seleksjon og rekruttering gjøre med organisasjonskulturen?',
    opts: [
      'Rekruttering har ingen kulturell effekt',
      'Rekruttering av like-minded kandidater kan forsterke eksisterende kultur; mangfold kan utfordre og fornye den',
      'Nyansatte endrer alltid kulturen drastisk',
      'Seleksjon bør kun baseres på tekniske ferdigheter – ikke kulturell match'
    ],
    correct: 1,
    explain: 'Rekruttering er et viktig kulturvirkemiddel. Å ansette folk som "passer inn" forsterker kulturen, mens bevisst rekruttering av mangfold kan bidra til kulturell fornyelse.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hvor mange grupperoller identifiserte Meredith Belbin i sin forskning?',
    opts: ['6', '7', '8', '9'],
    correct: 3,
    explain: 'Belbin identifiserte 9 grupperoller fordelt på tre kategorier: handlingsroller, sosiale roller og reflekterende (tanke-)roller.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hvilke av følgende er Belbins HANDLINGSROLLER?',
    opts: [
      'Idéskaper, Vurderer og Spesialist',
      'Koordinator, Lagspiller og Ressurskontakt',
      'Iverksetter, Avslutter og Pådriver',
      'Koordinator, Iverksetter og Idéskaper'
    ],
    correct: 2,
    explain: 'Belbins handlingsroller er Iverksetter (strukturerer og gjennomfører), Avslutter (kvalitetssikrer og ferdigstiller) og Pådriver (driver gruppen fremover med energi).'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hvilke av følgende er Belbins SOSIALE roller?',
    opts: [
      'Iverksetter, Avslutter og Pådriver',
      'Idéskaper, Vurderer og Spesialist',
      'Koordinator, Lagspiller og Ressurskontakt',
      'Pådriver, Koordinator og Avslutter'
    ],
    correct: 2,
    explain: 'Belbins sosiale roller er Koordinator (delegerer og fasiliterer), Lagspiller (støtter og samarbeider) og Ressurskontakt (henter ressurser og kontakter utenfra).'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hvilke av følgende er Belbins REFLEKTERENDE (tanke-)roller?',
    opts: [
      'Koordinator, Lagspiller og Ressurskontakt',
      'Idéskaper, Vurderer og Spesialist',
      'Iverksetter, Avslutter og Pådriver',
      'Pådriver, Idéskaper og Koordinator'
    ],
    correct: 1,
    explain: 'Belbins reflekterende roller er Idéskaper (kreativ problemløser), Vurderer (kritisk analytiker) og Spesialist (dyp fagekspertise på et smalt felt).'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hva er kjennetegnet på rollen "Idéskaper" i Belbins modell?',
    opts: [
      'Følger opp detaljer og sikrer at arbeidet blir ferdig til tid',
      'Henter inn kontakter og ressurser fra utenfor gruppen',
      'Kreativ tenker som genererer originale ideer og løser vanskelige problemer',
      'Koordinerer gruppemedlemmene og delegerer oppgaver'
    ],
    correct: 2,
    explain: 'Idéskaperen er den kreative og ukonvensjonelle tenkeren i gruppen – genererer originale ideer og løser vanskelige problemer, men kan være dårlig på å kommunisere ideene til andre.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hva er kjennetegnet på rollen "Avslutter" i Belbins modell?',
    opts: [
      'Avslutter diskusjoner for å komme videre',
      'Kvalitetssikrer arbeidet, følger opp detaljer og sikrer at alt er ferdig og feilfritt',
      'Avslutter konflikter mellom gruppemedlemmene',
      'Tar de vanskeligste oppgavene og fullfører dem alene'
    ],
    correct: 1,
    explain: 'Avslutteren er perfeksjonisten i gruppen – følger opp detaljer, søker etter feil og mangler, og sørger for at arbeidet holder høy kvalitet ved leveranse.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hva er kjennetegnet på rollen "Koordinator" i Belbins modell?',
    opts: [
      'Koordinerer produksjonslinjen i fabrikken',
      'Leder gruppen ved å tydeliggjøre mål, delegere oppgaver og fremme felles beslutninger',
      'Koordinerer leveranser fra ulike leverandører',
      'Kontrollerer at regler og prosedyrer følges'
    ],
    correct: 1,
    explain: 'Koordinatoren er en moden og trygg ledertype som tydeliggjør mål, delegerer oppgaver til riktige mennesker og fremmer samarbeid og felles beslutninger i gruppen.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hva er kjennetegnet på rollen "Ressurskontakt" i Belbins modell?',
    opts: [
      'Har dyp spesialistkompetanse på ett fagfelt',
      'Utforskende og entusiastisk – henter inn kontakter, ideer og ressurser utenfra gruppen',
      'Kontrollerer budsjett og ressursbruk i prosjektet',
      'Analyserer gruppens ressurser og foreslår omfordeling'
    ],
    correct: 1,
    explain: 'Ressurskontakten er utadvendt og entusiastisk – et nettverk av kontakter utenfor gruppen og henter inn impulser, ideer og ressurser som kan hjelpe gruppen fremover.'
  },
  {
    cat: 'belbin',
    catLabel: 'Belbins grupperoller',
    q: 'Hva er kjennetegnet på rollen "Vurderer" i Belbins modell?',
    opts: [
      'Entusiastisk idéskaper som genererer mange kreative forslag',
      'Strategisk og kritisk analytiker som vurderer ideer objektivt og oppdager svakheter',
      'Vurderer teammedlemmenes prestasjoner og gir tilbakemelding',
      'Tar raske beslutninger under tidspress'
    ],
    correct: 1,
    explain: 'Vurdereren er den strategiske, kritiske analytikeren. Er dyktig til å vurdere ideer og forslag objektivt, oppdager svakheter og hindrer dårlige beslutninger – men kan oppfattes som kritisk og kynisk.'
  },
  {
    cat: 'schein',
    catLabel: 'Scheins kulturmodell',
    q: 'Hvilken utfordring møter man ved kulturendring ifølge Scheins modell?',
    opts: [
      'Det er enkelt å endre kulturen ved å skrive nye verdier',
      'De grunnleggende antakelsene er ubevisste og tas for gitt – dermed svært vanskelig å endre',
      'Kulturen er ikke mulig å endre når den først er etablert',
      'Kun artefaktene er vanskelige å endre; resten går raskt'
    ],
    correct: 1,
    explain: 'De grunnleggende antakelsene er det dypeste og mest resistente nivået. De er ubevisste og tas for gitt, noe som gjør kulturendring krevende og tidkrevende – man kan ikke bare skrive nye verdier.'
  },
  {
    cat: 'kulturtyper',
    catLabel: 'De fire kulturtypene',
    q: 'En bedrift som fokuserer sterkt på å slå konkurrentene, nå salgsmål og øke markedsandelen, kjennetegnes av hvilken kulturtype?',
    opts: [
      'Klankultur',
      'Adhockultur',
      'Hierarkikultur',
      'Markedskultur'
    ],
    correct: 3,
    explain: 'Markedskultur kjennetegnes av sterk resultatorientering og konkurranseinstinkt – fokus på å nå mål, vinne markedsandeler og overgå konkurrentene.'
  },
];
