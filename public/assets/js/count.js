fetch('https://corsproxy.io/?https%3A%2F%2Fdiscog.akpi816218.repl.co%2Fapi', {
	method: 'GET',
	headers: [
		['Content-Type', 'application/json']
		// ['Access-Control-Allow-Origin', '*'],
	]
})
	.then((res) => res.json())
	.then((data) => {
		document.getElementById('server-count').innerText = data.guildCount;
		document.getElementById('command-count').innerText =
			data.commandCount ?? '20';
		// document.getElementById('user-count').innerText = data.userCount;
	});
