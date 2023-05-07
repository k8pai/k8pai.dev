import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

export default function Socials() {
	return (
		<div className="flex items-center flex-col md:flex-row mt-10 space-y-3 md:space-y-0 md:space-x-3">
			<Link
				href={'https://twitter.com/k8pai'}
				className="px-3 py-2 w-full flex-1 flex items-center transition-all border border-slate-300 hover:border-slate-400 relative rounded-lg shadow-md"
			>
				<span>twitter</span>
				<div className="absolute offset-y-0 right-0 mr-3">
					<MdArrowOutward />
				</div>
			</Link>
			<Link
				href={'https://codedamn.com/k8pai'}
				className="px-3 py-2 w-full flex-1 flex items-center transition-all border border-slate-300 hover:border-slate-400 relative rounded-lg shadow-md"
			>
				<span>codedamn</span>
				<div className="absolute offset-y-0 right-0 mr-3">
					<MdArrowOutward />
				</div>
			</Link>
			<Link
				href={'https://showwcase.com/k8pai'}
				className="px-3 py-2 w-full flex-1 flex items-center transition-all border border-slate-300 hover:border-slate-400 relative rounded-lg shadow-md"
			>
				<span>showwcase</span>
				<div className="absolute offset-y-0 right-0 mr-3">
					<MdArrowOutward />
				</div>
			</Link>
		</div>
	);
}
