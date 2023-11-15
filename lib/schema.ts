import { z } from 'zod';

export const messageSchema = z
	.string()
	.min(1, { message: `Cannot leave this field empty!` });

export const ContactFormSchema = z.object({
	name: z.string().min(1, { message: 'Name is required.' }),
	email: z
		.string()
		.min(1, { message: 'Email is required.' })
		.email('Invalid email.'),
	message: z
		.string()
		.min(6, { message: 'Message must be at least 6 characters.' }),
});
