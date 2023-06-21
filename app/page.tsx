import { Metadata } from 'next';
import React from 'react';
import Socials from '../components/Socials';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Link from 'next/link';
import { IconContext } from 'react-icons/lib';
import { MdArrowOutward } from 'react-icons/md';

export const metadata: Metadata = {
	title: 'Sudarsan K Pai | aka k8pai',
	description: 'Student | Web developer',
};

export default async function page() {
	let session;
	try {
		const [sessionResponse] = await Promise.allSettled([
			getServerSession(authOptions),
		]);
		if (sessionResponse.status === 'fulfilled') {
			session = sessionResponse.value;
		}
	} catch (error) {
		console.error('Error: ', error);
	}

	return (
		<section>
			<div className="flex-auto max-w-xl">
				<h1 className="font-semibold text-3xl tracking-wider">
					Sudarsan K Pai
				</h1>
				<p className="tracking-wider leading-loose mt-4">
					Hey there, Myself Sudarsan K Pai, a dedicated full stack web
					developer with a strong commitment to community engagement.
					I thrive on collaborating with others and delivering
					innovative solutions that make a positive difference.
				</p>
				<p className="tracking-wider leading-loose mt-4">
					Over the past year, I have been relentlessly honing my
					skills in the MERN stack, driven by a passion for creating
					impactful web experiences. Discover a collection of quick
					solutions on JavaScript concepts and some simple projects
					that add value to the users in the{' '}
					<Link
						href={'/solutions'}
						className=" transition-all duration-200 text-cyan-200 hover:text-cyan-300"
					>
						solutions
					</Link>{' '}
					page.
				</p>
			</div>

			<Socials />
		</section>
	);
}
