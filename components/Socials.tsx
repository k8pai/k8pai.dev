import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export default function Socials() {
	return (
		<div className="flex flex-wrap items-center space-x-2 mt-5">
			<Link
				href={'https://twitter.com/k8pai'}
				className="p-1 m-1 w-fit flex items-center space-x-2 transition-all rounded-lg shadow-md"
			>
				<span>twitter</span>
				<MdArrowOutward />
			</Link>
			<Link
				href={'https://codedamn.com/k8pai'}
				className="p-1 m-1 w-fit flex items-center space-x-2 transition-all rounded-lg shadow-md"
			>
				<span>codedamn</span>
				<MdArrowOutward />
			</Link>
			<Link
				href={'https://showwcase.com/k8pai'}
				className="p-1 m-1 w-fit flex items-center space-x-2 transition-all rounded-lg shadow-md"
			>
				<span>showwcase</span>
				<MdArrowOutward />
			</Link>
			<Link
				href={'https://www.hackerrank.com/thek8pai?hr_r=1'}
				className="p-1 m-1 w-fit flex items-center space-x-2 transition-all rounded-lg shadow-md"
			>
				<span>hackerrank</span>
				<MdArrowOutward />
			</Link>
			<Link
				href={'https://leetcode.com/k8pai/'}
				className="p-1 m-1 w-fit flex items-center space-x-2 transition-all rounded-lg shadow-md"
			>
				<span>leetcode</span>
				<MdArrowOutward />
			</Link>
		</div>
	);
}
