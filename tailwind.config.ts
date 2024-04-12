import { nextui } from '@nextui-org/react';
import { type Config } from 'tailwindcss';

export default {
	content: [
		'src/*.tsx',
		'src/**/*.tsx',
		'src/**/**/*.tsx',
		'src/**/**/**/*.tsx',
		'src/**/**/**/**/*.tsx',
		'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	plugins: [
		nextui({
			themes: {
				light: {
					extend: 'light',
					colors: {
						secondary: '#5865f2'
					}
				}
			}
		})
	],
	theme: {
		extend: {
			animation: {
				'bounce-fast': 'bounce 0.5s infinite',
				'flicker-in-1': 'flicker-in-1 1s linear both',
				'fade-in-top':
					'fade-in-top 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
				'shake-horizontal':
					'shake-horizontal .5s cubic-bezier(.455,.03,.515,.955) both'
			},
			colors: {
				base: '#23272a',
				blurple: '#5865f2',
				'dark-blurple': '#454fbf',
				teal: '#00d1b2'
			}
		}
	}
} satisfies Config;
