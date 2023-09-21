'use client';

import { useEffect } from 'react';

function ScriptLoader() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/assets/js/dist-bundle.min.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return null;
}

export default ScriptLoader;
