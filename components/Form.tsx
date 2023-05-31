'use client';

import React, { useState } from 'react';

const Form = () => {
	const [value, setValue] = useState<string>('');

	const postData = async () => {
		const response = await fetch('/api/guestbook', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				body: value,
			}),
		});
	};
	return (
		<form className="px-3 py-2  w-full rounded-md" onSubmit={postData}>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				className="px-3 py-2 bg-[#242526] rounded-md shadow-md font-semibold tracking-wider text-sm outline-none ring-0"
			/>
			<button className="py-2 px-3 mx-3 my-2 bg-[#242526] rounded-md shadow-md font-semibold tracking-wider text-sm inset-0 right-0 w-fit">
				submit
			</button>
		</form>
	);
};

export default Form;
