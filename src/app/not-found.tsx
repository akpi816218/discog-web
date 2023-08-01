import Head from 'next/head';
import Image from 'next/image';
import RootLayout from './layout';
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
	faServer,
	faTerminal
} from '@fortawesome/fontawesome-free-solid';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
	faServer as IconDefinition,
	faTerminal as IconDefinition,
	faDiscord as IconDefinition,
	faGithub as IconDefinition
);

export default function Err404Page() {
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
									data-aos="fade-up"
									data-aos-duration="1000"
									data-aos-delay="100"
								>
									Hello, Gretel. Or are you Hansel? Looks like you&apos;re lost
									in the digital wilderness. Don&apos;t worry, we always keep
									some breadcrumbs to help{' '}
									<s>foolish meals of tender flesh like you</s>{' '}
									<em>I mean poor lost souls such as you</em> find your way back
									out. Not all witches are bad, you know.
									<br />
									&mdash;The Witch
								</h2>
								<Link
									className="button is-warning"
									href="/"
									data-aos="fade-down"
									data-aos-duration="1000"
									data-aos-delay="100"
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
