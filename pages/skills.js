import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import Certificate from '../components/Certificate'
import Works from '../components/Works'

const skills = () => {
  return (
	<div className='flex-grow flex flex-col bg-tertext'>
		<div className='recent-works w-full py-[100px]'>
			<h1 className='recent works font-fjalla uppercase font-bold tracking-widest text-center text-4xl my-6'>Certificates</h1>
			<br />
			<br />
			<div className=' w-full grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 grid-flow-rows gap-4 place-items-center'>
				<Certificate name={'Internet Fundamentals'} from={"Codedamn Community"} date={'12 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/BasicsOfWeb.jpg"} />
				<Certificate name={'HTML and CSS'} from={"Codedamn Community"} date={'17 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/HtmlAndCss.jpg"} />
				<Certificate name={'Git and Github'} from={"Codedamn Community"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/GitVersionControl.jpg"} />
				<Certificate name={'NPM'} from={"Codedamn Community"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/NodePackageManager.jpg"} />
				
			</div>
			
		</div>
	</div>
  )
}

export default skills