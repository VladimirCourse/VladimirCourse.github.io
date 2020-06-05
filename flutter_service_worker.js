'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "c0db8db6fc6356e794d04fe672bc6a28",
"/assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"/assets/assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"/assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"/assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"/assets/assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"/assets/assets/images/appscreen.jpeg": "8b20a7b838058c0231412514c0064e9d",
"/assets/assets/images/betrip1.png": "71324822af9ee40275044af0518a3d6b",
"/assets/assets/images/betrip2.png": "99069816b71de85c46293031637c2ffe",
"/assets/assets/images/betrip3.png": "2212adc370cebc3b3470ae19211f3673",
"/assets/assets/images/betrip_logo.png": "5640dce5ad58c6e16963ac715a9298ee",
"/assets/assets/images/foodapp1.png": "d8706f00ccaf9c93161ea94cd1579451",
"/assets/assets/images/foodapp2.png": "57042fae9ad2d51bd5fb45b2b6652b16",
"/assets/assets/images/foodapp3.png": "e50f52b975a7ea5b351b8009ca4e8979",
"/assets/assets/images/foodapp_logo.png": "f2800505182631cee5b920a54907ed40",
"/assets/assets/images/foodapp_web1.png": "470f965288c33931a8622f793ff739d6",
"/assets/assets/images/foodapp_web2.png": "ac51b6d55024b41be6c5123ffd28e223",
"/assets/assets/images/foodapp_web3.png": "2a077c0c1eea17f5af30f6ce8ea0b195",
"/assets/assets/images/mobile.png": "06124661713450c480ecae8b3f1f9969",
"/assets/assets/images/portfolio1.png": "f8f8be5ef4217b12471e35c4c7bf176f",
"/assets/assets/images/portfolio2.png": "2e6b386b7f7e18784fe32ecd74fa5319",
"/assets/assets/images/portfolio3.png": "e2542c948f2a99719415333cd81098c8",
"/assets/assets/images/portfolio_logo.png": "a83a43fda73f3913c8fe5ce9929c956a",
"/assets/assets/images/reptiloid1.png": "65427637ef10b2ff6409053d378ebbed",
"/assets/assets/images/reptiloid2.png": "61d03d1717eae1c06b0c11c8f1e4db35",
"/assets/assets/images/reptiloid3.png": "94ae01e71d8cecf84355018aa238d638",
"/assets/assets/images/reptiloid_logo.png": "5667177f6b949d07b5e53a7ae8d9b0bf",
"/assets/assets/images/tree1.png": "eafdb9942c552cf53c3a8e0ea3b58477",
"/assets/assets/images/tree2.png": "ee4edf0352fe4346efa8b1cfc8290c8f",
"/assets/assets/images/tree3.png": "754aec8335c000ff2e2e2b948798a550",
"/assets/assets/images/tree_logo.png": "302095a986d65c7ce733e62a282a4fa6",
"/assets/FontManifest.json": "b8e76fbffa4de103af49717795946743",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "80ece5c379ff84cd46e7659fbe13c3e5",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"/assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"/assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"/assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"/assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"/assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"/assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"/assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"/assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"/assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"/assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"/assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"/assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"/main.dart.js": "b9a58ab894549f3c65e17555ad89bac1",
"/manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
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
