'use client'

import React from 'react'
import { FcRules } from 'react-icons/fc'

const DownloadResumeButton = ({ name }: { name: string }) => {
    const downloadResume = () => {
        const pdfURL = 'Resume_k8pai.pdf'

        const link = document.createElement('a')
        link.href = pdfURL
        link.download = 'Resume_k8pai.pdf'

        link.dispatchEvent(new MouseEvent('click'))
    }
    return (
        <button
            className={`group relative bg-slate-200 dark:bg-[#181818] px-3 py-2 rounded-md shadow-md ${
                name === 'resume' ? 'block' : 'hidden'
            }`}
            onClick={downloadResume}
        >
            <FcRules
                className="relative tracking-wider capitalize rounded-md font-semibold"
                size={'1.3em'}
            />
        </button>
    )
}

export default DownloadResumeButton
