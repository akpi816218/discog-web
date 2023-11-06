'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * @link https://github.com/Lane-G-Smith/AI-Personalities-React-App/blob/c73608b8615c9b6d3e361a44b97ebb74436c9f75/frontend/src/components/DarkBtn.tsx
 */
export default function DarkBtn() {
	const [darkTheme, setTheme] = useState(true);

	useEffect(() => {
		// Will always run on page load
		// Get themes from LocalStorage and system preferences
		const userTheme =
				/**
					typeof window !== 'undefined' ?
				*/ localStorage.getItem('theme') /**
					: false
				*/,
			systemTheme = /**
					typeof window !== 'undefined'
						?
				*/ window.matchMedia('(prefers-color-scheme: dark)').matches;
		// : false;

		setTheme(userTheme === null ? systemTheme : userTheme === 'dark');

		// Will run on page load if LocalStorage is empty, aka if user has not visited the site before or cleared their cache
		// Set theme to system theme if LocalStorage is empty, and populate LocalStorage with system theme
		if (userTheme === null) {
			// if (typeof window !== 'undefined')
			localStorage.setItem('theme', systemTheme ? 'dark' : 'light');
			setTheme(systemTheme);
		}

		// Will run on page load every time, aka also on every theme change
		// Now that we know which theme to use, use it
		// if (typeof window !== 'undefined')
		darkTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}, [darkTheme]);

	return (
		<Link
			href=""
			className="navbar-item is-tab !text-yellow-400"
			aria-label="Dark mode toggle"
			onClick={e => {
				toggleTheme(darkTheme, setTheme);
				e.preventDefault();
			}}
		>
			<FontAwesomeIcon icon={darkTheme ? faMoon : faSun} />
		</Link>
	);
}

function toggleTheme(
	isDark: boolean,
	setDarkMode: Dispatch<SetStateAction<boolean>>
) {
	isDark = !isDark;
	localStorage.setItem('theme', isDark ? 'dark' : 'light');
	setDarkMode(isDark);
}
