// app/posts/[slug]/page.tsx

import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/Mdx'
import { getBlogPosts } from '@/lib/utils'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'

// export const generateStaticParams = async () =>
//     allNotes.map((post) => ({ slug: post._raw.flattenedPath }))

// export async function generateMetadata({
//     params,
// }: {
//     params: { slug: string }
// }): Promise<Metadata | undefined> {
//     const post = allNotes.find((post) => post.url === params.slug)
//     if (!post) return

//     const { title, summary, date: publishedTime, url } = post
//     return {
//         title,
//         description: summary ?? title,
//         openGraph: {
//             title,
//             description: summary ?? title,
//             type: 'article',
//             publishedTime,
//             url: `https://k8pai.dev/notes/${url}`,
//         },
//     }
// }

// export default async function Page({
//     params,
// }: {
//     params: Promise<{ slug: string }>
// }) {

//     return <Post />
// }

export function generateStaticParams() {
    return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({
    params,
}: {
    params: { slug: string }
}) => {
    const { slug } = await params
    let post = getBlogPosts().find((post) => post.slug === slug)
    if (!post) {
        return
    }

    let {
        title,
        date: publishedTime,
        summary: description,
        image,
    } = post.metadata
    let ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

export const dynamicParams = false

const PostLayout = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params
    let post = getBlogPosts().find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <section className="w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
                {post.metadata.summary && (
                    <h1 className="text-base tracking-wide mt-3">
                        {post.metadata.summary}
                    </h1>
                )}
                <div className="flex items-center justify-between mt-4">
                    <span className="h-px box-border w-full mr-2 bg-zinc-300 dark:bg-white"></span>
                    <time
                        dateTime={post.metadata.date}
                        className="text-xs bg-neutral-300 dark:bg-neutral-800 p-1 px-2 rounded-md whitespace-nowrap"
                    >
                        {format(parseISO(post.metadata.date), 'LLLL d, yyyy')}
                    </time>
                </div>
            </div>

            <CustomMDX source={post.content} />
        </section>
    )
}

export default PostLayout
