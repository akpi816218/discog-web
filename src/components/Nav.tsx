'use client';

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Link,
	Navbar,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Invite', href: '/invite/' },
		{ name: 'About the Dev', href: '/dev/' },
		{ name: 'Commands', href: '/commands/' }
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className="sm:hidden"
			/>
			<NavbarBrand>
				<Link
					href="/"
					className="text-white font-black text-2xl flex flex-row items-center py-4"
				>
					<Image
						alt="DisCog logo"
						height={32}
						width={32}
						src="/logo.png"
						className="h-max aspect-square rounded-xl mr-4"
					/>
					DisCog
				</Link>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map(item => (
					<NavbarItem isActive={window.location.pathname === item.href}>
						<Link
							isBlock
							color={
								window.location.pathname === item.href ? 'success' : 'primary'
							}
							href={window.location.pathname === item.href ? '#' : item.href}
						>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Link
						isExternal
						isBlock
						color="warning"
						href="https://github.com/akpi816218/discog"
					>
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faGithub} size="lg" />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link isBlock color="warning" href="/invite/support-server">
						{/* @ts-expect-error */}
						<FontAwesomeIcon icon={faDiscord} size="lg" />
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="bg-gradient-to-b from-neutral-800 to-[#26262684] p-8">
				{menuItems.map(item => (
					<NavbarMenuItem isActive={window.location.href === item.href}>
						<Link
							color={
								window.location.pathname === item.href ? 'success' : 'secondary'
							}
							href={window.location.pathname === item.href ? '#' : item.href}
							className="w-full text-xl rounded-2xl active:bg-neutral-600 active:text-blue-400 p-2"
							size="lg"
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
