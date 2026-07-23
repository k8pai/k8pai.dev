import type { TabKey } from './types'

export const tabConfig: {
    key: TabKey
    label: string
    href: string
    path: string
    color: string
}[] = [
    {
        key: 'projects',
        label: 'Projects',
        href: '/projects',
        path: 'projects',
        color: '#4285F4',
    },
    {
        key: 'experience',
        label: 'Work Experience',
        href: '/work-experience',
        path: 'work-experience',
        color: '#34A853',
    },
    {
        key: 'about',
        label: 'About',
        href: '/about',
        path: 'about',
        color: '#FBBC05',
    },
    {
        key: 'notes',
        label: 'Notes',
        href: '/notes',
        path: 'notes',
        color: '#EA4335',
    },
]
