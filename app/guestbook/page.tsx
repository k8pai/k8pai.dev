import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Form from './Form';
import { SignIn } from './actions';
import { getServerSession } from 'next-auth';
import { getComments } from '../../lib/prisma/guestbook';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getDomainName } from 'lib/helper';
import { CiLink } from 'react-icons/ci';

export const metadata: Metadata = {
	metadataBase: new URL('https://k8pai-dev.vercel.io'),
	title: 'Guestbook | k8pai',
	description:
		'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
	openGraph: {
		title: 'Guestbook',
		description:
			'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
		url: 'https://k8pai-dev.vercel.io/guestbook',
		siteName: 'Sudarsan k pai',
		locale: 'en-US',
		type: 'website',
	},
	twitter: {
		title: 'Sudarsan K Pai',
		card: 'summary_large_image',
	},
};

export default async function page() {
	let session = await getServerSession(authOptions);

	const { data, error: err } = await getComments();
	if (err) throw new Error('Error occured');
	return (
		<div className="mx-3 my-2">
			<h1 className="text-3xl font-bold mb-3 capitalize text-zinc-900 dark:text-slate-200">
				Guestbook
			</h1>
			<h5 className="text-base font-semibold">
				Inspired from one of the best out there.{' '}
				<Link
					href={'https://leerob.io'}
					className="transition-all text-blue-400 hover:text-blue-500"
				>
					Lee Robinson
				</Link>
			</h5>
			<h5 className="text-base font-semibold mb-3">
				Leave me a message or showcase your own projects, i&apos;ll be
				pleased to have different minds come along.
			</h5>
			{session?.user ? <Form user={session?.user} /> : <SignIn />}

			<div className="mt-5">
				{data?.map(({ created_by, body, links, updated_at }, idx) => (
					<div
						key={idx}
						className="group mx-1 my-2 md:max-w-lg w-full"
					>
						<div className="font-semibold py-1 text-neutral-900 dark:text-neutral-400">
							{created_by}
						</div>
						<div className="text-sm mb-2 font-semibold ">
							{body}
						</div>
						{links.length ? (
							<div className="flex items-center flex-wrap">
								{links?.map((el: string, ind: number) => {
									return (
										<Link
											target="_blank"
											key={ind}
											href={el}
											className="text-xs w-fit m-1 flex items-center space-x-2 px-2 py-1 font-mono bg-slate-200 text-neutral-800 dark:bg-[#242526] rounded-md dark:text-neutral-300 hover:dark:text-neutral-400 transition-all duration-200"
										>
											<span>{getDomainName(el)}</span>
											<CiLink />
										</Link>
									);
								})}
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}
