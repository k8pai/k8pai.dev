'use client';

import Link from 'next/link';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Sidenav() {
	const pathname = usePathname();
	const links = {
		'/': {
			name: 'Home',
		},
		'/me': {
			name: 'Me',
		},
		'/solutions': {
			name: 'Solutions',
		},
		// '/resume': {
		// 	name: 'Cristiano ronaldo is the best',
		// },
	};

	return (
		<aside className="md:w-fit md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
			<div className="lg:sticky lg:top-20">
				<LayoutGroup>
					<nav
						className="w-full flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
						id="nav"
					>
						<div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
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
