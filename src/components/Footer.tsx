import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer({
	storysetAttribution = false
}: {
	storysetAttribution?: boolean;
}) {
	return (
		<footer className="bg-base p-16 text-white text-center">
			<div className="mb-2 flex flex-row gap-4 justify-center">
				<Link
					href="/invite/support-server/"
					target="_blank"
					className="motion-safe:hover:animate-shake-horizontal"
				>
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faDiscord} size="xl" />
				</Link>
				<Link
					href="https://github.com/akpi816218/discog"
					target="_blank"
					className="motion-safe:hover:animate-shake-horizontal"
				>
					{/* @ts-expect-error */}
					<FontAwesomeIcon icon={faGithub} size="xl" />
				</Link>
			</div>

			<p className="leading-loose">
				<span className="font-bold">DisCog</span>
				<br />
				&copy; <span id="cp-year">2023-Present</span> Copyright{' '}
				<Link href="https://akpi.is-a.dev">Akhil Pillai</Link>. All Rights
				Reserved.
			</p>
			{storysetAttribution && (
				<p className="mt-4">
					Certain illustrations by{' '}
					<Link href="https://storyset.com">Storyset</Link>.
				</p>
			)}
		</footer>
	);
}
