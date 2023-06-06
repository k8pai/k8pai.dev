'use client';

import Link from 'next/link';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const icon = {
	hidden: {
		pathLength: 0,
		fill: 'transparent',
	},
	visible: {
		pathLength: 1,
		fill: '#ffffff',
	},
};

function Logo() {
	return (
		<Link aria-label="Sudarsan k pai" href="/" className="py-3">
			<motion.svg
				className="text-black dark:text-white h-[30px] md:h-[40px]"
				width="100"
				height="100"
				viewBox="12.6 -65.1 100.84 80.75"
				scale={1}
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					variants={icon}
					initial={{ ...icon.hidden, y: 200 }}
					animate={{ ...icon.visible, y: 0 }}
					transition={{
						duration: 0.5,
						type: 'spring',
						stiffness: 50,
					}}
					d="M 14.975 -26.005 L 15.02 -25.94 C 15.6 -34 16.12 -40.76 16.12 -42.45 C 16.12 -45.44 14.69 -48.1 9.36 -48.1 L 6.83 -48.1 C 6.24 -48.1 5.98 -48.1 5.79 -47.91 C 5.59 -47.71 5.53 -47.26 5.46 -46.22 C 3.31 -11.51 2.6 -9.55 2.6 -6.37 C 2.6 -2.21 3.83 0 9.23 0 L 11.57 0 C 12.68 0 12.94 -0.26 13 -1.3 C 13.33 -5.4 13.71 -9.95 14.04 -14.5Z"
				/>
				<motion.path
					variants={icon}
					initial={{ ...icon.hidden, y: 200 }}
					animate={{ ...icon.visible, y: 0 }}
					transition={{
						delay: 0.15,
						duration: 0.5,
						type: 'spring',
						stiffness: 50,
					}}
					d="M 33.54 -5.27 C 33.54 -6.31 27.23 -12.09 19.96 -20.15 C 28.02 -23.6 32.11 -26.32 32.11 -28.8 C 32.11 -30.81 29.12 -36.34 27.23 -36.34 C 26.91 -36.34 26.2 -36.14 25.41 -35.43 L 14.419 -25.611 C 14.381 -25.573 13.959 -14.481 13.959 -14.519 C 18.66 -5.92 23.21 0.65 27.82 0.65 C 31.79 0.65 33.54 -4.36 33.54 -5.27 Z M 71.44 -16.77 Z Z Z"
				/>

				<motion.path
					variants={icon}
					initial={{ ...icon.hidden, y: 200 }}
					animate={{ ...icon.visible, y: 0 }}
					transition={{
						delay: 0.25,
						duration: 0.5,
						type: 'spring',
						stiffness: 50,
					}}
					d="M 20.867 -10.489 Z M 71.44 -16.77 C 71.44 -20.87 69.68 -23.73 65.78 -25.68 C 69.81 -28.34 70.98 -31.66 70.98 -35.1 C 70.98 -41.08 67.47 -46.73 56.81 -46.73 C 44.33 -46.73 39.72 -38.94 39.72 -32.18 C 39.72 -27.76 41.67 -25.03 44.07 -23.98 C 39.39 -20.93 37.12 -16.84 37.12 -12.03 C 37.12 -4.68 42.58 0.65 52.46 0.65 C 66.17 0.65 71.44 -9.69 71.44 -16.77 Z M 55.25 -21.58 C 57.46 -21.58 59.02 -20.61 59.02 -17.23 C 59.02 -14.63 58.11 -9.49 53.56 -9.49 C 50.96 -9.49 49.53 -11.12 49.53 -14.43 C 49.53 -16.77 50.25 -21.58 55.25 -21.58 Z M 56.42 -37.63 C 58.89 -37.63 60 -36.08 60 -34 C 60 -31.59 59.09 -27.56 55.12 -27.56 C 52.98 -27.56 51.74 -28.67 51.74 -31.46 C 51.74 -33.54 52.59 -37.63 56.42 -37.63 Z"
				/>
			</motion.svg>
		</Link>
	);
}

export default function Sidenav() {
	const pathname = usePathname();
	const links = {
		'/': {
			name: 'Home',
		},
		'/about': {
			name: 'About',
		},
		'/solutions': {
			name: 'Solutions',
		},
		'/guestbook': {
			name: 'Guestbook',
		},
	};

	return (
		<aside className="md:w-fit md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
			<div className="lg:sticky lg:top-20">
				<LayoutGroup>
					<nav
						className="w-full flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
						id="nav"
					>
						<div className="flex flex-row md:flex-col space-x-0 md:pr-10 px-5 mb-2 mt-2 md:mt-0">
							<Logo />
							{Object.entries(links).map(([path, { name }]) => {
								const isActive = path === pathname;
								return (
									<Link
										key={path}
										href={path}
										className={`transition-all space-y-2 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ${
											!isActive
												? 'text-neutral-500'
												: 'scale-105 '
										}`}
									>
										<span className="relative py-3 px-2 md:py-2 md:my-1 md:px-5 w-fit">
											{name}
											{path === pathname ? (
												<motion.div
													className="absolute w-3/4 h-1 bottom-0 inset-x-0 mx-auto md:mx-0 md:left-1 md:inset-y-0 md:w-1 md:my-auto md:h-3/4 bg-[#4338CA] rounded-tr-lg rounded-br-lg z-[-1]"
													layoutId="sidebar"
													transition={{
														type: 'spring',
														stiffness: 350,
														damping: 30,
													}}
												/>
											) : null}
										</span>
									</Link>
								);
							})}
						</div>
					</nav>
				</LayoutGroup>
			</div>
		</aside>
	);
}
