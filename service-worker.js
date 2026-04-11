const CACHE = 'kalkulator-v18';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/menu.js',
  './js/calc-ohm.js',
  './js/calc-kabel.js',
  './js/calc-krets.js',
  './icons/icon.svg',
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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
