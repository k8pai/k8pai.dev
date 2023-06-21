import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export default function Socials() {
	const devProfiles = [
		{ name: 'twitter', href: 'https://twitter.com/k8pai' },
		{ name: 'codedamn', href: 'https://codedamn.com/k8pai' },
		{ name: 'showwcase', href: 'https://showwcase.com/k8pai' },
		{ name: 'hackerrank', href: 'https://hackerrank.com/thek8pai?hr_r=1' },
		{ name: 'leetcode', href: 'https://leetcode.com/k8pai' },
	];

	return (
		<div className="flex flex-wrap items-center mt-5">
			{devProfiles?.map(({ name, href }) => (
				<Link
					href={href}
					className="p-1 m-1 mx-1 w-fit flex items-center space-x-1 transition-all rounded-lg shadow-md"
				>
					<span>{name}</span>
					<MdArrowOutward />
				</Link>
			))}
		</div>
	);
}
