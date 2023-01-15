import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons';
import { BsHeartFill } from 'react-icons/bs';

const Footer = () => {
  return (
	<div className='flex-col items-center p-3'>
		<div className='flex justify-center items-center'>
			<div className='socials'><Link href={''}></Link></div>
		</div>
		<div className='flex justify-center items-center font-semibold'>
			<div className='socials flex flex-col space-y-2 justify-center items-center'>
				<div className='flex items-center font-semibold text-lg'>Made with <span className='px-2 animate-pulse'><IconContext.Provider value={{ color: "red", size:"1.1em", className: "global-class-name" }}><BsHeartFill /></IconContext.Provider></span> by <Link className='px-2' href={'https://twitter.com/k8pai'}> _k8pai</Link> 
				</div>
				<div><span>copyright &#64; {new Date().getFullYear()}</span></div>
			</div>
		</div>
	</div>
  )
}

export default Footer