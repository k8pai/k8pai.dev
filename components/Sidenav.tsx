'use client';

import Link from 'next/link';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

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
		<section className="mt-8 font-serif flex flex-row">
			<LayoutGroup>
				<nav
					className="w-full flex flex-row  items-start relative px-4 pb-0 fade scroll-pr-6"
					id="nav"
				>
					<div className="flex flex-row space-x-0 px-0 my-4">
						{/* <Logo /> */}

						{Object.entries(links).map(([path, { name }]) => {
							const isActive = path === pathname;
							return (
								<Link
									key={path}
									href={path}
									className={`transition-all space-y-2 hover:text-neutral-400 dark:hover:text-neutral-200 flex align-middle ${
										!isActive
											? 'text-neutral-500'
											: 'scale-105'
									} ${path === '/' ? 'hidden' : null}`}
								>
									<span className="relative py-2 px-3 w-fit">
										{name}
										{path === pathname ? (
											<motion.div
												className="absolute w-3/4 h-px bottom-0 inset-x-0 mx-auto bg-[#4338CA] rounded-tr-lg rounded-br-lg z-[-1]"
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
		</section>
	);
}
