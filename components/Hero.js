import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { IconContext } from 'react-icons';
import Typed from 'typed.js';

export default function Hero({socials}) {
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
		<div className='w-full h-[80vh] flex justify-evenly items-center'>
			<div className='flex flex-col justify-center text-center w-full mx-4 mx-auto'>
				<div className='min-h-[20vh] h-fit w-full'>
					<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize"><span ref={el}>Frontend</span></h1>
					<h1 className="font-semibold text-4xl tracking-wider font-mono capitalize">developer</h1>
					<br />
					<h5 className='continous-typing-element h-[10vh] my-6 tracking-wider md:text-center sm:text-center xsm:text-center'><code ref={el1}></code></h5>
				</div>
				<div className='flex justify-center sm:my-[50px] xsm:my-[50px]'>
					{socials.map((data, ind) => (
						<Link key={ind} className='transition duration-200 hover:translate-y-[-4px] hover:rotate-12 p-2 mx-3 xsm:mx-2 xsm:p-1' href={data.url}>
							<IconContext.Provider value={{ size:"2.5em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<data.component />
							</IconContext.Provider>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}