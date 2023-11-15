'use client';

import Link from 'next/link';
import React from 'react';
import { SiDiscord, SiGmail, SiWhatsapp } from 'react-icons/si';
import z from 'zod';
import { ContactFormSchema } from 'lib/schema';
import { SendMailForm } from './Form';

export type contactFormType = z.infer<typeof ContactFormSchema>;

export default function Contact() {
	return (
		<div className="aboutme mt-10">
			<div className="w-full max-w-2xl">
				<h1 className="text-3xl font-bold mb-3 capitalize">
					Connect with me
				</h1>
				<p className="text-sm tracking-wide font-semibold mb-6 text-neutral-800 dark:text-slate-400">
					If you want to know more about me or my work, or if you
					would just like to say hello, send me a message. I&apos;d
					love to hear from you.
				</p>
				<SendMailForm />
				<h1 className="text-sm text-center font-bold mb-3 capitalize">
					OR
				</h1>
				<p className="text-sm tracking-wide font-semibold mb-6 text-neutral-800 dark:text-slate-400">
					Reach out to some of my most active platforms.
				</p>
				<div className="flex flex-wrap items-center">
					<Link
						href={'mailto:thek8pai@gmail.com'}
						className="text-sm flex items-center mr-3 my-2 space-x-3 tracking-wide  bg-slate-200 dark:bg-[#181818] font-semibold py-2 px-3 rounded-md"
					>
						<SiGmail size={'1.5em'} color={'#EA4335'} />
						<span>thek8pai@gmail.com</span>
					</Link>
					<Link
						href={'https://wa.me/+917994648190'}
						className="text-sm flex items-center mr-3 my-2 space-x-3 tracking-wide  bg-slate-200 dark:bg-[#181818] font-semibold py-2 px-3 rounded-md"
					>
						<SiWhatsapp size={'1.5em'} color={'#25D366'} />
						<span>k8pai</span>
					</Link>

					<Link
						href={'https://discord.com/users/898949804024012850'}
						className="text-sm flex items-center mr-3 my-2 space-x-3 tracking-wide  bg-slate-200 dark:bg-[#181818] font-semibold py-2 px-3 rounded-md"
					>
						<SiDiscord size={'1.5em'} color={'#5865F2'} />
						<span>_k8pai</span>
					</Link>
				</div>
			</div>

			{/* <SendMailForm /> */}
		</div>
	);
}
