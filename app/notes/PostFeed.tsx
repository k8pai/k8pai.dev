import { getBlogPosts } from '@/lib/utils'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

const PostFeed = () => {
    const posts = getBlogPosts().sort((a, b) =>
        compareDesc(new Date(a.metadata.date), new Date(b.metadata.date))
    )

    console.log('posts => ', posts)
    return (
        <div>
            {/* {val.toString()} */}
            {posts.map(({ slug, metadata: { date, title } }, idx) => (
                <div key={idx} className="mb-6">
                    <h2 className="mb-1 text-xl">
                        <Link
                            href={`/notes/${slug}`}
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
