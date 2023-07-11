

/*
	! when updating this file, update the template in `/list.py`.
	$ the list of files to be cached comes from the script in `/list.py`.
	$ this list can be updated manually by running `/list.py`.
*/
/*
	This comment was generated by `/list.py`.
	Timestamp: 11/28/2022 18:46:31 PST
*/
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open("discog.localplayer.dev").then((cache) => {
			cache.add('https://discog.akpi816218.repl.co/api');

		})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetch(event.request).then((response) => {
			return response;
		}).catch(async (error) => {
			return caches.match(event.request).then((cacheRes) => {
				return cacheRes;
			});
		})
	);
});