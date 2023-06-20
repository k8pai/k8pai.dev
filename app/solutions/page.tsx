// app/page.tsx
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allSolutions, Solutions } from 'contentlayer/generated';

function PostCard(post: Solutions) {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link
					href={`/solutions/${post.url}`}
					className="text-slate-200 hover:text-slate-300 transition-all duration-200 font-semibold "
				>
					{post.title}
				</Link>
			</h2>
			<time
				dateTime={post.date}
				className="mb-2 block text-xs font-semibold text-gray-600"
			>
				{format(parseISO(post.date), 'LLLL d, yyyy')}
			</time>
			<div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" />
		</div>
	);
}

export default function Home() {
	const posts = allSolutions.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	return (
		<div className="max-w-xl py-8">
			<h1 className="mb-8 text-2xl">Solutions</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</div>
	);
}
