import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
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
			session = sessionResult;
		}
	} catch (error) {
		console.log('Error : ', error);
	}
	return <Container session={session} />;
}
