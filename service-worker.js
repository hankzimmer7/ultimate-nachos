"use strict";var precacheConfig=[["/ultimate-nachos/index.html","65e6cdac4adb0ca8a12076c370acc418"],["/ultimate-nachos/static/css/main.3706f6b9.css","d413f45a93916cb0832846ede84d9bb1"],["/ultimate-nachos/static/js/main.2bae4e70.js","6ca794016e2e8cab850fc6da15b40f88"],["/ultimate-nachos/static/media/black_beans.fb9b687f.jpg","fb9b687fba990330e088ad61ca1621fb"],["/ultimate-nachos/static/media/black_olives.931dc09d.jpg","931dc09d839b7e9794c58af303293679"],["/ultimate-nachos/static/media/carnitas.adb8b767.jpg","adb8b76796e9680908b796330c4cf209"],["/ultimate-nachos/static/media/cheese.cb8038d1.jpg","cb8038d173aade75348aaef4f5abaf71"],["/ultimate-nachos/static/media/corn.165cac0e.jpg","165cac0e502169991eb0cbd61fa2f678"],["/ultimate-nachos/static/media/ground_beef.67a17d3c.jpg","67a17d3c9c540e2fbab9970d18665295"],["/ultimate-nachos/static/media/guacamole.626b1114.jpg","626b1114a35008c42c0d16412d0bf92e"],["/ultimate-nachos/static/media/jalapenos.6255a7f8.jpg","6255a7f81c1b9627ea5b0d5b3b64d08f"],["/ultimate-nachos/static/media/nachos.010f87e9.jpg","010f87e97bc631a03fd67b93b70188db"],["/ultimate-nachos/static/media/onions.53818164.jpg","53818164e2f077ef3111ce9fb87f4c57"],["/ultimate-nachos/static/media/pico_de_gallo.ea91086c.jpg","ea91086cecaf5185187f5ac7b0ae188b"],["/ultimate-nachos/static/media/platter.aabc4fd2.jpg","aabc4fd2fe269585d375ad8947ae9d0a"],["/ultimate-nachos/static/media/refried_beans.4381a053.jpg","4381a0533a6e8f33d08e261f2e2c57a0"],["/ultimate-nachos/static/media/sour_cream.e0658f9d.jpg","e0658f9d44bb71c53238dfe3c5b61591"],["/ultimate-nachos/static/media/tortilla_chips.2f71abd2.jpg","2f71abd2186e3c12af416bc0c15c61fe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/ultimate-nachos/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});