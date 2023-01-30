
export default function TeachAndTools(props) {
	const { techs } = props;
	return (
		<div className='max-w-7xl w-full mx-auto min-h-screen h-full flex flex-col justify-center box-content'>
			<div className="mx-4">
				<h1 className='font-fjalla uppercase tracking-widest xsm:text-center sm:text-center md:text-center my-6 mt-12 text-3xl font-semibold text-blue-500'>Technologies and Tools</h1>
				<p className='mt-4 text-xl text-gray-500 dark:text-tertxt'>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
			</div>
			<br />
			<div className='flex flex-wrap justify-start xsm:justify-center text-black'>
				{techs.map((data, ind) => 
					<div key={ind} className='px-4 py-2 mx-3 my-3 w-44 bg-gray-50 rounded-lg flex items-center transition duration-200 hover:scale-125 cursor-pointer'>
						<data.component />
						<p className='ml-4 text-lg font-semibold'>{data.name}</p>
					</div>
				)}
			</div>
			<br/>
		</div>
	)
}
