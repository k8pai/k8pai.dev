'use client';

import React, { useContext } from 'react';
import { Metadata } from 'next';
import { meContext } from './layout';
import Resume from '../../components/Resume';
import Portfolio from '../../components/Portfolio';

export const metadata: Metadata = {
	title: 'About',
	description: 'Student | Web developer',
};

export default function page() {
	const { selected } = useContext(meContext);
	if (selected === 'portfolio') {
		return <Portfolio />;
	} else {
		return <Resume />;
	}
}
