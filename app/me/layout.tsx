'use client';

import React, { createContext, useState } from 'react';
import { motion } from 'framer-motion';
import { MdLocationPin } from 'react-icons/md';
import TechSkills from '../../components/TechSkills';
import Image from 'next/image';
import profilePhoto from '../../public/developer.png';

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
	const [selected, setSelected] = useState<String>('portfolio');

	const options = {
		portfolio: { name: 'portfolio' },
		resume: { name: 'resume' },
	};

	return (
		<div className="space-y-5">
			<div className="py-2 px-3 rounded-lg flex items-start">
				<div className="relative max-w-[150px] max-h-[150px] p-3 hidden sm:block">
					<Image
						src={profilePhoto}
						className="aspect-square rounded-full"
						alt="profile picture"
					/>
				</div>
				<div className="p-3">
					<div className="flex space-x-3 items-center">
						<h1 className="font-serif font-extrabold text-3xl capitalize ">
							Sudarsan k pai
						</h1>
					</div>
					<div className="status mt-4">
						<div className="flex text-slate-200">
							<span className="text-lg">
								Student | Web Developer
							</span>
						</div>
						<div className="flex items-center space-x-1 text-slate-400">
							<MdLocationPin />
							<span className="text-lg">Banglore, India</span>
						</div>
					</div>
				</div>
			</div>
			<meContext.Provider value={{ selected: selected }}>
				<div className="flex space-x-7 p-2 rounded-md">
					{Object.entries(options).map(([el, { name }], elXid) => {
						return (
							<button
								key={elXid}
								className={`relative py-2 shadow-md ${
									name === selected ? 'selected' : ''
								}`}
								onClick={() => setSelected(name)}
							>
								<span
									className={`relative px-3 py-2 tracking-wider capitalize font-semibold`}
								>
									<motion.div className="absolute inset-0 bg-[#181818] rounded-md z-[-5]" />
									{name === selected ? (
										<motion.div
											className="absolute inset-0 bg-[#4338CA] bg-opacity-50 rounded-md z-[-1]"
											layoutId="underline"
										/>
									) : null}
									{name}
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
