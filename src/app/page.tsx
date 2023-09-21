import { faServer, faTerminal } from '@fortawesome/fontawesome-free-solid';
import BackToTop from '@/components/BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '@/components/Footer';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import Script from 'next/script';
import ScriptLoader from '@/components/ScriptLoader';
import ScrollDownChevron from '@/components/ScrollDownChevron';

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

export default function HomePage() {
	return (
		<>
			<BackToTop />

			<Nav selected="home" />

			<section className="hero bg-base is-fullheight-with-navbar">
				<div className="hero-body">
					<div className="columns">
						<div className="column mr-6 mt-12" data-aos="fade-up">
							<p className="title has-text-white has-text-weight-bold">
								Time to add DisCog to your server!
							</p>
							<p className="subtitle has-text-grey-light is-size-6 mt-3">
								DisCog is a free and open-source Discord bot made to simplify
								your Discord life.
							</p>
							<div className="buttons" id='button-scroll-to-invite'>
								<div
									className="button is-blurple has-text-weight-bold"
								>
									Add To Discord
								</div>
							</div>
						</div>
						<div className="column has-text-centered" data-aos="fade-left">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								className="image vert-move"
								src="/logo.png"
								width={409}
								height={409}
								alt="logo image"
							/>
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

			<section id="features" className="section">
				<div className="has-text-centered mt-6">
					<h1 className="title lined">Features</h1>
					<div className="line line-center blurple"></div>
				</div>

				<div className="single-feature">
					<div className="shape-right" data-aos="fade-up-left">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#9AAAE3"
								d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,56.6,20.8C55.8,33.7,50.1,47.4,39.9,53.8C29.6,60.1,14.8,59.1,0.4,58.5C-14,58,-28,57.9,-38,51.5C-48.1,45,-54.3,32.3,-61.3,18.1C-68.4,4,-76.4,-11.7,-71.9,-22.7C-67.4,-33.6,-50.4,-39.8,-36.3,-47.9C-22.2,-56.1,-11.1,-66.3,3.1,-70.5C17.2,-74.7,34.5,-72.9,42.7,-62.9Z"
								transform="translate(90 90)"
							/>
						</svg>
					</div>

					<div className="columns mt-6">
						<div className="column mr-6">
							<h4 className="title">
								<span className="blurple">Birthday</span> Greetings
							</h4>
							<p className="subtitle mt-3">
								With DisCog, forgetting someone&apos;s birthday is impossible.
								Every day at 12:00 AM PST, DisCog will send a message wishing a
								happy birthday to anyone who has their birthday set in DisCog.
								The intelligent internal algorithm first looks for any channel
								whose name contains &quot;birthday&quot; or &quot;bday&quot; and
								sends the message there. If no such channel is found, DisCog
								will try to send the message in the server&apos;s System
								Channel. If that does not exist either, it will choose the first
								channel it can send messages in. DisCog will never sell your
								data. Only people with servers in common with you can see your
								birthday.
							</p>
						</div>
						<div
							className="column has-text-centered"
							data-aos="fade-left"
							data-aos-delay="300"
						>
							<Image
								className="image w20r"
								src="/assets/img/ice_cream_cake-rafiki.svg"
								width={1024 / 3}
								height={1024 / 3}
								alt="feature1 img"
							/>
						</div>
					</div>
				</div>
				<br />
				<div className="single-feature">
					<div className="shape-left" data-aos="fade-up-right">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#9AAAE3"
								d="M54.2,-67.2C69.4,-63.5,80.4,-46.6,84.6,-28.7C88.7,-10.8,86,8.1,76.8,21.4C67.6,34.7,51.9,42.3,38.1,50.3C24.2,58.3,12.1,66.7,-2.8,70.5C-17.7,74.3,-35.3,73.6,-45.6,64.5C-55.9,55.3,-58.8,37.7,-63.3,21.2C-67.7,4.7,-73.7,-10.6,-71.8,-25.4C-69.8,-40.2,-59.9,-54.5,-46.6,-58.9C-33.3,-63.2,-16.7,-57.6,1.4,-59.6C19.5,-61.5,39,-71,54.2,-67.2Z"
								transform="translate(100 130)"
							/>
						</svg>
					</div>

					<div className="columns mt-6">
						<div
							className="column has-text-centered"
							data-aos="fade-right"
							data-aos-delay="300"
						>
							<Image
								className="image w20r"
								src="/assets/img/id_card-rafiki.svg"
								width={800}
								height={800}
								alt="feature1 img"
							/>
						</div>
						<div className="column">
							<h4 className="title">
								User <span className="has-text-primary">Identity Profiles</span>
							</h4>
							<p className="subtitle mt-3">
								DisCog features a unique Identity profile for each user. Members
								can set their preferred name, pronouns, gender, and more. No
								more fighting to keep your Discord bio under the 190 character
								limit! DisCog allows you up to 500 characters to express
								yourself thoroughly. DisCog will never sell your data. Only
								people with servers in common with you can see your identity
								profile.
							</p>
						</div>
					</div>
				</div>
				<br />
				<div className="single-feature">
					<div className="shape-right" data-aos="fade-up-left">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#9AAAE3"
								d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,56.6,20.8C55.8,33.7,50.1,47.4,39.9,53.8C29.6,60.1,14.8,59.1,0.4,58.5C-14,58,-28,57.9,-38,51.5C-48.1,45,-54.3,32.3,-61.3,18.1C-68.4,4,-76.4,-11.7,-71.9,-22.7C-67.4,-33.6,-50.4,-39.8,-36.3,-47.9C-22.2,-56.1,-11.1,-66.3,3.1,-70.5C17.2,-74.7,34.5,-72.9,42.7,-62.9Z"
								transform="translate(80 60) scale(.75)"
							/>
						</svg>
					</div>

					<div className="columns mt-6">
						<div className="column mr-6">
							<h4 className="title">
								Helpful <span className="has-text-warning">Utility</span>{' '}
								Commands
							</h4>
							<p className="subtitle mt-3">
								A lot of the commands in DisCog are utility commands. DisCog has
								commands to create announcements, polls, and much more!
								Utilizing the functionality of message embeds, DisCog can create
								beautiful announcements and polls that are easy to read and
								understand, simplifying the tasks of server moderators.
							</p>
						</div>
						<div
							className="column has-text-centered"
							data-aos="fade-left"
							data-aos-delay="300"
						>
							<Image
								className="image w20r"
								src="/assets/img/settings-sparkle.svg"
								width={128}
								height={128}
								alt="feature1 img"
							/>
						</div>
					</div>
				</div>
				<br />
				<div className="single-feature">
					<div className="shape-left" data-aos="fade-up-right">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#9AAAE3"
								d="M54.2,-67.2C69.4,-63.5,80.4,-46.6,84.6,-28.7C88.7,-10.8,86,8.1,76.8,21.4C67.6,34.7,51.9,42.3,38.1,50.3C24.2,58.3,12.1,66.7,-2.8,70.5C-17.7,74.3,-35.3,73.6,-45.6,64.5C-55.9,55.3,-58.8,37.7,-63.3,21.2C-67.7,4.7,-73.7,-10.6,-71.8,-25.4C-69.8,-40.2,-59.9,-54.5,-46.6,-58.9C-33.3,-63.2,-16.7,-57.6,1.4,-59.6C19.5,-61.5,39,-71,54.2,-67.2Z"
								transform="translate(100 130)"
							/>
						</svg>
					</div>

					<div className="columns mt-6">
						<div
							className="column has-text-centered"
							data-aos="fade-right"
							data-aos-delay="300"
						>
							<Image
								className="image w20r"
								src="/assets/img/data_extraction-rafiki.svg"
								width={741}
								height={608}
								alt="feature1 img"
							/>
						</div>
						<div className="column">
							<h4 className="title">
								Coming soon:{' '}
								<span className="has-text-info">Audit Logging</span>
							</h4>
							<p className="subtitle mt-3">
								Discord by default stores audit log entries for 45 days. Server
								admins cannot see further into the past. This in-development
								feature, when completed, will allow server admins to view all
								actions taken since the beginning of time. DisCog will log and
								store all audit log events <em>permanently</em>.
							</p>
						</div>
					</div>
				</div>
				<br />
			</section>
			<p></p>
			<section id="stats" className="section mt-6">
				<div className="has-text-centered">
					<h1 className="title lined">Stats</h1>
					<div className="line line-center blurple"></div>
				</div>

				<div className="columns mt-6">
					<div className="column has-text-centered">
						<p
							className="title has-text-weight-bold lined mono"
							id="server-count"
						>
							not enough
						</p>
						<span className="subtitle has-text-weight-bold blurple">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faServer} size="xs" /> Servers
						</span>
					</div>

					<div className="column has-text-centered">
						<p
							className="title has-text-weight-bold lined mono"
							id="command-count"
						>
							20+
						</p>
						<span className="subtitle has-text-weight-bold blurple">
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faTerminal} /> Commands
							<br />
							<span className="fs08m">
								(each with numerous subcommands and options)
							</span>
						</span>
					</div>
				</div>
			</section>

			<section id="status" className="section mt-6">
				<div className="has-text-centered">
					<div className="line line-center blurple" />
					<Link
						href="/status"
						target="_blank"
						className="button rounded2 is-blurple is-size-1 mt-4 mb-4"
					>
						Status Page
					</Link>
					<div className="line line-center blurple" />
				</div>
			</section>

			<section className="section mt-6" id="invite">
				<div className="columns">
					<div className="column has-text-left">
						<p className="title has-text-weight-bold">
							Ready to try <span className="blurple">DisCog</span>?
						</p>
						<p className="subtitle mt-3 has-text-gray">
							Get in contact with the developers and get DisCog in your server
							today!{' '}
							<span className="has-text-grey is-size-6">
								(Don&apos;t worry, we don&apos;t bite ...unless you diss us.)
							</span>{' '}
							We&apos;re always looking for new servers to have our bot in.
						</p>
						<Link
							href="/invite"
							className="button is-dark-blurple is-medium"
							prefetch={true}
						>
							<strong>Get Started</strong>
						</Link>
					</div>

					<div className="column has-text-centered">
						<Image
							alt="rocket launch"
							className="h10m wauto"
							src="/assets/img/relaunch_day.svg"
							width={754 / 2}
							height={750 / 2}
						/>
					</div>
				</div>
			</section>
			<Footer storysetAttribution={true} />
			<ScriptLoader />
			<Script src="/assets/js/count.js" strategy="lazyOnload" />
		</>
	);
}
