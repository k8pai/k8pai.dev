'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'
import {
    LuChevronRight,
    LuMinus,
    LuPlus,
    LuRocket,
    LuSearch,
} from 'react-icons/lu'
import { motion } from 'motion/react'
import type { MenuRow } from './types'

export default function ChromeMenu({
    rows,
    onClose,
    socialCount,
}: {
    rows: MenuRow[]
    onClose: () => void
    socialCount: number
}) {
    const rowGroups = [
        rows.slice(0, socialCount),
        rows.slice(socialCount, socialCount + 5),
        rows.slice(socialCount + 5),
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

function MenuSection({ title, rows }: { title: string; rows: MenuRow[] }) {
    return (
        <div className="space-y-1">
            <p className="px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#999680]">
                {title}
            </p>
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
            <span className="min-w-0 truncate">{row.label}</span>
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
