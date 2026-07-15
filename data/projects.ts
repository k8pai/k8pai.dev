import calendar from 'public/calendar_thumb.png'
import linkwrap from 'public/linkwrap_thumb.png'
import pinit from 'public/pinit_thumb.png'
import tailwindInputs from 'public/tailwind_inputs_thumb.png'
import todolist from 'public/todolist_thumb.png'
import {
    SiAuth0,
    SiDatefns,
    SiFramer,
    SiGmail,
    SiGoogle,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'
import { projectsType } from 'typings'

export const projects: projectsType[] = [
    {
        name: 'Calendar',
        imageUrl: calendar,
        description:
            'A focused calendar interface for planning dates and moving through schedules with smooth, responsive UI states.',
        role: 'Frontend + UX',
        year: '2025',
        impact: 'Built as a polished scheduling experience with typed date logic and motion-driven interactions.',
        highlights: [
            'Designed responsive calendar views with shadcn/ui and Tailwind CSS',
            'Handled date operations with date-fns and TypeScript',
        ],
        projectUrl: 'https://calendar.k8pai.com',
        githubUrl: 'https://github.com/k8pai/calendar',
        Components: [
            {
                Component: SiTypescript,
                color: '#3178C6',
            },
            {
                Component: SiShadcnui,
                color: '#000000',
            },
            {
                Component: SiDatefns,
                color: '#770C56',
            },
            {
                Component: SiTailwindcss,
                color: '#06B6D4',
            },
            {
                Component: SiFramer,
                color: '#0055FF',
            },
            {
                Component: SiNextdotjs,
                color: '#000000',
            },
        ],
    },
    {
        name: 'Gmail-Automation',
        imageUrl: pinit,
        description:
            'A Node.js automation project for connecting Gmail workflows with Google APIs and authenticated access.',
        role: 'Backend Automation',
        year: '2024',
        impact: 'Explores practical email automation patterns, OAuth, and service integration from a command-line environment.',
        highlights: [
            'Integrated Gmail and Google APIs with Auth0 authentication',
            'Structured automation logic around Node.js scripts',
        ],
        projectUrl: '',
        githubUrl: 'https://github.com/k8pai/gmail-automation',
        Components: [
            {
                Component: SiJavascript,
                color: '#3178C6',
            },
            {
                Component: SiNodedotjs,
                color: '#339933',
            },
            {
                Component: SiGmail,
                color: '#EA4335',
            },
            {
                Component: SiGoogle,
                color: '#4285F4',
            },
            {
                Component: SiAuth0,
                color: '#EB5424',
            },
        ],
    },
    {
        name: 'Nextauth-cli',
        imageUrl: pinit,
        description:
            'An npm package that helps scaffold NextAuth setup faster for Next.js projects.',
        role: 'Developer Tool',
        year: '2024',
        impact: 'Turns a repeated auth setup task into a reusable CLI workflow for other developers.',
        highlights: [
            'Published as an npm package',
            'Packaged TypeScript-based scaffolding for authentication setup',
        ],
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
        description:
            'A link management app for collecting and sharing important URLs through a simple web interface.',
        role: 'Full Stack',
        year: '2024',
        impact: 'Combines a Next.js frontend with database-backed persistence for a practical personal productivity tool.',
        highlights: [
            'Built with Next.js, MongoDB, Prisma, and Tailwind CSS',
            'Added animated interactions with Framer Motion',
        ],
        projectUrl: 'https://linkwrap.k8pai.com',
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
        description:
            'A component documentation site for Tailwind-styled input patterns and UI examples.',
        role: 'UI Library Docs',
        year: '2023',
        impact: 'Created as a focused reference for reusable form styling patterns.',
        highlights: [
            'Documented input variants in a Next.js site',
            'Used Tailwind CSS and Framer Motion for presentation polish',
        ],
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
        description:
            'A clean task management app for creating and tracking simple daily todos.',
        role: 'Frontend',
        year: '2023',
        impact: 'A compact project for practicing stateful UI, layout, and core CRUD interactions.',
        highlights: [
            'Built a responsive Next.js interface',
            'Kept the interaction model intentionally simple and fast',
        ],
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
        name: 'Pinit (Chrome Extension)',
        imageUrl: pinit,
        description:
            'A browser extension concept for pinning and quickly revisiting useful pages.',
        role: 'Browser Extension',
        year: '2023',
        impact: 'Shows comfort building outside the usual web-app surface with HTML, JavaScript, and extension APIs.',
        highlights: [
            'Built with vanilla JavaScript and browser extension fundamentals',
            'Focused on a small, repeatable productivity workflow',
        ],
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
    // 	projectUrl: 'https://dev.k8pai.com',
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
]
