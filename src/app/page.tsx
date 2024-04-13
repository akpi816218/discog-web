import Footer from '@/components/Footer';
import Image from 'next/image';
import Nav from '@/components/Nav';
import ScrollDownChevron from '@/components/ScrollDownChevron';
import Code from '@/components/Code';
import Counter from '@/components/Counter';
import { Button } from '@nextui-org/react';
import ScrollTarget from '@/components/ScrollTarget';
import ScrollLink from '@/components/ScrollLink';

export default function HomePage() {
	return (
		<>
			<Nav />

			<section className="bg-base min-h-[100vh] mt-[var(--navbar-height)] px-12 py-24 flex flex-col items-stretch">
				<div className="grow flex flex-row items-stretch gap-8">
					<div className="flex flex-col justify-center gap-8 animate-fade-in-top">
						<p className="text-3xl text-white font-bold">
							Time to add DisCog to your server!
						</p>
						<p className="text-neutral-400 text-lg">
							DisCog is a free and open-source Discord bot made to simplify your
							Discord experience.
						</p>
						<div className="flex flex-row justify-center">
							<ScrollLink
								to="invite"
								duration={250}
								className="py-3 px-4 rounded-2xl bg-neutral-200 font-medium text-lg text-blurple hover:cursor-pointer hover:bg-neutral-300 hover:scale-95"
							>
								Add To Discord
							</ScrollLink>
						</div>
					</div>
					<div className="place-content-center hidden md:grid">
						<Image
							className="image vert-move animate-fade-in-left"
							src="/logo.png"
							width={409}
							height={409}
							alt="logo image"
							priority
						/>
					</div>
				</div>
				<ScrollDownChevron target="features" />
			</section>
			<ScrollTarget name="features" />

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#23272a"
					fillOpacity="1"
					d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
				></path>
			</svg>

			<section className="py-16 px-12">
				<div className="flex flex-col items-center">
					<div className="flex flex-col items-stretch w-fit">
						<h1 className="text-2xl text-center font-semibold">Features</h1>
						<div className="bg-blurple h-1" />
					</div>
				</div>

				<div className="flex flex-row mt-6 gap-4">
					<div className="basis-6 grow">
						<h4 className="text-xl font-medium">
							<span className="text-blurple">Birthday</span> Greetings
						</h4>
						<p className="mt-3">
							With DisCog, forgetting someone&apos;s birthday is impossible.
							Every day at 12:00 AM PST, DisCog will send a message wishing a
							happy birthday to anyone who has their birthday set via slash
							commands. The intelligent internal algorithm first looks for any
							appropriate channel or will try to send the message in the
							server&apos;s System Channel. We will never sell your data.
						</p>
					</div>
					<div className="basis-3 grow text-center animate-fade-in-top">
						<Image
							className="image w20r"
							src="/assets/img/ice_cream_cake-rafiki.svg"
							width={1024 / 3}
							height={1024 / 3}
							alt="feature1 img"
						/>
					</div>
				</div>
				<br />

				<div className="flex flex-row mt-6">
					<div className="hidden lg:grid place-content-center animate-fade-in-top basis-10 grow">
						<Image
							className="image w20r"
							src="/assets/img/data_extraction-rafiki.svg"
							width={741}
							height={608}
							alt="feature1 img"
						/>
					</div>
					<div className="basis-4 grow flex flex-col items-stretch justify-evenly">
						<div>
							<h4 className="text-xl font-medium">
								Helpful <span className="text-warning">Utility</span> Commands
							</h4>
							<p className="mt-3">
								A lot of the commands in DisCog are utility commands. DisCog has
								commands to create announcements, polls, and much more!
								Utilizing the functionality of message embeds, DisCog can create
								beautiful announcements and polls that are easy to read and
								understand, simplifying the tasks of server moderators.
							</p>
						</div>
						<div>
							<h4 className="text-xl font-medium">
								Per-Server{' '}
								<span className="text-[cornflowerblue]">Audit Logging</span>
							</h4>
							<p className="mt-3">
								Discord by default stores audit log entries for 45 days. Server
								admins cannot see further into the past. This feature allows
								server admins to store all their moderation logs without any
								time limit. DisCog will log events in a channel of the
								admins&apos; choice (configurable via the{' '}
								<Code>/conf auditlog</Code> subcommand).
							</p>
						</div>
					</div>
				</div>
				<br />
			</section>

			<section id="stats" className="mt-6">
				<div className="flex flex-col items-center">
					<div className="flex flex-col items-stretch w-fit">
						<h1 className="text-2xl text-center font-semibold">Stats</h1>
						<div className="bg-blurple h-1" />
					</div>
				</div>

				<Counter />
			</section>

			<section id="status" className="mt-6">
				<div className="text-center">
					<Button
						href="/status"
						target="_blank"
						color="secondary"
						className="my-4 text-white text-xl font-medium"
						as="a"
						size="lg"
					>
						Status Page
					</Button>
				</div>
			</section>
			<ScrollTarget name="invite" />

			<section
				className="mt-6 px-12 py-24 flex flex-col items-stretch bg-[#464d53]"
				id="invite"
			>
				<div className="grow flex flex-row items-stretch gap-8">
					<div className="flex flex-col justify-center gap-8 basis-4 grow">
						<p className="text-3xl text-white font-bold">
							Ready to try <span className="blurple">DisCog</span>?
						</p>
						<p className="text-white text-lg">
							Get in contact with the developers and get DisCog in your server
							today!{' '}
							<span className="text-sm text-neutral-300">
								(Don&apos;t worry, we don&apos;t bite ...unless you diss us.)
							</span>{' '}
							We&apos;re always looking for new servers to have our bot in.
						</p>
						<div className="flex flex-row justify-center">
							<Button
								href="/invite"
								as="a"
								color="secondary"
								className="text-white text-xl"
								size="lg"
							>
								<strong>Get Started</strong>
							</Button>
						</div>
					</div>
					<div className="place-content-center hidden md:grid basis-4 grow">
						<Image
							alt="rocket launch"
							src="/assets/img/relaunch_day.svg"
							width={754 / 2}
							height={750 / 2}
							priority={true}
							className="animate-pulse"
						/>
					</div>
				</div>
			</section>
			<Footer storysetAttribution={true} />
		</>
	);
}
