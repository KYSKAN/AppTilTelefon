const CACHE = 'kalkulator-v160';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './kalkulator/',
  './kalkulator/index.html',
  './kalkulator/css/style.css',
  './kalkulator/js/menu.js',
  './kalkulator/js/calc-ohm.js',
  './kalkulator/js/kabel-data.js',
  './kalkulator/js/calc-kabel.js',
  './kalkulator/js/calc-spenning.js',
  './kalkulator/js/calc-krets.js',
  './quiz/',
  './quiz/index.html',
  './quiz/index-elektro.html',
  './quiz/spill.html',
  './quiz/illustrations.js',
  './quiz/lom/ledelse.js',
  './quiz/lom/marked.js',
  './quiz/lom/regnskap.js',
  './quiz/lom/okonomi.js',
  './quiz/lom/lovavtale.js',
  './quiz/elektro/rlc.js',
  './quiz/bjrons/boolsk.js',
  './quiz/bjrons/porter.js',
  './quiz/bjrons/mikrokontroller.js',
  './quiz/bjrons/minne.js',
  './quiz/bjrons/tallsystemer.js',
  './quiz/bjrons/vipper.js',
  './quiz/bjrons/trh1ek.js',
  './quiz/sr-nor-krets.svg',
  './quiz/d-nand-krets.svg',
  './quiz/index-bjrons.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for alle filer — alltid oppdatert, faller tilbake på cache ved offline
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
