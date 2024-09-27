import { Suspense } from 'react'
import PostFeed from './PostFeed'
import Loading from './loading'

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
