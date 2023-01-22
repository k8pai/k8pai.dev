import React from 'react'
import Certificate from '../components/Certificate'

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
				<Certificate name={'Basic Javascript Concepts'} from={"UpGrad Campus"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/BasicJavascript.png"} />
				<Certificate name={'Advanced Javascript'} from={"UpGrad Campus"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/AdvancedJavascript.png"} />
				<Certificate name={'Chrome Dev Tools'} from={"UpGrad Campus"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/ChromeDevTools.jpg"} />
				<Certificate name={'Introduction CryptCurrency'} from={"UpGrad Campus"} date={'18 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/CryptoCurrecyIntroduction.png"} />
				<Certificate name={'Google Cloud Program'} from={"Google Cloud"} date={'18 July 2021'} link={''} imgLink={"/certificates/GoogleCloudCertification.jpg"} />
				<Certificate name={'Tailwind css v3'} from={"Codedamn Community"} date={'22 Jan 2023'} link={'https://codedamn.com/user/k8pai'} imgLink={"/certificates/tailwindcssv3.jpg"} />
			</div>
			
		</div>
	</div>
  )
}

export default skills