import { Metadata } from 'next';
import React from 'react';
import Socials from '../components/Socials';

export const metadata: Metadata = {
	title: 'Sudarsan K Pai | aka k8pai',
	description: 'Student | Web developer',
};

export default function page() {
	return (
		<section>
			<div className="flex-auto">
				<h1 className="font-semibold text-3xl tracking-wider">
					Sudarsan K Pai
				</h1>
				<p className="tracking-wider mt-4">
					Hey there, I&apos;m Sudarsan K Pai, a 21-year-old based in
					Bangalore, India. Constantly striving for perfection and
					passionate on understanding new techs.
				</p>
				<Socials />
			</div>
		</section>
	);
}
