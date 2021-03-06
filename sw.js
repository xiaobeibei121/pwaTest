var cacheName = 'helloWorld';               
self.addEventListener('install', event => { 
  event.waitUntil(
      caches.open(cacheName)                  
  .then(cache => cache.addAll([
      './logo.png',
      './sqb_bg.jpg'
  ]))
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request)
    .then(function (response) {
        if (response) {
        return response;
        }
        return fetch(event.request);
    })
    );
});

// self.addEventListener('fetch', function(event) {
//   if (/\.jpg$/.test(event.request.url)) {
//     event.respondWith(fetch('logo.png'));
//   }
// });