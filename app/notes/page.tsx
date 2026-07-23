import { getBlogPosts } from '@/lib/mdx'
import BrowserShell from 'components/browser/BrowserShell'
import NotesSection from 'components/browser/sections/NotesSection'
import { compareDesc, format, parseISO } from 'date-fns'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Notes | Sudarsan K Pai',
    description:
        'Notes, technical writing, and thinking from Sudarsan K Pai.',
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

    return (
        <BrowserShell activeTab="notes">
            <NotesSection posts={posts} />
        </BrowserShell>
    )
}
