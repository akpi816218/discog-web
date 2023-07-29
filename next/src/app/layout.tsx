import './aos@2.3.1.css';
import './tippy.js@6.3.7.css';
import './bulma.min.css';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

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
	description: 'A Next.js website for DisCog',
	authors: { name: 'Akhil Pillai' },
	keywords: [],
	creator: 'Akhil Pillai',
	generator: 'Next.js',
	icons: ['/logo.png']
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
