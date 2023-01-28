import Head from 'next/head'
import Image from 'next/image'
import Works from '../components/Works'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { BootstrapIcon, ExpressIcon, GithubIcon, GitIcon, HtmlIcon, JavaScriptIcon, Logok8pai, MongodbIcon, MysqlIcon, NextJsIcon, NodeJsIcon, PrismaIcon, ReactIcon, ScssIcon, SolidityIcon, TailwindcssIcon, TypeScriptIcon, VercelIcon, VscodeIcon, Web3Icon } from '../components/socialIcons/SocialIcons';
import ContactForm from './ContactForm';
import worksData from '../data/Worksinfo';
import TeachAndTools from './TechAndTools';


export default function Home() {
	const el = useRef(null);
	const el1 = useRef(null);
	// Create reference to store the Typed instance itself
	const typed = useRef(null);
	const typed1 = useRef(null);
  
	useEffect(() => {
	  const options = {
		strings: [
			"Frontend ",
			"Backend ",
			"Web3 ",
			"Fullstack ",
		],
		typeSpeed: 150,
		backSpeed: 70,
		loop: true,
		loopCount: Infinity,
	  };
	  const options1 = {
		strings: [
			"I specialize in building frontend solutions <br> that are robust, scalable, and provide a <br> seamless user experience.",
			"I take pride in creating frontend products <br> that are not only functional, but also <br> visually appealing and intuitive to use."
			// "I like to craft solid and scalable <br> frontend products with great <br> user experiences.",
		],
		typeSpeed: 25,
		backSpeed: 50,
	  };
	  
	  // elRef refers to the <span> rendered below
	  typed.current = new Typed(el.current, options);
	  typed1.current = new Typed(el1.current, options1);
	  
	  return () => {
		// Make sure to destroy Typed instance during cleanup
		// to prevent memory leaks
		typed.current.destroy();
		typed1.current.destroy();
	  }
	}, [])

	return (
		<div className="flex-grow flex flex-col bg-tertext snap-mandatory snap-y">
			<div className='relative snap-start w-full min-h-screen h-full flex md:flex-col sm:flex-col xsm:flex-col justify-evenly items-center'>
				<div className='w-[60%] md:mb-[200px] md:mt-[50px] sm:mb-[200px] sm:mt-[50px] xsm:mb-[200px] xsm:mt-[50px] xsm:w-full flex flex-col justify-center md:w-full mx-auto'>
					<div className='min-h-[20vh] h-fit w-full'>
						<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center"><span ref={el}>Frontend</span></h1>
						<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">developer</h1>
						<br />
						<h5 className='continous-typing-element h-[10vh] my-6 tracking-wider md:text-center sm:text-center xsm:text-center'><code ref={el1}></code></h5>
					</div>
					<div className='flex md:justify-center sm:justify-center xsm:justify-center sm:my-[50px] xsm:my-[50px]'>
						<Link className='p-2 mr-3 xsm:mr-2' href={'https://instagram.com/_k8pai'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<AiOutlineInstagram />
							</IconContext.Provider>
						</Link>
						<Link className='p-2 mx-3 xsm:mx-2' href={'https://twitter.com/k8pai'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<AiOutlineTwitter />
							</IconContext.Provider>
						</Link>
						<Link className='p-2 mx-3 xsm:mx-2' href={'https://github.com/k8pai'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<AiOutlineGithub />
							</IconContext.Provider>
						</Link>
						<Link className='p-2 mx-3 xsm:mx-2' href={'https://linkedin.com/k8pai'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<AiOutlineLinkedin />
							</IconContext.Provider>
						</Link>
						<Link className='p-2 mx-3 xsm:mx-2' href={'mailto:thek8pai@gmail.com'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<AiOutlineMail />
							</IconContext.Provider>
						</Link>
						<Link className='p-2 mx-3 xsm:mx-2' href={'https://discord.com/users/898949804024012850'}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<SiDiscord />
							</IconContext.Provider>
						</Link>
					</div>
				</div>
				<div className='photo-section relative aspect-square flex-grow w-auto h-[300px]'>
					<Image 
						className='w-full h-auto rounded-md'
						src="/profile.png"
						fill="layout"
						alt='okie'
					/>
				</div>
			</div>
			<TeachAndTools />

			<Works works={worksData} />

			<ContactForm />
		</div>
	)
}