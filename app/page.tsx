import BrowserPortfolio from 'components/browser/BrowserPortfolio'
import { getBlogPosts } from '@/lib/mdx'
import { compareDesc, format, parseISO } from 'date-fns'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sudarsan K Pai',
    description:
        'Full-stack developer building Next.js apps, automation tools, and developer utilities.',
}

export default function Page() {
    const posts = getBlogPosts()
        .sort((a, b) =>
            compareDesc(new Date(a.metadata.date), new Date(b.metadata.date))
        )
        .map(({ slug, metadata }) => ({
            slug,
            title: metadata.title,
            summary: metadata.summary,
            date: metadata.date,
            displayDate: format(parseISO(metadata.date), 'LLLL d, yyyy'),
        }))

    return <BrowserPortfolio posts={posts} />
}
