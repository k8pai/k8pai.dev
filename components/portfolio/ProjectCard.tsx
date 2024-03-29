'use client';

import React from 'react';
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
	project: { name, imageUrl, projectUrl, githubUrl, Components },
}: {
	project: projectsType;
}) {
	return (
		<div className="rounded-md group bg-slate-200 dark:bg-[#181818] p-3 w-full max-w-md md:w-full">
			<div className="imageSection relative aspect-video bg-slate-300 dark:bg-[#111010] rounded-md">
				<Image
					placeholder={`data:image/svg+xml;base64,${toBase64(
						shimmer(700, 475),
					)}`}
					priority={true}
					src={imageUrl}
					alt={`${name} preview`}
				/>
			</div>
			<div className="content-section">
				<div className="projectname flex justify-between items-center mt-1 md:mt-3">
					{projectUrl ? (
						<Link
							target="_blank"
							href={projectUrl}
							className="space-x-2 flex items-center"
						>
							<span className="font-semibold tracking-wider text-base lg:text-2xl md:text-lg">
								{name}
							</span>
							<CiLink className="transition duration-200 ease-in opacity-0 group-hover:opacity-100 text-sm md:text-lg lg:text-2xl font-mono" />
						</Link>
					) : (
						<span className="font-semibold tracking-wider text-base lg:text-2xl md:text-lg">
							{name}
						</span>
					)}
					{githubUrl && (
						<Link
							target="_blank"
							href={githubUrl}
							className="space-x-2 flex transition duration-200 ease-in opacity-0 group-hover:opacity-100 font-mono text-xs"
						>
							<SiGithub size="1.5em" />
						</Link>
					)}
				</div>
				<div className="projectdetails p-1 mt-1 md:mt-2 flex items-start md:items-center space-x-2 lg:space-x-3">
					{Components?.map((el, elXid) => {
						const { Component, color, darkColor } = el;
						return (
							<Component
								key={elXid}
								className={`fill-[${color}] text-sm md:text-lg lg:text-2xl dark:fill-[${darkColor}]`}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
