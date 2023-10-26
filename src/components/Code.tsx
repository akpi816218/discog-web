import { ReactNode } from 'react';

export default function Code({
	children,
	className
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span className="py-[0.125em] px-2 rounded-lg font-mono bg-neutral-300">
			{children}
		</span>
	);
}
