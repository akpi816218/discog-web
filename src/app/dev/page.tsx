import Head from 'next/head';
import Image from 'next/image';
import RootLayout from '../layout';
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
import { Metadata } from 'next';

config.autoAddCss = false;
library.add(
	faServer as IconDefinition,
	faTerminal as IconDefinition,
	faDiscord as IconDefinition,
	faGithub as IconDefinition
);

export const metadata: Metadata = {
	title: 'DisCog | About the Developer',
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
		title: 'DisCog | About the Developer',
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

export default function AboutTheDevPage() {
	return (
		<RootLayout>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>DisCog</title>
				<link rel="icon" href="/logo.png" type="image/png" />
			</Head>

			<Link id="backtotop" data-tippy-content="Back to Top" href="">
				<FontAwesomeIcon
					// @ts-ignore
					icon={faArrowUp}
					size="2xl"
					className="has-text-white mt-05"
				/>
			</Link>

			<Nav selected="dev" />

			<section className="hero bg-base is-fullheight">
				<div className="hero-body">
					<div className="columns">
						<div className="column mr-6 mb-12" data-aos="fade-left">
							<h1 className="title has-text-white has-text-weight-bold has-text-centered is-size-1">
								Meet the developer
							</h1>
						</div>
						<div className="column mt-12" data-aos="fade-right">
							<p className="title has-text-weight-light has-text-white">
								Because the developer wants to meet you too.
							</p>
						</div>
					</div>
				</div>
				<div className="has-text-centered" data-tippy-content="Scroll Down">
					<Link href="#akpi816218">
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

			<section className="section mt-6 has-text-centered">
				<h2
					className="title has-text-centered has-text-weight-bold has-text-white mono is-size-3 is-dark button is-rounded"
					id="akpi816218"
				>
					@akpi816218
				</h2>
				<p className="is-centered has-text-weight-medium is-size-5 mb-2">
					Hi, I&apos;m <span className="mono">akpi816218</span>, a high school
					developer in the United States. I&apos;m currently the sole developer
					of DisCog. I spend my free time programming in TypeScript and
					occasionally creating websites like this one with{' '}
					<span className="mono">React</span> and{' '}
					<span className="mono">Next.js</span>. When I&apos;m not coding, I
					like to bike, compose music, play the oboe and piano, ski, grind
					Tetris, play water polo, read, eat food, and play Horizon Forbidden
					West. My academic interests include mathematics, physics, chemistry,
					biology, computer science, music, and Spanish.
				</p>
				<div>
					<Link
						href="https://github.com/akpi816218"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faGithub} />
						</span>
						<span>GitHub</span>
					</Link>
					<Link
						href="/invite/support-server/"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faDiscord} />
						</span>
						<span>Discord</span>
					</Link>
					<Link
						href="https://www.npmjs.com/~akpi816218"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faNpm} />
						</span>
						<span>NPM</span>
					</Link>
					<Link
						href="https://dev.to/akpi816218"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faDev} />
						</span>
						<span>DEV Community</span>
					</Link>
					<Link
						href="https://ch.tetr.io/u/akpi816218"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							<Image
								src="/assets/img/tetrio-mono.svg"
								alt="TETR.IO"
								width={24}
								height={24}
								className="h1m"
							/>
						</span>
						<span>TETR.IO</span>
					</Link>
					<Link
						href="https://open.spotify.com/user/asobwyv313i67m4mvf2z0lzjm?si=e2b3492ce7e848bb"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faSpotify} />
						</span>
						<span>Spotify</span>
					</Link>
					<Link
						href="https://youtube.com/@equus_quagga"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faYoutube} />
						</span>
						<span>YouTube</span>
					</Link>
					<Link
						href="https://steamcommunity.com/id/equus-quagga/"
						className="button is-rounded is-medium is-blurple m-1"
						target="_blank"
					>
						<span className="icon">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faSteam} />
						</span>
						<span>Steam</span>
					</Link>
				</div>
				<div>
					<Link
						href="https://discog.localplayer.dev"
						className="button is-rounded is-medium is-dark-blurple m-1"
						target="_blank"
					>
						DisCog
					</Link>
					<Link
						href="https://pronouns.js.org"
						className="button is-rounded is-medium is-dark-blurple m-1"
						target="_blank"
					>
						Pronouns.js
					</Link>
					<Link
						href="https://www.npmjs.com/package/tsfm"
						className="button is-rounded is-medium is-dark-blurple m-1"
						target="_blank"
					>
						tsfm
					</Link>
					<Link
						href="https://www.npmjs.com/package/feces-cli"
						className="button is-rounded is-medium is-dark-blurple m-1"
						target="_blank"
					>
						feces-cli
					</Link>
				</div>
			</section>
		</RootLayout>
	);
}
