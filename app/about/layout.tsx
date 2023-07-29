import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import profilePhoto from '../../public/developer.png';
import { IconType } from 'react-icons';
import { SiDiscord, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';
import Link from 'next/link';
import type { Metadata } from 'next';

interface socialLinksType {
	color: string;
	Component: IconType;
	href: string;
}

export const metadata: Metadata = {
	metadataBase: new URL('https://k8pai-dev.vercel.io'),
	title: 'About',
	description: 'Student | Web developer',
	openGraph: {
		title: 'About k8pai',
		description: 'Student | Developer | Cloud Enthusiast',
		url: 'https://k8pai-dev.vercel.io/about',
		siteName: 'Sudarsan k pai',
		locale: 'en-US',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
						<div className="flex">
							<span className="text-lg">
								Student | Web Developer
							</span>
						</div>
						<div className="flex items-center space-x-1 text-zinc-600 dark:text-slate-400">
							<MdLocationPin />
							<span className="text-lg">Banglore, India</span>
						</div>
					</div>
					<div className="flex mt-3 items-center space-x-3">
						{socialLinks.map((el, elXid) => {
							const { color, Component, href } = el;
							return (
								<Link
									target="_blank"
									key={elXid}
									href={href}
									className="p-2 transition-all duration-200 bg-neutral-200 dark:bg-neutral-800 hover:scale-110 hover:shadow-md rounded-md"
								>
									<Component color={color} size={'1.5em'} />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}
