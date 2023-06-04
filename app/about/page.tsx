'use client';

import React, { useContext } from 'react';
import { Metadata } from 'next';
import { meContext } from './layout';
import Resume from '../../components/Resume';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
	title: 'About',
	description: 'Student | Web developer',
};

export default async function page() {
	const { selected } = useContext(meContext);
	if (selected === 'portfolio') {
		return <Portfolio />;
	} else if (selected === 'resume') {
		return <Resume />;
	} else if (selected === 'contact') {
		return <Contact />;
	}
}
