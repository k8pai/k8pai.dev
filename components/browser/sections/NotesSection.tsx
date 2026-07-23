import Link from 'next/link'
import { LuExternalLink, LuFileText } from 'react-icons/lu'
import LinkButton from '../LinkButton'
import SectionHero from '../SectionHero'
import type { BrowserPost } from '../types'

export default function NotesSection({ posts }: { posts: BrowserPost[] }) {
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
