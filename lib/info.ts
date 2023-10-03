import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';
import { IoLogoJavascript } from 'react-icons/io';
import todolist from '../public/todolist_thumb.png';
import pinit from '../public/pinit_thumb.png';
import tailwindInputs from '../public/tailwind_inputs_thumb.png';
import portfolio from '../public/portfolio_thumb.png';
import linkwrap from '../public/linkwrap_thumb.png';
import {
	SiGit,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiTypescript,
	SiTailwindcss,
	SiMongodb,
	SiPrisma,
	SiFramer,
	SiGithubactions,
	SiPython,
	SiHtml5,
	SiJavascript,
	SiAuth0,
	SiDocker,
} from 'react-icons/si';

export const aboutMe = [
	'I am a self-driven, versatile, and reliable individual, always approaching work with a team-minded spirit to get things done efficiently. My calm and cheerful demeanor helps me tackle challenges with a positive attitude, ensuring a smooth workflow.',

	'As a student, my passion for design is evident in my keen eye for aesthetics and user experience. I find joy in exploring, contributing, and building new technologies and libraries that can make a difference in the digital world.',

	"With a strong commitment to personal growth and professional development, I am constantly seeking opportunities to learn and expand my knowledge. Embracing new technologies is not just a task for me; it's a thrilling adventure.",
];

// Certificates info
export interface certificatesInfoType {
	data: {
		name: string;
		issueDate: string;
		issuerUrl: string;
		issuer: string;
		href: string;
	};
	details?: { feature: string; url?: string }[];
	Component: {
		Component: IconType;
		color: string;
	};
}

export const certificatesInfo: certificatesInfoType[] = [
	{
		data: {
			name: 'Docker',
			issueDate: 'On Oct 03, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/33b15c99a100f84babcbda4f29a31243024d2913/1696354887716.png',
		},
		details: [
			{
				feature: 'Docker: Containerization for Modern Development',
				url: 'https://codedamn.com/learn/docker',
			},
		],
		Component: {
			Component: SiDocker,
			color: '#2496ED',
		},
	},
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
			name: 'Python',
			issueDate: 'On May 09, 2023',
			issuerUrl: 'https://kaggle.com',
			issuer: 'Kaggle',
			href: 'https://www.kaggle.com/learn/certification/sudarshpai/python',
		},
		Component: {
			Component: SiPython,
			color: '#3776AB',
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
	{
		data: {
			name: 'CI/CD with github actions',
			issueDate: 'On June 19, 2023',
			issuerUrl: 'https://codedamn.com',
			issuer: 'Codedamn',
			href: 'https://codedamn-user-screenshots.s3.amazonaws.com/90c91ad5b91c8ecbb105cc2ce21ab7f1f6f4f14e/1687183187089.png',
		},
		Component: {
			Component: SiGithubactions,
			color: '#2088FF',
		},
	},
];

// projects info
export interface ProjectComponents {
	Component: IconType;
	color: string;
	darkColor?: string;
}
export interface projectsInfoType {
	name: string;
	imageUrl: StaticImageData;
	projectUrl?: string;
	githubUrl?: string;
	Components: ProjectComponents[];
}

export const projectsInfo: projectsInfoType[] = [
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
	{
		name: 'Portfolio',
		imageUrl: portfolio,
		projectUrl: 'https://k8pai.dev',
		githubUrl: 'https://github.com/k8pai/k8pai.dev',
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
];
