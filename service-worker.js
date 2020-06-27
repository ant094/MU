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
    {url: '/MU/', revision: '1'},
    {url: '/MU/manifest.json', revision: '1'},
    {url: '/MU/index.html', revision: '1'},
    {url: "/MU/images/AFCBournemouth.png", revision: '1'},
    {url: "/MU/images/ArsenalFC.png", revision: '1'},
    {url: "/MU/images/AstonVillaFC.png", revision: '1'},
    {url: "/MU/images/badge-MU.png", revision: '1'},
    {url: "/MU/images/Brighton&HoveAlbionFC.png", revision: '1'},
    {url: "/MU/images/BurnleyFC.png", revision: '1'},
    {url: "/MU/images/ChelseaFC.png", revision: '1'},
    {url: "/MU/images/CrystalPalaceFC.png", revision: '1'},
    {url: "/MU/images/EvertonFC.png", revision: '1'},
    {url: "/MU/images/LeicesterCityFC.png", revision: '1'},
    {url: "/MU/images/LiverpoolFC.png", revision: '1'},
    {url: "/MU/images/ManchesterCityFC.png", revision: '1'},
    {url: "/MU/images/ManchesterUnitedFC.png", revision: '1'},
    {url: "/MU/images/NewcastleUnitedFC.png", revision: '1'},
    {url: "/MU/images/NorwichCityFC.png", revision: '1'},
    {url: "/MU/images/SheffieldUnitedFC.png", revision: '1'},
    {url: "/MU/images/SouthamptonFC.png", revision: '1'},
    {url: "/MU/images/TottenhamHotspurFC.png", revision: '1'},
    {url: "/MU/images/WatfordFC.png", revision: '1'},
    {url: "/MU/images/WestHamUnitedFC.png", revision: '1'},
    {url: "/MU/images/WolverhamptonWanderersFC.png", revision: '1'},
    {url: "/MU/images/premier-league.jpg", revision: '1'},
    {url: "/MU/images/icons/icon-72x72.png", revision: '1'},
    {url: "/MU/images/icons/icon-96x96.png", revision: '1'},
    {url: "/MU/images/icons/icon-128x128.png", revision: '1'},
    {url: "/MU/images/icons/icon-144x144.png", revision: '1'},
    {url: "/MU/images/icons/icon-152x152.png", revision: '1'},
    {url: "/MU/images/icons/icon-192x192.png", revision: '1'},
    {url: "/MU/images/icons/icon-384x384.png", revision: '1'},
    {url: "/MU/images/icons/icon-512x512.png", revision: '1'},
    {url: '/MU/pages/home.html', revision: '1'},
    {url: '/MU/pages/match.html', revision: '1'},
    {url: '/MU/pages/matchId.html', revision: '1'},
    {url: '/MU/pages/standing.html', revision: '1'},
    {url: '/MU/pages/saved.html', revision: '1'},
    {url: '/MU/pages/savedId.html', revision: '1'},
    {url: '/MU/css/materialize.min.css', revision: '1'},
    {url: '/MU/css/style.css', revision: '1'},
    {url: '/MU/js/jquery.min.js', revision: '1'},
    {url: '/MU/js/materialize.min.js', revision: '1'},
    {url: '/MU/js/helper.js', revision: '1'},
    {url: '/MU/js/view.js', revision: '1'},
    {url: '/MU/js/idb.js', revision: '1'},
    {url: '/MU/js/db.js', revision: '1'},
    {url: '/MU/js/api.js', revision: '1'},
    {url: '/MU/register-sw.js', revision: '1'},
    {url: '/MU/service-worker.js', revision: '1'},
    {url: '/MU/push.js', revision: '1'},
    {url: '/MU/js/script.js', revision: '1'},
   
    
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
