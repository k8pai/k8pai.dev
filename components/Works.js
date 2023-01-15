import Image from 'next/image'
import Link from 'next/link'

const Works = ({ name, desc, date, link }) => {
  return (
	<div className='bg-sectxt dark:bg-terbg shadow-xl  rounded-md w-full max-w-[500px] md:max-w-[400px] sm:max-w-[400px] xsm:max-w-[300px] h-fit flex-col'>
		<div className='ss-pic relative w-full md:max-w-[500px] xsm:max-w-[300px] h-[300px] xsm:[140px] p-5'>
			<Link href={link} className="">
				<Image
					className='w-full h-auto p-3 aspect-video rounded-xl transition duration-300'
					src={'/todolist.png'}
					fill='layout'
				/>
			</Link>
		</div>
		<div className='relative  w-full md:max-w-[500px] xsm:max-w-[300px] h-fit rounded-md px-4 pb-5'>
			<h1 className="font-semibold text-2xl tracking-wider font-mono">{name}</h1>
			<p className='py-px font-mono tracking-wide text-lg'>{desc}</p>
			<h5 className='font-mono'><code>{date}</code></h5>
		</div>
	</div>
  )
}

export default Works