import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

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
					{selected === 'home' ? (
						<Link href="/#" className="navbar-item is-tab is-active">
							Home
						</Link>
					) : (
						<Link href="/#" className="navbar-item is-tab">
							Home
						</Link>
					)}

					{selected === 'invite' ? (
						<Link href="/invite/#" className="navbar-item is-tab is-active">
							Invite
						</Link>
					) : (
						<Link href="/invite/#" className="navbar-item is-tab">
							Invite
						</Link>
					)}

					{selected === 'dev' ? (
						<Link href="/dev/#" className="navbar-item is-tab is-active">
							About the Dev
						</Link>
					) : (
						<Link href="/dev/#" className="navbar-item is-tab">
							About the Dev
						</Link>
					)}
				</div>

				<div className="navbar-end">
					<Link
						href="/invite/support-server"
						className="navbar-item is-tab"
						target="_blank"
					>
						<FontAwesomeIcon icon={faDiscord} size="xl" />
					</Link>

					<Link
						href="https://github.com/akpi816218/discog"
						className="navbar-item is-tab"
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} size="xl" />
					</Link>
				</div>
			</div>
		</nav>
	);
}
