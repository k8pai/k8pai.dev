import Link from 'next/link';
import React from 'react';
import { IconContext, IconType } from 'react-icons/lib';

export interface certificateDataType {
	name: string;
	issue: string;
	href: string;
}

export interface certificateCoponentType {
	Component: IconType;
	color: string;
}

export default function CertificateCard({
	isGrid,
	data: { name, issue, href },
	Component: { Component, color },
}: {
	isGrid: boolean;
	data: certificateDataType;
	Component: certificateCoponentType;
}) {
	return (
		<div
			className={`${
				!isGrid
					? 'flex flex-col md:flex-row md:items-start space-x-3'
					: null
			} rounded-md bg-[#181818] p-3 w-full`}
		>
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
				<h1
					className={`font-semibold tracking-wider text-2xl ${
						!isGrid ? 'py-1' : 'py-2'
					}`}
				>
					{name}
				</h1>
				<h2 className={`py-0`}>{issue}</h2>
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
