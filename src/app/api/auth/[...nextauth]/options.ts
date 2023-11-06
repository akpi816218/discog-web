import { Account, NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import DiscordProvider from 'next-auth/providers/discord';

export const options: NextAuthOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_ID as string,
			clientSecret: process.env.DISCORD_SECRET as string,
			authorization: {
				params: {
					scope: 'identify guilds guilds.members.read'
				}
			},
			style: {
				bg: '#5865F2',
				bgDark: '#454FBF',
				logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg',
				text: '#FFFFFF'
			}
		})
	],
	callbacks: {
		async jwt({ token, account }: { token: JWT; account: Account | null }) {
			if (account) {
				token.accessToken = account.access_token;
				token.tokenType = account.token_type;
			}
			return token;
		},
		async session({ session, token }: { session: Session; token: JWT }) {
			if (session) {
				// @ts-expect-error
				session.accessToken = token.accessToken;
				// @ts-expect-error
				session.tokenType = token.tokenType;
			}
			return session;
		}
	}
};
