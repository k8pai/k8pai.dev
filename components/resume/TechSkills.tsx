'use client';

import React from 'react';
import { IconType } from 'react-icons/lib';

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
			} px-3 py-1 w-fit m-1 border border-slate-500/40 rounded-lg bg-stone-300 dark:bg-[#181818]`}
		>
			{Component ? <Component color={color} /> : null}
			<span>{children}</span>
		</div>
	);
}
