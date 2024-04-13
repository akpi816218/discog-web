import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import ScrollDownChevron from '@/components/ScrollDownChevron';
import Image from 'next/image';
import ScrollTarget from '@/components/ScrollTarget';
import { Button } from '@nextui-org/react';

export const metadata: Metadata = {
	title: 'Invite'
};

export default function InvitePage() {
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
				<ScrollDownChevron target="1" />
			</section>
			<ScrollTarget name="1" />

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#23272a"
					fillOpacity="1"
					d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
				></path>
			</svg>

			<section className="mt-6 text-center p-12" id="invite">
				<h2 className="text-2xl font-bold">
					Are you convinced that <span className="blurple">DisCog</span> is the
					bot you&apos;re looking for?
				</h2>
				<br />
				<div className="flex flex-col items-center">
					<div className="flex flex-col items-stretch w-fit">
						<h1 className="text-center font-semibold text-neutral-400">
							{' '}
							You&apos;ve got two options to get set up:
						</h1>
						<div className="bg-dark-blurple h-1" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row gap-8 mt-4 text-xl">
					<p className="p-2 bg-neutral-200 rounded-2xl">
						Contact the developers directly through the support server. This is
						the simplest and fastest way to get set up for all! When you&apos;re
						ready, join the official bot support server and get in touch with
						one of the developers, who will guide you to add DisCog to your
						server.
					</p>
					<p className="p-2 bg-neutral-200 rounded-2xl">
						Alternatively, you can create a server request on GitHub. This is a
						bit more complicated, but it&apos;s a good option if you&apos;re a
						developer. When you&apos;re ready, create a new issue in the
						official GitHub repository and follow instructions to create a
						server request.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 mt-4 text-xl lg:justify-stretch">
					<div className="flex flex-row justify-center grow">
						<Button
							href="/invite/support-server"
							target="_blank"
							as="a"
							color="secondary"
							className="text-white"
						>
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faDiscord} className="mr-2" />
							<strong>Get Started With Discord</strong>
						</Button>
					</div>
					<div className="flex flex-row justify-center grow">
						<Button
							href="https://github.com/akpi816218/discog/discussions/new?category=server-requests"
							target="_blank"
							rel="noreferrer noopener"
							as="a"
							color="secondary"
							className="bg-dark-blurple text-white"
						>
							{/* @ts-expect-error */}
							<FontAwesomeIcon icon={faGithub} className="mr-2" />
							<strong>Get Started With GitHub</strong>
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
