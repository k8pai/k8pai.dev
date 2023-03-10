import React from 'react'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { IconContext } from 'react-icons';

const SkillsBar = ({ skills }) => {
	return (
		<div className='mt-8'>
			<h1 className="font-semibold my-4 text-4xl sm:text-2xl xsm:text-2xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">skills</h1>
			<div className='my-px mb-4 rounded w-[80px] h-[3px] bg-terbg shadow-xl md:hidden sm:hidden xsm:hidden'></div>
			<div className='grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-6 place-items-center'>
				{skills.map((data, ind) => {
					return (
						<motion.div key={ind} className='flex-col justify-end space-y-2 w-full'>
							<div className='h-3 w-full bg-pribg rounded-sm p-px cursor-pointer flex items-center'>
								<motion.div initial={{ width: '0%', transition: { duration: .5 } }} animate={{ width: `${data.lvl}%`, transition: { duration: 1.25 } }} className='m-0 bg-green-300 h-full rounded-sm'></motion.div>
							</div>
							<div className='flex justify-between items-baseline'>
								<div className='flex space-x-3 ml-2'>
									<IconContext.Provider value={{ size: "1.2em", className: "global-class-name text-pribg dark:text-pritxt" }}>
										<data.component />
									</IconContext.Provider>
									<Link href={data.link} className='font-semibold tracking-wider text-lg xsm:text-base'>{data.skill}</Link>
								</div>
								<h4 className='font-semibold tracking-wide text-base xsm:text-sm mr-px'>{data.lvl}%</h4>
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	);
}

export default SkillsBar