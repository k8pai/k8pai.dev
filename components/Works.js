import Image from 'next/image'
import Link from 'next/link'

const Works = (props) => {
	const { works } = props;
	return (
		<div className='recent-works w-full min-h-screen h-full flex flex-col justify-center relative snap-start'>
			<h1 className='recent works font-fjalla uppercase font-bold tracking-widest text-center text-4xl my-6'>Recent Works</h1>
			<br /><br />
			<div className='w-full px-4 grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 grid-flow-rows gap-4 place-items-center'>
				{works.map((data, ind) => 
					<div key={ind} className='bg-tertxt dark:bg-terbg shadow-xl rounded-md w-full max-w-[560px] md:max-w-[400px] sm:max-w-[400px] xsm:max-w-[300px] flex-col p-3'>
						<div className='ss-pic aspect-video md:max-w-[500px] xsm:max-w-[300px]'>
							<Link href={data.link} className="relative aspect-square">
								<Image
									className='rounded-md w-full'
									src={data.imgLink}
									width={600}
									height={600}
									alt={data.name}
								/>
							</Link>
						</div>
						<div className='relative  w-full md:max-w-[500px] xsm:max-w-[300px] h-fit rounded-md space-y-px mt-3 py-3'>
							<h1 className="font-semibold text-2xl tracking-wider font-mono">{data.name}</h1>
							<p className='py-px font-mono tracking-wide text-lg'>{data.desc}</p>
							<h5 className='font-mono'><code>{data.date}</code></h5>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Works