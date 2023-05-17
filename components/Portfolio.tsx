'use client';

import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGithub, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';
import { CiGrid41, CiGrid2H } from 'react-icons/ci';
import { certificatesInfo, certificatesInfoType } from '../lib/info';

export default function Portfolio() {
	const [isGrid, setIsGrid] = useState<boolean>(true);
	const [showFullCertificates, setShowFullCertficates] =
		useState<boolean>(false);
	const [certificate, setCertificate] = useState<certificatesInfoType[]>(
		certificatesInfo.slice(0, 4),
	);

	const handleShowCertificates = () => {
		if (certificate.length === 4) {
			setShowFullCertficates(true);
			setCertificate(certificatesInfo);
		} else {
			setShowFullCertficates(false);
			setCertificate(certificatesInfo.slice(0, 4));
		}
	};

	return (
		<div className="">
			{/* Projects section */}
			<div className="education mt-10">
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
					{Array.from({ length: 4 }, (_, id) => {
						return (
							<ProjectCard
								key={id}
								name={'Portfolio'}
								Components={[
									{
										Component: SiTailwindcss,
										color: '#06B6D4',
									},
									{
										Component: SiNextdotjs,
										color: '#ffffff',
									},
								]}
							/>
						);
					})}
				</div>
			</div>

			{/* Certificates section */}
			<div className="education mt-10">
				<div className="flex items-center justify-between p-3 space-x-3">
					<h1 className=" font-bold tracking-wide text-2xl capitalize">
						Certificates
					</h1>
					<span className={'flex-grow'}></span>
					<button
						className={`group relative bg-[#202020] rounded-md hover:shadow-md hidden lg:block`}
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
						className="transition-all md:text-blue-400 md:hover:text-cyan-400 bg-[#181818] p-2 md:bg-transparent md:p-0 rounded-md"
						onClick={handleShowCertificates}
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
					{certificate.map((el, elXid) => {
						const { data, Component } = el;
						return (
							<CertificateCard
								key={elXid}
								isGrid={isGrid}
								data={data}
								Component={Component}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
