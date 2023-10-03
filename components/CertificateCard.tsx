import Link from 'next/link';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import { certificatesInfoType } from '../lib/info';

export default function CertificateCard({
	isGrid,
	certificate: {
		data: { name, issuer, issueDate, issuerUrl, href },
		details,
		Component: { Component, color },
	},
}: {
	isGrid: boolean;
	certificate: certificatesInfoType;
}) {
	return (
		<div
			className={`${
				!isGrid
					? 'flex flex-col md:flex-row md:items-start space-x-3'
					: null
			} rounded-md bg-slate-300 dark:bg-[#181818] p-3 w-full`}
		>
			<div className="imageSection p-2 w-fit">
				<Component
					size="2em"
					color={color}
					className="react-icons mr-2"
				/>
			</div>
			<div className="ml-2">
				<h1
					className={`font-semibold tracking-wider text-lg ${
						!isGrid ? 'py-px' : 'py-1'
					}`}
				>
					{name}
				</h1>
				<div className={`py-0 flex items-center text-xs`}>
					<span>{issueDate}</span>
					<BsDot size={'1em'} />
					<Link
						className="text-cyan-500 hover:text-cyan-400 transition-all"
						href={issuerUrl}
					>
						{issuer}
					</Link>
				</div>
				{/* {details &&
					details.length > 0 &&
					details.map(({ feature, url }, _) => {
						return url ? (
							<Link
								className="text-cyan-500 hover:text-cyan-400 transition-all text-xs"
								href={url}
								key={_}
							>
								{feature}
							</Link>
						) : null;
					})} */}
				<Link
					href={href}
					target="_blank"
					className="font-semibold text-sm text-zinc-500 dark:text-neutral-400 mt-1 flex items-start md:items-center md:space-x-1"
				>
					See Credentials
				</Link>
			</div>
		</div>
	);
}
