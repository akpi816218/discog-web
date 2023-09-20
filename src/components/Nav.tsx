import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/legacy/image";
import Link from 'next/link';

export default function Nav({
	selected
}: {
	selected: 'none' | 'home' | 'invite' | 'dev';
}) {
	return (
		<nav
			className="navbar is-fixed-top pl-2 pr-3"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand mt-2 mb-2">
				<Link className="navbar-item" href="/#">
					<Image src="/logo.png" alt="DisCog logo" width="28" height="28" />
					<strong className="ml-3">DisCog</strong>
				</Link>

				<Link
					href=""
					role="button"
					className="navbar-burger has-text-white"
					data-target="navMenu"
					aria-label="menu"
					aria-expanded="false"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</Link>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link
						href="/#"
						className={`navbar-item is-tab${
							selected === 'home' ? ' is-active' : ''
						}`}
						prefetch={true}
					>
						Home
					</Link>

					<Link
						href="/invite/#"
						className={`navbar-item is-tab${
							selected === 'invite' ? ' is-active' : ''
						}`}
						prefetch={true}
					>
						Invite
					</Link>

					<Link
						href="/dev/#"
						className={`navbar-item is-tab${
							selected === 'dev' ? ' is-active' : ''
						}`}
						prefetch={true}
					>
						About the Dev
					</Link>
				</div>

				<div className="navbar-end">
					<Link
						href="/invite/support-server"
						className="navbar-item is-tab"
						target="_blank"
						prefetch={true}
					>
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</Link>

					<Link
						href="https://github.com/akpi816218/discog"
						className="navbar-item is-tab"
						target="_blank"
						prefetch={true}
					>
						<FontAwesomeIcon icon={faGithub} size="xl" />
					</Link>
				</div>
			</div>
		</nav>
	);
}
