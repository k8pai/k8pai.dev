import Link from 'next/link'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import React, { useEffect, useState } from 'react'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SiHomeadvisor, SiAboutdotme } from 'react-icons/si'
import { VscTools } from 'react-icons/vsc'
import { Logok8pai } from '../components/socialIcons/SocialIcons'


export default function Header() {
	
	const {systemTheme, theme, setTheme} = useTheme();
	const [showNav, setShowNav] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		console.log(showNav);
	}, [showNav])
	
	useEffect(() => {
		setMounted(true);
	}, [])
	const renderThemeSystem = () => {
		if(!mounted) return null;

		const currTheme = theme  === 'system' ? systemTheme : theme;

		if(currTheme == "dark"){
			return(
				<div className='group relative flex justify-center items-center -space-x-3'>
					{showNav? <button className='menu-shadow p-2 m-px rounded-lg tracking-wider z-50 flex items-center space-x-3' onClick={() => { setTheme('light') }}>
						<IconContext.Provider value={{ color: "white", size:"1.6em", className: "global-class-name" }}>
							<BsSunFill />
						</IconContext.Provider>
						<span>Light</span>
					</button>: null}
				</div>
			)
		}else {
			return (
				<div className='group relative flex justify-center items-center -space-x-3'>
					{showNav? <button className='menu-shadow p-2 m-px rounded-lg tracking-wider z-50 flex items-center space-x-3' onClick={() => { setTheme('dark') }}>
						<IconContext.Provider value={{ color: "black", size:"1.6em", className: "global-class-name" }}>
							<BsMoonStarsFill />
						</IconContext.Provider>
						<span>Dark</span>
					</button>: null}
				</div>
			)
		}
	}
	return (
		<div>
			<div className='main-section sticky top-0 left-0 w-full mx-auto bg-slate-300 dark:bg-pribg font-semibold transition duration-300 py-6'>
				<ul className='h-full flex flex-col justify-between items-center rounded-full mx-4 space-y-6 style-none'>
					<div className='w-full flex justify-between items-center'>
						<div className='group relative flex items-center space-x-3 px-2'>
							<Logok8pai />
						</div>
						<div className='flex-grow space-x-6 flex justify-center items-center w-full'>
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
							{renderThemeSystem()}
						</div>
						<button onClick={() => setShowNav(value => !value)} className='transition duration-300 p-2 m-px rounded-lg tracking-wider z-50 menu-shadow' href={''}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								{showNav? <AiOutlineClose />: <AiOutlineMenu />}
							</IconContext.Provider>
						</button>
					</div>
					{showNav? 
					<div className='w-full flex flex-col items-start space-y-6'>
						<Link className='menu-shadow p-2 m-px rounded-lg tracking-wider z-50 flex items-center space-x-3' href={'/'}>
							<IconContext.Provider value={{ size:"1.46em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<SiHomeadvisor />
							</IconContext.Provider>
							<span>Home</span>
						</Link>
						<Link className='menu-shadow p-2 m-px rounded-lg tracking-wider z-50 flex items-center space-x-3' href={'/about'}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<SiAboutdotme />
							</IconContext.Provider>
							<span>About</span>
						</Link>
						<Link className='menu-shadow p-2 m-px rounded-lg tracking-wider z-50 flex items-center space-x-3' href={'/skills'}>
							<IconContext.Provider value={{ size:"1.6em", className: "global-class-name text-pribg dark:text-pritxt" }}>
								<VscTools />
							</IconContext.Provider>
							<span>Skills</span>
						</Link>
						{renderThemeSystem()}
					</div>: null}
				</ul>
			</div>

		</div>
	)
}