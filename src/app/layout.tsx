import 'aos/dist/aos.css';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './out.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
	title: 'DisCog',
	authors: { name: 'Akhil Pillai' },
	keywords: [],
	creator: 'Akhil Pillai',
	generator: 'Next.js',
	icons: ['/logo.png'],
	metadataBase: new URL('/', 'https://discog.localplayer.dev/'),
	description: 'The optimal bot for your Discord server',
	twitter: {
		card: 'summary_large_image',
		site: '@discogbot',
		creator: '@akpi816218',
		images: 'https://discog.localplayer.dev/banner.svg',
		description: 'The optimal bot for your Discord server'
	},
	openGraph: {
		title: 'DisCog',
		description: 'The optimal bot for your Discord server',
		url: 'https://discog.localplayer.dev',
		siteName: 'DisCog',
		countryName: 'United States',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: 'https://discog.localplayer.dev/logo.png',
				type: 'image/png'
			},
			{
				url: 'https://discog.localplayer.dev/banner.svg',
				type: 'image/svg+xml'
			}
		]
	}
};

export default function RootLayout({
	children,
	suppressHydrationWarning
}: {
	children: ReactNode;
	suppressHydrationWarning?: boolean;
}) {
	return (
		<html lang="en-US">
			<body
				suppressHydrationWarning={suppressHydrationWarning}
				className="dark"
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
