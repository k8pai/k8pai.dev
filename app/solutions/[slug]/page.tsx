// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns';
import { allSolutions } from 'contentlayer/generated';
import Mdx from 'components/Mdx';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () =>
	allSolutions.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allSolutions.find(
		(post) => post._raw.flattenedPath === params.slug,
	);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const PostLayout = async ({ params }: { params: { slug: string } }) => {
	const post = allSolutions.find(
		(post) => post._raw.flattenedPath === params.slug,
	);
	if (!post) {
		notFound();
	}

	return (
		<section className="w-full">
			<div className="mb-8">
				<h1 className="text-2xl font-bold">{post.title}</h1>
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
