import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        domains: ['github.com', 'avatars.githubusercontent.com'],
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
        mdxRs: true,
    },
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
        rehypePlugins: [rehypeStringify],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
