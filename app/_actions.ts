'use server';

import { checkPossibleLinks, cleanText } from 'lib/helper';
import prisma from 'lib/prisma';
import { createComments, userType } from 'lib/prisma/guestbook';
import { revalidatePath } from 'next/cache';
import { messageSchema } from 'lib/schema';
import { ZodError } from 'zod';

export const guestbookInsert = async (data, user) => {
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
		created_by: user.name,
		email: user.email,
		updated_at: new Date(),
	};
	const { data: result, error } = await createComments(person);
	if (error) {
		throw new Error('Something went wrong. try again.');
	}

	revalidatePath('/guestbook');
};
