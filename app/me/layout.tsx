'use client';

import React, { createContext, useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationPin } from 'react-icons/md';
import TechSkills from '../../components/TechSkills';

interface meContextType {
	selected: String;
}

export const meContext = createContext<meContextType>({
	selected: '',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selected, setSelected] = useState<String>('about');

	const options = {
		about: { name: 'about' },
		resume: { name: 'resume' },
	};

	const skills = [
		'HTML',
		'CSS',
		'Javascript',
		'Typescript',
		'Java',
		'C++',
		'Objective C',
		'React',
		'Redux',
		'Next JS',
		'Framer Motion',
		'Tailwindcss',
		'Mongo',
		'Node js',
		'Express js',
		'Redis',
	];

	return (
		<div className="space-y-10">
			<div className="border border-slate-400 py-4 px-5 rounded-lg">
				<div className="flex space-x-3 items-center">
					<h1 className="font-serif font-extrabold text-3xl capitalize ">
						Sudarsan k pai
					</h1>
					<div className="px-2 py-1 text-sm bg-cyan-300 bg-opacity-70 rounded-md">
						<span>student </span>
					</div>
					<div className="px-2 py-1 text-sm bg-cyan-300 bg-opacity-70 rounded-md">
						<span>looking for a job</span>
					</div>
				</div>
				<div className="status mt-4">
					<div className="flex text-slate-200">
						<span className="text-lg">Student | Web Developer</span>
					</div>
					<div className="flex items-center space-x-1 text-slate-400">
						<MdLocationPin />
						<span className="text-lg">Banglore, India</span>
					</div>
				</div>
				<div className="flex flex-wrap mt-5">
					{skills.map((el, elXid) => {
						return <TechSkills key={elXid}>{el}</TechSkills>;
					})}
				</div>
			</div>

			<meContext.Provider value={{ selected: selected }}>
				<div className="flex space-x-7 border border-slate-400 py-3 px-5 rounded-lg">
					{Object.entries(options).map(([el, { name }], elXid) => {
						return (
							<button
								key={elXid}
								className={`relative py-2 shadow-md rounded-md ${
									name === selected ? 'selected' : ''
								}`}
								onClick={() => setSelected(name)}
							>
								<span
									className={`relative px-3 py-2 tracking-wider font-semibold`}
								>
									{name}
									{name === selected ? (
										<motion.div
											className="absolute inset-0 bg-[#4338CA] rounded-md z-[-1]"
											layoutId="underline"
										/>
									) : null}
								</span>
							</button>
						);
					})}
				</div>
				{children}
			</meContext.Provider>
		</div>
	);
}
