import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { SignIn, SignOut } from './actions';
import Form from '../../components/Form';
import { getComments } from '../../lib/prisma/guestbook';
import Comments from '../../components/Comments';

export default async function page() {
	let comments;
	let session;
	try {
		const [sessionResponse] = await Promise.allSettled([
			getServerSession(authOptions),
		]);
		if (sessionResponse.status === 'fulfilled') {
			session = sessionResponse.value;
			console.log(session);
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
			{comments?.map((el) => (
				<Comments key={el.id} comment={el} />
			))}
		</div>
	);
}
