import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react';
import Link from 'next/link';

const SkillsBar = ({ link, skill, lvl}) => {
	const cardVariants= {
		offscreen: {
			width: '0%',
		},
		onscreen: {
			width: `${lvl}%`,
			transition: {
				duration: 1.5
			}
		}
	};
	const el = useRef();
	  
	return (
		<motion.div 
		initial="offscreen"
		whileInView="onscreen"
		viewport={{ once: false, amount: 0.1 }}
		className='flex-col justify-center space-y-1 w-full'>
			<div 
				onMouseOver={() => { 
					el.current.style.opacity="100" 
					}} 
				onMouseLeave={() => { 
					el.current.style.opacity="0" 
					}}
				className='h-4 w-full bg-pribg rounded-sm p-px cursor-pointer flex items-center'>
				<motion.div variants={cardVariants} className='m-0 bg-green-300 h-full rounded-sm'></motion.div>
			</div>
			<div className='flex justify-between items-center'>
				<Link href={link} className='font-semibold tracking-wider text-lg'>{skill}</Link>
				<h4 ref={el} className='font-semibold transition-opacity ease-in-out duration-100 tracking-wide text-base mr-3 opacity-0'>{lvl}%</h4>
			</div>
		</motion.div>
	)
}

export default SkillsBar