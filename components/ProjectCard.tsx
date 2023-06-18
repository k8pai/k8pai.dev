import React from 'react';
import { IconContext } from 'react-icons/lib';
import { projectsInfoType } from '../lib/info';
import Image from 'next/image';
import Link from 'next/link';
import { CiLink } from 'react-icons/ci';
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({
	project: { name, imageUrl, projectUrl, githubUrl, Components },
}: {
	project: projectsInfoType;
}) {
	return (
		<div className="rounded-md group bg-[#181818] p-3 w-full">
			<div className="imageSection relative aspect-video bg-[#111010] rounded-md">
				<Image src={imageUrl} alt={`${name} preview`} />
			</div>
			<div className="content-section">
				<div className="projectname flex justify-between items-center md:mt-3">
					{projectUrl ? (
						<Link
							target="_blank"
							href={projectUrl}
							className="space-x-2 flex items-center font-semibold tracking-wider text-base md:text-2xl"
						>
							<span>{name}</span>
							<IconContext.Provider
								value={{
									size: '1.5em',
									className:
										'transition duration-200 ease-in opacity-0 group-hover:opacity-100 text-sm font-mono',
								}}
							>
								<CiLink />
							</IconContext.Provider>
						</Link>
					) : (
						<span>{name}</span>
					)}
					{githubUrl && (
						<Link
							target="_blank"
							href={githubUrl}
							className="space-x-2 flex transition duration-200 ease-in opacity-0 group-hover:opacity-100 font-mono text-xs"
						>
							<IconContext.Provider value={{ size: '1.5em' }}>
								<SiGithub />
							</IconContext.Provider>
						</Link>
					)}
				</div>
				<div className="projectdetails p-1 md:mt-2 flex items-start md:items-center space-x-3">
					{Components?.map((el, elXid) => {
						const { Component, color } = el;
						return (
							<IconContext.Provider
								key={elXid}
								value={{
									size: '1.3em',
									color: color,
									className: 'react-icons',
								}}
							>
								<Component />
							</IconContext.Provider>
						);
					})}
				</div>
			</div>
		</div>
	);
}
