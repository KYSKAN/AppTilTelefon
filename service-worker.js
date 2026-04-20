const CACHE = 'kalkulator-v58';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
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
  './quiz/spill.html',
  './quiz/sporsmal-lom.js',
  './quiz/sporsmal-rlc.js',
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
