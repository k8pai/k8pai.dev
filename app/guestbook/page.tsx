import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { SignIn, SignOut } from './actions';
import Form from '../../components/Form';
import { getComments } from '../../lib/prisma/guestbook';
import Comments from '../../components/Comments';

export default async function page() {
	const { data, error: err } = await getComments();
	if (err) throw new Error('Error occured');
	let comments = data;
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
		<div>
			{session?.user ? (
				<div>
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
