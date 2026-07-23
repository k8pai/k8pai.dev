import BrowserShell from 'components/browser/BrowserShell'
import ExperienceSection from 'components/browser/sections/ExperienceSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Work Experience | Sudarsan K Pai',
    description:
        'Work experience, stack, and role highlights from Sudarsan K Pai.',
}

export default function Page() {
    return (
        <BrowserShell activeTab="experience">
            <ExperienceSection />
        </BrowserShell>
    )
}
