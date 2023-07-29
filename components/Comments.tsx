'use client';

import Link from 'next/link';
import React from 'react';
import { getDomainName } from '../lib/helper';
import { CiLink } from 'react-icons/ci';

const Comments = ({
	comment: { created_by, body, links },
}: {
	comment: any;
}) => {
	return (
		<div className="group mx-1 my-2 md:max-w-lg w-full">
			<div className="font-semibold py-1 text-neutral-500">
				{created_by}
			</div>
			<div className="text-sm mb-2 font-semibold text-neutral-300 ">
				{body}
			</div>
			{links.length ? (
				<div className="flex items-center flex-wrap">
					{links?.map((el: string, ind: number) => {
						return (
							<Link
								key={ind}
								href={el}
								className="text-xs w-fit m-2 flex items-center space-x-2 px-2 py-1 font-mono bg-[#242526] rounded-md text-neutral-300 hover:text-neutral-400 transition-all duration-200"
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

export default Comments;
