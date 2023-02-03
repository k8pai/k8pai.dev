import { IconContext } from 'react-icons'
import { FcCalendar } from 'react-icons/fc';
import eduinfo from '../data/Eduinfo';
import CertificateData from '../data/CertificateData';
import { SlGraduation } from 'react-icons/sl';
import Image from 'next/image';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';

const CertificatesResume = () => {
	return (
		<div className='mt-8'>
			<h1 className="my-4 text-4xl sm:text-2xl xsm:text-2xl tracking-wider font-mono capitalize md:text-center sm:text-center xsm:text-center">Certificates</h1>
			<div className='my-px mb-4 rounded w-[80px] h-[3px] bg-terbg shadow-xl md:hidden sm:hidden xsm:hidden'></div>
			<section className="grid grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-4 place-items-center">
				{CertificateData.map((data, ind) => (
					<div key={ind} className="w-full">
						<div className="p-3 bg-tertxt dark:bg-terbg rounded-lg shadow-xl space-y-2">
							<div className="text-gray-700 dark:text-gray-200 flex items-center space-x-3">
								<IconContext.Provider value={{ size: "1.5em", className: 'icon' }}>
									<SlGraduation />
								</IconContext.Provider>
								<p className="text-lg xsm:text-base">{data.name}</p>
								<span className='flex-grow'></span>
								<Link href={data.src} className='p-1 rounded transition duration-200 hover:bg-sectxt dark:hover:bg-slate-800'>
									<IconContext.Provider value={{ size: "1em", className: 'icon' }}>
										<HiExternalLink />
									</IconContext.Provider>
								</Link>
							</div>
							<p className="text-sm">{data.institutionName} • {data.certificationDate} - {data.expiration}</p>
						</div>
					</div>
				))}
			</section>
		</div>
	)
}

export default CertificatesResume
