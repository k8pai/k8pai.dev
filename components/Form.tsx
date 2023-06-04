'use client';

import React, { FormEvent, useEffect, useState, useTransition } from 'react';
import { SignOut } from '../app/guestbook/actions';
import { useRouter } from 'next/navigation';
import { IconContext } from 'react-icons';
import { FaSignature } from 'react-icons/fa';

const Loading = () => {
	return (
		<div className="flex items-center justify-center space-x-2">
			<div className="animate-spin rounded-full h-3 w-3 border-t-2 border-b-2 border-slate-400"></div>
			<span>signing</span>
		</div>
	);
};

const Form = () => {
	const router = useRouter();
	const [value, setValue] = useState<string>('');
	const [isError, setIsError] = useState<any>({
		error: false,
		message: '',
	});

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isRefreshing, startTransition] = useTransition();

	const inMutation = isLoading || isRefreshing;

	const postData = async (event: FormEvent) => {
		event.preventDefault();
		if (value === '') {
			setIsError({
				error: true,
				message: 'Something Went Wrong, try submitting again',
			});
			return;
		}
		setIsLoading(true);

		try {
			const response = await fetch('/api/guestbook', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					body: value,
				}),
			});
			setValue('');
			setIsLoading(false);
			startTransition(() => {
				router.refresh();
			});
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<form
			className="px-1 py-2 space-x-3 flex items-center flex-wrap w-full rounded-md"
			onSubmit={postData}
		>
			<div className="relative w-[350px]">
				<input
					type="text"
					value={value}
					onChange={(event) => setValue(event.target.value)}
					placeholder={`What's on your mind?`}
					className={`pl-3 pr-[50px] py-2 w-full bg-[#242526] rounded-md shadow-md font-semibold transition-all tracking-wider text-base outline-none ring-0`}
				/>
				<button className="py-2 px-3 m-1 absolute transition-all duration-200 inset-y-0 right-0 bg-[#181818] hover:bg-[#141414] rounded-md shadow-md font-semibold tracking-wider flex items-center space-x-3 text-sm w-fit">
					<IconContext.Provider value={{ size: '1.5em' }}>
						<FaSignature />
					</IconContext.Provider>
				</button>
			</div>
			<SignOut />
		</form>
	);
};

export default Form;
