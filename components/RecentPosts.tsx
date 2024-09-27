import React from 'react'
import Link from 'next/link'
import { allNotes, Notes } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

const RecentPosts = () => {
    let posts: Notes[] = []
    try {
        posts = allNotes
            .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
            .slice(0, 3)
    } catch (error) {
        console.error('Error: ', error)
    }
    return (
        <div className="mt-12">
            <h1 className="tracking-wider leading-loose text-3xl font-bold">
                Recent Notes
            </h1>
            {posts &&
                posts.map(({ url, title, date, header }, idx) => (
                    <div
                        key={`recent-post-${idx}`}
                        className="my-5 rounded-md transition-all"
                    >
                        <Link href={`/notes/${url}`}>
                            {header ? (
                                <div className="flex items-center justify-between">
                                    <h2 className="transition-all duration-200 font-semibold text-lg">
                                        {header}
                                    </h2>
                                    <time
                                        dateTime={date}
                                        className="mb-2 block text-xs font-semibold text-slate-400"
                                    >
                                        {format(parseISO(date), 'LLLL d, yyyy')}
                                    </time>
                                </div>
                            ) : null}
                            <h2 className="text-base">
                                <span className="transition-all duration-200 text-slate-400">
                                    {title}
                                </span>
                            </h2>
                        </Link>
                    </div>
                ))}

            <div className="mt-7">
                <Link
                    href={'/notes'}
                    className="transition-all duration-200 underline underline-offset-4 hover:text-blue-700/90  hover:dark:text-sky-400/70 tracking-wider font-semibold"
                >
                    More Notes
                </Link>
            </div>
        </div>
    )
}

export default RecentPosts
