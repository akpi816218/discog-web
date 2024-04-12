'use client';

import { API_BASE } from '@/config';
import { faServer, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Counter() {
	const [serverCount, setServerCount] = useState<number>(0);
	const [commandCount, setCommandCount] = useState<number>(0);

	useEffect(() => {
		fetch(`${API_BASE}/bot`, {
			method: 'GET',
			headers: [
				['Content-Type', 'application/json'],
				['Access-Control-Allow-Origin', '*']
			]
		})
			.then(res => res.json())
			.then(data => {
				setCommandCount(data.commandCount);
				setServerCount(data.serverCount);
			})
			.catch();
	});

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
