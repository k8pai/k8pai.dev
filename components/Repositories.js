import Link from 'next/link'
import { CiFolderOn } from 'react-icons/ci'
import { TbGitFork } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Repositories = ({ repo }) => {
  return (
	<div className='flex-col rounded-md shadow-xl p-8 m-2 bg-tertxt dark:bg-secbg h-fit space-y-2 max-w-[400px] w-full'>
		<div className='flex items-center space-x-3'>
			<IconContext.Provider value={{ size:"1.4em", className: "global-class-name" }}>
				<CiFolderOn />
			</IconContext.Provider>
			<Link href={repo.html_url}  className=' font-semibold text-lg tracking-wide'>{repo.full_name}</Link>
		</div>
		<div className='flex space-x-3'>
			<h1 className='capitalize'>{repo.description}</h1>
		</div>
		<div className='flex space-x-3'>
			<div className='flex items-center space-x-1'>
				<TbGitFork />
				<h1 className=''>{repo.forks}</h1>
			</div>
			<div className='flex items-center space-x-1'>
				<AiOutlineStar />
				<h1 className=''>{repo.watchers}</h1>
			</div>
		</div>
	</div>
  )
}

export default Repositories