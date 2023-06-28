// 'use client';

import React from 'react';
import { FaSignature } from 'react-icons/fa';
import { guestbookInsert } from 'app/_actions';

const Form = () => {
	return (
		<form
			className="py-2 flex items-center flex-wrap w-full rounded-md"
			key={Math.random()}
			action={guestbookInsert}
		>
			<div className="relative w-[400px]">
				<input
					type="text"
					name="message"
					placeholder={`What's on your mind?`}
					className={`pl-3 pr-28 py-2 w-full bg-[#242526] rounded-md shadow-md font-semibold transition-all tracking-wider text-base outline-none ring-0`}
				/>
				<button className="py-2 px-3 m-1 absolute transition-all duration-200 inset-y-0 right-0 bg-[#181818] hover:bg-[#141414] rounded-md shadow-md font-semibold tracking-wider flex items-center space-x-3 text-sm w-fit">
					<FaSignature />
					<span>Sign</span>
				</button>
			</div>
		</form>
	);
};

export default Form;
