importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { precacheAndRoute } = workbox.precaching;
const { NetworkFirst } = workbox.strategies;

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

precacheAndRoute([
   {url: '/', revision: '1'},
    {url: '/manifest.json', revision: '1'},
    {url: '/index.html', revision: '1'},
    {url: "/images/AFCBournemouth.png", revision: '1'},
    {url: "/images/ArsenalFC.png", revision: '1'},
    {url: "/images/AstonVillaFC.png", revision: '1'},
    {url: "/images/badge-MU.png", revision: '1'},
    {url: "/images/Brighton&HoveAlbionFC.png", revision: '1'},
    {url: "/images/BurnleyFC.png", revision: '1'},
    {url: "/images/ChelseaFC.png", revision: '1'},
    {url: "/images/CrystalPalaceFC.png", revision: '1'},
    {url: "/images/EvertonFC.png", revision: '1'},
    {url: "/images/LeicesterCityFC.png", revision: '1'},
    {url: "/images/LiverpoolFC.png", revision: '1'},
    {url: "/images/ManchesterCityFC.png", revision: '1'},
    {url: "/images/ManchesterUnitedFC.png", revision: '1'},
    {url: "/images/NewcastleUnitedFC.png", revision: '1'},
    {url: "/images/NorwichCityFC.png", revision: '1'},
    {url: "/images/SheffieldUnitedFC.png", revision: '1'},
    {url: "/images/SouthamptonFC.png", revision: '1'},
    {url: "/images/TottenhamHotspurFC.png", revision: '1'},
    {url: "/images/WatfordFC.png", revision: '1'},
    {url: "/images/WestHamUnitedFC.png", revision: '1'},
    {url: "/images/WolverhamptonWanderersFC.png", revision: '1'},
    {url: "/images/premier-league.jpg", revision: '1'},
    {url: "images/icons/icon-72x72.png", revision: '1'},
    {url: "images/icons/icon-96x96.png", revision: '1'},
    {url: "images/icons/icon-128x128.png", revision: '1'},
    {url: "images/icons/icon-144x144.png", revision: '1'},
    {url: "images/icons/icon-152x152.png", revision: '1'},
    {url: "images/icons/icon-192x192.png", revision: '1'},
    {url: "images/icons/icon-384x384.png", revision: '1'},
    {url: "images/icons/icon-512x512.png", revision: '1'},
    {url: '/pages/home.html', revision: '1'},
    {url: '/pages/match.html', revision: '1'},
    {url: '/pages/matchId.html', revision: '1'},
    {url: '/pages/standing.html', revision: '1'},
    {url: '/pages/saved.html', revision: '1'},
    {url: '/pages/savedId.html', revision: '1'},
    {url: '/css/materialize.min.css', revision: '1'},
    {url: '/css/style.css', revision: '1'},
    {url: '/js/jquery.min.js', revision: '1'},
    {url: '/js/materialize.min.js', revision: '1'},
    {url: '/js/helper.js', revision: '1'},
    {url: '/js/view.js', revision: '1'},
    {url: '/js/idb.js', revision: '1'},
    {url: '/js/db.js', revision: '1'},
    {url: '/js/api.js', revision: '1'},
    {url: '/register-sw.js', revision: '1'},
    {url: '/service-worker.js', revision: '1'},
    {url: '/push.js', revision: '1'},
    {url: '/js/script.js', revision: '1'},
]);


registerRoute(
    new RegExp('https://api.football-data.org/'),
    new NetworkFirst(
      {
          cacheName: 'football',
      }
    )
);


self.addEventListener('push', function (event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: 'Current Standings',
        image: '/images/premier-league.jpg',
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
