import { Metadata } from 'next';
import React from 'react';
import Socials from '../components/Socials';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Link from 'next/link';
import { IconContext } from 'react-icons/lib';
import { MdArrowOutward } from 'react-icons/md';
import { allSolutions } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Sudarsan K Pai | aka k8pai',
	description: 'Student | Web developer',
};

export default async function page() {
	let session, posts;
	try {
		const [sessionResponse] = await Promise.allSettled([
			getServerSession(authOptions),
		]);
		if (sessionResponse.status === 'fulfilled') {
			session = sessionResponse.value;
		}
		posts = allSolutions
			.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
			.slice(0, 3);
	} catch (error) {
		console.error('Error: ', error);
	}

	return (
		<section>
			<div className="flex-auto max-w-3xl">
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
					impactful web experiences.
				</p>

				<div>
					<p className="tracking-wider leading-loose mt-2">
						Some of my latest posts...
					</p>
					{posts &&
						posts.map(({ url, title, date }, idx) => (
							<Link key={idx} href={`/solutions/${url}`}>
								<div className="my-3 p-3 bg-[#FFFAF0] dark:bg-neutral-900 rounded-md transition-all shadow hover:shadow-md">
									<h2 className="text-lg">
										<span className="transition-all duration-200 font-semibold ">
											{title}
										</span>
									</h2>
									<time
										dateTime={date}
										className="mb-2 block text-xs font-semibold text-gray-600"
									>
										{format(parseISO(date), 'LLLL d, yyyy')}
									</time>
								</div>
							</Link>
						))}

					<p className="tracking-wider leading-loose mt-2">
						Visit{' '}
						<Link
							href={'/solutions'}
							className="transition-all duration-200 text-blue-800 hover:text-blue-700/90 dark:text-sky-400 hover:dark:text-sky-400/70 tracking-wider p-1 font-semibold"
						>
							/solutions
						</Link>{' '}
						for the list of blog posts.
					</p>
				</div>
				{/* <div className="connection section. mt-6">
					<p className="tracking-wider leading-loose mt-2">
						Star this repo or give me a fork. Credits goes to{' '}
						<Link href={'https://leerob.io'}>lee Robinson</Link> for
						this modern portfolio design.
					</p>
				</div> */}
			</div>

			{/* <Socials /> */}
		</section>
	);
}
