import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { CiCalendarDate } from 'react-icons/ci'
import { SlLocationPin } from 'react-icons/sl'
import { MdAlternateEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { HiOutlineLink } from 'react-icons/hi'

import SkillsBar from '../components/SkillsBar';
import DownloadPdf from '../components/DownloadPdf';
import EducationResume from '../components/EducationResume';
import SocialsResume from '../components/SocialsResume';
import skillinfo from '../data/Skillinfo';


const about = () => {
	return (
		<div className='flex-grow flex md:flex-col sm:flex-col xsm:flex-col md:items-center sm:items-center xsm:items-center justify-center'>
			<div className='mediv flex-col w-full max-w-[300px] dark:bg-secbg bg-tertxt h-fit m-2 p-4 rounded-xl shadow-2xl'>
				<div className='profilepicdiv relative aspect-square'>
					<Image 
						className="rounded-lg"
						src={'/pic.jpg'}
						width={300}
						height={300}
						alt={'profile picture'}
					/>
				</div>
				<SocialsResume />
				<div className='w-full'>
					<hr className='dark:bg-slate-600 bg-slate-300' />
				</div>
				<div className=''>
					<div className='flex items-center space-x-2 m-3'>
						<CiCalendarDate />
						<span>13 July 2001</span>
					</div>
					<div className='flex items-center space-x-2 m-3'>
						<SlLocationPin />
						<span>Bengaluru, India</span>
					</div>
					<div className='flex items-center space-x-2 m-3'>
						<BsPhone />
						<span>+91 79946 48190</span>
					</div>
					<div className='flex items-center space-x-2 m-3'>
						<MdAlternateEmail />
						<Link href={"https://mailto:thek8pai@gmail.com"}>thek8pai@gmail.com</Link>
					</div>
					<div className='flex items-center space-x-2 m-3'>
						<HiOutlineLink />
						<Link href={"https://k8pai.showwcase.com"}>showwcase </Link>
					</div>
					<div className='flex items-center space-x-2 m-3'>
						<HiOutlineLink />
						<Link href={"https://codedamn.com/user/k8pai"}>codedamn</Link>
					</div>
					<DownloadPdf link={'../public/certificates/k8paiResume.pdf'} download={'k8paiResume.pdf'} />
				</div>
			</div>
			<div className='space-y-5 dark:bg-secbg bg-tertxt h-fit w-fit m-2 rounded-xl shadow-xl p-6 sm:p-5 xsm:p-3 sm:py-5 xsm:py-3'>
				<div className='aboutdiv'>
					<h1 className="font-semibold text-4xl xsm:text-2xl tracking-wider font-mono capitalize">About Me</h1>
					<div className='my-px mb-4 rounded-full w-[80px] h-[5px] bg-terbg shadow-xl'></div>
					<div className='font-semibold text-base xsm:text-sm tracking-wide leading-relaxed'>I am a web developer with experience in using technologies such as TailwindCSS, Next.js, React.js, Node.js, Java, and C++ for data structures and algorithms. I am a strong communicator and team player with leadership skills and a determination to succeed. I am passionate about constantly upgrading my skills and expanding my knowledge in the field. I am looking forward to taking on new challenges and continuing to grow as a developer.</div>
				</div>
				<div className='aboutdiv'>
					<SkillsBar skills={skillinfo} />
				</div>
				<div className='aboutdiv font-semibold w-full'>
					<EducationResume />
				</div>
				<div className='skilsdiv'></div>
			</div>
		</div>
	)
}

export default about;