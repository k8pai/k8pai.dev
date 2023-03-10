import { IconContext } from 'react-icons'
import { FcCalendar } from 'react-icons/fc';
import eduinfo from '../data/Eduinfo';

const EducationResume = () => {
  return (
	<div className='mt-8'>
		<h1 className="my-4 text-4xl sm:text-2xl xsm:text-2xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">Education</h1>
		<div className='my-px mb-4 rounded w-[80px] h-[3px] bg-terbg shadow-xl md:hidden sm:hidden xsm:hidden'></div>
		<section className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-4 place-items-center">
			{eduinfo.map((data, ind) => (
				<div key={ind} className="w-full">
					<div className="p-3 bg-tertxt dark:bg-terbg rounded-lg shadow-xl space-y-px">
						<div className="text-gray-700 dark:text-gray-200 flex items-center space-x-3">
							<IconContext.Provider value={{ size: "1.5em", className: 'icon' }}>
								<FcCalendar />
							</IconContext.Provider>
							<p className='text-base xsm:text-sm'>{data.timePeriod}</p>
						</div>
						<p className="text-lg xsm:text-base">{data.degree}</p>
						<p className="text-sm">{data.school} {data.gpa? ' with ' + data.gpa: ''}</p>
					</div>
				</div>
			))}
		</section>
	</div>
  )
}

export default EducationResume
