var cacheName = 'fitFaith';
var filesToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'images/gorgeous-resized.jpg',
  'images/gorgeous.jpg',
  'images/hip-hop.jpg',
  'images/meal-preps.jpg',
  'images/neverGiveUp-resized.jpg',
  'images/neverGiveUp-resized2.jpg',
  'images/neverGiveUp.jpg',
  'images/running.jpg',
  'images/running2.jpg',
  'images/shoulder-press.jpg',
  'images/workout-gear.jpg'
];


self.addEventListener('install', function(e) {
  //Perform install steps
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.responseWith(
    caches.match(e.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );
});

