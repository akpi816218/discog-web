import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import ScrollDownChevron from '@/components/ScrollDownChevron';
import CommandsList from '@/components/CommandsList';
import { Link, Spacer } from '@nextui-org/react';
import ScrollTarget from '@/components/ScrollTarget';

export const metadata: Metadata = {
	title: 'Commands Reference'
};

export default function AboutTheDevPage() {
	return (
		<>
			<Nav />

			<section className="grow bg-base min-h-[80vh] px-12 py-24 lg:px-32 flex flex-col items-stretch justify-center gap-16 lg:gap-32">
				<Spacer y={4} />
				<div className="flex flex-row items-stretch gap-16 lg:gap-32">
					<div className="grow-[6] shrink-0 flex flex-col justify-center animate-fade-in-top">
						<h1 className="text-3xl text-white font-bold text-right">
							Commands Documentation
						</h1>
					</div>
					<div className="grow-[3] grid place-content-center">
						<p className="text-2xl text-white">
							A quick reference for all of DisCog&apos;s commands.
						</p>
					</div>
				</div>
				<ScrollDownChevron target="cmnds" />
			</section>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#23272a"
					fillOpacity="1"
					d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
				></path>
			</svg>

			<ScrollTarget name="cmnds" />
			<section className="mt-6 m-4" id="commandslist">
				<CommandsList />
			</section>
			<Footer />
		</>
	);
}
