const CACHE = 'kalkulator-v33';

const FILES = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/menu.js',
  './js/calc-ohm.js',
  './js/kabel-data.js',
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
  const url = new URL(event.request.url);
  const isHTML = event.request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isHTML) {
    // HTML: hent fra nett først, fall tilbake på cache ved offline
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // JS/CSS/bilder: cache først (rask), oppdateres ved ny CACHE-versjon
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});
