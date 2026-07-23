'use client'

import { type ReactNode, useState } from 'react'
import {
    LuExternalLink,
    LuFileText,
    LuGithub,
    LuInstagram,
    LuLinkedin,
    LuMail,
    LuMessageCircle,
    LuPackage,
} from 'react-icons/lu'
import { AnimatePresence, motion } from 'motion/react'
import BrowserChrome from './BrowserChrome'
import ChromeMenu from './ChromeMenu'
import { tabConfig } from './tabs'
import type { MenuRow, TabKey } from './types'

const socialCount = 5

const menuRows: MenuRow[] = [
    {
        icon: LuLinkedin,
        label: 'Linkedin',
        href: 'https://linkedin.com/in/k8pai',
        chevron: true,
    },
    {
        icon: LuGithub,
        label: 'Github (k8pai)',
        href: 'https://github.com/k8pai',
        chevron: true,
    },
    {
        icon: LuPackage,
        label: 'NPM Packages',
        href: 'https://www.npmjs.com/~k8pai',
        chevron: true,
    },
    {
        icon: LuMessageCircle,
        label: 'Discord',
        href: 'https://discord.com/users/898949804024012850',
        chevron: true,
    },
    {
        icon: LuInstagram,
        label: 'Instagram',
        href: 'https://instagram.com/_k8pai',
        chevron: true,
    },
    {
        icon: LuExternalLink,
        label: 'Calendar',
        href: 'https://calendar.k8pai.com',
        chevron: true,
    },
    {
        icon: LuExternalLink,
        label: 'Tailwind Inputs',
        href: 'https://ti-docs-2.vercel.app',
        chevron: true,
    },
    {
        icon: LuExternalLink,
        label: 'Todolist',
        href: 'https://todolist-k8pai.vercel.app',
        chevron: true,
    },
    {
        icon: LuGithub,
        label: 'Pinit repository',
        href: 'https://github.com/k8pai/pinit',
        chevron: true,
    },
    { icon: LuFileText, label: 'Notes archive', href: '/notes' },
    {
        icon: LuMail,
        label: 'Email me',
        href: 'mailto:thek8pai@gmail.com',
        shortcut: '⌘M',
    },
    {
        icon: LuMessageCircle,
        label: 'Discord',
        href: 'https://discord.com/users/898949804024012850',
        chevron: true,
    },
    {
        icon: LuGithub,
        label: 'Portfolio source',
        href: 'https://github.com/k8pai/k8pai.dev',
        chevron: true,
    },
]

export default function BrowserShell({
    activeTab,
    children,
}: {
    activeTab: TabKey
    children: ReactNode
}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const active = tabConfig.find((tab) => tab.key === activeTab) ?? tabConfig[0]

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#090d14] text-slate-100">
            <div className="mx-auto flex min-h-screen w-full max-w-[1480px] items-start lg:items-center">
                <section className="w-full rounded-[14px] border border-[#273142] bg-[#0f141d] shadow-[0_28px_90px_-34px_rgba(0,0,0,0.9)]">
                    <div className="relative">
                        <BrowserChrome
                            activeTab={activeTab}
                            path={active.path}
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                        <AnimatePresence>
                            {menuOpen ? (
                                <ChromeMenu
                                    rows={menuRows}
                                    onClose={() => setMenuOpen(false)}
                                    socialCount={socialCount}
                                />
                            ) : null}
                        </AnimatePresence>
                    </div>

                    <div className="min-h-[620px] bg-[#0b0f17] px-4 py-7 sm:px-6 lg:min-h-[760px] lg:px-12 lg:py-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.24, ease: 'easeOut' }}
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </main>
    )
}
