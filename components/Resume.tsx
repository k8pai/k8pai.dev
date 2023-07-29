'use client';

import React, { useState } from 'react';
import { FcGraduationCap } from 'react-icons/fc';
import { IconContext } from 'react-icons/lib';
import TechSkills from './TechSkills';
import { FaJava } from 'react-icons/fa';
import {
	SiC,
	SiCplusplus,
	SiCss3,
	SiExpress,
	SiFramer,
	SiGithubactions,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiRedis,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import { Session } from 'next-auth';

export default function Resume({ session }: { session?: Session }) {
	const [showAbout, setShowAbout] = useState<boolean>(false);

	const languages = ['English', 'Hindi', 'Malayalam', 'Konkani', 'Sanskrit'];

	const skills = [
		{ title: 'HTML', Component: SiHtml5, color: '#E34F26' },
		{ title: 'CSS', Component: SiCss3, color: '#1572B6' },
		{ title: 'Javascript', Component: SiJavascript, color: '#F7DF1E' },
		{ title: 'Typescript', Component: SiTypescript, color: '#3178C6' },
		{ title: 'Java', Component: FaJava, color: '' },
		{ title: 'C++', Component: SiCplusplus, color: '#00599C' },
		{ title: 'Objective C', Component: SiC, color: '#A8B9CC' },
		{ title: 'Python', Component: SiPython, color: '#3776AB' },
		{ title: 'React', Component: SiReact, color: '#61DAFB' },
		{ title: 'Redux', Component: SiRedux, color: '#764ABC' },
		{ title: 'Next JS', Component: SiNextdotjs, color: '#fff' },
		{ title: 'Framer Motion', Component: SiFramer, color: '#0055FF' },
		{ title: 'Tailwindcss', Component: SiTailwindcss, color: '#06B6D4' },
		{ title: 'Mongo', Component: SiMongodb, color: '#47A248' },
		{ title: 'Node js', Component: SiNodedotjs, color: '#339933' },
		{ title: 'Express js', Component: SiExpress, color: '#fff' },
		{ title: 'Redis', Component: SiRedis, color: '#DC382D' },
		{
			title: 'Github Actions',
			Component: SiGithubactions,
			color: '#2088FF',
		},
	];
	return (
		<div>
			{/* about me section  */}
			<div className="aboutme mt-10">
				<h1 className="font-bold tracking-wide text-3xl text-center capitalize">
					about me
				</h1>

				<div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4 font-semibold">
					<p>
						A self-driven, versatile, reliable, diligent individual
						who is calm and cheerful with a team-minded approach to
						work and getting things done.
						<br />
						<br />A student who is passionate and with a keen eye
						for design.
						{showAbout ? (
							<span className="transition-all">
								{' '}
								Passionate about exploring, contributing and
								building new technologies and libraries.
							</span>
						) : (
							<span className="transition-all">...</span>
						)}
					</p>
					<br />
					<button
						type="button"
						onClick={() => setShowAbout((ref) => !ref)}
						className="block rounded-lg transition-all bg-stone-100 dark:bg-[#242424] hover:dark:bg-[#202020] px-3 py-2 font-semibold whitespace-nowrap shadow-md"
					>
						{showAbout ? 'Read Less' : 'Read More'}
					</button>
				</div>
			</div>

			{/* education section */}
			<div className="education mt-10">
				<h1 className=" font-bold tracking-wide text-2xl capitalize">
					Education
				</h1>

				<div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
					<div className="flex items-start space-x-4 p-2">
						<IconContext.Provider value={{ size: '2em' }}>
							<FcGraduationCap />
						</IconContext.Provider>
						<div className="flex-grow space-y-1">
							<h1 className="text-2xl font-bold capitalize">
								Mahatma Gandhi University
							</h1>
							<div className="flex flex-col md:flex-row md:justify-between md:items-center">
								<h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
									Bachelor degree, Computer Applications
								</h1>
								<h4 className="font-semibold tracking-wide">
									2019 - 2022
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
					<div className="flex items-start space-x-4 p-2">
						<IconContext.Provider value={{ size: '2em' }}>
							<FcGraduationCap />
						</IconContext.Provider>
						<div className="flex-grow space-y-1">
							<h1 className="text-2xl font-bold capitalize">
								St Mary&apos;s HSS, Pattom.
							</h1>
							<div className="flex flex-col md:flex-row md:justify-between md:items-center">
								<h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
									<span>
										Higher Secondary, Computer Science
									</span>
								</h1>
								<h4 className="font-semibold tracking-wide">
									2017 - 2019
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
					<div className="flex items-start space-x-4 p-2">
						<IconContext.Provider value={{ size: '2em' }}>
							<FcGraduationCap />
						</IconContext.Provider>
						<div className="flex-grow space-y-1">
							<h1 className="text-2xl font-bold capitalize">
								TDHS, Kochi.
							</h1>
							<div className="flex flex-col md:flex-row md:justify-between md:items-center">
								<h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
									<span>Matriculation</span>
								</h1>
								<h4 className="font-semibold tracking-wide">
									2016 - 2017
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Tech skills section */}
			<div className="Tech-skills mt-10">
				<h1 className=" font-bold tracking-wide text-2xl capitalize">
					Tech Skills
				</h1>
				<div className="mt-6 flex flex-wrap items-center ">
					{skills.map((el, elXid) => {
						return (
							<TechSkills
								key={elXid}
								Component={el.Component}
								color={el.color}
							>
								{el.title}
							</TechSkills>
						);
					})}
				</div>
			</div>

			{/* Languages section */}
			<div className="Languages mt-10">
				<h1 className=" font-bold tracking-wide text-2xl capitalize">
					Languages
				</h1>
				<div className="mt-6 flex flex-wrap items-center ">
					{languages.map((el, elXid) => {
						return <TechSkills key={elXid}>{el}</TechSkills>;
					})}
				</div>
			</div>
		</div>
	);
}
