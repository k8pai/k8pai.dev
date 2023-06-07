'use client';

import { Session } from 'next-auth';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineClear } from 'react-icons/md';
import { TbSend } from 'react-icons/tb';

export default function Contact({ session }: { session?: Session }) {
	const [state, setState] = useState({
		name: session?.user?.name || '',
		email: session?.user?.email || '',
		message: '',
	});

	const handleChange = (event: FormEvent) => {
		const { name, value } = event.target as any;
		setState((ref) => ({ ...ref, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent) => {
		event?.preventDefault();
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(state),
			});
			if (!response.ok) {
				// set sme kind of error and don't try anythng again.
				return;
			}
			setState({ name: '', email: '', message: '' });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="aboutme mt-10">
			<form className="w-full max-w-xl" onSubmit={handleSubmit}>
				<h1 className="text-3xl font-bold mb-3 capitalize text-slate-200">
					Connect with me
				</h1>
				<p className="text-sm tracking-wide font-semibold mb-6 text-slate-400">
					If you want to know more about me or my work, or if you
					would just like to say hello, send me a message. I&apos;d
					love to hear from you.
				</p>
				<div className="flex flex-wrap space-x-5 -mx-3 px-3 mb-7">
					<div className="relative">
						<input
							className="appearance-none block w-full bg-[#181818] text-slate-300 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#4338ca] font-semibold tracking-wider"
							id="nick"
							type="text"
							placeholder="Name"
							name="name"
							value={state.name}
							onChange={handleChange}
						/>
						{state.name && (
							<button
								className="absolute inset-y-0 right-0 mx-2"
								onClick={() =>
									setState((ref) => ({
										...ref,
										name: '',
									}))
								}
							>
								<IconContext.Provider
									value={{
										size: '1.2em',
										className: 'global-class-name',
									}}
								>
									<MdOutlineClear />
								</IconContext.Provider>
							</button>
						)}
					</div>
					<div className="flex-grow relative">
						<input
							className="appearance-none block w-full bg-[#181818] text-slate-300 border border-transparent rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#4338ca] font-semibold tracking-wider"
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							value={state.email}
							onChange={handleChange}
						/>
						{state.email && (
							<button
								className="absolute inset-y-0 right-0 mx-2"
								onClick={() =>
									setState((ref) => ({
										...ref,
										email: '',
									}))
								}
							>
								<IconContext.Provider
									value={{
										size: '1.2em',
										className: 'global-class-name',
									}}
								>
									<MdOutlineClear />
								</IconContext.Provider>
							</button>
						)}
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-4">
					<div className="w-full px-3">
						<textarea
							className="no-resize appearance-none block w-full bg-[#181818] text-slate-300 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#4338ca]  font-semibold tracking-wider h-48 resize-none"
							id="message"
							name="message"
							placeholder={`Leave me a message...`}
							value={state.message}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<Link
						href={'mailto:thek8pai@gmail.com'}
						className="text-sm tracking-wide font-semibold underline capitalize text-slate-400"
					>
						Send me a direct mail
					</Link>
					<button
						className="shadow-md flex items-center space-x-2 tracking-wider transition-all bg-[#181818] hover:bg-[#202020] focus:shadow-outline focus:outline-none text-slate-200 font-semibold py-2 px-4 rounded-lg"
						type="submit"
					>
						<span>Send</span>
						<IconContext.Provider value={{ size: '1.2em' }}>
							<TbSend />
						</IconContext.Provider>
					</button>
				</div>
			</form>
		</div>
	);
}
