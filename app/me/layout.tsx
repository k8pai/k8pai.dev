'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Sudarsan k pai',
		template: '%s | Lee Robinson',
	},
	description: 'Developer, writer, and creator.',
	openGraph: {
		title: 'Lee Robinson',
		description: 'Developer, writer, and creator.',
		url: 'https://leerob.io',
		siteName: 'Lee Robinson',
		images: [
			{
				url: 'https://leerob.io/og.jpg',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Lee Robinson',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	verification: {
		google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
		yandex: '14d2e73487fa6c71',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selected, setSelected] = useState<String>('about');

	const options = {
		about: { name: 'about' },
		resume: { name: 'resume' },
	};

	useEffect(() => {
		Object.entries(options).map(([el, { name }]) => {
			console.log(el, name);
		});
	}, []);
	return (
		<div>
			<div className="flex space-x-3 border border-slate-400 p-2 rounded-lg">
				{Object.entries(options).map(([el, { name }], elXid) => {
					return (
						<button
							key={elXid}
							className={`relative py-2 shadow-md rounded-md ${
								name === selected ? 'selected' : ''
							}`}
							onClick={() => setSelected(name)}
						>
							<span className={`relative px-3 py-2 `}>
								{name}
								{name === selected ? (
									<motion.div
										className="absolute inset-0 bg-[#4338CA] rounded-md z-[-1]"
										layoutId="underline"
									/>
								) : null}
							</span>
						</button>
					);
				})}
			</div>
			{children}
		</div>
	);
}
