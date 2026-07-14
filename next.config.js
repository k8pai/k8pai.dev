// @ts-check

import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        "remotePatterns": [
            new URL("https://avatars.githubusercontent.com/**"),
            new URL("https://github.com/**")
        ]
    },
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.com/users/898949804024012850',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://linkedin.com/in/k8pai',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/k8pai',
                permanent: true,
            },
            {
                source: '/wa',
                destination: 'https://wa.me/7994648190',
                permanent: true,
            },
        ]
    },
    experimental: {
        serverActions: {
            allowedOrigins: [
                'http://localhost:3000',
                'k8pai.dev',
                '*.k8pai.dev',
            ],
        },
        mdxRs: true,
    },
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,
    options: {
        // remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
        // rehypePlugins: [rehypeStringify],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
