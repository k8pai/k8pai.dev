'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';

export function SignIn() {
	return (
		<button className="" onClick={() => signIn('github')}>
			signIn
		</button>
	);
}

export function SignOut() {
	return (
		<button
			className="mx-3 px-3 py-2 bg-[#242526] rounded-md shadow-md font-semibold tracking-wider text-sm"
			onClick={() => signOut()}
		>
			signOut
		</button>
	);
}
