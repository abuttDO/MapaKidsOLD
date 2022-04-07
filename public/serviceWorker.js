// Set a name for the current cache
var cacheName = 'v1';

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
});