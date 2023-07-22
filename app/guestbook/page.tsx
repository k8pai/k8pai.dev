import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Form from './Form';
import { SignIn } from './actions';
import { getServerSession } from 'next-auth';
import { getComments } from '../../lib/prisma/guestbook';
import { getInteractions } from '../../lib/prisma/support';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getDomainName } from 'lib/helper';
import { CiLink } from 'react-icons/ci';

export const metadata: Metadata = {
	title: 'Guestbook',
	description:
		'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
};

export default async function page() {
	let comments, session, interactions;
	try {
		const [sessionResponse] = await Promise.allSettled([
			getServerSession(authOptions),
		]);
		if (sessionResponse.status === 'fulfilled') {
			session = sessionResponse.value;
		}
		const { data, error: err } = await getComments();
		if (err) throw new Error('Error occured');
		comments = data;
		const { data: obj, error: err1 } = await getInteractions();
		if (err1) throw new Error('Error Occured ');
		interactions = obj;
	} catch (error) {
		console.error('Error: ', error);
	}

	return (
		<div className="mx-3 my-2">
			<h1 className="text-3xl font-bold mb-3 capitalize text-slate-200">
				Guestbook
			</h1>
			<h5 className="text-base font-semibold text-slate-200">
				Inspired from one of the best out there.{' '}
				<Link
					href={'https://leerob.io'}
					className="transition-all text-blue-400 hover:text-blue-500"
				>
					Lee Robinson
				</Link>
			</h5>
			<h5 className="text-base font-semibold mb-3 text-slate-200">
				Leave me a message or showcase your own projects, i&apos;ll be
				pleased to have different minds come along.
			</h5>
			{session?.user ? <Form user={session?.user} /> : <SignIn />}

			<div className="mt-5">
				{comments?.map(({ created_by, body, links, updated_at }) => (
					<div className="group mx-1 my-2 md:max-w-lg w-full">
						<div className="font-semibold py-1 text-neutral-500">
							{created_by}
						</div>
						<div className="text-sm mb-2 font-semibold text-neutral-300 ">
							{body}
						</div>
						{links.length ? (
							<div className="flex items-center space-x-2 flex-wrap">
								{links?.map((el: string, ind: number) => {
									return (
										<Link
											target="_blank"
											key={ind}
											href={el}
											className="text-xs w-fit flex items-center space-x-2 px-2 py-1 font-mono bg-[#242526] rounded-md text-neutral-300 hover:text-neutral-400 transition-all duration-200"
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
