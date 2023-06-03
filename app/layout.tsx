import { Metadata } from 'next';
import React from 'react';
import Sidenav from '../components/Sidenav';
import './globals.css';

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
	return (
		<html
			lang="en"
			className={'text-black bg-white dark:text-white dark:bg-[#111010]'}
		>
			<body className="max-w-5xl flex flex-col md:flex-row mx-4 min-h-screen lg:mx-auto">
				<Sidenav />
				<main className="flex-auto min-w-0 my-6 md:my-20 flex flex-col px-2 lg:px-0">
					{children}
				</main>
			</body>
		</html>
	);
}
