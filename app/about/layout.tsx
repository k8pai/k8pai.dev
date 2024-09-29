import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import Image from 'next/image'
import profilePhoto from '../../public/developer.png'
import Link from 'next/link'
import type { Metadata } from 'next'
import { socialLinks } from 'data'

export const metadata: Metadata = {
    metadataBase: new URL('https://k8pai.dev'),
    title: 'About',
    description: 'Software Engineer | Full Stack Developer | DevOps',
    openGraph: {
        title: 'About | k8pai',
        description: 'Software Engineer | Full Stack Developer | DevOps',
        url: 'https://k8pai.dev/about',
        siteName: 'Sudarsan k pai',
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        title: 'Sudarsan K Pai',
        card: 'summary_large_image',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="space-y-5">
            <div className="md:py-2 md:px-3 rounded-lg flex items-start">
                <div className="relative max-w-[150px] max-h-[150px] p-3 hidden sm:block">
                    <Image
                        src={profilePhoto}
                        className="aspect-square rounded-full"
                        alt="profile picture"
                    />
                </div>
                <div className="p-3">
                    <div className="flex space-x-3 items-center">
                        <h1 className="font-serif font-extrabold text-3xl capitalize ">
                            Sudarsan k pai
                        </h1>
                    </div>
                    <div className="status mt-2">
                        <div className="flex">
                            <span className="text-lg">
                                Full Stack Developer | Cloud Enthusiast |
                                Student
                            </span>
                        </div>
                        <div className="flex items-center space-x-1 text-zinc-600 dark:text-slate-400">
                            <MdLocationPin />
                            <span className="text-lg">Banglore, India</span>
                        </div>
                    </div>
                    <div className="flex mt-3 items-center space-x-3">
                        {socialLinks.map(
                            ({ color, Component, href }, elXid) => (
                                <Link
                                    target="_blank"
                                    key={elXid}
                                    href={href}
                                    className="p-1 transition-all duration-200  hover:scale-110 hover:shadow-md rounded-md"
                                >
                                    <Component color={color} size={'1.5em'} />
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
