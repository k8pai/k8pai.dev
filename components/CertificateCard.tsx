import Link from 'next/link';
import React from 'react';
import { IconContext, IconType } from 'react-icons/lib';

interface certificateDataType {
	name: string;
	issue: string;
	href: string;
}

interface certificateCoponentType {
	Component: IconType;
	color: string;
}

export default function CertificateCard({
	data: { name, issue, href },
	Component: { Component, color },
}: {
	data: certificateDataType;
	Component: certificateCoponentType;
}) {
	return (
		<div className="rounded-md  bg-[#181818] p-3 w-full">
			<div className="imageSection p-3">
				<IconContext.Provider
					value={{
						size: '3em',
						color: color,
						className: 'react-icons mr-2',
					}}
				>
					<Component />
				</IconContext.Provider>
			</div>
			<div className="ml-2">
				<h1 className="font-semibold tracking-wider text-2xl py-2">
					{name}
				</h1>
				<h2 className="py-1">{issue}</h2>
				<Link
					href={href}
					className="font-semibold text-gray-400 mt-3 flex items-start md:items-center md:space-x-1"
				>
					See Credentials
				</Link>
			</div>
		</div>
	);
}
