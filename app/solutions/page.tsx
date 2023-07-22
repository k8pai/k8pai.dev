// app/page.tsx
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allSolutions, Solutions } from 'contentlayer/generated';
import { getViews } from 'lib/prisma/views';
import ViewCounter from './view_counter';

function PostCard({
	post: { url, title, date },
	views = [],
}: {
	post: Solutions;
	views: string[];
}) {
	console.log('views => ', views);
	return (
		<div className="mb-6">
			<h2 className="mb-1 text-xl">
				<Link
					href={`/solutions/${url}`}
					className="text-slate-200 hover:text-slate-300 transition-all duration-200 font-semibold "
				>
					{title}
				</Link>
			</h2>
			<time
				dateTime={date}
				className="mb-2 block text-xs font-semibold text-gray-600"
			>
				{format(parseISO(date), 'LLLL d, yyyy')}
			</time>
			<ViewCounter slug={url} allviews={views} />
		</div>
	);
}

export default async function Home() {
	const posts = allSolutions.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	const views = await getViews();
	console.log(views);
	return (
		<div className="max-w-xl">
			<h1 className="text-3xl font-bold mb-8 capitalize text-slate-200">
				Solutions
			</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} post={post} views={views.data} />
			))}
		</div>
	);
}
