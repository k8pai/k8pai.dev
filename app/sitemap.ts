import { allSolutions } from 'contentlayer/generated';

export default async function sitemap() {
	const blogs = allSolutions.map((post) => ({
		url: `https://k8pai.dev/solutions/${post.url}`,
		lastModified: post.date,
	}));

	const routes = ['', '/solutions', '/guestbook', '/secret'].map((route) => ({
		url: `https://k8pai.dev${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
}
