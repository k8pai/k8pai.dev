import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { SignIn } from './actions';
import Form from '../../components/Form';
import { getComments } from '../../lib/prisma/guestbook';
import Comments from '../../components/Comments';
import UserSupport from '../../components/UserSupport';

export default async function page() {
	let comments, session;
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
	} catch (error) {
		console.error('Error: ', error);
	}

	return (
		<div className="mx-3 my-2">
			{session?.user ? (
				<div>
					<Form />
				</div>
			) : (
				<SignIn />
			)}

			<div className="p-1">
				<h1 className="font-semibold">
					leave me an appreciation, or a heart.
				</h1>
				<UserSupport email={session?.user?.email} />
			</div>
			{comments?.map((el) => (
				<Comments key={el.id} comment={el} />
			))}
		</div>
	);
}
