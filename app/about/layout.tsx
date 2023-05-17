'use client';

import React, { Component, createContext, useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd, MdLocationPin } from 'react-icons/md';
import TechSkills from '../../components/TechSkills';
import Image from 'next/image';
import profilePhoto from '../../public/developer.png';
import { IconContext, IconType } from 'react-icons';
import { ImDownload } from 'react-icons/im';
import {
	SiDiscord,
	SiGithub,
	SiGmail,
	SiInstagram,
	SiLinkedin,
} from 'react-icons/si';
import Link from 'next/link';

interface meContextType {
	selected: String;
}

interface socialLinksType {
	color: string;
	Component: IconType;
	href: string;
}

export const meContext = createContext<meContextType>({
	selected: '',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selected, setSelected] = useState<String>('portfolio');
	const [showSocials, setShowSocials] = useState<boolean>(false);

	const options = {
		portfolio: { name: 'portfolio' },
		resume: { name: 'resume' },
	};

	const socialLinks: socialLinksType[] = [
		{
			Component: SiInstagram,
			color: '#E4405F',
			href: 'https://instagram.com/_k8pai',
		},
		{
			Component: SiLinkedin,
			color: '#0A66C2',
			href: 'https://linkedin.com/in/k8pai',
		},
		{
			Component: SiGithub,
			color: '#fff',
			href: 'https://github.com/k8pai',
		},
		{
			Component: SiGmail,
			color: '#EA4335',
			href: 'mailto:thek8pai@gmail.com',
		},
		{
			Component: SiDiscord,
			color: '#5865F2',
			href: 'https://discord.com/users/898949804024012850',
		},
	];

	return (
		<div className="space-y-5">
			<div className="py-2 px-3 rounded-lg flex items-start">
				<div className="relative max-w-[150px] max-h-[150px] p-3 hidden sm:block">
					<Image
						src={profilePhoto}
						className="aspect-square rounded-full"
						alt="profile picture"
					/>
				</div>
				<div className="p-3">
					<div className="flex space-x-3 items-center">
						<h1 className="font-serif font-extrabold text-3xl capitalize ">
							Sudarsan k pai
						</h1>
					</div>
					<div className="status mt-2">
						<div className="flex text-slate-200">
							<span className="text-lg">
								Student | Web Developer
							</span>
						</div>
						<div className="flex items-center space-x-1 text-slate-400">
							<MdLocationPin />
							<span className="text-lg">Banglore, India</span>
						</div>
					</div>
					<div className="flex mt-3 items-center space-x-3">
						{socialLinks.map((el, elXid) => {
							const { color, Component, href } = el;
							return (
								<Link
									key={elXid}
									href={href}
									className="p-2 transition-all duration-200 bg-[#181818] hover:scale-110 hover:shadow-md rounded-md"
								>
									<IconContext.Provider
										value={{
											size: '1.5em',
											color: color,
										}}
									>
										<Component />
									</IconContext.Provider>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<meContext.Provider value={{ selected: selected }}>
				<div className="flex space-x-7 p-2 rounded-md">
					{Object.entries(options).map(([el, { name }], elXid) => {
						return (
							<button
								key={elXid}
								className={`relative py-2 shadow-md ${
									name === selected ? 'selected' : ''
								}`}
								onClick={() => setSelected(name)}
							>
								<span
									className={`relative px-3 py-2 tracking-wider capitalize font-semibold`}
								>
									<motion.div className="absolute inset-0 bg-[#181818] rounded-md z-[-5]" />
									{name === selected ? (
										<motion.div
											className="absolute inset-0 bg-[#4338CA] bg-opacity-50 rounded-md z-[-1]"
											layoutId="underline"
										/>
									) : null}
									{name}
								</span>
							</button>
						);
					})}
					<span className={'flex-grow'}></span>
					<button
						className={`group relative hover:shadow-md ${
							selected === 'resume' ? 'block' : 'hidden'
						}`}
					>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className:
									'relative tracking-wider capitalize bg-[#181818] rounded-md font-semibold m-2',
							}}
						>
							<ImDownload />
						</IconContext.Provider>
					</button>
				</div>
				{children}
			</meContext.Provider>
		</div>
	);
}
