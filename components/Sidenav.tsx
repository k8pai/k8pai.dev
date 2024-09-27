'use client'

import Link from 'next/link'
import React from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { navLinks } from 'data'
import { ModeToggle } from './ThemeProvider'

export default function Sidenav() {
    const pathname = usePathname()

    return (
        <section className="mt-8 font-serif flex flex-row">
            <LayoutGroup>
                <nav
                    className="w-full flex flex-row  items-start relative px-4 pb-0 fade scroll-pr-6"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 px-0 my-4">
                        {navLinks.map(({ route, name }, _) => {
                            const isActive = route === pathname
                            return (
                                <Link
                                    key={route}
                                    href={route}
                                    className={`transition-all space-y-2 hover:text-neutral-400 dark:hover:text-neutral-200 flex align-middle ${
                                        !isActive
                                            ? 'text-neutral-300'
                                            : 'scale-105'
                                    }`}
                                >
                                    <span className="relative py-2 px-3 w-fit">
                                        {name}
                                        {isActive ? (
                                            <motion.div
                                                className="absolute w-3/4 h-px bottom-0 inset-x-0 mx-auto bg-[#4338CA] rounded-tr-lg rounded-br-lg z-[-1]"
                                                layoutId="sidebar"
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        ) : null}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </LayoutGroup>
        </section>
    )
}
