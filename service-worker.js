

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/iceandfire-react/precache-manifest.26fb3582d89416b1239f4f322b679d7f.js"
);

workbox.clientsClaim();


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/iceandfire-react/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
