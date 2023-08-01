'use client';

import Script from 'next/script';

export default function ScriptLoader() {
	return (
		<>
			<Script src="/assets/js/jquery-3.6.0.min.js" />
			<Script
				src="/assets/js/aos@2.3.1.min.js"
				strategy="afterInteractive"
				onReady={() => {
					try {
						// @ts-expect-error aos.js
						AOS.init({
							duration: 700,
							once: true
						});
						console.log('AOS initialized');
					} catch {}
				}}
			/>
			<Script src="/assets/js/script.js" />
		</>
	);
}
