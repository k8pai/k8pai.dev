import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { CiCalendarDate } from 'react-icons/ci'
import { SlLocationPin } from 'react-icons/sl'
import { MdAlternateEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { HiOutlineLink } from 'react-icons/hi'
import SkillsResume from '../components/SkillsResume';
import DownloadPdf from '../components/DownloadPdf';
import EducationResume from '../components/EducationResume';
import SocialsResume from '../components/SocialsResume';
import skillinfo from '../data/Skillinfo';
import CertificatesResume from '../components/CertificatesResume';
import AboutResume from '../components/AboutResume';


const about = () => {
	return (
		<div className='flex-grow max-w-7xl w-full mx-auto flex md:flex-col sm:flex-col xsm:flex-col md:items-center sm:items-center xsm:items-center justify-center'>
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
					<hr className='p-[1px] my-4 rounded-full dark:bg-slate-600 bg-slate-600' />
				</div>
				<div className=''>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<CiCalendarDate />
						<span>13 July 2001</span>
					</div>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<SlLocationPin />
						<span>Bengaluru, India</span>
					</div>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<BsPhone />
						<span>+91 79946 48190</span>
					</div>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<MdAlternateEmail />
						<Link href={"https://mailto:thek8pai@gmail.com"}>thek8pai@gmail.com</Link>
					</div>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<HiOutlineLink />
						<Link href={"https://k8pai.showwcase.com"}>showwcase </Link>
					</div>
					<div className='flex items-center space-x-2 mx-2 my-4'>
						<HiOutlineLink />
						<Link href={"https://codedamn.com/user/k8pai"}>codedamn</Link>
					</div>
					<DownloadPdf link={'../public/certificates/k8paiResume.pdf'} download={'k8paiResume.pdf'} />
				</div>
			</div>
			<div className='space-y-5 dark:bg-secbg bg-tertxt h-fit w-fit m-2 rounded-xl shadow-xl p-6 sm:p-5 xsm:p-3 sm:py-5 xsm:py-3'>
				<div className='aboutdiv'>
					<AboutResume />
				</div>
				<div className='aboutdiv'>
					<SkillsResume skills={skillinfo} />
				</div>
				<div className='aboutdiv font-semibold w-full'>
					<EducationResume />
				</div>
				
				<div className='aboutdiv font-semibold w-full'>
					<CertificatesResume />
				</div>
			</div>
		</div>
	)
}

export default about;