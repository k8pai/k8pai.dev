import Link from 'next/link'
import type { IconType } from 'react-icons'

export default function LinkButton({
    href,
    label,
    icon: Icon,
    primary = false,
    className = '',
}: {
    href: string
    label: string
    icon: IconType
    primary?: boolean
    className?: string
}) {
    const external = href.startsWith('http')

    return (
        <Link
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className={`inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-bold transition ${
                primary
                    ? 'border-blue-500 bg-blue-600 text-white hover:bg-blue-500'
                    : 'border-[#2b3648] bg-[#151d2a] text-slate-200 hover:border-slate-500'
            } ${className}`}
        >
            <Icon size={16} />
            {label}
        </Link>
    )
}
