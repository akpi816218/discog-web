import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/legacy/image';
import Link from 'next/link';

export default function Footer({
	storysetAttribution = false
}: {
	storysetAttribution?: boolean;
}) {
	return (
		<footer className="bg-base">
			<div className="content has-text-centered has-text-white">
				<div className="mb-2">
					<Link
						href="/invite/support-server/"
						className="has-text-white mr-2"
						target="_blank"
					>
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</Link>
					<Link
						href="https://github.com/akpi816218/discog"
						className="has-text-white ml-2"
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} size="xl" />
					</Link>
				</div>

				<p>
					<span className="has-text-weight-bold">DisCog</span>
					<br />
					&copy; <span id="cp-year">2023</span> Copyright{' '}
					<Link href="https://github.com/akpi816218">akpi816218</Link>. All
					Rights Reserved.
				</p>
				<Link
					href="https://bulma.io"
					className="has-text-centered has-image-centered"
				>
					<Image
						src="/assets/img/made-with-bulma--dark.png"
						alt="Made with Bulma"
						className="is-inline"
						width={256}
						height={48}
					/>
				</Link>
				{storysetAttribution && (
					<p className="mt-4">
						Certain illustrations by{' '}
						<Link href="https://storyset.com">Storyset</Link>.
					</p>
				)}
			</div>
		</footer>
	);
}
