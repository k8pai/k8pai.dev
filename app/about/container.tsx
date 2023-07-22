'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import Contact from '../../components/Contact';
import { IconContext } from 'react-icons';
import { Session } from 'next-auth';
import {
	FcAddressBook,
	FcBinoculars,
	FcRules,
	FcWorkflow,
} from 'react-icons/fc';

export default function Container({ session }: { session?: Session }) {
	const [content, setContent] = useState({
		name: 'portfolio',
		Component: Portfolio,
	});

	const options = [
		{ name: 'portfolio', Icon: FcWorkflow, Component: Portfolio },
		{ name: 'resume', Icon: FcBinoculars, Component: Resume },
		{ name: 'contact', Icon: FcAddressBook, Component: Contact },
	];

	const downloadResume = () => {
		// Replace 'path/to/your/file.pdf' with the actual path to your PDF file
		const pdfURL = 'Resume_k8pai.pdf';

		// Create a new anchor element
		const link = document.createElement('a');
		link.href = pdfURL;
		link.download = 'Resume_k8pai.pdf';

		// Dispatch a click event on the anchor element
		link.dispatchEvent(new MouseEvent('click'));
	};

	return (
		<div>
			<div className="flex space-x-2 md:space-x-7 p-2 rounded-md">
				{options?.map(({ name, Icon, Component }, elXid) => {
					return (
						<button
							key={elXid}
							className={`relative py-2 shadow-md`}
							onClick={() => setContent({ name, Component })}
						>
							<span
								className={`relative px-3 text-xs sm:text-base py-2 tracking-wider capitalize font-semibold`}
							>
								<motion.div className="absolute inset-0 bg-[#181818] rounded-md z-[-5]" />
								{name === content.name ? (
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
				<span className={'flex-grow'}></span>
				<button
					className={`group relative bg-[#181818] px-3 py-2 rounded-md hover:shadow-md ${
						content.name === 'resume' ? 'block' : 'hidden'
					}`}
					onClick={downloadResume}
				>
					<IconContext.Provider
						value={{
							size: '1.3em',
							className:
								'relative tracking-wider capitalize rounded-md font-semibold',
						}}
					>
						<FcRules />
					</IconContext.Provider>
				</button>
			</div>
			<content.Component session={session} />
		</div>
	);
}
