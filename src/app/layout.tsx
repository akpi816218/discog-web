import ScriptLoader from '@/components/ScriptLoader';
import './aos@2.3.1.min.css';
import './bulma.min.css';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';

const poppins = localFont({
	src: [
		{
			path: '../../public/assets/fonts/Poppins-ExtraLight.ttf',
			style: 'normal',
			weight: '200'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraLightItalic.ttf',
			style: 'italic',
			weight: '200'
		},
		{
			path: '../../public/assets/fonts/Poppins-Light.ttf',
			style: 'normal',
			weight: '300'
		},
		{
			path: '../../public/assets/fonts/Poppins-LightItalic.ttf',
			style: 'italic',
			weight: '300'
		},
		{
			path: '../../public/assets/fonts/Poppins-Regular.ttf',
			style: 'normal',
			weight: '400'
		},
		{
			path: '../../public/assets/fonts/Poppins-Italic.ttf',
			style: 'italic',
			weight: '400'
		},
		{
			path: '../../public/assets/fonts/Poppins-Medium.ttf',
			style: 'normal',
			weight: '500'
		},
		{
			path: '../../public/assets/fonts/Poppins-MediumItalic.ttf',
			style: 'italic',
			weight: '500'
		},
		{
			path: '../../public/assets/fonts/Poppins-SemiBold.ttf',
			style: 'normal',
			weight: '600'
		},
		{
			path: '../../public/assets/fonts/Poppins-SemiBoldItalic.ttf',
			style: 'italic',
			weight: '600'
		},
		{
			path: '../../public/assets/fonts/Poppins-Bold.ttf',
			style: 'normal',
			weight: '700'
		},
		{
			path: '../../public/assets/fonts/Poppins-BoldItalic.ttf',
			style: 'italic',
			weight: '700'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraBold.ttf',
			style: 'normal',
			weight: '800'
		},
		{
			path: '../../public/assets/fonts/Poppins-ExtraBoldItalic.ttf',
			style: 'italic',
			weight: '800'
		}
	],
	variable: '--font-poppins',
	preload: true
});

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
				url: 'https://discog.localplayer.dev/banner.svg',
				type: 'image/svg+xml'
			},
			{
				url: 'https://discog.localplayer.dev/logo.png',
				type: 'image/png'
			}
		]
	}
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={poppins.className} suppressHydrationWarning={true}>
				{children}
				<Footer />
				<ScriptLoader />
			</body>
		</html>
	);
}
