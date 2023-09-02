import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { allSolutions } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

export const metadata: Metadata = {
	title: 'Sudarsan K Pai',
	description: 'Student | Web developer',
};

export default async function page() {
	let session, posts;
	try {
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

				<div className=" mt-8">
					<p className="tracking-wider leading-loose mt-2">
						Checkout some of my latest Blog posts...
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
						Discover the abundance of solutions on my{' '}
						<Link
							href={'/solutions'}
							className="transition-all duration-200 text-blue-800 hover:text-blue-700/90 dark:text-sky-400 hover:dark:text-sky-400/70 tracking-wider p-1 font-semibold"
						>
							/solutions
						</Link>{' '}
						page!
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
