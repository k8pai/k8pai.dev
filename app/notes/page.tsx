import { Suspense } from 'react'
import PostFeed from './PostFeed'
import Loading from './loading'
import { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://k8pai.dev'),
    title: 'Blog post',
    description: 'Software Engineer | Full Stack Developer | DevOps',
    openGraph: {
        title: 'Blogs | k8pai',
        description: 'Software Engineer | Full Stack Developer | DevOps',
        url: 'https://k8pai.dev/about',
        siteName: 'Sudarsan k pai',
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        title: 'Sudarsan K Pai',
        card: 'summary_large_image',
    },
}

export default async function Page() {
    return (
        <div className="max-w-3xl">
            <div className="mb-10 tracking-wider leading-loose">
                <p className="mt-2">
                    Each blog post is like deconstructing my learning process,
                    unraveling the mysteries of programming, one line of code at
                    a time.
                </p>

                <p className="mt-2">Happy coding!</p>
            </div>
            <Suspense fallback={<Loading />}>
                <PostFeed />
            </Suspense>
        </div>
    )
}
