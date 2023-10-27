'use client';

import React, { useState } from 'react';
import { FcRules } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Resume from '../../components/resume/Resume';
import Contact from '../../components/contact/Contact';
import Portfolio from '../../components/portfolio/Portfolio';

type ContentType = {
	name: string;
	Component: () => React.JSX.Element;
};

const AboutLayout = () => {
	const [content, setContent] = useState<ContentType>({
		name: 'portfolio',
		Component: Portfolio,
	});

	const options = [
		{ name: 'portfolio', Component: Portfolio },
		{ name: 'resume', Component: Resume },
		{ name: 'contact', Component: Contact },
	];

	const downloadResume = () => {
		const pdfURL = 'Resume_k8pai.pdf';

		const link = document.createElement('a');
		link.href = pdfURL;
		link.download = 'Resume_k8pai.pdf';

		link.dispatchEvent(new MouseEvent('click'));
	};

	return (
		<div>
			<div className="flex space-x-2 md:space-x-7 p-2 rounded-md">
				{options?.map(({ name, Component }, elXid) => {
					return (
						<button
							key={elXid}
							className={`relative py-2`}
							onClick={() => setContent({ name, Component })}
						>
							<span
								className={`relative px-3 text-xs sm:text-base py-2 tracking-wider capitalize font-semibold`}
							>
								<motion.div className="absolute inset-0 bg-slate-200 dark:bg-[#181818] rounded-md shadow-md z-[-5]" />
								{name === content.name ? (
									<motion.div
										className="absolute inset-0 bg-[#4338CA] bg-opacity-50 rounded-md shadow-md z-[-1]"
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
					className={`group relative bg-slate-200 dark:bg-[#181818] px-3 py-2 rounded-md shadow-md ${
						content.name === 'resume' ? 'block' : 'hidden'
					}`}
					onClick={downloadResume}
				>
					<FcRules
						className="relative tracking-wider capitalize rounded-md font-semibold"
						size={'1.3em'}
					/>
				</button>
			</div>
			<content.Component />
		</div>
	);
};

export default AboutLayout;
