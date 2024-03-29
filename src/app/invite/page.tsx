import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import BackToTop from '@/components/BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import ScriptLoader from '@/components/ScriptLoader';
import ScrollDownChevron from '@/components/ScrollDownChevron';

export const metadata: Metadata = {
	title: 'DisCog | Invite',
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
		title: 'DisCog | Invite',
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

export default function InvitePage() {
	return (
		<>
			<BackToTop />

			<Nav selected="invite" />

			<section className="hero bg-base is-fullheight pb-6">
				<div className="hero-head"></div>
				<div className="hero-body">
					<div className="mt-6 columns">
						<div
							className="column has-text-centered"
							data-aos="fade-right"
							data-aos-delay="500"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								className="image vert-move2"
								src="/assets/img/discog.png"
								width={409}
								height={409}
								alt="logo image"
							/>
						</div>
						<div
							className="column has-text-right mt-12"
							data-aos="fade-down"
							data-aos-delay="500"
						>
							<h1 className="is-size-1 has-text-weight-bold has-text-white has-text-right">
								Get your server ready for{' '}
								<span className="blurple">DisCog</span>!
							</h1>
						</div>
					</div>
				</div>
				<ScrollDownChevron />
			</section>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#23272a"
					fillOpacity="1"
					d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
				></path>
			</svg>

			<section className="section mt-6 has-text-centered" id="invite">
				<h2 className="title has-text-weight-bold is-size-3">
					Are you convinced that <span className="blurple">DisCog</span> is the
					bot you&apos;re looking for?
				</h2>
				<p className="subtitle lined mt-4 mb-0 has-text-gray is-size-4">
					You&apos;ve got two options to get set up:
				</p>
				<div className="line3 line-center dark-blurple"></div>
				<div className="columns mt-4 is-size-5">
					<div className="column has-text-black">
						Contact the developers directly through the support server. This is
						the simplest and fastest way to get set up for all! When you&apos;re
						ready, join the official bot support server and get in touch with
						one of the developers, who will guide you to add DisCog to your
						server.
					</div>
					<div className="column block has-text-black">
						Alternatively, you can create a server request on GitHub. This is a
						bit more complicated, but it&apos;s a good option if you&apos;re a
						developer. When you&apos;re ready, create a new issue in the
						official GitHub repository and follow instructions to create a
						server request.
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<a
							href="/invite/support-server"
							className="button is-blurple is-medium"
						>
							<FontAwesomeIcon icon={faDiscord} className="mr-2" />
							<strong>Get Started With Discord</strong>
						</a>
					</div>
					<div className="column">
						<a
							href="https://github.com/akpi816218/discog/discussions/new?category=server-requests"
							className="button is-dark-blurple is-medium"
						>
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							<strong>Get Started With GitHub</strong>
						</a>
					</div>
				</div>
			</section>
			<Footer />
			<ScriptLoader />
		</>
	);
}
