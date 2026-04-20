const CACHE = 'kalkulator-v47';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/menu.js',
  './js/calc-ohm.js',
  './js/kabel-data.js',
  './js/calc-kabel.js',
  './js/calc-spenning.js',
  './js/calc-krets.js',
  './icons/icon.svg',
  './icons/icon-192.png',
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
