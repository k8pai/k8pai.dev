// app/page.tsx
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allSolutions, Solutions } from 'contentlayer/generated';

function PostCard(post: Solutions) {
	return (
		<div className="mb-6">
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
		</div>
	);
}

export default function Home() {
	const posts = allSolutions.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	return (
		<div className="max-w-xl">
			<h1 className="text-3xl font-bold mb-8 capitalize text-slate-200">
				Solutions
			</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</div>
	);
}
