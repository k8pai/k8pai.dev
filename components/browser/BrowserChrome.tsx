'use client'

import Link from 'next/link'
import {
    LuArrowLeft,
    LuArrowRight,
    LuEllipsisVertical,
    LuLock,
    LuPlus,
    LuRefreshCw,
    LuX,
} from 'react-icons/lu'
import { tabConfig } from './tabs'
import type { TabKey } from './types'

export default function BrowserChrome({
    activeTab,
    path,
    menuOpen,
    setMenuOpen,
}: {
    activeTab: TabKey
    path: string
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}) {
    return (
        <div className="rounded-t-[14px] bg-[#202124] pt-2">
            <div className="flex min-w-0 items-center border-b border-[#303134]">
                <div className="hidden shrink-0 items-center gap-2 px-3 sm:flex">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                <div className="scrollbar-none flex min-w-0 flex-1 gap-1 overflow-x-auto">
                    {tabConfig.map((tab) => (
                        <Link
                            key={tab.key}
                            href={tab.href}
                            className={`group relative flex h-10 min-w-[138px] items-center gap-2 rounded-t-lg border px-3 text-left text-xs font-semibold transition sm:min-w-[150px] ${
                                activeTab === tab.key
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
                        </Link>
                    ))}
                </div>

                <span className="hidden p-2 text-slate-400 md:block">
                    <LuPlus size={18} />
                </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-2">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="hidden h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-[#2c2d30] hover:text-slate-100 sm:grid"
                    aria-label="Back"
                >
                    <LuArrowLeft size={16} />
                </button>
                <button
                    type="button"
                    onClick={() => window.history.forward()}
                    className="hidden h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-[#2c2d30] hover:text-slate-100 sm:grid"
                    aria-label="Forward"
                >
                    <LuArrowRight size={16} />
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
                        <LuLock size={16} />
                    </span>
                    <span className="truncate">https://k8pai.com/{path}</span>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`grid h-9 w-9 place-items-center rounded-full border border-[#303134] text-slate-300 transition hover:bg-[#343842] ${
                        menuOpen ? 'bg-[#343842]' : 'bg-[#202124]'
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
