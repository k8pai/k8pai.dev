import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Certificate = ({ name, from, date, link, imgLink }) => {
  return (
	<div className='shadow-xl rounded-md w-full max-w-[500px] md:max-w-[400px] sm:max-w-[400px] xsm:max-w-[300px] h-fit flex-col'>
		<div className='ss-pic relative w-full aspect-video md:max-w-[500px] xsm:max-w-[300px] h-auto p-5'>
			<Link href={link} className="">
				<Image
					className='w-full h-auto p-3 aspect-video rounded-xl transition duration-300'
					src={imgLink}
					fill='layout'
					alt={name}
				/>
			</Link>
		</div>
		<div className='relative xsm:text-sm sm:text-sm w-full md:max-w-[500px] xsm:max-w-[300px] h-fit rounded-md px-4 pb-5'>
			<h1 className="font-semibold text-2xl xsm:text-base sm:text-base tracking-wider font-mono">{name}</h1>
			<p className='py-px font-mono tracking-wide'>{from}</p>
			<h5 className='font-mono'><code>{date}</code></h5>
		</div>
	</div>
  )
}

export default Certificate