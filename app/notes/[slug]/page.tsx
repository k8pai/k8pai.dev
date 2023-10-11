// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns';
import { allNotes } from 'contentlayer/generated';
import Mdx from 'components/Mdx';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const generateStaticParams = async () =>
	allNotes.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	const post = allNotes.find((post) => post.url === params.slug);
	if (!post) return;

	const { title, summary, date: publishedTime, url } = post;
	return {
		title,
		description: summary ?? title,
		openGraph: {
			title,
			description: summary ?? title,
			type: 'article',
			publishedTime,
			url: `https://k8pai.dev/notes/${url}`,
		},
	};
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
	const post = allNotes.find(
		(post) => post._raw.flattenedPath === params.slug,
	);
	if (!post) {
		notFound();
	}

	return (
		<section className="w-full">
			<div className="mb-8">
				<h1 className="text-3xl font-bold">{post.title}</h1>
				{post.summary && (
					<h1 className="text-base tracking-wide mt-3">
						{post.summary}
					</h1>
				)}
				<div className="flex items-center justify-between mt-4">
					<span className="h-px box-border w-full mr-2 bg-black dark:bg-white"></span>
					<time
						dateTime={post.date}
						className="text-xs bg-neutral-300 dark:bg-neutral-800 p-1 px-2 rounded-md whitespace-nowrap"
					>
						{format(parseISO(post.date), 'LLLL d, yyyy')}
					</time>
				</div>
			</div>
			<Mdx code={post.body.code} />
		</section>
	);
};

export default PostLayout;
