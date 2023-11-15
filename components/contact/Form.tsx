'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from 'components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from 'components/ui/form';
import { Input } from 'components/ui/input';
import { ContactFormSchema } from 'lib/schema';
import { Textarea } from 'components/ui/textarea';
import { Resend } from 'resend';
import { sendMail } from 'app/_actions';
import { toast } from 'sonner';

export type contactFormType = z.infer<typeof ContactFormSchema>;

export function SendMailForm() {
	const form = useForm<contactFormType>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		const result = await sendMail(values);
		if (result?.success) {
			console.log({ data: result.data });
			toast.success('Email sent!');
			form.reset();
			return;
		}

		// toast error
		console.log(result?.error);
		toast.error('Something went wrong!');
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="flex flex-col md:flex-row -mx-3 px-3">
					<div className="relative mr-0 mb-5 md:mb-0 md:mr-4 w-full">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="w-full flex-grow">
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											className="bg-muted"
											placeholder="Name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="relative ml-0 mb-5 md:mb-0 md:ml-4 w-full">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Mail</FormLabel>
									<FormControl>
										<Input
											className=" bg-muted"
											placeholder="Email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									className="bg-muted"
									placeholder="Leave me a message..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
