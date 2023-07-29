// app/page.tsx
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allSolutions } from 'contentlayer/generated';

// export function PostCard({ post: { url, title, date } }: { post: Solutions }) {
// 	return (
// 		<div className="mb-6">
// 			<h2 className="mb-1 text-xl">
// 				<Link
// 					href={`/solutions/${url}`}
// 					className="transition-all duration-200 font-semibold "
// 				>
// 					{title}
// 				</Link>
// 			</h2>
// 			<time
// 				dateTime={date}
// 				className="mb-2 block text-xs font-semibold text-gray-600"
// 			>
// 				{format(parseISO(date), 'LLLL d, yyyy')}
// 			</time>
// 		</div>
// 	);
// }

export default async function Page() {
	const posts = allSolutions.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);
	return (
		<div className="max-w-3xl">
			<div className="mb-10 tracking-wider leading-loose">
				{/* <h1 className="text-3xl capitalize">Solutions</h1> */}

				<p className="mt-2">
					Each blog post is like deconstructing my learning process,
					unraveling the mysteries of programming, one line of code at
					a time.
				</p>

				<p className="mt-2">Happy coding!</p>
			</div>
			{posts.map(({ url, title, date }, idx) => (
				<div key={idx} className="mb-6">
					<h2 className="mb-1 text-xl">
						<Link
							href={`/solutions/${url}`}
							className="transition-all duration-200 font-semibold "
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
				</div>
			))}
		</div>
	);
}
