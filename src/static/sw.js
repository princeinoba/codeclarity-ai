const CACHE_NAME = "__CACHE_VERSION__";
const SHELL = [
  "/", "/practice/", "/sprint/", "/question-bank/", "/review/", "/progress/",
  "/leaderboard/", "/coach/", "/about/", "/privacy/", "/offline/", "/404/",
  "/assets/site.css", "/assets/site.js", "/site.webmanifest",
  "/assets/icons/favicon.svg", "/assets/icons/logo-mark.svg",
  "/assets/icons/icon-192.png", "/assets/icons/icon-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
      return response;
    }).catch(async () => (await caches.match(request)) || (await caches.match("/offline/")) || (await caches.match("/404/"))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && ["script","style","image","font","manifest"].includes(request.destination)) {
      caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
    }
    return response;
  })));
});
