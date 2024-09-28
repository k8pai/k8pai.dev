import React from 'react'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allNotes } from 'contentlayer/generated'

const PostFeed = () => {
    const posts = allNotes.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )
    return (
        <div>
            {/* {val.toString()} */}
            {posts.map(({ url, title, date }, idx) => (
                <div key={idx} className="mb-6">
                    <h2 className="mb-1 text-xl">
                        <Link
                            href={`/notes/${url}`}
                            className="transition-all duration-200 font-semibold "
                        >
                            {title}
                        </Link>
                    </h2>
                    <time
                        dateTime={date}
                        className="mb-2 block text-xs font-semibold text-teal-100"
                    >
                        {format(parseISO(date), 'LLLL d, yyyy')}
                    </time>
                </div>
            ))}
        </div>
    )
}

export default PostFeed
