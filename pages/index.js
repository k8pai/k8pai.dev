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
		<div className="flex-grow flex flex-col bg-tertext">
			<div className='dev info w-full flex md:flex-col sm:flex-col xsm:flex-col justify-evenly h-fit my-[200px] md:my-[100px] sm:my-[100px] xsm:my-[100px]'>
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
					/>
				</div>
			</div>
			<div className='w-full '>
				<h1 className='font-fjalla uppercase tracking-widest xsm:text-center sm:text-center md:text-center my-6 mt-12 text-3xl font-semibold text-blue-500'>Technologies and Tools</h1>
				<p className='mt-4 text-xl text-justify text-gray-500 dark:text-tertxt'>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
				<br />
				<div className='flex flex-wrap justify-between text-black'>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<NextJsIcon />
						<p className='ml-4 text-lg font-semibold'>Next JS</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<Logok8pai />
						<p className='ml-4 text-lg font-semibold'>logo</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<ReactIcon />
						<p className='ml-4 text-lg font-semibold'>React JS</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<TypeScriptIcon />
						<p className='ml-4 text-lg font-semibold'>TypeScript</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<JavaScriptIcon />
						<p className='ml-4 text-lg font-semibold'>JavaScript</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<HtmlIcon />
						<p className='ml-4 text-lg font-semibold'>HTML5</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<TailwindcssIcon />
						<p className='ml-4 text-lg font-semibold'>Tailwind</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<NodeJsIcon />
						<p className='ml-4 text-lg font-semibold'>Node JS</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<ExpressIcon />
						<p className='ml-4 text-lg font-semibold'>Express</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<ScssIcon />
						<p className='ml-4 text-lg font-semibold'>SCSS</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<GitIcon />
						<p className='ml-4 text-lg font-semibold'>Git</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<GithubIcon />
						<p className='ml-4 text-lg font-semibold'>Github</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<VscodeIcon />
						<p className='ml-4 text-lg font-semibold'>VS Code</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<BootstrapIcon />
						<p className='ml-4 text-lg font-semibold'>Bootstrap</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<MongodbIcon />
						<p className='ml-4 text-lg font-semibold'>MongoDB</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<PrismaIcon />
						<p className='ml-4 text-lg font-semibold'>Prisma</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<MysqlIcon />
						<p className='ml-4 text-lg font-semibold'>MySQL</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<VercelIcon />
						<p className='ml-4 text-lg font-semibold'>Vercel</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<Web3Icon />
						<p className='ml-4 text-lg font-semibold'>Web3 JS</p>
					</div>
					<div className='px-6 py-3 mx-4 my-2 w-48 bg-gray-50 mt-6 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<SolidityIcon />
						<p className='ml-4 text-lg font-semibold'>Solidity</p>
					</div>
				</div>
				<br/>
				<br/>

			</div>
			<div className='recent-works w-full py-[100px]'>
				<h1 className='recent works font-fjalla uppercase font-bold tracking-widest text-center text-4xl my-6'>Recent Works</h1>
				<br />
				<br />
				<div className=' w-full grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 grid-flow-rows gap-4 place-items-center'>
					<Works name={'Todolist'} desc={"This is a sample crud operations project to showcase my skills."} date={'16 Dec 2022'} link={'http://todolist-k8pai.vercel.app'} imgLink="/todolist.png" />
					<Works name={'SpiritWolf'} desc={"This is an NFT project I worked on with Web3 works included."} date={'13 July 2022'} link={'http://spiritwolf.vercel.app'} imgLink="/spiritwolf.png" />
					{/* <Works name={'Todolist'} desc={"This is a sample crud operations project to showcase my skills."} date={'16 Dec 2022'} link={'http://todolist-k8pai.vercel.app'} /> */}
					{/* <Works name={'Todolist'} desc={"This is a sample crud operations project to showcase my skills."} date={'16 Dec 2022'} link={'http://todolist-k8pai.vercel.app'} /> */}
				</div>
				
			</div>
		</div>
	)
}