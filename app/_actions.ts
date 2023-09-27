'use server';

import { checkPossibleLinks, cleanText } from 'lib/helper';
import { createComments, userType } from 'lib/prisma/guestbook';
import { revalidatePath } from 'next/cache';
import { messageSchema } from 'lib/schema';
import { ZodError } from 'zod';
import { DefaultSession, DefaultUser } from 'next-auth';

export const guestbookInsert = async (
	data: Iterable<readonly [PropertyKey, any]>,
	user: DefaultSession['user'],
) => {
	const { message } = Object.fromEntries(data);

	const { error: zodError } = messageSchema.safeParse(message) as {
		error: ZodError;
	};
	if (zodError) {
		return { error: zodError.format() };
	}

	let person: userType = {
		links: checkPossibleLinks(message),
		body: cleanText(message),
		created_by: user?.name as string,
		email: user?.email as string,
		updated_at: new Date(),
	};
	const { data: result, error } = await createComments(person);
	if (error) {
		throw new Error('Something went wrong. try again.');
	}

	revalidatePath('/guestbook');
};
