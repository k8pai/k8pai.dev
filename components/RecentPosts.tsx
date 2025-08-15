import { getBlogPosts } from '@/lib/utils'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

const RecentPosts = () => {
    let posts = getBlogPosts()
    return (
        <div className="mt-12">
            <h1 className="tracking-wider leading-loose text-3xl font-bold">
                Recent Notes
            </h1>
            {posts &&
                posts.map(({ slug, content, metadata }, idx) => (
                    <div
                        key={`recent-post-${idx}`}
                        className="my-5 rounded-md transition-all"
                    >
                        <Link href={`/notes/${slug}`}>
                            {metadata.title ? (
                                <div className="flex items-center justify-between">
                                    <h2 className="transition-all duration-200 font-semibold text-lg">
                                        {metadata.title}
                                    </h2>
                                    <time
                                        dateTime={metadata.date}
                                        className="mb-2 block text-xs font-semibold "
                                    >
                                        {format(
                                            parseISO(metadata.date),
                                            'LLLL d, yyyy'
                                        )}
                                    </time>
                                </div>
                            ) : null}
                            <h2 className="text-base">
                                <span className="transition-all duration-200 text-violet-200">
                                    {metadata.title}
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
