import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
	
	let lastScroll = 0;
	addEventListener("load", () => {
		console.log('loaded');
	});
	window.addEventListener("scroll", () => {
		const cont = document.querySelector(".layoutsection");
		const currentScroll = window.pageYOffset;

		console.log("last scroll = "+lastScroll);
		console.log("current scroll = "+currentScroll);
		if (currentScroll > lastScroll) {
			cont.classList.add("scroll-down");
			cont.classList.remove("scroll-up");
		} 
		if (currentScroll < lastScroll) {
			cont.classList.remove("scroll-down");
			cont.classList.add("scroll-up");
		}
		if (currentScroll <= 0) {
			cont.classList.remove("scroll-up");
		}
		lastScroll = currentScroll;
	});

	return (
		<div className='w-full transition duration-150 ease-linear font-fjalla bg-pritxt text-pribg dark:text-pritxt dark:bg-pribg'>
			<Head>

			</Head>
			<div className='layoutsection flex flex-col min-h-screen h-full max-w-7xl mx-auto'>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default Layout