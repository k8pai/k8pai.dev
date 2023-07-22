import React from 'react';

export default function ViewCounter({ slug, allviews }) {
	const count = Number(allviews.find((el) => el.slug === slug)?.count) || 0;

	console.log('count => ', count);
	return (
		<div>
			<h1>slug {slug}</h1>
			<span>{count}</span>
		</div>
	);
}
