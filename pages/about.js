import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai';
import { TiSocialLinkedin } from 'react-icons/ti'
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci'
import { IconContext } from 'react-icons';
import { MdAlternateEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import SkillsBar from '../components/SkillsBar';
import React from 'react'
import Image from 'next/image';

function about(){
	const skills = [
		["Nextjs", 78],
		["React Js", 85],
		["Javascript", 92],
		["HTML5", 98],
		["css3", 94],
		["TypeScript", 60],
		["Java", 88],
		["Python", 72],
	]
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
			<div className='nameProfSocials flex-col items-center w-full mx-auto p-5 xsm:p-3 xsm:pt-0 pt-0'>
				<h1 className="font-semibold text-3xl tracking-wider font-mono capitalize text-center my-4">Sudarsan k Pai</h1>
				<h1 className="font-semibold text-base dark:bg-neutral-700 p-px px-3 my-4 rounded-full bg-tertxt font-mono capitalize w-fit mx-auto text-center">fullstack developer</h1>
				<div className='my-4 flex md:justify-center justify-center items-center sm:my-[50px] xsm:my-[25px]'>
					<Link className='p-[3px] mx-2 transition duration-200 hover:ring-2 dark:ring-pritxt ring-secbg rounded-md' href={'https://instagram.com/_k8pai'}>
						<IconContext.Provider value={{ size:"1.7em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineInstagram />
						</IconContext.Provider>
					</Link>
					<Link className='p-[3px] mx-2 transition duration-200 hover:ring-2 dark:ring-pritxt ring-secbg rounded-md' href={'https://twitter.com/k8pai'}>
						<IconContext.Provider value={{ size:"1.7em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineTwitter />
						</IconContext.Provider>
					</Link>
					<Link className='p-[3px] mx-2 transition duration-200 hover:ring-2 dark:ring-pritxt ring-secbg rounded-md' href={'https://github.com/k8pai'}>
						<IconContext.Provider value={{ size:"1.7em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineGithub />
						</IconContext.Provider>
					</Link>
					<Link className='p-[3px] mx-2 transition duration-200 hover:ring-2 dark:ring-pritxt ring-secbg rounded-md' href={'https://linkedin.com/k8pai'}>
						<IconContext.Provider value={{ size:"2.1em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<TiSocialLinkedin />
						</IconContext.Provider>
					</Link>
				</div>
			</div>
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
				
				<button className='font-semibold text-lg dark:bg-neutral-700 p-px px-3 my-4 rounded-full bg-pritxt font-mono capitalize w-full shadow-xl'>
					<div className='flex justify-center items-center space-x-2 m-3'>
						<FiDownload />
						<span>Download CV</span>
					</div>
				</button>
			</div>
		</div>
		<div className='flex-grow dark:bg-secbg bg-tertxt h-fit m-3 rounded-3xl sm:rounded-xl xsm:rounded-md shadow-xl'>
			<div className='aboutdiv p-8 sm:p-5 xsm:p-3 pb-0'>
				<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize">About Me</h1>
				<div className='my-2 rounded-full w-[80px] h-[7px] bg-terbg shadow-xl'></div>				 
				<br />
				<p className='font-semibold text-base tracking-wide leading-relaxed'>I'm looking for opportunities to use my web development skills to create functional and visually appealing websites and web applications. I have a bachelor's degree in computer science and have been working as a web developer for the past 2 years. During this time, I have gained extensive experience in HTML, CSS, and JavaScript, as well as frameworks such as ReactJS, NextJs, and also a basic knowledge of angular as well. I have also had the opportunity to work on a variety of projects, ranging from simple websites to complex web applications, and have consistently delivered high-quality work on time.</p>
			</div>
			<div className='whatIDo p-8'>
				<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">what i do</h1>
				<br />
				<div className='grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 gap-4 place-items-center'>
					<div className='dark:bg-terbg bg-sectxt h-fit w-full flex-grow flex rounded-lg shadow-sm'>
						<div className='picture p-3'>pic1</div>
						<div className='skills p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
					</div>
					<div className='dark:bg-terbg bg-sectxt h-fit w-full flex-grow flex rounded-lg shadow-sm'>
						<div className='picture p-3'>pic1</div>
						<div className='skills p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
					</div>
					<div className='dark:bg-terbg bg-sectxt h-fit w-full flex-grow flex rounded-lg shadow-sm'>
						<div className='picture p-3'>pic1</div>
						<div className='skills p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
					</div>
					<div className='dark:bg-terbg bg-sectxt h-fit w-full flex-grow flex rounded-lg shadow-sm'>
						<div className='picture p-3'>pic1</div>
						<div className='skills p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
					</div>
				</div>
			</div>
			<div className='aboutdiv p-8 pb-0'>
				<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">skills</h1>
				<br />
				<div className='grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 gap-4 place-items-center'>
					<SkillsBar link={'https://www.typescriptlang.org/'} skill={"TypeScript"} lvl={60} />
					<SkillsBar link={'https://www.python.org/'} skill={"Python"} lvl={72} />
					<SkillsBar link={'https://nextjs.org/'} skill={"Next Js"} lvl={78} />
					<SkillsBar link={'https://reactjs.org/'} skill={"React Js"} lvl={85} />
					<SkillsBar link={'https://dev.java/learn/'} skill={"Java"} lvl={88} />
					<SkillsBar link={'https://developer.mozilla.org/en-US/docs/Learn/JavaScript'} skill={"JavaScript"} lvl={92} />
					<SkillsBar link={'https://developer.mozilla.org/en-US/docs/Learn/CSS'} skill={"CSS3"} lvl={94} />
					<SkillsBar link={'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'} skill={"HTML5"} lvl={98} />
				</div>
			</div>
			
			<div className='skilsdiv'></div>
		</div>
	</div>
  )
}

export default about