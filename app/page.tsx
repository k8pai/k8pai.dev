import RecentPosts from 'components/RecentPosts'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Sudarsan K Pai',
    description:
        'Full-stack developer building Next.js apps, automation tools, and developer utilities.',
}

export default function page() {
    return (
        <section>
            <div className="flex-auto max-w-3xl">
                <h1 className="font-semibold text-3xl tracking-wider">
                    Sudarsan K Pai
                </h1>
                <p className="tracking-wider leading-loose mt-4">
                    Full-stack developer building Next.js apps, automation
                    workflows, and developer utilities with React, Node.js,
                    TypeScript, and clean interface design.
                </p>
                <p className="tracking-wider leading-loose mt-4">
                    I like turning repeated work into tools, shaping small ideas
                    into useful products, and paying attention to the details
                    that make software feel fast, understandable, and pleasant
                    to use.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                        href="/about"
                        className="rounded-md bg-[#4338CA] px-3 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#3730A3]"
                    >
                        View Portfolio
                    </Link>
                    <Link
                        href="/notes"
                        className="rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold tracking-wide text-neutral-900 transition-colors hover:bg-slate-300 dark:bg-[#181818] dark:text-neutral-100 dark:hover:bg-[#202020]"
                    >
                        Read Notes
                    </Link>
                </div>

                <div className="my-5">
                    <p className="tracking-wider leading-loose mt-2">
                        Currently exploring tools and patterns around creative
                        interfaces, automation, and modern web platforms.
                    </p>
                    <div className="mt-1">
                        <Link
                            href={'https://discordjs.guide/#before-you-begin'}
                            className="hash"
                        >
                            #discordjs
                        </Link>
                        <Link href={'https://threejs.org/'} className="hash">
                            #threejs
                        </Link>
                        <Link
                            href={'https://soliditylang.org/'}
                            className="hash"
                        >
                            #solidity
                        </Link>
                        <Link href={'https://vuejs.org/'} className="hash">
                            #vuejs
                        </Link>
                        {/* <Link href={''} className="hash">#devOps</Link> */}
                    </div>
                </div>

                <Suspense fallback="loading...">
                    <RecentPosts />
                </Suspense>
                {/* <div className="mt-12">
					<h1 className="tracking-wider leading-loose text-3xl font-bold">
						Recent Notes
					</h1>
					{posts &&
						posts.map(({ url, title, date, header }, idx) => (
							<div
								key={idx}
								className="my-5 rounded-md transition-all"
							>
								<Link href={`/notes/${url}`}>
									{header ? (
										<div className="flex items-center justify-between">
											<h2 className="transition-all duration-200 font-semibold text-lg">
												{header}
											</h2>
											<time
												dateTime={date}
												className="mb-2 block text-xs font-semibold text-gray-600"
											>
												{format(
													parseISO(date),
													'LLLL d, yyyy',
												)}
											</time>
										</div>
									) : null}
									<h2 className="text-base">
										<span className="transition-all duration-200 text-gray-400">
											{title}
										</span>
									</h2>
								</Link>
							</div>
						))}

					<div className="mt-7">
						<Link
							href={'/notes'}
							className="transition-all duration-200 underline underline-offset-4 hover:text-blue-700/90  hover:dark:text-sky-400/70 tracking-wider font-semibold"
						>
							More Notes
						</Link>
					</div>
				</div> */}
            </div>
        </section>
    )
}
