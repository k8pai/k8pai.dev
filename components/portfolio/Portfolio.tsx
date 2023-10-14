'use client';

import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import { CiGrid41, CiGrid2H } from 'react-icons/ci';
import {
	projects as projectsData,
	certificates as certificatesData,
} from '../../data';
import { certificatesType } from 'typings';

export default function Portfolio() {
	const [isGrid, setIsGrid] = useState<boolean>(true);
	const [showFullCertificates, setShowFullCertficates] =
		useState<boolean>(false);
	const [certificates, setCertificates] = useState<certificatesType[]>(
		certificatesData.slice(0, 6),
	);

	// const [projects, setProjects] = useState<projectsType[]>(projectsData);

	const handleShowCertificates = () => {
		if (certificates.length === 6) {
			setShowFullCertficates(true);
			setCertificates(certificatesData);
		} else {
			setShowFullCertficates(false);
			setCertificates(certificatesData.slice(0, 6));
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
						<SiGithub size="1.5em" className="block md:hidden" />
						<span className="hidden md:block md:font-semibold">
							Show More
						</span>
					</Link>
				</div>
				<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 place-items-center py-3">
					{projectsData.map((project, id) => {
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
						{isGrid ? (
							<CiGrid2H
								size="1.5em"
								className="relative tracking-wider capitalize font-semibold m-2"
							/>
						) : (
							<CiGrid41
								size="1.5em"
								className="relative tracking-wider capitalize font-semibold m-2"
							/>
						)}
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
