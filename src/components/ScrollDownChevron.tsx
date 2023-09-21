import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/fontawesome-free-solid';

export default function ScrollDownChevron({
	className,
	style
}: {
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<div
			className={`is-block has-text-centered vm2-parent hover-cursor-pointer${
				className ? ` ${className}` : ''
			}`}
			id="scroll-down-chevron"
			style={style}
		>
			<div className="is-block vert-move2">
				<FontAwesomeIcon
					// @ts-expect-error
					icon={faChevronCircleDown}
					size="2xl"
					className="has-text-white"
				/>
			</div>
		</div>
	);
}
