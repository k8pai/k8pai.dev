'use client';

import React, { type CSSProperties } from 'react';
import { projectsType } from 'typings';
import Image from 'next/image';
import Link from 'next/link';
import { CiLink } from 'react-icons/ci';
import { SiGithub } from 'react-icons/si';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);

export default function ProjectCard({
	project: {
		name,
		imageUrl,
		description,
		role,
		year,
		impact,
		highlights,
		projectUrl,
		githubUrl,
		Components,
	},
}: {
	project: projectsType;
}) {
	return (
		<div className="rounded-md group bg-slate-200 dark:bg-[#181818] p-3 w-full max-w-md md:w-full h-full flex flex-col">
			<div className="imageSection relative aspect-video bg-slate-300 dark:bg-[#111010] rounded-md">
				<Image
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(700, 475),
					)}`}
					priority={true}
					src={imageUrl}
					alt={`${name} preview`}
					className="rounded-md object-cover"
				/>
			</div>
			<div className="content-section flex flex-1 flex-col">
				<div className="projectname mt-3 flex items-start justify-between gap-3">
					<div className="min-w-0">
						<h2 className="font-semibold tracking-wide text-base md:text-lg lg:text-2xl">
							{name}
						</h2>
						{year ? (
							<p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
								{year}
							</p>
						) : null}
					</div>
					{role ? (
						<span className="shrink-0 rounded-md bg-white/70 px-2 py-1 text-[0.7rem] font-semibold tracking-wide text-neutral-700 shadow-sm dark:bg-white/10 dark:text-neutral-200">
							{role}
						</span>
					) : null}
				</div>
				<p className="mt-3 text-sm leading-relaxed tracking-wide text-neutral-700 dark:text-neutral-300">
					{description}
				</p>
				{impact ? (
					<p className="mt-2 text-xs font-semibold leading-relaxed tracking-wide text-neutral-800 dark:text-neutral-200">
						{impact}
					</p>
				) : null}
				{highlights?.length ? (
					<ul className="mt-3 space-y-1 text-xs leading-relaxed tracking-wide text-neutral-700 dark:text-neutral-300">
						{highlights.slice(0, 2).map((highlight) => (
							<li key={highlight} className="flex gap-2">
								<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4338CA]" />
								<span>{highlight}</span>
							</li>
						))}
					</ul>
				) : null}
				<div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="projectdetails flex items-center gap-2 lg:gap-3">
						{Components?.map((el, elXid) => {
							const { Component, color, darkColor } = el;
							return (
								<Component
									key={elXid}
									style={
										{
											'--tech-color': color,
											'--tech-dark-color':
												darkColor ?? color,
										} as CSSProperties
									}
									className="text-[var(--tech-color)] text-sm md:text-lg lg:text-2xl dark:text-[var(--tech-dark-color)]"
								/>
							);
						})}
					</div>
					<div className="flex items-center gap-2">
						{projectUrl ? (
							<Link
								target="_blank"
								rel="noreferrer"
								href={projectUrl}
								className="inline-flex items-center gap-1 rounded-md bg-[#4338CA] px-2 py-1 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#3730A3]"
							>
								<CiLink size="1.1em" />
								Live
							</Link>
						) : null}
						{githubUrl ? (
							<Link
								target="_blank"
								rel="noreferrer"
								href={githubUrl}
								className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-1 text-xs font-semibold tracking-wide text-neutral-800 transition-colors hover:bg-white dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/15"
							>
								<SiGithub size="1.1em" />
								Code
							</Link>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
