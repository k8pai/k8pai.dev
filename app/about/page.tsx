import React from 'react';
import { Metadata } from 'next';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import Container from './container';

export const metadata: Metadata = {
	title: 'About',
	description: 'Student | Web developer',
};

export default async function page() {
	let session;
	try {
		const sessionResult = await getServerSession(authOptions);
		if (!sessionResult || !sessionResult.user) {
			console.log('user is not registered');
		} else {
			console.log('user is registered as ', sessionResult.user);
			session = sessionResult;
		}
	} catch (error) {
		console.log('Error : ', error);
	}
	return (
		<div>
			<Container session={session} />
		</div>
	);
}
