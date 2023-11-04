import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import ScriptLoader from '@/components/ScriptLoader';

export const metadata: Metadata = {
	title: 'DisCog',
	authors: { name: 'Akhil Pillai' },
	keywords: [],
	creator: 'Akhil Pillai',
	generator: 'Next.js',
	icons: ['/logo.png'],
	description: 'The optimal bot for your Discord server',
	twitter: {
		card: 'summary_large_image',
		site: '@discogbot',
		creator: '@akpi816218',
		images: 'https://discog.localplayer.dev/logo.png',
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

export default function HomePage() {
	return (
		<>
			<BackToTop />

			<Nav />

			<section className="bg-base p-32 pb-16 flex flex-col items-center justify-center text-white">
				<p className="text-3xl">
					This page is for updates to <Link href="..">this announcement</Link>{' '}
					(excerpt below):
				</p>
				<p className="text-lg m-8 ml-4 pl-4 border-l-large border-l-slate-400">
					04 November 2023 ({new Date(1699124400000).toLocaleString()} local
					time)
					<br />
					<br />
					TL;DR: DisCog will be going offline sometime during the last week of
					December due to the current hosting provider effectively removing
					their free tier. Because this host is unique, the entire database
					system will need to be redesigned. DisCog is expected to be back
					online by the end of January 2024.
				</p>
			</section>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#23272a"
					fillOpacity="1"
					d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
				></path>
			</svg>

			<section className="section text-lg p-16">
				No updates so far, check back soon!
			</section>
			<Footer />
			<ScriptLoader />
		</>
	);
}
