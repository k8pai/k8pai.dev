import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { IconContext } from 'react-icons';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import Typed from 'typed.js';

export default function Hero() {
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
		<div className='w-full h-[90vh] flex justify-evenly items-center'>
			<div className='flex flex-col justify-center text-center w-full mx-4 mx-auto'>
				<div className='min-h-[20vh] h-fit w-full'>
					<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center"><span ref={el}>Frontend</span></h1>
					<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">developer</h1>
					<br />
					<h5 className='continous-typing-element h-[10vh] my-6 tracking-wider md:text-center sm:text-center xsm:text-center'><code ref={el1}></code></h5>
				</div>
				<div className='flex md:justify-center sm:justify-center xsm:justify-center sm:my-[50px] xsm:my-[50px]'>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'https://instagram.com/_k8pai'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineInstagram />
						</IconContext.Provider>
					</Link>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'https://twitter.com/k8pai'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineTwitter />
						</IconContext.Provider>
					</Link>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'https://github.com/k8pai'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineGithub />
						</IconContext.Provider>
					</Link>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'https://linkedin.com/k8pai'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineLinkedin />
						</IconContext.Provider>
					</Link>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'mailto:thek8pai@gmail.com'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<AiOutlineMail />
						</IconContext.Provider>
					</Link>
					<Link className='p-2 mx-3 xsm:mx-2 xsm:p-1' href={'https://discord.com/users/898949804024012850'}>
						<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<SiDiscord />
						</IconContext.Provider>
					</Link>
				</div>
			</div>
		</div>
	)
}