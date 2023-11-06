import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
	return (
		<div id="backtotop" data-tippy-content="Back to Top">
			<FontAwesomeIcon
				icon={faArrowUp}
				size="2xl"
				className="has-text-white mt-2"
			/>
		</div>
	);
}
