import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';
import { IconType } from 'react-icons/lib';

export default function TechSkills({
	Component,
	children,
}: {
	Component?: IconType;
	children: React.ReactNode;
}) {
	return (
		<div
			className={`${
				Component ? 'flex items-center ' : 'font-semibold font-mono'
			} px-3 py-1 w-fit m-1 border border-slate-500/40 rounded-lg bg-[#181818] text-slate-200`}
		>
			{Component ? <Component /> : null}
			<span>{children}</span>
		</div>
	);
}
