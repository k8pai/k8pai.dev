'use client'

import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Resume from '../../components/resume/Resume'
import Contact from '../../components/contact/Contact'
import Portfolio from '../../components/portfolio/Portfolio'
import DownloadResumeButton from './DownloadResumeButton'

type ContentType = {
    name: string
}

const options = ['portfolio', 'resume', 'contact']
const AboutLayout = () => {
    const [content, setContent] = useState<string>('portfolio')

    const renderComponent = useCallback(() => {
        switch (content) {
            case 'contact':
                return <Contact />
            case 'portfolio':
                return <Portfolio />
            case 'resume':
                return <Resume />
        }
    }, [content])

    return (
        <div>
            <div className="flex space-x-2 md:space-x-7 p-2 rounded-md">
                {options?.map((name, elXid) => {
                    return (
                        <button
                            key={elXid}
                            className={`relative py-2`}
                            onClick={() => setContent(name)}
                        >
                            <span
                                className={`relative px-3 text-xs sm:text-base py-2 tracking-wider capitalize font-semibold`}
                            >
                                <motion.div className="absolute inset-0 bg-slate-200 dark:bg-[#181818] rounded-md shadow-md z-[-5]" />
                                {name === content ? (
                                    <motion.div
                                        className="absolute inset-0 bg-[#4338CA] bg-opacity-50 rounded-md shadow-md z-[-1]"
                                        layoutId="underline"
                                    />
                                ) : null}
                                {name}
                            </span>
                        </button>
                    )
                })}
                <span className={'flex-grow'}></span>
                <DownloadResumeButton name={content} />
            </div>
            {renderComponent()}
        </div>
    )
}

export default AboutLayout
