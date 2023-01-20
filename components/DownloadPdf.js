import React from 'react'
import { FiDownload } from 'react-icons/fi'


export default function DownloadPdf({ link: url, download: name}) {
	
	const handleClick = () => {
		const link = document.createElement('a');
		link.href = url;
		link.download = name;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<button className='font-semibold text-lg dark:bg-neutral-700 p-3 mt-4 rounded-full bg-pritxt font-mono capitalize w-full shadow-xl flex justify-center items-center space-x-2' onClick={handleClick}>
			<FiDownload />
			<span>Download CV</span>
		</button>
	)
}
