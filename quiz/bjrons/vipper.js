'use strict';
const QUIZ_META = {
  id: 'vipper',
  title: 'Vipper (Flip-flops)',
  subtitle: 'Quiz Elektroniske (Bjørns)',
  cats: {
    grunnlag: { label: 'Grunnleggende',  color: '#5c7cfa' },
    typer:    { label: 'Vippetyper',     color: '#f59e0b' },
    anvendelse: { label: 'Anvendelser', color: '#10b981' },
  }
};

const QUESTIONS = [

  // ── Grunnleggende ─────────────────────────────────────────────

  {
    cat: 'grunnlag',
    q: 'Hva er en vippe (flip-flop)?',
    opts: [
      'En kombinatorisk krets uten hukommelse',
      'En sekvenslogisk krets som lagrer én bit',
      'En analog forsterker for digitale signaler',
      'En type logisk port med to innganger'
    ],
    correct: 1,
    explain: 'En vippe er en sekvenslogisk krets med to stabile tilstander (0 og 1). Den kan lagre én bit informasjon og beholder tilstanden inntil den aktivt endres — grunnsteinen i digitalt minne.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva betyr det at en vippe er bistabil?',
    opts: [
      'Den oscillerer automatisk mellom 0 og 1 med jevn frekvens',
      'Den har to stabile hviletilstander og holder én av dem',
      'Den krever to separate klokkeinnganger for å fungere stabilt',
      'Den har to komplementære utganger der begge alltid er like'
    ],
    correct: 1,
    explain: 'Bistabil betyr at kretsen har nøyaktig to stabile likevektstilstander (Q=0 og Q=1) og forblir i den siste satte tilstanden uten å trenge kontinuerlig inngangssignal.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva representerer utgangene Q og <span class="not">Q</span> i en vippe?',
    opts: [
      'To separate, uavhengige databiter',
      'Klokkeinngangen og datainngangen',
      'Tilstand og komplementær tilstand',
      'Set- og Reset-inngangene'
    ],
    correct: 2,
    explain: 'Q er vippe-utgangen (nåværende tilstand). <span class="not">Q</span> er alltid den logiske inversen av Q — de er komplementære. Hvis Q=1 er <span class="not">Q</span>=0 og omvendt.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva skiller sekvenslogikk fra kombinatorisk logikk?',
    opts: [
      'Sekvenslogikk er bygget utelukkende av seriekoblede NAND-porter',
      'Kombinatorisk logikk er raskere fordi den ikke bruker klokkesignal',
      'Sekvenslogikk har hukommelse — utgangen avhenger av tidligere tilstand',
      'Kombinatorisk logikk krever alltid en klokke, sekvenslogikk ikke'
    ],
    correct: 2,
    explain: 'Kombinatorisk logikk gir utganger basert utelukkende på nåværende innganger. Sekvenslogikk (som vipper) har intern tilstand — utgangen avhenger av både nåværende innganger og tidligere tilstand.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva betyr klokkestyrt (synkron) vippe?',
    opts: [
      'Vippen oppdaterer utgangen kontinuerlig basert på inngangsverdien',
      'Vippen endrer tilstand kun ved et klokkesignal',
      'Vippen trenger to separate klokker for å synkronisere',
      'Vippen mangler Set- og Reset-innganger av praktiske årsaker'
    ],
    correct: 1,
    explain: 'En klokkestyrt vippe oppdaterer utgangen sin kun når klokken er aktiv (stigning eller fall på klokkepulsen). Dette gir kontrollert, forutsigbar oppførsel i synkrone digitale systemer.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva er forskjellen på stigningskantutløst og fallkantutløst vippe?',
    opts: [
      'Stigningskant reagerer på lav-til-høy overgang, fallkant på høy-til-lav',
      'De reagerer nøyaktig likt, men ved ulike tidspunkter i klokkesyklusen',
      'Stigningskantutløsning er tregere og brukes i lavhastighetskretser',
      'Fallkantutløsning er forbeholdt SR-vipper og enkle latch-kretser'
    ],
    correct: 0,
    explain: 'Stigningskantutløst (positive edge-triggered) vippe reagerer når klokken går fra 0→1. Fallkantutløst reagerer på 1→0. Begge lagrer inngangsverdien kun i dette korte øyeblikket.'
  },

  {
    cat: 'grunnlag',
    q: 'Hva er asynkron Set og Reset (Preset/Clear)?',
    opts: [
      'Innganger som virker uavhengig av klokken',
      'Innganger som venter på neste klokkepuls',
      'Innganger for å stille frekvensen',
      'Innganger kun tilgjengelig i T-vipper'
    ],
    correct: 0,
    explain: 'Asynkron Set (Preset) og Reset (Clear) tvinger vippen til henholdsvis Q=1 eller Q=0 umiddelbart, uavhengig av klokkesignalet. Brukes ofte til å initialisere systemer ved oppstart.'
  },

  // ── Vippetyper ────────────────────────────────────────────────

  {
    cat: 'typer',
    q: 'Hva er den forbudte tilstanden i en SR-vippe?',
    opts: [
      'S=0, R=0',
      'S=1, R=0',
      'S=0, R=1',
      'S=1, R=1'
    ],
    correct: 3,
    explain: 'Når S=1 og R=1 aktiveres Set og Reset samtidig, noe som gir udefinert utgang — begge utganger prøver å bli 1 og 0 på samme tid. Dette er den forbudte tilstanden og må unngås i design.'
  },

  {
    cat: 'typer',
    q: 'Hva skjer i SR-vippen når S=1, R=0?',
    opts: [
      'Q settes til 0',
      'Q beholder forrige verdi',
      'Q settes til 1',
      'Udefinert tilstand'
    ],
    correct: 2,
    explain: 'S=1, R=0 aktiverer Set-inngangen: utgangen Q tvinges til 1. <span class="not">Q</span> blir 0. Vippen "husker" denne tilstanden selv etter at S går tilbake til 0.'
  },

  {
    cat: 'typer',
    q: 'Hva skjer i SR-vippen når S=0, R=0?',
    opts: [
      'Q settes til 0 — Reset aktiveres',
      'Q beholder sin siste lagrede verdi',
      'Q settes til 1 — Set aktiveres',
      'Q havner i udefinert tilstand'
    ],
    correct: 1,
    explain: 'S=0, R=0 er hukommelsestilstanden: ingen av inngangene er aktive, og vippen beholder sin siste lagrede verdi. Dette er slik vippen fungerer som 1-bit minne.'
  },

  {
    cat: 'typer',
    q: 'Hva gjør D-vippen?',
    opts: [
      'Inverterer utgangen Q ved hver stigende klokkekant',
      'Lagrer verdien på D-inngangen ved klokkekanten',
      'Aktiverer forbudt tilstand når Set og Reset er høye',
      'Brukes utelukkende i analoge signalbehandlingskretser'
    ],
    correct: 1,
    explain: 'D-vippen (Data/Delay) kopierer verdien på D-inngangen til utgangen Q ved klokkekanten og holder den til neste klokkepuls. Den løser den forbudte tilstanden i SR-vippen ved å ha kun én datainngang.'
  },

  {
    cat: 'typer',
    q: 'Hva er den viktigste fordelen med D-vippen over SR-vippen?',
    opts: [
      'D-vippen er rimeligere og enklere å produsere',
      'D-vippen har ingen forbudt tilstand',
      'D-vippen er raskere ved høye klokkehastigheter',
      'D-vippen bruker færre transistorer totalt'
    ],
    correct: 1,
    explain: 'SR-vippen har en udefinert/forbudt tilstand (S=R=1). D-vippen unngår dette ved å ha én enkelt D-inngang — <span class="not">D</span> kobles internt til R, så Set og Reset kan aldri aktiveres samtidig.'
  },

  {
    cat: 'typer',
    q: 'Hva gjør JK-vippen når J=1 og K=1?',
    opts: [
      'Q havner i en udefinert og uforutsigbar tilstand',
      'Q tvinges permanent til logisk høy (1)',
      'Q tvinges permanent til logisk lav (0)',
      'Q toggler — bytter til motsatt tilstand'
    ],
    correct: 3,
    explain: 'J=1, K=1 er toggle-modusen til JK-vippen: ved hver klokkepuls inverteres Q. Dette er JK-vippens fordel over SR-vippen — den definerer J=K=1 som toggle i stedet for forbudt tilstand.'
  },

  {
    cat: 'typer',
    q: 'Hva er T-vippen og hva gjør den?',
    opts: [
      'En vippe med to separate Set-innganger for Q og <span class="not">Q</span>',
      'En vippe som toggler Q ved hver klokkepuls når T=1',
      'En asynkron vippe som fungerer helt uten klokkesignal',
      'En vippe som kan holde to separate databiter'
    ],
    correct: 1,
    explain: 'T-vippen (Toggle) har én inngang T. Når T=1 inverteres Q ved hver klokkepuls (toggle). Når T=0 holder vippen tilstanden. T-vippen er i praksis en JK-vippe med J og K koblet sammen.'
  },

  {
    cat: 'typer',
    q: 'Hvilken vippe har en forbudt tilstand?',
    opts: [
      'D-vippe',
      'T-vippe',
      'JK-vippe',
      'SR-vippe'
    ],
    correct: 3,
    explain: 'SR-vippen har en forbudt tilstand når S=1 og R=1 aktiveres samtidig. D-, JK- og T-vipper er designet for å unngå dette problemet.'
  },

  {
    cat: 'typer',
    q: 'Hva skjer i JK-vippen når J=0 og K=0?',
    opts: [
      'Q inverteres og bytter verdi ved neste klokkepuls',
      'Q tvinges til logisk lav (0)',
      'Q beholder forrige tilstand',
      'Q havner i udefinert og uforutsigbar tilstand'
    ],
    correct: 2,
    explain: 'J=0, K=0 i JK-vippen er hukommelsestilstanden — identisk med S=0, R=0 i SR-vippen. Vippen beholder sin nåværende Q-verdi ved neste klokkepuls.'
  },

  // ── Anvendelser ───────────────────────────────────────────────

  {
    cat: 'anvendelse',
    q: 'Hva er et register i digital elektronikk?',
    opts: [
      'En kombinatorisk port med to innganger og én utgang',
      'En gruppe vipper som lagrer flere biter sammen',
      'Et analogt element som lagrer et kontinuerlig spenningsnivå',
      'En krets som genererer et repeterende klokkesignal'
    ],
    correct: 1,
    explain: 'Et register er en gruppe D-vipper som jobber sammen og deler klokke. Et 8-bits register består av 8 D-vipper og kan lagre én byte. Registre er grunnlaget for CPU-registre og databuffere.'
  },

  {
    cat: 'anvendelse',
    q: 'Hva er et skiftregister?',
    opts: [
      'Et register som multipliserer inngangsdata med en fast faktor',
      'Et register der data forskyves én bit per klokkepuls',
      'Et asynkront register som oppdateres uten klokkesignal',
      'Et register som akkumulerer og teller antall klokkepulser'
    ],
    correct: 1,
    explain: 'Et skiftregister kobler D-vipper i serie slik at Q fra én vippe kobles til D på neste. Ved hver klokkepuls forskyves (shiftes) alle biter én posisjon. Brukes til seriell/parallell konvertering og tidsforsinkelse.'
  },

  {
    cat: 'anvendelse',
    q: 'Hva brukes T-vippen typisk til?',
    opts: [
      'Lagring av ett ord',
      'Frekvenshalvering og tellere',
      'Seriell kommunikasjon',
      'Analog-til-digital konvertering'
    ],
    correct: 1,
    explain: 'T-vippen med T=1 halverer frekvensen på klokken — Q bytter tilstand ved annenhver klokkepuls. Kobles flere T-vipper i serie lages en binær teller (frekvensen halveres for hvert trinn).'
  },

  {
    cat: 'anvendelse',
    q: 'Hva er en binær teller basert på?',
    opts: [
      'SR-vipper i parallell',
      'T-vipper koblet i serie',
      'D-vipper uten klokke',
      'Kombinatoriske porter alene'
    ],
    correct: 1,
    explain: 'En asynkron binær teller bygges av T-vipper i serie der <span class="not">Q</span>-utgangen fra hver vippe driver klokken til neste. Hver vippe halverer frekvensen, slik at n vipper gir en 2ⁿ-teller.'
  },

  {
    cat: 'anvendelse',
    q: 'Hvor brukes D-vipper mye i prosessorer?',
    opts: [
      'I strømforsyning og spenningsregulatorer',
      'I CPU-registre og pipeline-trinn',
      'I analoge lavpassfiltre og ADC-kretser',
      'I grafikk- og skjermkontrollere'
    ],
    correct: 1,
    explain: 'D-vipper er grunnlaget for alle CPU-registre (program counter, akkumulator, flaggregister). I pipeline-arkitekturer lagrer D-vipper mellomresultater mellom hvert trinn slik at alle trinn kan kjøre parallelt.'
  },

  {
    cat: 'anvendelse',
    q: 'Hva er metastabilitet i en vippe?',
    opts: [
      'Når klokkesignalet svitsjer for raskt og vippen ikke rekker å reagere',
      'Når en inngang endres for nær klokkekanten og utgangen blir uforutsigbar',
      'Når strømforsyningen varierer og forårsaker tilfeldige vippeendringer',
      'Når to vipper deler klokke og et race condition oppstår mellom dem'
    ],
    correct: 1,
    explain: 'Metastabilitet oppstår når D-inngangen endres i setup/hold-tidsvinduet rundt klokkekanten. Vippen havner i en ustabil mellomtilstand og kan ta uforutsigbar tid på å bestemme seg for 0 eller 1. Kritisk å unngå i asynkron kommunikasjon.'
  },

];
