import { IconType } from 'react-icons';
import { IoLogoJavascript } from 'react-icons/io';
import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

export interface certificatesInfoType {
	data: {
		name: string;
		issue: string;
		href: string;
	};
	Component: {
		Component: IconType;
		color: string;
	};
}

export const certificatesInfo: certificatesInfoType[] = [
	{
		data: {
			name: 'Advanced Next.js Concepts',
			issue: 'issued on Feb 07, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/e7c6c97b2b51d39e2843d0a0453378c0f1714b2b/1678904918521.png',
		},
		Component: {
			Component: SiNextdotjs,
			color: '#fff',
		},
	},
	{
		data: {
			name: 'Advanced React Concepts',
			issue: 'issued on Feb 06, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/8f65a7e5e2f4f3d86c1f4aa37434d1d4a26b1383/1675624908209.png',
		},
		Component: {
			Component: SiReact,
			color: '#61DAFB',
		},
	},
	{
		data: {
			name: 'Advanced React Hooks',
			issue: 'issued on Feb 03, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/20169004ae8eb9fef508781f50668c80673ec080/1675413546740.png',
		},
		Component: {
			Component: SiReact,
			color: '#61DAFB',
		},
	},
	{
		data: {
			name: 'Typescript',
			issue: 'issued on May 09, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/2a9c32c700b3cd61e7cdf4475e611af17079ddc3/1683631994563.png',
		},
		Component: {
			Component: SiTypescript,
			color: '#3178C6',
		},
	},
	{
		data: {
			name: 'Advance Practical Javascript',
			issue: 'issued on Feb 02, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/3fa2e20b319e46454dc7fa48263a3753e40678ed/1675329005878.png',
		},
		Component: {
			Component: IoLogoJavascript,
			color: '#F7DF1E',
		},
	},
	{
		data: {
			name: 'Advance Theoretical Javascript',
			issue: 'issued on Feb 06, 2023',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/8cf60f741736f3ec5d203f225735729028b88cba/1675621937004.png',
		},
		Component: {
			Component: IoLogoJavascript,
			color: '#F7DF1E',
		},
	},
];

interface projectsInfoType {}

export const projectsInfo = [
	{
		name: 'Portfolio',
		Components: [
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiNextdotjs,
				color: '#ffffff',
			},
		],
	},
	{
		name: 'Spiritwolf',
		Components: [
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiNextdotjs,
				color: '#ffffff',
			},
		],
	},
	{
		name: 'Todolist',
		Components: [
			{
				Component: SiTailwindcss,
				color: '#06B6D4',
			},
			{
				Component: SiNextdotjs,
				color: '#ffffff',
			},
		],
	},
];
