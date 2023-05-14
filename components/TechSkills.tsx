import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';
import { IconContext, IconType } from 'react-icons/lib';

export default function TechSkills({
	Component,
	color,
	children,
}: {
	Component?: IconType;
	color?: string;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`${
				Component
					? 'flex items-center space-x-3'
					: 'font-semibold font-mono'
			} px-3 py-1 w-fit m-1 border border-slate-500/40 rounded-lg bg-[#181818] text-slate-200`}
		>
			{Component ? (
				<IconContext.Provider value={{ color: color }}>
					<Component />
				</IconContext.Provider>
			) : null}
			<span>{children}</span>
		</div>
	);
}
