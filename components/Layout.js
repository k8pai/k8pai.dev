import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
	return (
		<div className='w-full transition duration-150 ease-linear font-fjalla bg-pritxt text-pribg dark:text-pritxt dark:bg-pribg'>
			<Head>

			</Head>
			<div className='layoutsection flex flex-col min-h-screen h-full max-w-7xl mx-auto'>
				<Header />
				{children}
				{/* <Footer /> */}
			</div>
		</div>
	)
}

export default Layout