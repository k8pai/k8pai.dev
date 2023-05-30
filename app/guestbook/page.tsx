import React from 'react';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { SignIn, SignOut } from './actions';

// export const dynamic = 'force-dynamic';
export default async function page() {
	let session;
	try {
		console.log('before sessionResponse is declared.');
		const sessionResponse = await getServerSession(authOptions);
		console.log('after sessionResponse is declared.');
		console.log(sessionResponse);
		session = sessionResponse;

		// if (sessionResponse) {
		// 	console.log('sessionResponse is fulfilled.');
		// 	console.log(sessionResponse);
		// 	session = sessionResponse;
		// } else {
		// 	console.log('error occured');
		// }
	} catch (error) {
		console.error('Error: ', error);
	}

	return (
		<div>
			{session?.user ? (
				<div>
					<SignOut />
				</div>
			) : (
				<SignIn />
			)}
			<div>comments goes here</div>
		</div>
	);
}
