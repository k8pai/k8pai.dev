'use client';

import React, { useRef, useState } from 'react';
import { FaSignature } from 'react-icons/fa';
import { guestbookInsert } from 'app/_actions';
import { SignOut } from 'app/guestbook/actions';
import { DefaultSession } from 'next-auth';

const Form = ({ user }: { user: DefaultSession['user'] }) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [validationError, setValidationError] = useState<Record<
		string,
		string[]
	> | null>(null);

	const action = async (data: FormData) => {
		const result = await guestbookInsert(data, user);

		if (result?.error) {
			setValidationError(result.error);
		} else {
			formRef.current?.reset();
			setValidationError(null);
		}
	};

	return (
		<div>
			<form
				className="py-2 flex items-center flex-wrap w-full rounded-md"
				ref={formRef}
				action={action}
			>
				<div className="relative w-[400px]">
					<input
						type="text"
						name="message"
						placeholder={`What's on your mind?`}
						className={`pl-3 pr-28 py-2 w-full text-neutral-800 dark:text-neutral-100 dark:bg-[#242526] rounded-md shadow-md font-semibold transition-all tracking-wider text-base outline-none ring-0`}
					/>
					<button className="py-2 px-3 m-1 absolute transition-all duration-200 inset-y-0 right-0 bg-neutral-200 dark:bg-[#181818] hover:dark:bg-[#141414] rounded-md shadow-md font-semibold tracking-wider flex items-center space-x-3 text-sm w-fit">
						<FaSignature />
						<span>Sign</span>
					</button>
				</div>
			</form>
			{validationError?._errors && (
				<p className="text-sm text-red-400">
					{validationError._errors.join(', ')}
				</p>
			)}
			<SignOut />
		</div>
	);
};

export default Form;
