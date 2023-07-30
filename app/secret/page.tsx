import React from 'react';
import Upcoming from './Upcoming';
import { articles } from 'lib/secrets';
import Projects from './Projects';

export default function page() {
	return (
		<div>
			<section className="secret-sections">
				<h3 className="font-bold text-xl font-mono p-1 tracking-wider">
					Upcomging Blogs 📰
				</h3>
				<div>
					{articles.map(({ id, title, description, date }) => (
						<Upcoming
							key={id}
							title={title}
							description={description}
							date={date}
						/>
					))}
				</div>
			</section>

			<div className="flex flex-col flex-wrap lg:flex-row">
				<section className="secret-sections flex-1">
					<h3 className="font-bold text-lg font-mono p-1 tracking-wider">
						Upcoming Builds ⚒️
					</h3>
					<Projects />
				</section>
				<section className="secret-sections flex-1 h-fit">
					<h3 className="text-md font-mono p-1 tracking-wider">
						More to come...
					</h3>
				</section>
			</div>
		</div>
	);
}
