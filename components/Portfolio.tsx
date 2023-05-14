import React from 'react';
import { IconContext } from 'react-icons/lib';
import { IoLogoJavascript } from 'react-icons/io';
import { SiGithub, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import CertificateCard from './CertificateCard';

export default function Portfolio() {
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
					<ProjectCard
						name={'Portfolio'}
						Components={[
							{ Component: SiTailwindcss, color: '#06B6D4' },
							{ Component: SiNextdotjs, color: '#ffffff' },
						]}
					/>
					<ProjectCard
						name={'Portfolio'}
						Components={[
							{ Component: SiTailwindcss, color: '#06B6D4' },
							{ Component: SiNextdotjs, color: '#ffffff' },
						]}
					/>
					<ProjectCard
						name={'Portfolio'}
						Components={[
							{ Component: SiTailwindcss, color: '#06B6D4' },
							{ Component: SiNextdotjs, color: '#ffffff' },
						]}
					/>
					<ProjectCard
						name={'Portfolio'}
						Components={[
							{ Component: SiTailwindcss, color: '#06B6D4' },
							{ Component: SiNextdotjs, color: '#ffffff' },
						]}
					/>
				</div>
			</div>

			{/* Certificates section */}
			<div className="education mt-10">
				<div className="flex items-center justify-between p-3">
					<h1 className=" font-bold tracking-wide text-2xl capitalize">
						Certificates
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
					<CertificateCard
						data={{
							name: 'javascript',
							issue: 'issued on Dec 16th, 2022',
							href: 'javascript.info',
						}}
						Component={{
							Component: IoLogoJavascript,
							color: '#F7DF1E',
						}}
					/>
					<CertificateCard
						data={{
							name: 'Advance Javascript',
							issue: 'issued on Dec 16th, 2022',
							href: 'javascript.info',
						}}
						Component={{
							Component: IoLogoJavascript,
							color: '#F7DF1E',
						}}
					/>
					<CertificateCard
						data={{
							name: 'React',
							issue: 'issued on Dec 16th, 2022',
							href: 'javascript.info',
						}}
						Component={{
							Component: SiReact,
							color: '#61DAFB',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
