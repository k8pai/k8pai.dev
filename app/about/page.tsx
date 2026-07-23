import BrowserShell from 'components/browser/BrowserShell'
import AboutSection from 'components/browser/sections/AboutSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Sudarsan K Pai',
    description:
        'About Sudarsan K Pai, full-stack developer building useful tools and polished web interfaces.',
}

export default function Page() {
    return (
        <BrowserShell activeTab="about">
            <AboutSection />
        </BrowserShell>
    )
}
