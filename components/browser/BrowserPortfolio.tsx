'use client'

import { projects, socialLinks } from 'data'
import Image from 'next/image'
import Link from 'next/link'
import { type CSSProperties, type ReactNode, useMemo, useState } from 'react'
import {
    LuBriefcase,
    LuChevronRight,
    LuExternalLink,
    LuFileText,
    LuGithub,
    LuInstagram,
    LuLinkedin,
    LuMail,
    LuMessageCircle,
    LuMinus,
    LuEllipsisVertical,
    LuPackage,
    LuPlus,
    LuRefreshCw,
    LuRocket,
    LuSearch,
    LuUser,
    LuX,
} from 'react-icons/lu'
import { AnimatePresence, motion } from 'motion/react'
import type { IconType } from 'react-icons'
import { MdLockOutline } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type TabKey = 'projects' | 'experience' | 'about' | 'notes'

type BrowserPost = {
    slug: string
    title: string
    summary: string
    date: string
    displayDate: string
}

type MenuRow = {
    icon: IconType
    label: string
    href?: string
    shortcut?: string
    chevron?: boolean
    muted?: boolean
}

const tabConfig: {
    key: TabKey
    label: string
    path: string
    color: string
}[] = [
        { key: 'projects', label: 'Projects', path: 'projects', color: '#4285F4' },
        {
            key: 'experience',
            label: 'Work Experience',
            path: 'experience',
            color: '#34A853',
        },
        { key: 'about', label: 'About', path: 'about', color: '#FBBC05' },
        { key: 'notes', label: 'Notes', path: 'notes', color: '#EA4335' },
    ]

const workItems = [
    {
        title: 'Full-stack developer',
        body: '2+ years building React, Node.js, and TypeScript products with clean interface design.',
        color: '#34A853',
    },
    {
        title: 'Automation and backend workflows',
        body: 'Gmail and Google API automation, authenticated access patterns, and reusable CLI tooling.',
        color: '#4285F4',
    },
    {
        title: 'Frontend interaction systems',
        body: 'Animation-driven UI, project dashboards, docs surfaces, and responsive product flows.',
        color: '#FBBC05',
    },
]

const skillTags = [
    'React',
    'Next JS',
    'TypeScript',
    'Node js',
    'Tailwindcss',
    'Framer Motion',
    'Mongo',
    'Redis',
    'Docker',
    'GitHub Actions',
]

const extraWorks = [
    {
        title: 'Tailwind Inputs',
        body: 'UI documentation site',
        href: 'https://ti-docs-2.vercel.app',
    },
    {
        title: 'Todolist',
        body: 'Daily task app',
        href: 'https://todolist-k8pai.vercel.app',
    },
    {
        title: 'Pinit',
        body: 'Browser extension repository',
        href: 'https://github.com/k8pai/pinit',
    },
]

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111827" offset="20%" />
      <stop stop-color="#1f2937" offset="50%" />
      <stop stop-color="#111827" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111827" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

function getSocialIcon(title: string) {
    const normalized = title.toLowerCase()

    if (normalized.includes('linkedin')) return LuLinkedin
    if (normalized.includes('github')) return LuGithub
    if (normalized.includes('npm')) return LuPackage
    if (normalized.includes('discord')) return LuMessageCircle
    if (normalized.includes('instagram')) return LuInstagram

    return LuExternalLink
}

export default function BrowserPortfolio({ posts }: { posts: BrowserPost[] }) {
    const [activeTab, setActiveTab] = useState<TabKey>('projects')
    const [menuOpen, setMenuOpen] = useState(false)

    const active = tabConfig.find((tab) => tab.key === activeTab) ?? tabConfig[0]

    const menuRows = useMemo<MenuRow[]>(
        () => [
            ...socialLinks.map((link) => ({
                icon: getSocialIcon(link.title),
                label: link.title,
                href: link.href,
                chevron: true,
            })),
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
        ],
        []
    )

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#090d14] text-slate-100">
            <div className="mx-auto flex min-h-screen w-full max-w-[1480px] items-start lg:items-center">
                <section className="w-full rounded-[14px] border border-[#273142] bg-[#0f141d] shadow-[0_28px_90px_-34px_rgba(0,0,0,0.9)]">
                    <div className="relative">
                        <BrowserChrome
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            path={active.path}
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                        />
                        <AnimatePresence>
                            {menuOpen ? (
                                <ChromeMenu
                                    rows={menuRows}
                                    onClose={() => setMenuOpen(false)}
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
                                {activeTab === 'projects' ? (
                                    <ProjectsTab />
                                ) : null}
                                {activeTab === 'experience' ? (
                                    <ExperienceTab />
                                ) : null}
                                {activeTab === 'about' ? <AboutTab /> : null}
                                {activeTab === 'notes' ? (
                                    <NotesTab posts={posts} />
                                ) : null}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </main>
    )
}

function BrowserChrome({
    activeTab,
    setActiveTab,
    path,
    menuOpen,
    setMenuOpen,
}: {
    activeTab: TabKey
    setActiveTab: (tab: TabKey) => void
    path: string
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}) {
    return (
        <div className="rounded-t-[14px] bg-[#202124] pt-2">
            <div className="flex min-w-0 items-center border-b">
                <div className="hidden shrink-0 items-center gap-2 px-3 sm:flex">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="scrollbar-none flex min-w-0 flex-1 gap-1 overflow-x-auto">
                    {tabConfig.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveTab(tab.key)}
                            className={`group relative flex h-10 min-w-[138px] items-center gap-2 rounded-t-lg border px-3 text-left text-xs font-semibold transition sm:min-w-[150px] ${activeTab === tab.key
                                ? 'border-[#3b82f6]/70 bg-[#111827] text-slate-50'
                                : 'border-[#303134] bg-[#202124] text-slate-400 hover:bg-[#26272a] hover:text-slate-100'
                                }`}
                            aria-current={activeTab === tab.key}
                        >
                            <span
                                className="h-[15px] w-[15px] shrink-0 rounded-[4px]"
                                style={{ backgroundColor: tab.color }}
                            />
                            <span className="min-w-0 flex-1 truncate">
                                {tab.label}
                            </span>
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-slate-500 transition hover:bg-[#343842] group-hover:text-slate-100">
                                <LuX size={14} strokeWidth={2.3} />
                            </span>
                        </button>
                    ))}
                </div>

                <span className="hidden p-2 text-2xl text-slate-400 md:block">
                    <FaPlus size={16} />
                </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2">
                <button
                    type="button"
                    className="hidden h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-[#2c2d30] hover:text-slate-100 sm:grid"
                    aria-label="Back"
                >
                    <FaArrowLeftLong size={16} />
                </button>
                <button
                    type="button"
                    className="hidden h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-[#2c2d30] hover:text-slate-100 sm:grid"
                    aria-label="Forward"
                >
                    <FaArrowRightLong size={16} />
                </button>
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-[#2c2d30] hover:text-slate-100 active:rotate-180"
                    aria-label="Reload page"
                >
                    <LuRefreshCw size={16} />
                </button>

                <div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#2b3648] bg-[#111827] px-4 text-xs font-medium text-slate-300">
                    <span className="shrink-0 text-emerald-300">
                        <MdLockOutline size={16} />
                    </span>
                    <span className="truncate">https://k8pai.com/{path}</span>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`grid h-9 w-9 place-items-center rounded-full border border-[#303134] text-slate-300 transition hover:bg-[#343842] ${menuOpen ? 'bg-[#343842]' : 'bg-[#202124]'
                        }`}
                    aria-label="Open Chrome-style portfolio menu"
                    aria-expanded={menuOpen}
                >
                    <LuEllipsisVertical size={20} />
                </button>
            </div>
        </div>
    )
}

function ChromeMenu({
    rows,
    onClose,
}: {
    rows: MenuRow[]
    onClose: () => void
}) {
    const rowGroups = [
        rows.slice(0, socialLinks.length),
        rows.slice(socialLinks.length, socialLinks.length + 5),
        rows.slice(socialLinks.length + 5),
    ]

    return (
        <>
            <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-30 cursor-default"
                onClick={onClose}
            />
            <motion.aside
                initial={{ opacity: 0, scale: 0.98, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
                className="absolute right-2 top-[76px] z-40 max-h-[min(520px,calc(100vh-108px))] w-[min(380px,calc(100vw-24px))] overflow-y-auto rounded-2xl border border-[#4b4b3c] bg-[#14150e] p-2.5 text-[#e7e4da] shadow-[0_24px_70px_-22px_rgba(0,0,0,0.85)] sm:right-4"
            >
                <Link
                    href="https://github.com/k8pai/k8pai.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2.5 flex items-center gap-3 rounded-[14px] bg-[#585b00] px-3.5 py-2.5 text-sm font-semibold text-[#f5f2e9] transition hover:bg-[#686c00]"
                >
                    <LuRocket size={18} />
                    <span className="min-w-0 flex-1">Portfolio source</span>
                    <span className="hidden text-xs text-[#f2efd7] sm:block">
                        Latest code
                    </span>
                </Link>

                <Link
                    href="https://linkedin.com/in/k8pai"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-1.5 flex h-11 items-center gap-3 rounded-xl bg-[#2c2f1d] px-3 text-sm font-semibold transition hover:bg-[#383b25]"
                >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-600 text-[10px]">
                        sp
                    </span>
                    <span className="min-w-0 flex-1 truncate">
                        sudarsan (`)
                    </span>
                    <span className="rounded-full bg-[#5b5f00] px-2.5 py-1 text-[11px]">
                        Signed in
                    </span>
                    <LuChevronRight
                        size={16}
                        className="shrink-0 text-[#c3c0b7]"
                    />
                </Link>

                <MenuSection title="Social" rows={rowGroups[0]} />

                <MenuDivider />

                <div className="grid h-10 grid-cols-[28px_1fr_28px_46px_28px] items-center rounded-lg px-3 text-sm font-semibold text-[#e7e4da]">
                    <LuSearch size={16} className="text-[#d8d6cc]" />
                    <span>View</span>
                    <MenuBubble>
                        <LuMinus size={15} />
                    </MenuBubble>
                    <span className="text-center text-sm">100%</span>
                    <MenuBubble>
                        <LuPlus size={15} />
                    </MenuBubble>
                </div>

                <MenuDivider />

                <MenuSection title="Work" rows={rowGroups[1]} />

                <MenuDivider />

                <MenuSection title="Contact" rows={rowGroups[2]} />
            </motion.aside>
        </>
    )
}

function MenuSection({ title, rows }: { title?: string; rows: MenuRow[] }) {
    return (
        <div className="space-y-1">
            {title ? (
                <p className="px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#999680]">
                    {title}
                </p>
            ) : null}
            {rows.map((row) => (
                <MenuItem key={row.label} row={row} />
            ))}
        </div>
    )
}

function MenuDivider() {
    return <div className="-mx-2.5 my-1.5 h-px bg-[#4b4b34]" />
}

function MenuItem({ row }: { row: MenuRow }) {
    const Icon = row.icon
    const className =
        'grid min-h-9 grid-cols-[28px_1fr_auto_auto] items-center gap-2 rounded-lg px-3 text-left text-sm font-semibold transition hover:bg-[#2c2f1d]'

    const content = (
        <>
            <Icon size={16} className="text-[#d8d6cc]" />
            <span
                className={`min-w-0 truncate ${row.muted ? 'text-[#d5d2c8]' : ''
                    }`}
            >
                {row.label}
            </span>
            {row.shortcut ? (
                <span className="text-xs text-[#d8d6cc]">{row.shortcut}</span>
            ) : null}
            {row.chevron ? (
                <LuChevronRight size={16} className="text-[#c3c0b7]" />
            ) : null}
        </>
    )

    if (row.href) {
        return (
            <Link
                href={row.href}
                target={row.href.startsWith('http') ? '_blank' : undefined}
                rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                className={className}
            >
                {content}
            </Link>
        )
    }

    return <div className={className}>{content}</div>
}

function MenuBubble({ children }: { children: ReactNode }) {
    return (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#252617] text-[#e7e4da]">
            {children}
        </span>
    )
}

function SectionHero({
    eyebrow,
    title,
    body,
}: {
    eyebrow: string
    title: string
    body: string
}) {
    return (
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
            <div>
                <span className="inline-flex rounded-full border border-[#263142] bg-[#182033] px-3 py-2 text-xs font-semibold text-[#8cc8ff]">
                    {eyebrow}
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                    {body}
                </p>
            </div>
            <div className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                <h2 className="font-bold text-slate-50">Quick signal</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                    Browser tabs replace the menu as the main navigation.
                    Guestbook is intentionally omitted from this redesigned
                    portfolio surface.
                </p>
            </div>
        </div>
    )
}

function ProjectsTab() {
    return (
        <section>
            <SectionHero
                eyebrow="Projects tab"
                title="Selected projects"
                body="Live previews and repositories sit directly on each project, so the portfolio behaves like a focused workbench instead of a static link list."
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
                <div className="grid gap-4 xl:grid-cols-2">
                    {projects.slice(0, 4).map((project) => (
                        <ProjectBrowserCard key={project.name} project={project} />
                    ))}
                </div>
                <aside className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                    <h2 className="text-xl font-bold">More work</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        Smaller projects and repositories stay in the Chrome
                        menu, but the useful ones are surfaced here too.
                    </p>
                    <div className="mt-5 space-y-3">
                        {extraWorks.map((work) => (
                            <Link
                                key={work.title}
                                href={work.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-lg border border-[#2b3648] bg-[#151b27] p-4 transition hover:border-blue-400/60"
                            >
                                <span>
                                    <span className="block font-bold">
                                        {work.title}
                                    </span>
                                    <span className="text-sm text-slate-400">
                                        {work.body}
                                    </span>
                                </span>
                                <LuExternalLink />
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    )
}

function ProjectBrowserCard({ project }: { project: (typeof projects)[number] }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#263142] bg-[#10141c] transition hover:-translate-y-1 hover:border-blue-400/60">
            <div className="relative aspect-video bg-[#111827]">
                <Image
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(min-width: 1280px) 420px, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475)
                    )}`}
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-bold text-slate-50">
                            {project.name}
                        </h2>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                            {project.year}
                        </p>
                    </div>
                    {project.role ? (
                        <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-bold text-slate-200">
                            {project.role}
                        </span>
                    ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.Components.slice(0, 5).map(
                        ({ Component, color, darkColor }, index) => (
                            <Component
                                key={index}
                                style={
                                    {
                                        '--tech-color': darkColor ?? color,
                                    } as CSSProperties
                                }
                                className="text-xl text-[var(--tech-color)]"
                            />
                        )
                    )}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.projectUrl ? (
                        <LinkButton
                            href={project.projectUrl}
                            label="Preview"
                            icon={LuExternalLink}
                            primary
                        />
                    ) : null}
                    {project.githubUrl ? (
                        <LinkButton
                            href={project.githubUrl}
                            label="GitHub"
                            icon={LuGithub}
                        />
                    ) : null}
                </div>
            </div>
        </article>
    )
}

function ExperienceTab() {
    return (
        <section>
            <SectionHero
                eyebrow="Work Experience tab"
                title="Work experience"
                body="A timeline for roles, impact, and operating style. The exact company history can be expanded without changing the browser shell."
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
                <div className="rounded-lg border border-[#263142] bg-[#0e131b] p-6">
                    <div className="relative space-y-5 before:absolute before:left-5 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-[#263142]">
                        {workItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative flex gap-5 rounded-lg border border-[#263142] bg-[#10141c] p-5"
                            >
                                <span
                                    className="relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full border-4 border-[#10141c]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-slate-50">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <aside className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                    <LuBriefcase className="text-3xl text-emerald-400" />
                    <h2 className="mt-4 text-xl font-bold">
                        Resume-ready structure
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                        Company names, dates, measurable outcomes, and stack
                        notes can drop into this timeline when you want the
                        work-history layer finalized.
                    </p>
                    <LinkButton
                        href="mailto:thek8pai@gmail.com?subject=Resume%20request"
                        label="Email for resume"
                        icon={LuMail}
                        primary
                        className="mt-6"
                    />
                </aside>
            </div>
        </section>
    )
}

function AboutTab() {
    return (
        <section>
            <SectionHero
                eyebrow="About tab"
                title="About Sudarsan"
                body="Full-stack developer building useful tools, polished interfaces, and small products that make repeated work easier."
            />
            <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6">
                    <LuUser className="text-3xl text-yellow-400" />
                    <h2 className="mt-4 text-2xl font-bold">
                        Builds tools with a product eye
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                        Passionate Full Stack Developer specializing in
                        interactive web apps, server-side logic, dynamic
                        front-end design, and clean maintainable code.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <LinkButton
                            href="https://linkedin.com/in/k8pai"
                            label="LinkedIn"
                            icon={LuLinkedin}
                            primary
                        />
                        <LinkButton
                            href="https://github.com/k8pai"
                            label="GitHub"
                            icon={LuGithub}
                        />
                        <LinkButton
                            href="mailto:thek8pai@gmail.com"
                            label="Email"
                            icon={LuMail}
                        />
                    </div>
                </div>
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                        <p>
                            <span className="block font-bold text-slate-50">
                                Mahatma Gandhi University
                            </span>
                            Bachelor degree, Computer Applications
                            <br />
                            2019 - 2022
                        </p>
                        <p>
                            <span className="block font-bold text-slate-50">
                                Higher Secondary
                            </span>
                            Computer Science
                            <br />
                            2017 - 2019
                        </p>
                    </div>
                </div>
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6 lg:col-span-2">
                    <h2 className="text-2xl font-bold">Core stack</h2>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {skillTags.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-[#2b3648] bg-[#151d2a] px-4 py-2 text-sm font-bold text-[#b7c8e8]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function NotesTab({ posts }: { posts: BrowserPost[] }) {
    return (
        <section>
            <SectionHero
                eyebrow="Notes tab"
                title="Notes and thinking"
                body="Projects show finished work. Notes show how the thinking, learning, and technical explanations evolve behind the work."
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
                <div className="space-y-4">
                    {posts.slice(0, 5).map((post) => (
                        <Link
                            key={post.slug}
                            href={`/notes/${post.slug}`}
                            className="group flex items-center justify-between gap-4 rounded-lg border border-[#263142] bg-[#10141c] p-5 transition hover:-translate-y-1 hover:border-red-400/60"
                        >
                            <span className="flex min-w-0 gap-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#182033] text-red-400">
                                    <LuFileText />
                                </span>
                                <span className="min-w-0">
                                    <span className="block truncate text-lg font-bold text-slate-50">
                                        {post.title}
                                    </span>
                                    <span className="mt-1 block text-sm text-slate-400">
                                        {post.displayDate}
                                    </span>
                                </span>
                            </span>
                            <LuExternalLink className="shrink-0 text-slate-500 transition group-hover:text-red-300" />
                        </Link>
                    ))}
                </div>
                <aside className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                    <h2 className="text-xl font-bold">Why keep Notes?</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                        It gives the portfolio a pulse: projects show what has
                        shipped, notes show the way ideas are broken down and
                        explained.
                    </p>
                    <LinkButton
                        href="/notes"
                        label="Open all notes"
                        icon={LuExternalLink}
                        primary
                        className="mt-6"
                    />
                </aside>
            </div>
        </section>
    )
}

function LinkButton({
    href,
    label,
    icon: Icon,
    primary = false,
    className = '',
}: {
    href: string
    label: string
    icon: IconType
    primary?: boolean
    className?: string
}) {
    const external = href.startsWith('http')

    return (
        <Link
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className={`inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-bold transition ${primary
                ? 'border-blue-500 bg-blue-600 text-white hover:bg-blue-500'
                : 'border-[#2b3648] bg-[#151d2a] text-slate-200 hover:border-slate-500'
                } ${className}`}
        >
            <Icon size={16} />
            {label}
        </Link>
    )
}
