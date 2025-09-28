const URLS_TO_CACHE = [
  '/',
  '/assets/manifest-icons/android-chrome-192x192.png',
  '/assets/manifest-icons/android-chrome-512x512.png',
  '/assets/manifest-icons/apple-touch-icon.png',
  '/assets/manifest-icons/favicon-16x16.png',
  '/assets/manifest-icons/favicon-32x32.png',
  '/next.svg',
  '/file.svg',
  '/globe.svg',
  '/vercel.svg',
  '/window.svg',
];

const CACHE_NAME = 'note-app';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          // To cache all pages
          // caches
          //   .open(CACHE_NAME)
          //   .then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((res) => res || caches.match('/offline.html'))
        )
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) return response;
        return fetch(event.request).then((netRes) => {
          if (
            netRes.ok &&
            (event.request.url.includes('/_next/static/') ||
              event.request.destination === 'style' ||
              event.request.destination === 'script' ||
              event.request.destination === 'image' ||
              event.request.destination === 'font')
          ) {
            const clone = netRes.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, clone));
          }
          return netRes;
        });
      })
    );
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});
