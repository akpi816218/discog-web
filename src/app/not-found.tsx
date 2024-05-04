// 'use client';

import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Link } from '@nextui-org/react';

export const metadata: Metadata = {
	title: '404 Not Found'
};

export default function Err404Page() {
	return (
		<>
			<main className="flex flex-col items-stretch justify-stretch min-h-screen">
				<Nav />
				<section className="grow bg-base px-12 py-24 lg:px-32 flex flex-col lg:flex-row items-stretch gap-16 lg:gap-32">
					<div className="grow-[6] shrink-0 flex flex-col justify-center animate-fade-in-top">
						<h1 className="text-3xl text-white font-bold text-right">
							<span className="font-mono">404</span>: Not Found
						</h1>
					</div>
					<div className="grow-[3] grid place-content-center">
						<div className="flex flex-col items-end">
							<h2 className="text-white">
								Hello, Gretel. Or are you Hansel? Looks like you&apos;re lost in
								the digital wilderness. Don&apos;t worry, we always keep some
								breadcrumbs to help{' '}
								<s>foolish meals of tender flesh like you</s>{' '}
								<em>I mean poor lost souls such as you</em> find your way back
								out. Not all witches are bad, you know.
								<br />
								&mdash;The (Not Bad?) Witch
							</h2>
							<Link isBlock color="warning" href="/" size="lg">
								Go back to the homepage
							</Link>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
