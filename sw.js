const CACHE = 'bingo-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  // Network-first for tesseract worker chunks; cache-first for others
  if (req.url.includes('tesseract')) {
    e.respondWith(fetch(req).catch(()=>caches.match(req)));
    return;
  }
  e.respondWith(
    caches.match(req).then(res => res || fetch(req).then(net => {
      const copy = net.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return net;
    }).catch(()=>caches.match('./')))
  );
});