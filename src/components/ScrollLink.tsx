'use client';

import { useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';

export default function ScrollLink({
	to,
	duration,
	className,
	children
}: {
	to: string;
	duration: number;
	className?: string;
	children: React.ReactNode;
}) {
	useEffect(scrollSpy.update);

	return (
		<Link to={to} duration={duration} className={className}>
			{children}
		</Link>
	);
}
