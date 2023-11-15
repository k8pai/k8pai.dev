'use server';

import { checkPossibleLinks, cleanText } from 'lib/helper';
import { createComments, userType } from 'lib/prisma/guestbook';
import { revalidatePath } from 'next/cache';
import { ContactFormSchema, messageSchema } from 'lib/schema';
import { ZodError } from 'zod';
import { DefaultSession } from 'next-auth';
import { Resend } from 'resend';
import { contactFormType } from 'components/contact/Form';
import ContactEmailTemplate from 'emails/contact-email-template';

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

const resend = new Resend(process.env.RESEND_KEY);

export const sendMail = async (data: contactFormType) => {
	const result = ContactFormSchema.safeParse(data);

	if (result.success) {
		const { name, email, message } = result.data;
		try {
			const data = await resend.emails.send({
				from: 'Portfolio <onboarding@resend.dev>',
				to: ['thek8pai@gmail.com'],
				subject: 'Contact form submission',
				text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
				react: ContactEmailTemplate({ name, email, message }),
				tags: [
					{
						name: 'category',
						value: 'Portfolio',
					},
				],
			});
			return { success: true, data };
		} catch (error) {
			return { success: false, error };
		}
	}

	if (result.error) {
		return { success: false, error: result.error.format() };
	}
};
