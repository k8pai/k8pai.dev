import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Form from './Form';
import { SignIn } from './actions';
import { getServerSession } from 'next-auth';
import { getComments } from '../../lib/prisma/guestbook';
import { authOptions } from 'lib/auth';
import { getDomainName } from 'lib/helper';
import { CiLink } from 'react-icons/ci';
import GuestEntry from 'components/guestbook/GuestEntry';

const getGuestbook = async () => {
	const { data, error: err } = await getComments();

	return data;
};

export const metadata: Metadata = {
	metadataBase: new URL('https://k8pai.dev'),
	title: 'Guestbook | k8pai',
	description:
		'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
	openGraph: {
		title: 'Guestbook',
		description:
			'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
		url: 'https://k8pai.dev/guestbook',
		siteName: 'Sudarsan k pai',
		locale: 'en-US',
		type: 'website',
	},
	twitter: {
		title: 'Sudarsan K Pai',
		card: 'summary_large_image',
	},
};

export const dynamic = 'force-dynamic';

export default async function page() {
	let data;
	let session;

	try {
		const [guestbookRes, sessionRes] = await Promise.allSettled([
			getGuestbook(),
			getServerSession(authOptions),
		]);

		if (
			guestbookRes.status === 'fulfilled' &&
			guestbookRes.value &&
			guestbookRes.value[0]
		) {
			data = guestbookRes.value;
		} else {
			console.error(guestbookRes);
		}

		if (sessionRes.status === 'fulfilled') {
			session = sessionRes.value;
		} else {
			console.error(sessionRes);
		}
	} catch (error) {
		console.error(error);
	}
	return (
		<div className="mx-3 my-2">
			<h1 className="text-3xl font-bold mb-3 capitalize text-zinc-900 dark:text-slate-200">
				Guestbook
			</h1>
			<h5 className="text-base font-semibold">
				Inspired from one of the best out there.{' '}
				<Link
					href={'https://leerob.io'}
					className="transition-all text-blue-400 hover:text-blue-500"
				>
					Lee Robinson
				</Link>
			</h5>
			<h5 className="text-base font-semibold mb-3">
				Leave me a message or showcase your own projects, i&apos;ll be
				pleased to have different minds come along.
			</h5>
			{session?.user ? <Form user={session?.user} /> : <SignIn />}

			<div className="mt-5">
				{data?.map((value, idx) => (
					<GuestEntry key={idx} {...value} />
				))}
			</div>
		</div>
	);
}
