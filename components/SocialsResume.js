import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons'
import { socialAccounts, studyPlatformLinks } from '../data/Socials'

export default function SocialsResume() {
	return (
		<div className='nameProfSocials flex-col items-center w-full mx-auto p-5 xsm:p-3 xsm:pt-0 pt-0'>
			<h1 className="font-semibold text-3xl tracking-wider font-mono capitalize text-center my-4">Sudarsan k Pai</h1>
			<h1 className="font-semibold text-base dark:bg-neutral-700 p-px px-3 my-4 rounded-full bg-tertxt font-mono capitalize w-fit mx-auto text-center">fullstack developer</h1>
			<div className='mt-6 flex md:justify-center justify-evenly items-center sm:my-[50px] xsm:my-[25px]'>
				{socialAccounts.map((data, ind) => (
					<Link className='p-[3px] transition duration-200 hover:ring-2 dark:ring-pritxt ring-secbg rounded-md' href={data.url}>
						<IconContext.Provider value={{ size:"1.7em", className: "global-class-name text-pribg dark:text-pritxt" }}>
							<data.component />
						</IconContext.Provider>
					</Link>
				))}
			</div>
		</div>
	)
}
