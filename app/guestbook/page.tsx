import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Form from '../../components/Form';
import { SignIn, SignOut } from './actions';
import { getServerSession } from 'next-auth';
import Comments from '../../components/Comments';
import { getComments } from '../../lib/prisma/guestbook';
import { getInteractions } from '../../lib/prisma/support';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

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
			{session?.user ? (
				<div>
					{/* <div className="p-1">
						<h1 className="font-semibold">
							leave me an appreciation, or a heart.
						</h1>
						<UserSupport
							interactions={interactions}
							email={session?.user?.email}
						/>
					</div> */}
					<Form />
					<SignOut />
				</div>
			) : (
				<SignIn />
			)}

			{comments?.map((el) => (
				<Comments key={el.id} comment={el} />
			))}
		</div>
	);
}
