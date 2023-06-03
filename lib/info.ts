import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';
import { IoLogoJavascript } from 'react-icons/io';
import todolist from '../public/todolist_thumb.png';
import spiritwolf from '../public/spiritwolf_thumb.png';
import {
	SiGit,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiTypescript,
	SiTailwindcss,
} from 'react-icons/si';

// Certificates info
export interface certificatesInfoType {
	data: {
		name: string;
		issueDate: string;
		issuerUrl: string;
		issuer: string;
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
			issueDate: 'On Feb 07, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
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
			issueDate: 'On Feb 06, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
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
			issueDate: 'On Feb 03, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
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
			issueDate: 'On May 09, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
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
			issueDate: 'On Feb 02, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
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
			issueDate: 'On Feb 06, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/8cf60f741736f3ec5d203f225735729028b88cba/1675621937004.png',
		},
		Component: {
			Component: IoLogoJavascript,
			color: '#F7DF1E',
		},
	},
	{
		data: {
			name: 'Tailwind CSS',
			issueDate: 'On Jan 22, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/a362ac01af934c5397d1981008f6858a3215d41a/1674382731378.png',
		},
		Component: {
			Component: SiTailwindcss,
			color: '#06B6D4',
		},
	},
	{
		data: {
			name: 'Git (version control)',
			issueDate: 'On Jan 18, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/3494797eb4f5b7bbc7a432f964cf8f8b0588f786/1674030096585.png',
		},
		Component: {
			Component: SiGit,
			color: '#F05032',
		},
	},
	{
		data: {
			name: 'Node.js',
			issueDate: 'On April 25, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/4742d53b54cf1bc3bafc1bcbc0e1838b2fa787ef/1682405291661.png',
		},
		Component: {
			Component: SiNodedotjs,
			color: '#339933',
		},
	},
];

// projects info
export interface ProjectComponents {
	Component: IconType;
	color: string;
}
export interface projectsInfoType {
	name: string;
	imageUrl: StaticImageData;
	Components: ProjectComponents[];
}

export const projectsInfo: projectsInfoType[] = [
	{
		name: 'Portfolio',
		imageUrl: todolist,
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
		imageUrl: spiritwolf,
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
		imageUrl: todolist,
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
