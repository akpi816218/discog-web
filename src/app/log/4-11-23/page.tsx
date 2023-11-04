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
				<h1 className="text-3xl font-bold m-8">
					04 November 2023 ({new Date(1699124400000).toLocaleString()} local
					time)
				</h1>
				<p className="text-xl m-8">
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
				Sometime in late October, DisCog&apos;s current hosting provider sent an
				email:
				<br />
				<p className="px-4 my-4 ml-8 border-l-large border-l-slate-400">
					Hi there,
					<br />
					<br />
					Starting on January 1st, 2024, Deployments will be the only way to
					host your applications on Replit. repl.co will transition to
					replit.dev and will only be accessible while someone is actively in
					the editor. replit.dev is the URL for previewing your work before you
					deploy.
					<br />
					<br />
					If you are currently hosting anything on Replit, we recommend that you
					migrate to Deployments before the end of the year.
					<br />
					<br />
					Autoscale & Static deployments will cost less than 20 cents per month
					for most users or are included in the Hacker & Pro plans.
					<br />
					<br />
					Best, The Replit Team
				</p>
				Because DisCog is free and open source, I do not pay for hosting or any
				other services and am not planning to do so. This means that DisCog will
				be down while I temporarily disable database-reliant functions,
				including, but not limited to:
				<ul className="list-disc list-inside p-4 ml-8">
					<li>Server configs</li>
					<li>Server greet messages</li>
					<li>Server logs</li>
					<li>Birthday announcements</li>
					<li>Identity profiles</li>
				</ul>
				These features will be re-enabled once a new database system is
				implemented. There is no ETA for this, but I expect it to be done by the
				end of February 2024 (as of time of writing, subject to change without
				notice).
				<br />
				<br />
				DisCog will still be able to perform basic functions, such as scheduling
				messages, creating polls and announcements, fetching images, and more.
				<br />
				<br />
				You can follow the progress of the entire migration on{' '}
				<Link href="updates">this subpage</Link>, which will be updated weekly.
				The official Discord server will also have an updates channel which can
				be subscribed to.
				<br />
				<br />
				Again, I apologize for the inconvenience. I hope to have all of
				DisCog&apos;s wonderful features back up and running as soon as
				possible.
			</section>
			<Footer />
			<ScriptLoader />
		</>
	);
}
