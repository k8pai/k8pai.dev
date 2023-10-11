import { allNotes } from 'contentlayer/generated';

export default async function sitemap() {
	const blogs = allNotes.map((post) => ({
		url: `https://k8pai.dev/notes/${post.url}`,
		lastModified: post.date,
	}));

	const routes = ['', '/notes', '/guestbook', '/secret'].map((route) => ({
		url: `https://k8pai.dev${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
}
