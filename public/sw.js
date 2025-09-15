self.addEventListener('install', (event) => {
  console.log('Service worker installed');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log('Service worker fetch');
  event.respondWith(fetch(event.request));
});
