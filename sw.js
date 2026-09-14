// Simple Service Worker for Galillee Medical Center PWA
const CACHE_NAME = "galillee-mc-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/logo.png",
  "./images/icons/icon-192.png",
  "./images/icons/icon-512.png"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate – clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch – network first, fallback to cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Optionally cache successful responses
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
