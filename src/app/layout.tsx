import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/out.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
	title: {
		absolute: 'DisCog',
		template: '%s | DisCog'
	},
	authors: { name: 'Akhil Pillai' },
	keywords: [],
	creator: 'Akhil Pillai',
	generator: 'Next.js',
	icons: ['/logo.png'],
	metadataBase: new URL('/', 'https://discog.opensourceforce.net/'),
	description: 'The optimal bot for your Discord server',
	twitter: {
		card: 'summary_large_image',
		site: '@discogbot',
		creator: '@akpi816218',
		images: ['https://discog.opensourceforce.net/banner.png'],
		description: 'The optimal bot for your Discord server',
		title: 'DisCog'
	},
	openGraph: {
		title: 'DisCog',
		description: 'The optimal bot for your Discord server',
		url: 'https://discog.opensourceforce.net',
		siteName: 'DisCog',
		countryName: 'United States',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: 'https://discog.opensourceforce.net/logo.png',
				type: 'image/png'
			},
			{
				url: 'https://discog.opensourceforce.net/banner.png',
				type: 'image/png'
			}
		]
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en-us">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
