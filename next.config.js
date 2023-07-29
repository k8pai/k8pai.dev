/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ['github.com', 'avatars.githubusercontent.com'],
	},
};

module.exports = withContentlayer(nextConfig);
