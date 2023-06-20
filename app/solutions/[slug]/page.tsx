// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns';
import { allSolutions } from 'contentlayer/generated';
import Mdx from 'components/Mdx';

export const generateStaticParams = async () =>
	allSolutions.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allSolutions.find(
		(post) => post._raw.flattenedPath === params.slug,
	);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	const post = allSolutions.find(
		(post) => post._raw.flattenedPath === params.slug,
	);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<article className="max-w-3xl py-8">
			<div className="mb-8">
				<time
					dateTime={post.date}
					className="mb-1 text-xs text-gray-600"
				>
					{format(parseISO(post.date), 'LLLL d, yyyy')}
				</time>
				<h1 className="text-3xl font-bold">{post.title}</h1>
			</div>
			<Mdx code={post.body.code} />
		</article>
	);
};

export default PostLayout;
