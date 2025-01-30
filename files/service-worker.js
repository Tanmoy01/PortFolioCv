const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "./index.html",
  "./files/style.css",
  "./files/script.js",
  "./files/manifest.json",
  "./img/dp.jpeg"
];

// Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch from cache first, then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Activate new service worker and delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cache) => cache !== CACHE_NAME).map((cache) => caches.delete(cache))
      );
    })
  );
});
