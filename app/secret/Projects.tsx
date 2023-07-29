import { projects } from 'lib/secrets';
import React from 'react';
export default function Projects() {
	return (
		<div>
			<ul>
				{projects.map((project, index) => (
					<li
						key={index}
						className="my-2 border border-gray-300 dark:border-neutral-800  rounded-lg shadow-md p-3"
					>
						<h3 className="text-xl font-semibold">
							{project.title}
						</h3>
						<p className="text-neutral-500 mb-2">
							{project.description}
						</p>
						<div className="flex">
							{project.components.map(
								({ Component, color }, componentIndex) => (
									<span key={componentIndex} className="mr-2">
										<Component color={color} />
									</span>
								),
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
