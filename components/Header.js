import Link from 'next/link'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { TbSignature } from 'react-icons/tb'
import '../styles/header.module.css'
import { SiAboutdotme, SiHomeadvisor } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
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
				<div>
					<button className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' onClick={() => { setTheme('light') }}>
						<IconContext.Provider value={{ color: "white", size:"1.6em", className: "global-class-name" }}>
							<BsSunFill />
						</IconContext.Provider>
					</button>
					<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>{theme}</p>
				</div>
			)
		}else {
			return (
				<div>
					<button className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50  menu-shadow' onClick={() => { setTheme('dark') }}>
						<IconContext.Provider value={{ color: "black", size:"1.6em", className: "global-class-name" }}>
							<BsMoonStarsFill />
						</IconContext.Provider>
					</button>
					<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>{theme}</p>
				</div>

			)
		}
	}
	return (
		<div>
			<div className='main-section font-semibold transition duration-300 mt-8'>
				<ul className='h-full flex justify-center w-fit items-center space-x-12 rounded-full mx-auto style-none'>
					<div className='relative flex flex-col items-center'>
						<Link className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' href={''}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<GiHamburgerMenu />
							</IconContext.Provider>
						</Link>
						<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>menu</p>
					</div>
					<div className='group relative flex flex-col items-center'>
						<Link className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' href={'/'}>
							<IconContext.Provider value={{ size:"1.46em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<SiHomeadvisor />
							</IconContext.Provider>
						</Link>
						<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>Home</p>
					</div>
					<div className='group relative flex flex-col items-center'>
						<Link className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' href={'/about'}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<SiAboutdotme />
							</IconContext.Provider>
						</Link>
						<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>about</p>
					</div>
					<div className='group relative flex flex-col items-center'>
						<Link className='link-hover transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' href={'/skills'}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<VscTools />
							</IconContext.Provider>
						</Link>
						<p className='sibling-element capitalize opacity-0 transition duration-200 select-none'>skills</p>
					</div>
					{/* <Link className='p-3 rounded-full transition duration-300 hover:shadow-xl tracking-wider  hover:bg-pritxt hover:dark:bg-secbg' href={'/repos'}>
						<IconContext.Provider value={{ size:"1.4em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<CiFolderOn />
						</IconContext.Provider>
					</Link> */}
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

		</div>
	)
}