'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';

export function SignIn() {
	console.log('signIn button up ');
	return (
		<button className="" onClick={() => signIn('github')}>
			signIn
		</button>
	);
}

export function SignOut() {
	console.log('signout button up ');
	return (
		<button className="" onClick={() => signOut()}>
			signOut
		</button>
	);
}
