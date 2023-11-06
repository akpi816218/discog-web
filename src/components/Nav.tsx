'use client';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Nav({
	selected = 'none'
}: {
	selected?: 'none' | 'home' | 'invite' | 'dev' | 'commands';
}) {
	const { data: session } = useSession();

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

				<div
					role="button"
					className="navbar-burger has-text-white"
					data-target="navMenu"
					aria-label="menu"
					aria-expanded="false"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link
						href="/#"
						className={`navbar-item is-tab${
							selected === 'home' ? ' is-active' : ''
						}`}
					>
						Home
					</Link>

					<Link
						href="/invite/#"
						className={`navbar-item is-tab${
							selected === 'invite' ? ' is-active' : ''
						}`}
					>
						Invite
					</Link>

					<Link
						href="/dev/#"
						className={`navbar-item is-tab${
							selected === 'dev' ? ' is-active' : ''
						}`}
					>
						About the Dev
					</Link>

					<Link
						href="/commands/#"
						className={`navbar-item is-tab${
							selected === 'commands' ? ' is-active' : ''
						}`}
					>
						Commands
					</Link>
				</div>

				<div className="navbar-end">
					<Link
						href="/dashboard"
						className="navbar-item is-tab rounded-xl bg-blurple h-min w-min align-middle my-auto p-2"
					>
						Dashboard
					</Link>

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
