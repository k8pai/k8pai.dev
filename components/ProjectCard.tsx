import React from 'react';
import { IconContext, IconType } from 'react-icons/lib';

interface ComponentsType {
	Component: IconType;
	color: string;
}

export default function ProjectCard({
	name,
	Components,
}: {
	name: string;
	Components?: Array<ComponentsType> | [];
}) {
	return (
		<div className="rounded-md  bg-[#181818] p-3 w-full">
			<div className="imageSection aspect-video bg-[#111010] rounded-md"></div>
			<div className="content-section">
				<div className="projectname mt-3 font-semibold tracking-wider text-2xl py-2">
					{name}
				</div>
				<div className="projectdetails p-1 mt-2 flex items-start md:items-center md:space-x-1">
					{Components?.map((el, elXid) => {
						const Comp = el.Component;
						return (
							<IconContext.Provider
								key={elXid}
								value={{
									size: '1.5em',
									color: el.color,
									className: 'react-icons mr-2',
								}}
							>
								<Comp />
							</IconContext.Provider>
						);
					})}
				</div>
			</div>
		</div>
	);
}
