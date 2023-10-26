import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/fontawesome-free-solid';

export default function BackToTop() {
	return (
		<div id="backtotop" data-tippy-content="Back to Top">
			<FontAwesomeIcon
				// @ts-expect-error
				icon={faArrowUp}
				size="2xl"
				className="has-text-white mt-2"
			/>
		</div>
	);
}
