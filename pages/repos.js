import React, { useEffect, useState } from 'react'
import Repositories from '../components/Repositories';

export async function getStaticProps() {
	const res = await fetch('https://api.github.com/users/k8pai/repos');
	const response = await res.json()
	
	const data = response.filter(el => !el.fork);
	return {
		props: {
			data,
		},
		revalidate: 10, // In seconds
	}
}
const repos = ({ data }) => {
	return (
		<div className='flex-grow grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 place-items-center gap-4'>
			{data.map((el, ind) => (
				<Repositories key={ind} repo={el} />
			))}
		</div>
	)
}

export default repos