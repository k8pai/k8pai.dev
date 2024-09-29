import { Metadata } from 'next'
import React from 'react'
import Sidenav from '../components/Sidenav'
import './globals.css'
import Footer from 'components/Footer'
import { ThemeProvider } from 'components/ThemeProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    metadataBase: new URL('https://k8pai.dev'),
    title: {
        default: 'Sudarsan K Pai',
        template: '%s | k8pai',
    },
    description: 'Software Engineer | Full Stack Developer | DevOps',
    authors: {
        name: 'k8pai',
        url: 'https://k8pai.dev',
    },
    openGraph: {
        title: 'Sudarsan K Pai | k8pai',
        description: 'Software Engineer | Full Stack Developer | DevOps',
        url: 'https://k8pai.dev',
        siteName: 'Sudarsan K Pai',
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        title: 'Sudarsan K Pai',
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo.svg',
        shortcut: '/logo.svg',
    },
    verification: {
        google: 'm5DNrwa3wn0qG80NDKoa2yMZqJeYHopoeci6t5u8unc',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="max-w-5xl flex flex-col mx-4 min-h-screen lg:mx-auto">
                        <Sidenav />
                        <main className="flex-auto min-w-0 my-4 mx-1 md:my-8 md:mx-5 flex flex-col px-2 lg:px-0">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <Toaster
                        position="bottom-right"
                        richColors
                        expand
                        closeButton
                    />
                </ThemeProvider>
            </body>
        </html>
    )
}
