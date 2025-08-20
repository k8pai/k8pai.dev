import {
    SiDiscord,
    SiGithub,
    SiInstagram,
    SiLinkedin,
    SiNpm,
} from 'react-icons/si'
import { socialLinksType } from 'typings'

export const socialLinks: socialLinksType[] = [
    {
        Component: SiLinkedin,
        color: '#0A66C2',
        href: 'https://linkedin.com/in/k8pai',
        title: 'Linkedin',
    },
    {
        Component: SiGithub,
        color: '#fff',
        href: 'https://github.com/k8pai',
        title: 'Github (k8pai)',
    },
    {
        Component: SiNpm,
        color: '#CB3837',
        href: 'https://www.npmjs.com/~k8pai',
        title: 'NPM Packages',
    },
    {
        Component: SiDiscord,
        color: '#5865F2',
        href: 'https://discord.com/users/898949804024012850',
        title: 'Discord',
    },
    // {
    //     Component: SiGithub,
    //     color: '#fff',
    //     href: 'https://github.com/pai-tlo',
    //     title: 'Github (pai-tlo)',
    // },
    {
        Component: SiInstagram,
        color: '#E4405F',
        href: 'https://instagram.com/_k8pai',
        title: 'Instagram',
    },
]
