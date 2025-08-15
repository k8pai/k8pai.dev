import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
