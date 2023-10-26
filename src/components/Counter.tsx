'use client';

import API_BASE from '@/config';
import { faServer, faTerminal } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Counter() {
	fetch(`${API_BASE}/`, {
		method: 'GET',
		headers: [
			['Content-Type', 'application/json'],
			['Access-Control-Allow-Origin', '*']
		]
	})
		.then(res => res.json())
		.then(data => {
			window.document.getElementById('server-count')!.innerText =
				data.guildCount;
			window.document.getElementById('command-count')!.innerText =
				data.commandCount ?? '20+';
			// document.getElementById('user-count').innerText = data.userCount;
		})
		.catch();

	return (
		<div className="columns mt-6">
			<div className="column has-text-centered">
				<p className="title has-text-weight-bold lined mono" id="server-count">
					not enough
				</p>
				<span className="subtitle has-text-weight-bold blurple">
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faServer} size="xs" /> Servers
				</span>
			</div>

			<div className="column has-text-centered">
				<p className="title has-text-weight-bold lined mono" id="command-count">
					20+
				</p>
				<span className="subtitle has-text-weight-bold blurple">
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faTerminal} /> Commands
					<br />
					<span className="fs08m">
						(each with numerous subcommands and options)
					</span>
				</span>
			</div>
		</div>
	);
}
