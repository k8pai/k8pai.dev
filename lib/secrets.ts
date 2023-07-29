import {
	SiFramer,
	SiMongodb,
	SiNextdotjs,
	SiPrisma,
	SiTailwindcss,
} from 'react-icons/si';

const { v4: uuidv4 } = require('uuid');

export const articles = [
	{
		id: uuidv4(),
		title: 'ES6 Classes: Prototypal Inheritance Made Simple',
		description:
			'Understanding ES6 classes and how they simplify the creation of objects and prototype-based inheritance.',
		date: getAlternateDate(0),
	},
	{
		id: uuidv4(),
		title: 'Functional Programming Paradigm in ES6',
		description:
			'Embracing functional programming principles using ES6 features like map, filter, reduce, and immutability.',
		date: getAlternateDate(1),
	},
	{
		id: uuidv4(),
		title: 'Getting Started with ES6 Modules',
		description:
			'Exploring the module system in ES6 and how it helps organize code for better maintainability and reusability.',
		date: getAlternateDate(2),
	},
	{
		id: uuidv4(),
		title: 'ES6 Iterators and Generators: Beyond the For Loop',
		description:
			'Unleashing the power of ES6 iterators and generators to iterate over custom data structures and manage control flow.',
		date: getAlternateDate(3),
	},
	{
		id: uuidv4(),
		title: 'Enhancing Readability with ES6 Template Literals',
		description:
			'Utilizing template literals in ES6 to create dynamic and more readable strings.',
		date: getAlternateDate(4),
	},
	{
		id: uuidv4(),
		title: 'ES6 Proxy: Metaprogramming JavaScript',
		description:
			'An in-depth look at ES6 Proxies and their ability to intercept and customize fundamental operations on objects.',
		date: getAlternateDate(4),
	},
	{
		id: uuidv4(),
		title: 'ES6 Sets and Maps: Powerful Data Structures',
		description:
			'Leveraging ES6 Sets and Maps for unique collections and efficient key-value mappings.',
		date: getAlternateDate(5),
	},
	{
		id: uuidv4(),
		title: 'Advanced ES6: From Symbols to Reflect',
		description:
			'Exploring lesser-known ES6 features like Symbols and Reflect for metaprogramming and creating robust APIs.',
		date: getAlternateDate(6),
	},
];

export const projects = [
	{
		title: 'Portfolio',
		description: 'My personal portfolio website.',
		components: [
			{
				Component: SiNextdotjs,
				color: '#ffffff',
				darkColor: '#000000',
			},
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiMongodb,
				color: '#47A248',
			},
			{
				Component: SiPrisma,
				color: '#2D3748',
			},
			{
				Component: SiFramer,
				color: '#0055FF',
			},
		],
	},
	{
		title: 'Portfolio',
		description: 'My personal portfolio website.',
		components: [
			{
				Component: SiNextdotjs,
				color: '#ffffff',
				darkColor: '#000000',
			},
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiMongodb,
				color: '#47A248',
			},
			{
				Component: SiPrisma,
				color: '#2D3748',
			},
			{
				Component: SiFramer,
				color: '#0055FF',
			},
		],
	},
];

function getAlternateDate(index: number) {
	const today = new Date();
	const twoDaysLater = new Date(today);
	twoDaysLater.setDate(today.getDate() + index * 2);
	return twoDaysLater.toISOString().slice(0, 10); // Get the date in the format 'YYYY-MM-DD'
}
