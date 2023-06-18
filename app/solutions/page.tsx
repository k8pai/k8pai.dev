import React from 'react';
import { solutionsInfo } from '../../lib/info';

export default function page() {
	return (
		<div>
			<h1 className="px-2 py-3 text-3xl font-bold capitalize">
				A Brag of What I&apos;ve done over time.
			</h1>
			{solutionsInfo?.map((el) => {
				return <div>{el.name}</div>;
			})}
		</div>
	);
}
