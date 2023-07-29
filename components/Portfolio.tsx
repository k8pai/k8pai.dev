'use client';

import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import { CiGrid41, CiGrid2H } from 'react-icons/ci';
import {
	projectsInfo,
	certificatesInfo,
	projectsInfoType,
	certificatesInfoType,
} from '../lib/info';
import { Session } from 'next-auth';

export default function Portfolio({ session }: { session?: Session }) {
	const [isGrid, setIsGrid] = useState<boolean>(true);
	const [showFullCertificates, setShowFullCertficates] =
		useState<boolean>(false);
	const [certificates, setCertificates] = useState<certificatesInfoType[]>(
		certificatesInfo.slice(0, 4),
	);

	const [projects, setProjects] = useState<projectsInfoType[]>(projectsInfo);

	const handleShowCertificates = () => {
		if (certificates.length === 4) {
			setShowFullCertficates(true);
			setCertificates(certificatesInfo);
		} else {
			setShowFullCertficates(false);
			setCertificates(certificatesInfo.slice(0, 4));
		}
	};

	return (
		<div className="">
			{/* Projects section */}
			<div className="Projects mt-10">
				<div className="flex items-center justify-between p-3">
					<h1 className=" font-bold tracking-wide text-2xl capitalize">
						Projects
					</h1>
					<Link
						href={'https://github.com/k8pai'}
						className="transition-all md:text-blue-400 md:hover:text-cyan-400 bg-[#181818] p-2 md:bg-transparent md:p-0 rounded-md"
					>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className: 'block md:hidden',
							}}
						>
							<SiGithub />
						</IconContext.Provider>
						<span className="hidden md:block md:font-semibold">
							Show More
						</span>
					</Link>
				</div>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center p-3">
					{projects.map((project, id) => {
						return <ProjectCard key={id} project={project} />;
					})}
				</div>
			</div>

			{/* Certificates section */}
			<div className="Certificates mt-10">
				<div className="flex items-center justify-between p-3 space-x-3">
					<h1 className=" font-bold tracking-wide text-2xl capitalize">
						Certificates
					</h1>
					<span className={'flex-grow'}></span>
					<button
						className={`group relative bg-neutral-200 dark:bg-[#202020] rounded-md hover:shadow-md hidden lg:block`}
						onClick={() => setIsGrid(!isGrid)}
					>
						<IconContext.Provider
							value={{
								size: '1.5em',
								className:
									'relative tracking-wider capitalize font-semibold m-2',
							}}
						>
							{isGrid ? <CiGrid2H /> : <CiGrid41 />}
						</IconContext.Provider>
					</button>
					<button
						type="button"
						className="transition-all bg-neutral-200 dark:bg-[#202020] hover:dark:bg-[#181818] p-2 rounded-md hover:shadow-md"
						onClick={handleShowCertificates}
					>
						<span className="block md:font-semibold">
							{showFullCertificates ? 'Show Less' : 'Show More'}
						</span>
					</button>
				</div>
				<div
					className={`${
						isGrid
							? 'grid gap-4 grid-cols-1 lg:grid-cols-2  place-items-center'
							: 'w-full flex flex-col space-y-4'
					} p-3`}
				>
					{certificates.map((certificate, elXid) => {
						return (
							<CertificateCard
								key={elXid}
								isGrid={isGrid}
								certificate={certificate}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
