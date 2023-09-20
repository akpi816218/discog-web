import Image from 'next/image';
import Link from 'next/link';
// import Script from 'next/script';

export default function LoadingScreen() {
	return (
		<div className="hero is-fullheight" id="loading">
			<div className="hero-body columns is-halfheight has-text-centered pt-0">
				<div className="column has-image-centered">
					<Image
						id="loading-screen-image"
						src="/logo.png"
						alt="DisCog Logo"
						width={512}
						height={512}
					/>
				</div>
				<div className="column title is-size-1 has-text-white">
					Hang in there for a sec. We&apos;re loading the page, just give us a
					minute.
				</div>
			</div>
			<div className="hero subtitle is-2 has-text-white has-text-centered pt-6 pb-12 block">
				We&apos;re doing our best to load the page as quick as possible, but
				there seems to be a hitch. Or is it a glitch? If this message remains
				too long, please contact me by{' '}
				<Link href="mailto:816218@seq.org">email</Link> or create an Issue on
				the{' '}
				<Link href="https://github.com/akpi816218/discog-web">
					GitHub repository
				</Link>
				.
			</div>
		</div>
	);
}
