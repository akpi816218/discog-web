import Head from 'next/head';
import Image from 'next/image';
import RootLayout from '../layout';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Nav from '@/components/Nav';
import {
	config,
	library,
	IconDefinition
} from '@fortawesome/fontawesome-svg-core';
import {
	faArrowUp,
	faChevronCircleDown,
	faServer,
	faTerminal
} from '@fortawesome/fontawesome-free-solid';
import {
	faDev,
	faDiscord,
	faGithub,
	faNpm,
	faSpotify,
	faSteam,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
	faServer as IconDefinition,
	faTerminal as IconDefinition,
	faDiscord as IconDefinition,
	faGithub as IconDefinition
);

export default function InvitePage() {
	return (
		<RootLayout>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>DisCog</title>
				<link rel="icon" href="/logo.png" type="image/png" />
			</Head>

			<Script src="/assets/js/jquery-3.6.0.js" />
			<Script src="/assets/js/aos@2.3.1.js" />
			<Script src="/assets/js/@popperjs_core@2.11.8.min.js" />
			<Script src="/assets/js/tippy.js@6.3.7.min.js" />
			<Script src="/assets/js/script.js" />

			<Link id="backtotop" data-tippy-content="Back To Top." href="">
				<FontAwesomeIcon
					// @ts-expect-error
					icon={faArrowUp}
					size="2xl"
					className="has-text-white mt-05"
				/>
			</Link>

			<Nav selected="invite" />

			<section className="hero bg-base is-fullheight">
				<div className="hero-head"></div>
				<div className="hero-body">
					<div className="mt-6 columns">
						<div className="column has-image-centered" data-aos="fade-right">
							<Image
								className="image vert-move mt-4 has-image-centered w20r"
								src="/assets/img/discog.png"
								priority={true}
								width={409}
								height={409}
								alt="logo image"
							/>
						</div>
						<div className="column has-text-right mt-12" data-aos="fade-down">
							<h1 className="is-size-1 has-text-weight-bold has-text-white has-text-right">
								Get your server ready for{' '}
								<strong className="blurple">DisCog</strong>!
							</h1>
						</div>
					</div>
				</div>
				<div
					className="has-text-centered hero-foot"
					data-tippy-content="Scroll Down"
				>
					<Link href="#invite">
						<FontAwesomeIcon
							// @ts-expect-error
							icon={faChevronCircleDown}
							size="2xl"
							className="vert-move2 mb-6 has-text-white"
						/>
					</Link>
				</div>
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
		</RootLayout>
	);
}
