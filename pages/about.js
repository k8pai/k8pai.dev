import Link from 'next/link'
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci'
import { MdAlternateEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import SkillsBar from '../components/SkillsBar';
import React from 'react'
import Image from 'next/image';
import '../styles/about.module.css'
import DownloadPdf from '../components/DownloadPdf';
import EducationResume from '../components/EducationResume';
import SocialsResume from '../components/SocialsResume';

function about(){
  return (
	<div className='flex-grow flex sm:flex-col xsm:flex-col sm:items-center xsm:items-center justify-center'>
		<div className='mediv flex-col max-w-[350px] w-full dark:bg-secbg bg-tertxt h-fit m-3 rounded-3xl shadow-xl'>
			<div className='profilepicdiv overflow-hidden relative aspect-square m-4 mb-0 xsm:m-3'>
				<Image 
					className="-top-1/2 rounded-lg w-full h-auto"
					src={'/pic.jpg'}
					fill={'layout'}
				/>
			</div>
			<SocialsResume />
			<div className='w-full px-6 xsm:px-3'>
				<hr className='dark:bg-slate-600 bg-slate-300' />
			</div>
			<div className='p-5 xsm:p-3'>
				<div className='flex items-center space-x-2 m-3'>
					<CiCalendarDate />
					<span>13 July 2001</span>
				</div>
				<div className='flex items-center space-x-2 m-3'>
					<CiLocationOn />
					<span>Bengaluru, India</span>
				</div>
				<div className='flex items-center space-x-2 m-3'>
					<MdAlternateEmail />
					<Link href={"https://mailto:thek8pai@gmail.com"}>thek8pai@gmail.com</Link>
				</div>
				<div className='flex items-center space-x-2 m-3'>
					<BsPhone />
					<span>+91 79946 48190</span>
				</div>
				<DownloadPdf link={'../public/certificates/BasicsOfWeb.pdf'} download={'BasicsOfWeb.pdf'} />
			</div>
		</div>
		<div className='flex-grow space-y-5 dark:bg-secbg bg-tertxt h-fit m-3 rounded-3xl sm:rounded-xl xsm:rounded-md shadow-xl p-8 sm:py-5 xsm:py-3'>
			<div className='aboutdiv'>
				<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize">About Me</h1>
				<div className='my-px mb-4 rounded-full w-[80px] h-[5px] bg-terbg shadow-xl'></div>
				<p className='font-semibold text-base tracking-wide leading-relaxed'>I'm looking for opportunities to use my web development skills to create functional and visually appealing websites and web applications. I have a bachelor's degree in computer science and have been working as a web developer for the past 2 years. During this time, I have gained extensive experience in HTML, CSS, and JavaScript, as well as frameworks such as ReactJS, NextJs, and also a basic knowledge of angular as well. I have also had the opportunity to work on a variety of projects, ranging from simple websites to complex web applications, and have consistently delivered high-quality work on time.</p>
			</div>
			<div className='aboutdiv font-semibold w-full'>
				<EducationResume />
			</div>
			<div className='aboutdiv'>
				<SkillsBar />
			</div>
			
			<div className='skilsdiv'></div>
		</div>
	</div>
  )
}

export default about;