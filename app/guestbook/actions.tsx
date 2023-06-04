'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { IoLogOutOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { SiGithub } from 'react-icons/si';

export function SignIn() {
	return (
		<button
			className="my-2 px-3 py-2 bg-[#242526] flex items-center space-x-3 rounded-md shadow-md font-semibold tracking-wider text-sm"
			onClick={() => signIn('github')}
		>
			<span>Connect with </span>
			<IconContext.Provider value={{ size: '1.5em' }}>
				<SiGithub />
			</IconContext.Provider>
		</button>
	);
}

export function SignOut() {
	return (
		<button
			className="my-2 px-3 py-2 bg-[#242526] flex items-center space-x-2 rounded-md shadow-md font-semibold tracking-wider text-sm"
			onClick={() => signOut()}
		>
			<span>Logout</span>
			<IconContext.Provider value={{ size: '1.5em' }}>
				<IoLogOutOutline />
			</IconContext.Provider>
		</button>
	);
}
