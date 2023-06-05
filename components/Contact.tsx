'use client';

import { Session } from 'next-auth';
import React, { FormEvent, useState } from 'react';
import { IconContext } from 'react-icons';
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
			console.log(response);
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
		<div>
			{/* about me section  */}
			<div className="aboutme mt-10">
				<form className="w-full max-w-lg" onSubmit={handleSubmit}>
					<h1 className="text-3xl font-bold mb-6 capitalize text-slate-200">
						Reach Out To Me
					</h1>
					<div className="flex flex-wrap -mx-3 mb-4">
						<div className="w-full px-3">
							<input
								className="appearance-none block w-full bg-[#181818] text-slate-300 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#4338ca] font-semibold tracking-wider"
								id="nick"
								type="text"
								placeholder="Your Name"
								name="name"
								value={state.name}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-4">
						<div className="w-full px-3">
							<input
								className="appearance-none block w-full bg-[#181818] text-slate-300 border border-transparent rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#4338ca] font-semibold tracking-wider"
								id="email"
								type="email"
								name="email"
								placeholder="Email"
								value={state.email}
								onChange={handleChange}
							/>
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
					<p className="flex flex-wrap px-2 mb-4">
						I will get back to you soon...
					</p>
					<button
						className="shadow-md flex items-center space-x-2 tracking-wider transition-all bg-[#181818] hover:bg-[#202020] focus:shadow-outline focus:outline-none text-slate-200 font-semibold py-2 px-4 rounded-lg"
						type="submit"
					>
						<span>Send</span>
						<IconContext.Provider value={{ size: '1.2em' }}>
							<TbSend />
						</IconContext.Provider>
					</button>
				</form>
			</div>
		</div>
	);
}
