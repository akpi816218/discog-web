'use client';

import {
	Button,
	Divider,
	Link,
	Select,
	SelectItem,
	Skeleton,
	User as UserUI
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	RESTGetAPICurrentUserResult as User,
	RESTGetAPICurrentUserGuildsResult as GuildsResult,
	RESTGetAPIChannelResult as Channel,
	// RESTGetCurrentUserGuildMemberResult as Member,
	Snowflake,
	Routes
} from 'discord-api-types/v10';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';
import { REST } from '@discordjs/rest';
import API_BASE from '@/config';

export default function Dashboard() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin');
		}
	});

	const [userData, setUserData] = useState<null | User>(null),
		[guilds, setGuilds] = useState<null | GuildsResult>(null),
		[currentGuild, setCurrentGuild] = useState<null | string>(null),
		[currentGuildConfig, setCurrentGuildConfig] =
			useState<null | EnrichedGuildConfig>(null),
		// [memberData, setMemberData] = useState<null | Map<string, Member>>(null),
		[isLoaded, setIsLoaded] = useState(false),
		[isGuildLoaded, setIsGuildLoaded] = useState(false);

	// @ts-expect-error
	const Rest = new REST({ version: '10' }).setToken(session?.accessToken);

	useEffect(() => {
		if (!session) return;
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
			setGuilds(
				guildData.filter(
					guild => parseInt(guild.permissions) & 0x0000000000000020
				)
			);
			setIsLoaded(true);
		});
	}, [session]);

	useEffect(() => {
		if (!currentGuild) return;
		const data: BaseGuildConfig = {
			auditlog: { channel: '1152785893904621629', enabled: true },
			systemchannel: '1023790070135799868',
			birthdays: { channel: '1124085716369035354', enabled: true },
			greetings: {
				channel: '1023790070135799868',
				goodbyeEnabled: true,
				welcomeEnabled: false
			}
		};
		const welcomeEnabled = !!data.greetings?.welcomeEnabled,
			goodbyeEnabled = !!data.greetings?.goodbyeEnabled,
			guildChannels = Rest.get(Routes.guildChannels(currentGuild)) /**
				fetch(
					`https://discord.com/api/v10/guilds/${currentGuild}/channels`,
					{
						headers: {
							// @ts-expect-error
							Authorization: `${session.tokenType} ${session.accessToken}`
						}
					}
				)
					.then(res => res.json())
			*/
				.then(result => {
					let guildChannels = result as Channel[];
					setCurrentGuildConfig({
						auditlog:
							guildChannels.find(
								channel => channel.id === data.auditlog?.channel
							) ?? null,
						birthdays:
							guildChannels.find(
								channel => channel.id === data.birthdays?.channel
							) ?? null,
						// @ts-expect-error
						greetings: {
							channel:
								goodbyeEnabled || welcomeEnabled
									? guildChannels.find(
											channel => channel.id === data.greetings?.channel
									  ) ?? null
									: null,
							goodbyeEnabled,
							welcomeEnabled
						},
						systemchannel:
							guildChannels.find(
								channel => channel.id === data.systemchannel
							) ?? null
					});
					setIsGuildLoaded(true);
				});
	}, [currentGuild, Rest]);

	return (
		<main className="bg-base p-12 w-screen h-screen text-white flex flex-col justify-center text-2xl">
			<div className="flex flex-row items-center justify-start">
				<span className="mr-4">Signed in as:</span>
				<Skeleton isLoaded={isLoaded} className="rounded-medium mr-2">
					<UserUI
						avatarProps={{
							src: `https://cdn.discordapp.com/avatars/${userData?.id}/${userData?.avatar}.png`,
							alt: 'user avatar',
							size: 'lg'
						}}
						name={`@${userData?.global_name}`}
						description={userData?.username}
						classNames={{
							base: 'flex flex-row items-center justify-start gap-2',
							name: 'text-white text-xl',
							description: 'text-base text-gray-400'
						}}
					/>
				</Skeleton>
				<Button
					// @ts-expect-error
					endContent={<FontAwesomeIcon icon={faSignOutAlt} size="lg" />}
					variant="bordered"
					radius="lg"
					as={Link}
					href="/api/auth/signout"
					className="text-lg border-dark-blurple text-red-500 border-3 py-5"
				>
					Sign out
				</Button>
				<Divider className="mx-2 mr-4" orientation="vertical" />
				<Skeleton className="rounded-lg flex-grow max-w-sm" isLoaded={isLoaded}>
					<Select
						className=""
						classNames={{
							base: 'items-center text-white',
							label: 'text-white align-stretch mb-0 w-min text-base',
							listbox: 'text-white',
							trigger: 'border-blurple border-2 border-dashed py-5',
							value: 'text-white text-lg'
						}}
						size="md"
						variant="bordered"
						items={guilds ?? []}
						selectionMode="single"
						selectedKeys={currentGuild ? [currentGuild] : []}
						placeholder="Select a server"
						label="Server to configure"
						labelPlacement="outside-left"
						renderValue={items => {
							return items.map(item => (
								<div
									key={item.key}
									className="flex flex-row gap-2 items-center justify-stretch"
								>
									<Image
										src={`https://cdn.discordapp.com/icons/${item.data!.id}/${
											item.data!.icon
										}.png`}
										alt="guild icon"
										width={25}
										height={25}
										className="rounded-full"
									/>
									{item.data!.name}
								</div>
							));
						}}
						onSelectionChange={async keys => {
							if (keys === 'all') return;
							setCurrentGuild(keys.values().next().value.toString());
						}}
					>
						{item => (
							<SelectItem
								startContent={
									<Image
										src={`https://cdn.discordapp.com/icons/${item.id}/${item.icon}.png`}
										alt="guild icon"
										width={30}
										height={30}
										className="rounded-full"
									/>
								}
								key={item.id}
							>
								{item.name}
							</SelectItem>
						)}
					</Select>
				</Skeleton>
			</div>
			<Divider className="my-2 mt-4" />
			<p className="m-4 flex flex-row gap-2">
				Audit Log Channel:{' '}
				<Skeleton isLoaded={isGuildLoaded}>
					{currentGuildConfig?.auditlog?.name ?? 'Disabled'}
				</Skeleton>
			</p>
			<p className="m-4 flex flex-row gap-2">
				Birthday Channel:{' '}
				<Skeleton isLoaded={isGuildLoaded}>
					{currentGuildConfig?.birthdays?.name ?? 'Disabled'}
				</Skeleton>
			</p>
			<p className="m-4 flex flex-row gap-2">
				Welcome Channel:{' '}
				<Skeleton isLoaded={isGuildLoaded}>
					{currentGuildConfig?.greetings.welcomeEnabled
						? currentGuildConfig.greetings.channel.name
						: 'Disabled'}
				</Skeleton>
			</p>
			<p className="m-4 flex flex-row gap-2">
				Goodbye Channel:{' '}
				<Skeleton isLoaded={isGuildLoaded}>
					{currentGuildConfig?.greetings.goodbyeEnabled
						? currentGuildConfig.greetings.channel.name
						: 'Disabled'}
				</Skeleton>
			</p>
			<p className="m-4 flex flex-row gap-2">
				System Channel:
				<Skeleton isLoaded={isGuildLoaded}>
					{currentGuildConfig?.systemchannel?.name ?? 'Disabled'}
				</Skeleton>
			</p>
		</main>
	);
}

interface BaseGuildConfig {
	auditlog?:
		| {
				enabled: true;
				channel: Snowflake;
		  }
		| {
				enabled?: false | null;
				channel?: null;
		  };
	birthdays?:
		| {
				enabled: true;
				channel: Snowflake;
		  }
		| {
				enabled?: false | null;
				channel?: null;
		  };
	greetings?:
		| {
				channel: Snowflake;
				goodbyeEnabled?: boolean;
				welcomeEnabled: true;
		  }
		| {
				channel: Snowflake;
				goodbyeEnabled: true;
				welcomeEnabled?: boolean;
		  }
		| {
				channel?: null;
				goodbyeEnabled?: false;
				welcomeEnabled?: false;
		  };
	systemchannel?: Snowflake | null;
}

interface EnrichedGuildConfig {
	auditlog: Channel | null;
	birthdays: Channel | null;
	greetings:
		| {
				channel: Channel;
				goodbyeEnabled: boolean;
				welcomeEnabled: true;
		  }
		| {
				channel: Channel;
				goodbyeEnabled: true;
				welcomeEnabled: boolean;
		  }
		| {
				channel: null;
				goodbyeEnabled: false;
				welcomeEnabled: false;
		  };
	systemchannel: Channel | null;
}
