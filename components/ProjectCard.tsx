import React from 'react';
import { IconContext } from 'react-icons/lib';
import { projectsInfoType } from '../lib/info';
import Image from 'next/image';

export default function ProjectCard({
	project: { name, imageUrl, Components },
}: {
	project: projectsInfoType;
}) {
	return (
		<div className="rounded-md  bg-[#181818] p-3 w-full">
			<div className="imageSection relative aspect-video bg-[#111010] rounded-md">
				<Image src={imageUrl} alt={`${name} preview`} />
			</div>
			<div className="content-section">
				<div className="projectname md:mt-3 font-semibold tracking-wider text-base md:text-2xl py-1 md:py-2">
					{name}
				</div>
				<div className="projectdetails p-1 md:mt-2 flex items-start md:items-center md:space-x-1">
					{Components?.map((el, elXid) => {
						const { Component, color } = el;
						return (
							<IconContext.Provider
								key={elXid}
								value={{
									color: color,
									className: 'react-icons mr-2',
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
