import { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { ThemeProvider } from 'components/ThemeProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    metadataBase: new URL('https://dev.k8pai.com'),
    title: {
        default: 'Sudarsan K Pai',
        template: '%s | k8pai',
    },
    description: 'Software Engineer | Full Stack Developer | DevOps',
    authors: {
        name: 'k8pai',
        url: 'https://dev.k8pai.com',
    },
    openGraph: {
        title: 'Sudarsan K Pai | k8pai',
        description: 'Software Engineer | Full Stack Developer | DevOps',
        url: 'https://dev.k8pai.com',
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
                    {children}
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
