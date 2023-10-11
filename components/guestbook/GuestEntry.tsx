'use client';

import { Guestbook } from '@prisma/client';
import { getDomainName } from 'lib/helper';
import Link from 'next/link';
import React from 'react';
import { CiLink } from 'react-icons/ci';

const GuestEntry = ({ created_by, body, links, updated_at }: Guestbook) => {
	return (
		<div className="group mx-1 my-2 md:max-w-lg w-full">
			<div className="font-semibold py-1 text-neutral-900 dark:text-neutral-400">
				{created_by}
			</div>
			<div className="text-sm mb-2 font-semibold ">{body}</div>
			{links.length ? (
				<div className="flex items-center flex-wrap">
					{links?.map((el: string, ind: number) => {
						return (
							<Link
								target="_blank"
								key={ind}
								href={el}
								className="text-xs w-fit m-1 flex items-center space-x-2 px-2 py-1 font-mono bg-slate-200 text-neutral-800 dark:bg-[#242526] rounded-md dark:text-neutral-300 hover:dark:text-neutral-400 transition-all duration-200"
							>
								<span>{getDomainName(el)}</span>
								<CiLink />
							</Link>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default GuestEntry;
