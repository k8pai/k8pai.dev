import type { IconType } from 'react-icons'

export type TabKey = 'projects' | 'experience' | 'about' | 'notes'

export type BrowserPost = {
    slug: string
    title: string
    summary: string
    date: string
    displayDate: string
}

export type MenuRow = {
    icon: IconType
    label: string
    href?: string
    shortcut?: string
    chevron?: boolean
}
