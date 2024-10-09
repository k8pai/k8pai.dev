import type { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    metadataBase: new URL('https://k8pai.dev'),
    title: 'Guestbook | k8pai',
    description:
        'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
    openGraph: {
        title: 'Guestbook',
        description:
            'Guestbook, Inspired by one of the best web developer out there, Lee Robinson.',
        url: 'https://k8pai.dev/guestbook',
        siteName: 'Sudarsan k pai',
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        title: 'Sudarsan K Pai',
        card: 'summary_large_image',
    },
}

export default async function page({ children }: { children: ReactNode }) {
    return (
        <div className="mx-3 my-2">
            <h1 className="text-3xl font-bold mb-3 capitalize text-zinc-900 dark:text-slate-200">
                Guestbook
            </h1>
            <h5 className="text-base font-semibold">
                Inspired from one of the best out there.{' '}
                <Link
                    href={'https://leerob.io'}
                    className="transition-all text-blue-400 hover:text-blue-500"
                >
                    Lee Robinson
                </Link>
            </h5>
            <h5 className="text-base font-semibold mb-3">
                Leave me a message or showcase your own projects, i&apos;ll be
                pleased to have different minds come along.
            </h5>
            {children}
        </div>
    )
}
