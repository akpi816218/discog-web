fetch(
	'https://crossorigin.me/https://discog.akpi816218.repl.co/api/',
	{
		method: 'GET',
		headers: [
			['Content-Type', 'application/json']
			// ['Access-Control-Allow-Origin', '*']
		]
	}
)
	.then((res) => res.json())
	.then((data) => {
		document.getElementById('server-count').innerText = data.guildCount;
		document.getElementById('command-count').innerText =
			data.commandCount ?? '20';
		// document.getElementById('user-count').innerText = data.userCount;
	})
	.catch((err) => console.error(err));
