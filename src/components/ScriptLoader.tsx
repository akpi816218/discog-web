'use client';

import { useEffect } from 'react';

function ScriptLoader() {
	useEffect(() => {
		const script1 = document.createElement('script');
		script1.src = '/assets/js/aos@2.3.1.min.js';
		document.body.appendChild(script1);

		const script2 = document.createElement('script');
		script2.async = true;
		script2.src = '/assets/js/jquery-3.6.0.min.js';
		document.body.appendChild(script2);

		const script3 = document.createElement('script');
		script3.defer = true;
		script3.src = '/assets/js/main.js';
		document.body.appendChild(script3);

		return () => {
			document.body.removeChild(script1);
			document.body.removeChild(script2);
			document.body.removeChild(script3);
		};
	}, []);

	return null;
}

export default ScriptLoader;
