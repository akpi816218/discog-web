import { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const options: NextAuthOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_ID as string,
			clientSecret: process.env.DISCORD_SECRET as string,
			authorization: {
				params: {
					scope: 'identify guilds guilds.members.read',
					redirect_uri: `${process.env.NEXTAUTH_URL}/dashboard/`
				}
			},
			style: {
				bg: '#5865F2',
				bgDark: '#454FBF',
				logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg',
				text: '#FFFFFF'
			}
		})
	]
};
