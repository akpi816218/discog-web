'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, scrollSpy } from 'react-scroll';
import { useEffect } from 'react';

export default function ScrollDownChevron({
	className,
	target
}: {
	className?: string;
	target: string;
}) {
	useEffect(scrollSpy.update);

	return (
		<ScrollLink
			to={target}
			spy={true}
			smooth={true}
			duration={150}
			className={`block text-center vm2-parent hover:cursor-pointer ${className}`}
		>
			<div className="is-block vert-move2">
				<FontAwesomeIcon
					// @ts-expect-error
					icon={faChevronCircleDown}
					size="2xl"
					className="text-white"
				/>
			</div>
		</ScrollLink>
	);
}
