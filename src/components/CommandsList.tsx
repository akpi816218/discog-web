'use client';

import { API_BASE } from '@/config';
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
	Code
} from '@nextui-org/react';

export default function CommandsList() {
	const cols = [
		{ key: 'key', label: 'NAME' },
		{ key: 'description', label: 'DESCRIPTION' },
		{ key: 'usage', label: 'USAGE' }
	];
	/**
		fetch(`${API_BASE}/commands`, {
			method: 'GET',
			headers: [
				['Content-Type', 'application/json'],
				['Access-Control-Allow-Origin', '*']
			]
		})
			.then(res => res.json())
			.then(data => {
	*/
	const testData = [
		{
			key: '/about',
			description: 'Get information about the bot'
		},
		{
			key: '/anime image',
			description: 'Get an anime image from nekos.best',
			usage: '<category: string> [count: [1,5] || 1]'
		},
		{
			key: '/anime gif',
			description: 'Get an anime GIF from nekos.best',
			usage: '<category: string> [count: [1,5] || 1]'
		},
		{
			key: '/announce',
			description: 'Create an announcement in the specified channel',
			usage:
				'<channel: channel> <message: string> [mentionEveryone: boolean || false]'
		},
		{
			key: '/bday register',
			description: 'Register your birthday',
			usage: '<month: number> <day: number> <year: number>'
		},
		{
			key: '/bday view',
			description: 'View your birthday',
			usage: '[user: user || @self]'
		},
		{
			key: '/coghelp',
			description: 'Shows general help or help for a specific command',
			usage: '[cog: string]'
		},
		{
			key: '/contact',
			description: 'Contact the developers'
		},
		{
			key: '/dev',
			description: 'Developer-only command. Go ahead and try it.'
		},
		{
			key: '/dm',
			description: 'Send an official server message to a user via DMs',
			usage: '<user: user> <message: string>'
		},
		{
			key: '/donate',
			description: 'Support bot development! Please? Thank you!'
		},
		{
			key: '/github profile',
			description: 'View some info for GitHub users',
			usage: '<username: string>'
		},
		{
			key: '/github repos',
			description: 'View some info for GitHub users',
			usage: '<username: string>'
		},
		{
			key: '/github stats',
			description: 'View some info for GitHub users',
			usage: '<username: string>'
		},
		{
			key: '/identity view',
			description: 'View a complete identity profile',
			usage: '[user: user || @self]'
		},
		{
			key: '/identity name set',
			description: 'Set your name',
			usage: '<name: string>'
		},
		{
			key: '/identity name view',
			description: "View a user's name",
			usage: '[user: user || @self]'
		},
		{
			key: '/identity bio set',
			description: 'Set your bio'
		},
		{
			key: '/identity bio view',
			description: "View a user's bio",
			usage: '[user: user || @self]'
		},
		{
			key: '/identity pronouns set',
			description: 'Set your pronouns',
			usage: '[custom: boolean || false]'
		},
		{
			key: '/identity pronouns view',
			description: "View a user's pronouns",
			usage: '[user: user || @self]'
		},
		{
			key: '/identity gender set',
			description: 'Set your gender'
		},
		{
			key: '/identity gender view',
			description: "View a user's gender",
			usage: '[user: user || @self]'
		},
		{
			key: '/info channel',
			description: 'Get channel info'
		},
		{
			key: '/info guild',
			description: 'Get guild info'
		},
		{
			key: '/ping',
			description: "[DEPRECATED] Check the bot's ping"
		},
		{
			key: '/poll',
			description: 'Create a poll',
			usage: `<question: string> <channel: channel> [pingeveryone: boolean || false] <option1: string> <option2: string> [option3: string] [option3: string] [option4: string] [option5: string] [option6: string] [option7: string] [option8: string] [option9: string]`
		},
		{
			key: '/qr',
			description: 'Encode some text or a link in a QR code',
			usage: '<text: string>'
		},
		{
			key: '/schedule',
			description: 'Schedule a message',
			usage: '<message: string> <time: number> <channel: channel>'
		},
		{
			key: '/tetrio view',
			description: "Get a user's stats on TETR.IO by username",
			usage: '<username: string>'
		},
		{
			key: '/tetrio discord',
			description:
				"Get a user's stats on TETR.IO by Discord account (if connected)",
			usage: '<user: user>'
		},
		{
			key: '/unix date',
			description: 'Convert	 a UNIX timestamp to a human-readable date',
			usage: '<timestamp: number>'
		},
		{
			key: '/unix timestamp',
			description: 'Convert a human-readable date to a UNIX timestamp',
			usage: '<date: string>'
		}
	];
	return (
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
			<TableBody items={testData}>
				{item => (
					<TableRow key={item.key}>
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
	);
	/**
			})
			.catch(err => console.error(err));
		*/
}
