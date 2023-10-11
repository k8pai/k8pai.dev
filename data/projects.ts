import todolist from '../public/todolist_thumb.png';
import pinit from '../public/pinit_thumb.png';
import tailwindInputs from '../public/tailwind_inputs_thumb.png';
import linkwrap from '../public/linkwrap_thumb.png';
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiMongodb,
	SiPrisma,
	SiFramer,
	SiHtml5,
	SiJavascript,
	SiAuth0,
} from 'react-icons/si';
import { projectsType } from 'typings';

export const projects: projectsType[] = [
	{
		name: 'Nextauth-cli',
		imageUrl: pinit,
		projectUrl: 'https://www.npmjs.com/package/nextauth-cli',
		githubUrl: 'https://github.com/k8pai/nextauth-cli',
		Components: [
			{
				Component: SiTypescript,
				color: '#3178C6',
			},
			{
				Component: SiAuth0,
				color: '#EB5424',
			},
		],
	},
	{
		name: 'Linkwrap',
		imageUrl: linkwrap,
		projectUrl: 'https://linkwrap.k8pai.dev',
		githubUrl: 'https://github.com/k8pai/linkwrap',
		Components: [
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
		name: 'Tailwind Inputs',
		imageUrl: tailwindInputs,
		projectUrl: 'https://ti-docs-2.vercel.app',
		Components: [
			{
				Component: SiNextdotjs,
				color: '#ffffff',
			},
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiFramer,
				color: '#0055FF',
			},
		],
	},
	{
		name: 'Todolist',
		imageUrl: todolist,
		projectUrl: 'https://todolist-k8pai.vercel.app',
		githubUrl: 'https://github.com/k8pai/todolist',
		Components: [
			{
				Component: SiNextdotjs,
				color: '#ffffff',
			},
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
		],
	},
	{
		name: 'Pinit (Chrome Extention)',
		imageUrl: pinit,
		// projectUrl: 'https://todolist-k8pai.vercel.app',
		githubUrl: 'https://github.com/k8pai/pinit',
		Components: [
			{
				Component: SiHtml5,
				color: '#ffffff',
			},
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiJavascript,
				color: '#06B6D4',
			},
		],
	},
	// {
	// 	name: 'Portfolio',
	// 	imageUrl: portfolio,
	// 	projectUrl: 'https://k8pai.dev',
	// 	githubUrl: 'https://github.com/k8pai/k8pai.dev',
	// 	Components: [
	// 		{
	// 			Component: SiNextdotjs,
	// 			color: '#ffffff',
	// 			darkColor: '#000000',
	// 		},
	// 		{
	// 			Component: SiTailwindcss,
	// 			color: '#06B6D4',
	// 		},
	// 		{
	// 			Component: SiMongodb,
	// 			color: '#47A248',
	// 		},
	// 		{
	// 			Component: SiPrisma,
	// 			color: '#2D3748',
	// 		},
	// 		{
	// 			Component: SiFramer,
	// 			color: '#0055FF',
	// 		},
	// 	],
	// },
];
