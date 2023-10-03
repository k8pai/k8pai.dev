import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { allNotes } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Sudarsan K Pai',
	description: 'Student | Web developer',
};

export default async function page() {
	let posts;
	try {
		posts = allNotes
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
					As a dedicated full-stack web developer with a strong
					commitment to community engagement, I thrive on
					collaborating with others and delivering innovative
					solutions that make a positive difference.
				</p>
				<p className="tracking-wider leading-loose mt-4">
					My ultimate goal is to become a well-rounded and skilled
					full-stack web developer capable of delivering cutting-edge
					solutions that positively impact the digital world.
				</p>

				<div className="my-5">
					<p className="tracking-wider leading-loose mt-2">
						Uncovering powerful tools, libraries, and frameworks
						that redefine what's possible! 🚀💡
					</p>
					<div className="mt-1">
						<Link
							href={'https://discordjs.guide/#before-you-begin'}
							className="hash"
						>
							#discordjs
						</Link>
						<Link href={'https://threejs.org/'} className="hash">
							#threejs
						</Link>
						<Link
							href={'https://soliditylang.org/'}
							className="hash"
						>
							#solidity
						</Link>
						<Link href={'https://vuejs.org/'} className="hash">
							#vuejs
						</Link>
						{/* <Link href={''} className="hash">#devOps</Link> */}
					</div>
				</div>

				<div className="mt-12">
					<h1 className="tracking-wider leading-loose text-3xl font-bold">
						Recent Notes
					</h1>
					{posts &&
						posts.map(({ url, title, date, header }, idx) => (
							<div
								key={idx}
								className="my-5 rounded-md transition-all"
							>
								<Link href={`/notes/${url}`}>
									{header ? (
										<div className="flex items-center justify-between">
											<h2 className="transition-all duration-200 font-semibold text-lg">
												{header}
											</h2>
											<time
												dateTime={date}
												className="mb-2 block text-xs font-semibold text-gray-600"
											>
												{format(
													parseISO(date),
													'LLLL d, yyyy',
												)}
											</time>
										</div>
									) : null}
									<h2 className="text-base">
										<span className="transition-all duration-200 text-gray-400">
											{title}
										</span>
									</h2>
								</Link>
							</div>
						))}

					<div className="mt-7">
						<Link
							href={'/notes'}
							className="transition-all duration-200 underline underline-offset-4 hover:text-blue-700/90  hover:dark:text-sky-400/70 tracking-wider font-semibold"
						>
							More Notes
						</Link>
					</div>
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
