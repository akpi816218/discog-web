'use client';

import { Divider, Skeleton } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	RESTGetAPICurrentUserResult as User,
	RESTGetAPICurrentUserGuildsResult as GuildsResult,
	RESTGetCurrentUserGuildMemberResult as Member
} from 'discord-api-types/v10';

export default function Dashboard() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin');
		}
	});

	const [userData, setUserData] = useState<null | User>(null),
		[guilds, setGuilds] = useState<null | GuildsResult>(null),
		[memberData, setMemberData] = useState<null | Map<string, Member>>(null),
		[isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (status !== 'authenticated') return;
		Promise.all([
			fetch(`https://discord.com/api/v10/users/@me`, {
				headers: {
					// @ts-expect-error
					Authorization: `${session.tokenType} ${session.accessToken}`
				}
			}).then(res => res.json()),
			fetch(`https://discord.com/api/v10/users/@me/guilds`, {
				headers: {
					// @ts-expect-error
					Authorization: `${session.tokenType} ${session.accessToken}`
				}
			}).then(res => res.json())
		]).then(([userData, guildData]: [User, GuildsResult]) => {
			setUserData(userData);
			setGuilds(guildData);
			console.log(userData, guildData);
			Promise.all(
				guildData
					.filter(guild => parseInt(guild.permissions) & 0x0000000000000020)
					.map(async guild => {
						return fetch(
							`https://discord.com/api/v10/users/@me/guilds/${guild.id}/member`,
							{
								headers: {
									// @ts-expect-error
									Authorization: `${session.tokenType} ${session.accessToken}`
								}
							}
						).then(res => res.json());
					})
			).then((memberData: Member[]) => {
				setMemberData(
					new Map(guildData.map((guild, i) => [guild.id, memberData[i]]))
				);
			});
			setIsLoaded(true);
		});
		// @ts-expect-error
	}, [status, session?.accessToken, session?.tokenType]);

	return (
		<main className="bg-base p-12 w-screen h-screen text-white">
			<div className="flex flex-row items-center justify-start">
				<Skeleton isLoaded={isLoaded} className="rounded-full">
					<Image
						src={`https://cdn.discordapp.com/avatars/${userData?.id}/${userData?.avatar}.png`}
						alt="user profile picture"
						width={50}
						height={50}
						className="rounded-full"
					/>
				</Skeleton>
				<Skeleton isLoaded={isLoaded} className="h-min mx-4">
					<span>@{userData?.username ?? 'Loading...'}</span>
				</Skeleton>
			</div>
			<Divider className="my-4" />
			<div className="flex flex-row items-center justify-start">
				<Skeleton isLoaded={isLoaded} className="h-min mx-4">
					<span>{guilds?.length ?? 'Loading...'} servers</span>
				</Skeleton>
			</div>
		</main>
	);
}
