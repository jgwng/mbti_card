'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eb407fb30b889dff339bcdb7971d98bc",
"index.html": "d4f67a5aa99663f41eedd7a2a1b53561",
"/": "d4f67a5aa99663f41eedd7a2a1b53561",
"main.dart.js": "1d057f794d3b2ce29e43cd71dd0be0fa",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5c1de9468a5d0d058d6d78bce7ad45d3",
".git/config": "8007d95c511da90555e63f6c5cffefed",
".git/objects/59/5bf2339224793cc943ec753907268272ce3ab5": "22b8af919cc5b8adb66ebdb17f3879b4",
".git/objects/59/eead7926703be87d6d42744118a47e1f86e9a4": "e27fa16e560ce2c1ec54cb4c3baefd19",
".git/objects/59/04ffa4cd9c90a00810e5a56bd6e67d73c4f06d": "97b276e0b56bd98bba0f639a7e48b893",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/03/213acf0692802f419ff8c3192340e8ccc7bb6c": "3c28bdd4049f101952c84b4facd758ca",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/df08004133954fc3a5d92cdde0a3f4ea723af7": "e4669ac49a3195adf06b6cd9cc60ef8e",
".git/objects/60/5b0a883c5d2f7313b5f8d9eb2c516ae68f1a6f": "1c67f8733ffb447e11f34587a131b9a8",
".git/objects/05/eeb72a59dcb626de2141d3b0326e126cf07bf7": "d451a420b83a58d412b62bcdc980fe53",
".git/objects/d9/e3b44ed6738d056ab7b7f6156de790cd880e28": "32196f117301a92ec03727bac6f44a6f",
".git/objects/ad/a13073d2c8b12ee4279070a41a3b8831eb19ff": "34e957c35c099f7ab8661a7b5a7f8891",
".git/objects/b4/3709d3e4b3554eadf99a086a36fc8e528f57d5": "92f92e34607736c6601a7bd1c554931c",
".git/objects/bd/6d4c73fbd516a8458977f9e6a4a588f62320c7": "35d720a9e4418567eadbf0cc700c5667",
".git/objects/d1/0321f09eb627b2c6f8ce4e78ecf02a8e91de3b": "86e74681fe39ab0764070e685138b02d",
".git/objects/d1/5dd2859669660dedb1bd2897a193831eaae35b": "729c7871743e3b4a3c544ada8a0628d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/9491dd1c5d0660a24fff03cac41299c9d6011e": "245e8e51bb8739fa553b32413075fe68",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/e222ca81a9245703557d81b7d12753586ce603": "200e0aeaf1faa2ae8bb5ea246fca1878",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/8fe7dacdb43cfc3dff24c94971ae708e2979c9": "b3dd5081a7cd097fd7a0b4946267aef7",
".git/objects/e4/6fd11ca52f07d24dc7aa079f4ec75eb7211f54": "58b97e494e0d7e5de33431f79ecc5dad",
".git/objects/fe/b7cf42861d799b52ce4571ed5b90417ecc66eb": "bf6e077c7b5b3a2bece5b7229fd7f80f",
".git/objects/c1/113812112a562b45b3086f2174b1408cac9749": "b88a81605dc3ba147bc6987c44d537aa",
".git/objects/c1/f430188afdd4a30cf1656b36b88c80907d3f07": "ecee7e45ad428ef998f6891cc851e122",
".git/objects/c6/20d1c47b404cfd9c3a0d73c6149e0c80f60303": "18d99733aa38a0afc5a02b0b57bee113",
".git/objects/4e/e40992349eac3bb634742713d70366e7793f8a": "72c6c5324b68ac046b16fae88bfac403",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7b/478ace4d6b575da26e30c704f2de1aea23286c": "c7319e9a269c3a36edf6bf56c5bbad58",
".git/objects/8a/81e13f644bc923203d3184322c7566b31aec82": "7c9691e47e5229f00d0830d5f99e5475",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e3782966bb480fbe480174c25f6ddebb9ae2a": "7cdc9ccc32c6eb2132440bac571d9d9c",
".git/objects/10/4f80f0b67c17ebca8fb1720049c24695b638c8": "5741a71a9fd476bd9d0ee1c644acdc0e",
".git/objects/4d/f548fac9aa6d3bd0b0ad5bf4b78bea77626fef": "50693598dc6333c50b1e2bfecad0bfa1",
".git/objects/4d/eedfeb1617fb4777b0045220b52b64893b184f": "01f2edda08ab27c0f6e0a1258e2e0f86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9c8b8b27d74e63353d26a1a4c3d346cb049c53": "aa982e23ad820e3abc663383c2defac9",
".git/objects/6b/cf00305005bbb1e81c95aa8077a7f2a592e3cd": "6062865079031e61669acce1c5c926a5",
".git/objects/9a/38e70c5d65913835e35e4ab3cbb79f11c7c9bf": "07d257d0a0b7288f9e3c0117f98b6eeb",
".git/objects/91/552cc941af253f73e11046f5524a840ab31b59": "de0410218321b1571350c4b2ef0da214",
".git/objects/91/7a043f478437e2bdb053e1ed653acb05301d4d": "86c15a9907ec4aece0e5fe6954fa44c6",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/ba/3806a8f656a4e2fc8358503910deb2968ba336": "0c6c8a9b696493c501a3feb7c163661e",
".git/objects/b8/c32bc101a3822a49ceb55f0e8c5ff423c5ba93": "f30cccbc4c9584465d083acbaf3b0a4d",
".git/objects/dd/98769d648cc1c9faf81df77154d00b5360af9f": "9f368ab0d942207bc29b6f5da5ae935d",
".git/objects/dc/0311c4e092d4d022d4df12955a4dfef7e6bcee": "19dfb2e378c1e4a33f5f5cd1a58c5f33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/9da4cb1c4291cfdafcbcc6620c6ccfc8047854": "7c9a269409c0654aaa7255873ea1b90d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4cd2a2ecfbd954e163bb32d0cde6966ed33216": "b173dd3501d18eed393a0c6295cb3789",
".git/objects/c4/4deea913d42ccbd83eac50681dec4c256ad6bf": "5a2dae3c733a1767142c83ff66dc9d2b",
".git/objects/ea/c0396c2a7165e8351ca031f3573ca40be9719e": "1763a58c4df7e7a496fe16ca7e2d26e2",
".git/objects/e9/c7a8329fde62ab6190917e104a009cf119717e": "34ed0796a2bb8f352ead195535de98a4",
".git/objects/e9/4bc9edbceb7716904dd0f0ae8359b10f348bf4": "e39af2ea722525623ac1fd390541dee5",
".git/objects/e0/1679b0eac9857fa3585d9868de511d4eeed376": "fecefe9ab680f572d6b77453d4625ce4",
".git/objects/e0/065a19bfeef30e90b41582248d461819870ee3": "bac5d3e179392d1f7cbc3288e5ecbf61",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/bbca3a4bbccaa9837c2c69e550aee743a8bbf0": "469dc40a6a1c2d3ad1d49f9b2c3fe1c9",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/8e/25a301758c71b71a378f5d2f1ef8721b001153": "8ba65c8cace74593e0192d1b9918d8d8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "325fde8843ad4ffa16ffe0540270e242",
".git/logs/refs/heads/main": "325fde8843ad4ffa16ffe0540270e242",
".git/logs/refs/remotes/origin/main": "5d3a6bb235ae9f04e8255cc4fba8e28e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "54019d21ae1f2ef6a72c87dee9defd36",
".git/refs/remotes/origin/main": "54019d21ae1f2ef6a72c87dee9defd36",
".git/index": "909d1efa86c0265b9f96289dde174cea",
".git/COMMIT_EDITMSG": "cd06ea503f069da24b98f21f6e78c502",
"assets/asset/images/shopper.png": "9eb976fce9e8944e4110421e26696dd1",
"assets/asset/images/graphic-designer.png": "9fc532462bb408d28018b291721f5a95",
"assets/asset/images/teacher.png": "da3e0a13c9dd87ddd683bd3627e71978",
"assets/asset/images/courier.png": "bee2c3451b24d76caf152482bc95ede4",
"assets/asset/images/businessman.png": "977985c599859e649ee7d7f3dc75f9cb",
"assets/asset/images/lifeguard.png": "e5c6cff9e4769f29330b102f7701b2d7",
"assets/asset/images/mechanic.png": "4dde9a3928f516aff37cd4c4856e644d",
"assets/asset/images/shopper-2.png": "0efc0cfd382dfdc3a00b14915c2da19d",
"assets/asset/images/chef.png": "a8792739c103c2c0cb9e79d8a0a451e9",
"assets/asset/images/shopper-1.png": "d27a3a2dd889f96b95039cfd6ef4cd32",
"assets/asset/images/messanger.png": "3f41a17bd05d8de4aa711e8a62c7e547",
"assets/asset/images/traveller.png": "b599a85c42bbfee70448086c96c2473c",
"assets/asset/images/doctor.png": "519c5fc38690b7232fa127dd3e5922cf",
"assets/asset/images/diver.png": "57d17d57f76ac71f7c0b98f491ce2042",
"assets/asset/images/like.png": "e92c8b14879e818270f1ba064c9aa833",
"assets/asset/images/driver.png": "9c96c003e00950b05b5a83173e2b86bd",
"assets/asset/images/official_icon.png": "d652cdc9e35be0a0bde95d59932f100b",
"assets/asset/images/chemist.png": "e0c0cb27d39e81fbafe89d3b2e5f78e5",
"assets/asset/images/more-icon.png": "5d7ff86a2d287bd518a0eea4fb0c250c",
"assets/asset/images/courier-2.png": "f485c3f02a1aa427b460fb48e4b6d161",
"assets/asset/images/comment.png": "cec85b609f832487a45195d35ca47977",
"assets/asset/images/painter.png": "2b41a987e7eaa6fc5dae1b479703f7b9",
"assets/asset/images/firefighter.png": "5fc79bf46816331145d0a853a7e0eecf",
"assets/asset/images/postman.png": "0e4fed54f35e9c479953a228a847e7e6",
"assets/asset/images/artist.png": "ea9e4b58c362faa93230439eacc756fa",
"assets/asset/images/courier-1.png": "fac915f7a5f95413ea287fb98b86b31f",
"assets/asset/images/judge.png": "c49f1aa993351470c4173757cc731208",
"assets/asset/images/farmer.png": "c7330c9833f6737147bfda134e4fd10f",
"assets/asset/images/police.png": "1b740807dc9d5945fcbff1d53eb9450c",
"assets/asset/images/save.png": "68269d309871bc147f1f899149d2c1c0",
"assets/asset/font/SpoqaHanSansNeo-Thin.otf": "0e46d96cafdedeeb4b40598ee00f4e7c",
"assets/asset/font/SpoqaHanSansNeo-Light.otf": "9b97934b95a9237af599e2c4a99ad5cf",
"assets/asset/font/SpoqaHanSansNeo-Bold.otf": "8ea1d9004a8f295b800c3c9b89a9c07a",
"assets/asset/font/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/asset/font/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"assets/AssetManifest.json": "3f7c7b966477b27119a4deef4a5b9231",
"assets/NOTICES": "d534be29f3299bf0fd43149e77a0c74a",
"assets/FontManifest.json": "96ff543d9dae4272142f6eae612f9963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
