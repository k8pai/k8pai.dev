import Link from 'next/link'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { TbSignature } from 'react-icons/tb'
import '../styles/header.module.css'
import { SiAboutdotme, SiHomeadvisor } from 'react-icons/si'
import { SlSocialSpotify } from 'react-icons/sl'
import { VscTools } from 'react-icons/vsc'
import { CiFolderOn } from 'react-icons/ci'


export default function Header() {
	
	const {systemTheme, theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => {
		setMounted(true);
	}, [])
	const renderThemeSystem = () => {
		if(!mounted) return null;

		const currTheme = theme  === 'system' ? systemTheme : theme;

		if(currTheme == "dark"){
			return(
				<button className='transition duration-200 hover:shadow-xl p-3 rounded-full rotate-[-90deg] hover:bg-secbg' onClick={() => { setTheme('light') }}>
					<IconContext.Provider value={{ color: "white", size:"1.4em", className: "global-class-name" }}>
						<BsSunFill />
					</IconContext.Provider>
				</button>
			)
		}else {
			return (
				<button className='transition duration-200 hover:shadow-xl p-3 rounded-full hover:bg-pritxt' onClick={() => { setTheme('dark') }}>
					<IconContext.Provider value={{ color: "black", size:"1.4em", className: "global-class-name" }}>
						<BsMoonStarsFill />
					</IconContext.Provider>
				</button>
			)
		}
	}
	return (
		<div className='main-section flex justify-center items-center p-6 font-semibold transition duration-300'>
			<ul className='flex justify-center style-none bg-tertxt dark:bg-terbg rounded-full p-2 space-x-3'>
				<Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider hover:bg-pritxt hover:dark:bg-secbg' href={'/'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<SiHomeadvisor />
					</IconContext.Provider>
				</Link>
				<Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider hover:bg-pritxt hover:dark:bg-secbg' href={'/about'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<SiAboutdotme />
					</IconContext.Provider>
				</Link>
				<Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider  hover:bg-pritxt hover:dark:bg-secbg' href={'/skills'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<VscTools />
					</IconContext.Provider>
				</Link>
				<Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider  hover:bg-pritxt hover:dark:bg-secbg' href={'/repos'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<CiFolderOn />
					</IconContext.Provider>
				</Link>
				{/* <Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider  hover:bg-pritxt hover:dark:bg-secbg' href={'/spotify'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<SlSocialSpotify />
					</IconContext.Provider>
				</Link>
				<Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider  hover:bg-pritxt hover:dark:bg-secbg' href={'/sign'}>
					<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
						<TbSignature />
					</IconContext.Provider>
				</Link> */}
				{renderThemeSystem()}
			</ul>
		</div>
	)
}