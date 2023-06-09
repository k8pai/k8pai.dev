import { Metadata } from 'next';
import React from 'react';
import Sidenav from '../components/Sidenav';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'k8pai',
		template: '%s | k8pai',
	},
	description: 'Student | Web Developer | Cloud Enthusiast',
	openGraph: {
		title: 'k8pai',
		description: 'Student | Web Developer | Cloud Enthusiast',
		url: 'https://k8pai.dev',
		siteName: 'k8pai',
		images: [],
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
		title: 'k8pai',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/logo.svg',
	},
	verification: {
		google: 'm5DNrwa3wn0qG80NDKoa2yMZqJeYHopoeci6t5u8unc',
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
