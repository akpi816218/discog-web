import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import RootLayout from './layout';

export const metadata: Metadata = {
	title: 'DisCog | 404 Not Found',
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

export default function Err404Page() {
	return (
		<RootLayout>
			{/* <Link id="backtotop" data-tippy-content="Back To Top." href="">
				<FontAwesomeIcon
					// @ts-expect-error
					icon={faArrowUp}
					size="2xl"
					className="has-text-white mt-05"
				/>
			</Link> */}

			<Nav selected="none" />

			<section className="hero bg-base is-fullheight-with-navbar is-dark">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered">
							<div className="column is-5">
								<h1
									className="title is-1 has-text-white"
									data-aos="fade-right"
									data-aos-duration="1000"
								>
									<span className="mono">404</span>: Page not found
								</h1>
							</div>
							<div className="column is-6 is-offset-1">
								<h2
									className="subtitle is-4 has-text-white"
									data-aos="fade-up-left"
									data-aos-duration="1000"
									data-aos-delay="250"
								>
									Hello, Gretel. Or are you Hansel? Looks like you&apos;re lost
									in the digital wilderness. Don&apos;t worry, we always keep
									some breadcrumbs to help{' '}
									<s>foolish meals of tender flesh like you</s>{' '}
									<em>I mean poor lost souls such as you</em> find your way back
									out. Not all witches are bad, you know.
									<br />
									&mdash;The (Not Bad?) Witch
								</h2>
								<Link
									className="button is-warning"
									href="/"
									data-aos="fade-down-right"
									data-aos-duration="1000"
									data-aos-delay="10000"
								>
									Go back to the homepage
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</RootLayout>
	);
}
