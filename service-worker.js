const CACHE_NAME = "smart-home-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


// Check if the browser supports Service Workers
if ("serviceWorker" in navigator) {
  // Add an event listener to register the Service Worker once the window has fully loaded
  window.addEventListener("load", () => {
    // Attempt to register the Service Worker located at "/service-worker.js"
    navigator.serviceWorker.register("/service-worker.js")
      .then((registration) => {
        // Log a success message, including the scope of the Service Worker
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        // Log an error message if the Service Worker registration fails
        console.error("Service Worker registration failed:", error);
      });
  });
}
