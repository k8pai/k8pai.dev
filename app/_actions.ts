'use server';

import { checkPossibleLinks, cleanText } from 'lib/helper';
import prisma from 'lib/prisma';
import { userType } from 'lib/prisma/guestbook';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { revalidatePath } from 'next/cache';

export const guestbookInsert = async (data: any) => {
	const { message } = Object.fromEntries(data);
	const session = await getServerSession(authOptions);

	// if (!session || !session.user) {
	// 	throw new Error('Not Authorized');
	// }
	const email = session?.user?.email as string;
	const name = session?.user?.name as string;
	// try {
	if (message === '') throw new Error('Message is Empty.');
	let user: userType = {
		links: checkPossibleLinks(message),
		body: cleanText(message),
		created_by: name,
		email: email,
		updated_at: new Date(),
	};
	await prisma.guestbook.create({ data: user });
	// if (error) throw new Error('Error Occured');
	revalidatePath('/guestbook');
};
