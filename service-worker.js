var CACHE_VERSION = 'v1';

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cache.addAll([
        "cookie.html",
        "event.html",
        "mutation-observer.html"
      ]).catch(function (error) {
        console.error('Error in install handler:', error);
      });
    })
  );
});
