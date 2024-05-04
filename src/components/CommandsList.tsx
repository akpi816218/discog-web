'use client';

import { API_BASE } from '@/config';
import { Command } from '@/lib/types';
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
	Code,
	Skeleton
} from '@nextui-org/react';
import { useState } from 'react';

export default function CommandsList() {
	const [Commands, SetCommands] = useState<Command[]>([]);
	const [Loaded, SetLoaded] = useState(false);

	const cols = [
		{ key: 'key', label: 'NAME' },
		{ key: 'description', label: 'DESCRIPTION' },
		{ key: 'usage', label: 'USAGE' }
	];

	fetch(`${API_BASE}/commands`, {
		method: 'GET',
		headers: [
			['Content-Type', 'application/json'],
			['Access-Control-Allow-Origin', '*']
		]
	})
		.then(res => res.json())
		.then(data => {
			SetCommands(data);
			SetLoaded(true);
		});

	return (
		<Skeleton className="rounded-xl">
			<Table
				id="commands-table"
				aria-label="Table listing commands"
				className="text-tiny"
				fullWidth={true}
				isStriped={true}
			>
				<TableHeader columns={cols}>
					{column => <TableColumn key={column.key}>{column.label}</TableColumn>}
				</TableHeader>
				<TableBody items={Commands}>
					{item => (
						<TableRow key={item.data.name}>
							{columnKey => {
								let value = getKeyValue(item, columnKey);
								return (
									<TableCell>
										{columnKey === 'description' ? (
											<span className="text-neutral-300">{value}</span>
										) : value ? (
											<Code>{value}</Code>
										) : null}
									</TableCell>
								);
							}}
						</TableRow>
					)}
				</TableBody>
			</Table>
		</Skeleton>
	);
	/**
			})
			.catch(err => console.error(err));
		*/
}
