import BrowserShell from 'components/browser/BrowserShell'
import ProjectsSection from 'components/browser/sections/ProjectsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Sudarsan K Pai',
    description:
        'Selected projects, live previews, and repositories from Sudarsan K Pai.',
}

export default function Page() {
    return (
        <BrowserShell activeTab="projects">
            <ProjectsSection />
        </BrowserShell>
    )
}
