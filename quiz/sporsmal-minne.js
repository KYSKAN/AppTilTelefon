'use strict';
const QUIZ_META = {
  id: 'minne',
  title: 'Dataminne',
  subtitle: 'Bjørns Elektroniske',
  cats: {
    primær:  { label: 'Primærminne og cache', color: '#5c7cfa' },
    rom:     { label: 'ROM og Flash',         color: '#f59e0b' },
    lagring: { label: 'Lagringsmedier',       color: '#10b981' },
  }
};

const QUESTIONS = [
  {
    q: 'Hva kjennetegner primærminne (RAM)?',
    opts: ['Flyktig minne som mister data uten strøm', 'Permanent lagring', 'Basert på magnetplater', 'Lagrer firmware'],
    correct: 0, cat: 'primær',
    explain: 'RAM (Random Access Memory) er flyktig — det mister all data når strømmen brytes. Det er det aktive arbeidsminnet der CPU-en henter og lagrer data under kjøring.'
  },
  {
    q: 'Hva er den viktigste tekniske forskjellen mellom DRAM og SRAM?',
    opts: ['DRAM er raskere enn SRAM', 'DRAM må oppfriskes, SRAM trenger ikke det', 'SRAM er billigere enn DRAM', 'SRAM er tregere enn DRAM'],
    correct: 1, cat: 'primær',
    explain: 'DRAM (Dynamic RAM) lagrer data i kondensatorer som lekker ladning og må oppfriskes mange ganger per sekund. SRAM bruker vippe-kretser (flip-flops) og holder data stabilt uten oppfrisking, noe som gjør SRAM raskere men dyrere.'
  },
  {
    q: 'Hva lagres i ROM?',
    opts: ['Prosessdata', 'OS i drift', 'Firmware/BIOS', 'Cache-data'],
    correct: 2, cat: 'rom',
    explain: 'ROM (Read-Only Memory) er ikke-flyktig og inneholder firmware og BIOS — grunnleggende programvare som starter systemet. Innholdet er permanent og beholdes selv uten strøm.'
  },
  {
    q: 'Hvilken ROM-type slettes med UV-lys?',
    opts: ['EEPROM', 'Mask-ROM', 'EPROM', 'PROM'],
    correct: 2, cat: 'rom',
    explain: 'EPROM (Erasable Programmable ROM) slettes ved å belyse brikken med ultrafiolett (UV) lys gjennom et kvartsglass-vindu på toppen. Dette tilbakestiller alle celler slik at brikken kan programmeres på nytt.'
  },
  {
    q: 'Hva kjennetegner EEPROM?',
    opts: ['Kan skrives én gang', 'Er flyktig', 'Lagrer kun firmware', 'Slettes elektronisk byte for byte'],
    correct: 3, cat: 'rom',
    explain: 'EEPROM (Electrically Erasable Programmable ROM) kan slettes og skrives om elektrisk, én byte av gangen, uten å fjerne brikken fra kretsen. Dette gir stor fleksibilitet for lagring av konfigurasjon og små datamengder.'
  },
  {
    q: 'Hva er den definerende teknologien i en HDD?',
    opts: ['Flash-chips', 'Optiske linser', 'Magnetiske plater og roterende disker', 'SRAM-celler'],
    correct: 2, cat: 'lagring',
    explain: 'En HDD (Hard Disk Drive) bruker roterende magnetiske plater og en bevegelig lese/skrive-arm til å lagre og hente data. Dataene lagres som magnetiske bitmønstre på platene.'
  },
  {
    q: 'Hva skiller SSD fra HDD?',
    opts: ['Ingen bevegelige deler', 'Tregere tilgang enn HDD', 'Bruker magnetiske plater', 'Mer sårbar for vibrasjon'],
    correct: 0, cat: 'lagring',
    explain: 'En SSD (Solid State Drive) bruker Flash-minne og har ingen bevegelige deler. Dette gir mye raskere tilgangstid, lavere strømforbruk og bedre motstandskraft mot støt og vibrasjon sammenlignet med en HDD.'
  },
  {
    q: 'Hva er en kjent ulempe med SSD?',
    opts: ['Treg tilgang', 'Sårbar for vibrasjon og støt', 'Begrenset antall skriv/slettinger', 'Krever optisk lesing'],
    correct: 2, cat: 'lagring',
    explain: 'Flash-celler i SSD kan bare skrives og slettes et begrenset antall ganger (typisk 1 000–100 000 sykluser per celle) før de degraderes. Dette er SSD-ens viktigste svakhet sammenlignet med HDD.'
  },
  {
    q: 'Hva er den mest definerende tekniske egenskapen til magnetbånd?',
    opts: ['Rask tilfeldig tilgang', 'Flash-basert lagring', 'Sekvensiell tilgang', 'Optisk lesing'],
    correct: 2, cat: 'lagring',
    explain: 'Magnetbånd kan kun lese og skrive data sekvensielt — man må spole til riktig posisjon. Dette gjør tilfeldig tilgang svært treg, men magnetbånd er billig per GB og brukes til backup og langtidsarkivering.'
  },
  {
    q: 'Hva kjennetegner optiske medier (CD/DVD/Blu-ray)?',
    opts: ['Laserlesing', 'Magnetisk lesing', 'Flash-basert lagring', 'Raskere enn SSD'],
    correct: 0, cat: 'lagring',
    explain: 'Optiske medier lagrer data som fysiske fordypninger (pits) og flate områder (lands) på en reflekterende overflate, som leses av en laserstråle. De er ikke-flyktige og brukes til distribusjon og backup.'
  },
  {
    q: 'Hva er den primære hensikten med cache-minne?',
    opts: ['Permanent lagring av filer', 'Rask tilgang til ofte brukte data', 'Lagre OS-kjerne', 'Øke antall prosessorer'],
    correct: 1, cat: 'primær',
    explain: 'Cache-minne er et lite, ekstremt raskt minnelag mellom CPU og RAM. Det lagrer kopier av data og instruksjoner som brukes ofte, slik at CPU-en slipper å vente på det tregere RAM.'
  },
  {
    q: 'Hvor sitter L1-cache?',
    opts: ['I CPU-kjernen', 'På hovedkortet', 'Egen brikke utenfor CPU', 'I RAM-modulen'],
    correct: 0, cat: 'primær',
    explain: 'L1-cache er det raskeste og minste cachenivået og er integrert direkte i hver CPU-kjerne. Den har typisk kapasitet på 32–128 KB og gir tilgangstider på bare noen få klokkesykluser.'
  },
  {
    q: 'Hva stemmer om cache-hierarkiet L1/L2/L3?',
    opts: ['L2 er raskere enn L1', 'L1 er størst', 'L1 er raskest, L3 er størst', 'L3 sitter i CPU-kjernen'],
    correct: 2, cat: 'primær',
    explain: 'Cache-hierarkiet er bygget opp slik at L1 er minst og raskest (lavest latens), L2 er større og litt tregere, og L3 er størst og tregest — men fortsatt mye raskere enn RAM. L3 er gjerne delt mellom alle kjerner.'
  },
  {
    q: 'Hva er en typisk ulempe med cache-minne?',
    opts: ['Høy pris per GB', 'Rask tilgang', 'Stor kapasitet', 'Sekvensiell tilgang'],
    correct: 0, cat: 'primær',
    explain: 'Cache bruker SRAM-teknologi som er langt dyrere å produsere enn DRAM. Kostnaden begrenser størrelsen — en CPU kan ha noen MB cache, mens RAM typisk er i GB-klassen til en brøkdel av prisen.'
  },
  {
    q: 'Hva kjennetegner tertiærlagring?',
    opts: ['Rask tilgang', 'Brukes som arbeidsminne', 'Arkivlagring av store datamengder', 'Erstatning for RAM'],
    correct: 2, cat: 'lagring',
    explain: 'Tertiærlagring (f.eks. magnetbånd og optiske robotbiblioteker) brukes til arkivering av store datamengder som sjelden aksesseres. Tilgangstiden er lang, men kostnad per GB er svært lav.'
  },
  {
    q: 'Hvilken minnetype brukes som systemminne (hovedminne) i datamaskiner?',
    opts: ['SRAM', 'DRAM', 'ROM', 'Magnetbånd'],
    correct: 1, cat: 'primær',
    explain: 'DRAM brukes som hovedminne (RAM) i datamaskiner fordi det er billig, kompakt og skalerbart til store kapasiteter. SRAM er for dyrt og stort til å brukes som generelt systemminne.'
  },
  {
    q: 'Hva brukes SRAM primært til?',
    opts: ['Sekundærlagring', 'Optisk lagring', 'Cache og registre', 'Arkivlagring'],
    correct: 2, cat: 'primær',
    explain: 'SRAM er rask og krever ikke oppfrisking, men er dyr og tar mye plass. Det brukes derfor der hastighet er kritisk og kapasitetsbehovet er lite: CPU-cache (L1/L2/L3) og CPU-registre.'
  },
  {
    q: 'Hva kjennetegner flyktig minne?',
    opts: ['Beholder data uten strøm', 'Inkluderer ROM', 'Inkluderer flash', 'Mister data når strømmen brytes'],
    correct: 3, cat: 'primær',
    explain: 'Flyktig minne (volatile memory) er avhengig av kontinuerlig strømtilførsel for å beholde data. RAM (DRAM og SRAM) er flyktig — alt innhold forsvinner øyeblikkelig når strømmen kuttes.'
  },
  {
    q: 'Hva kjennetegner ikke-flyktig minne?',
    opts: ['Beholder data uten strøm', 'Mister data uten strøm', 'Inkluderer DRAM', 'Krever konstant strøm'],
    correct: 0, cat: 'lagring',
    explain: 'Ikke-flyktig minne (non-volatile memory) beholder data selv uten strømtilførsel. Dette inkluderer ROM, Flash/EEPROM, HDD, SSD og optiske medier — alle lagrer informasjon permanent.'
  },
  {
    q: 'Hva er den største fordelen med HDD fremfor SSD?',
    opts: ['Raskere tilgang', 'Ingen mekanikk', 'Billigere per GB', 'Bedre mot mekanisk støt'],
    correct: 2, cat: 'lagring',
    explain: 'HDD er vesentlig billigere per gigabyte enn SSD. For lagring av store datamengder (backup, arkiv, mediaserver) er HDD fortsatt det mest kostnadseffektive valget til tross for lavere hastighet.'
  },
  {
    q: 'Hva brukes optiske medier typisk til?',
    opts: ['Daglig arbeidsminne', 'OS-oppstart', 'Backup og arkiv', 'Rask databehandling'],
    correct: 2, cat: 'lagring',
    explain: 'Optiske medier som CD, DVD og Blu-ray brukes primært til distribusjon av programvare og medieinnhold, samt backup og langtidsarkivering. De er ikke egnet som arbeidsminne eller for rask datautveksling.'
  },
  {
    q: 'Hva er typisk tilgangstid for SRAM?',
    opts: ['5–10 ms', '50–100 ns', '10–50 ns', '1–4 ns'],
    correct: 3, cat: 'primær',
    explain: 'SRAM har ekstremt lav latens — typisk 1–4 nanosekunder. Dette gjør det ideelt for CPU-cache der selv noen nanosekunder ekstra ventetid kan bremse prosessoren merkbart.'
  },
  {
    q: 'Hva er typisk tilgangstid for DRAM?',
    opts: ['10–50 ns', '1–4 ns', '50–100 ns', '5–10 ms'],
    correct: 0, cat: 'primær',
    explain: 'DRAM har en typisk tilgangstid på 10–50 nanosekunder — mye raskere enn harddisker, men 5–20 ganger tregere enn SRAM. Denne forsinkelsen er grunnen til at CPU-cacher er avgjørende for ytelsen.'
  },
  {
    q: 'Hva er magnetkjerneminne?',
    opts: ['En moderne SSD-type', 'En tidlig minneteknologi fra 1950–70-tallet', 'En type optisk lagring', 'Et SRAM-basert cache'],
    correct: 1, cat: 'lagring',
    explain: 'Magnetkjerneminne (magnetic core memory) var den dominerende RAM-teknologien fra 1950- til 1970-tallet. Det brukte små magnetiske ringer (kjerner) som kunne magnetiseres i to retninger for å representere 0 og 1.'
  },
  {
    q: 'Hva er de viktigste faktorene ved valg av minnetype?',
    opts: ['Farge og design', 'Merke og produsent', 'Hastighet, kostnad og kapasitet', 'Form og vekt'],
    correct: 2, cat: 'lagring',
    explain: 'Ved valg av minneteknologi må man veie tre nøkkelfaktorer: hastighet (latens og båndbredde), kostnad (pris per GB) og kapasitet (totalt lagringsbehov). Ulike bruksområder prioriterer disse faktorene forskjellig.'
  },
];
