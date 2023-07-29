import React from 'react';

export default function Upcoming({
	title,
	description,
	date,
}: {
	title: string;
	description: string;
	date?: string;
}) {
	return (
		<div className="mx-1 my-2 border border-gray-300 dark:border-neutral-800 rounded-lg shadow-md p-2">
			<h3 className="text-lg font-bold mb-1">{title}</h3>
			{/* <p className="text-gray-700 dark:text-gray-300">{description}</p> */}
			<p className="text-sm tracking-wide">
				Expected{' '}
				{date ? (
					<span className="text-neutral-700 dark:text-neutral-500">
						{date}
					</span>
				) : (
					'Unknown'
				)}
			</p>
		</div>
	);
}
