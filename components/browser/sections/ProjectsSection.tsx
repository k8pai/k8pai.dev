import { projects } from 'data'
import Link from 'next/link'
import { LuExternalLink } from 'react-icons/lu'
import LinkButton from '../LinkButton'
import ProjectBrowserCard from '../ProjectBrowserCard'
import SectionHero from '../SectionHero'
import { extraWorks } from '../section-data'

export default function ProjectsSection() {
    return (
        <section>
            <SectionHero
                eyebrow="Projects tab"
                title="Selected projects"
                body="Live previews and repositories sit directly on each project, so the portfolio behaves like a focused workbench instead of a static link list."
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
                <div className="grid gap-4 xl:grid-cols-2">
                    {projects.slice(0, 4).map((project) => (
                        <ProjectBrowserCard
                            key={project.name}
                            project={project}
                        />
                    ))}
                </div>
                <aside className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                    <h2 className="text-xl font-bold">More work</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        Smaller projects and repositories stay in the Chrome
                        menu, but the useful ones are surfaced here too.
                    </p>
                    <div className="mt-5 space-y-3">
                        {extraWorks.map((work) => (
                            <Link
                                key={work.title}
                                href={work.href}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-lg border border-[#2b3648] bg-[#151b27] p-4 transition hover:border-blue-400/60"
                            >
                                <span>
                                    <span className="block font-bold">
                                        {work.title}
                                    </span>
                                    <span className="text-sm text-slate-400">
                                        {work.body}
                                    </span>
                                </span>
                                <LuExternalLink />
                            </Link>
                        ))}
                    </div>
                    <LinkButton
                        href="https://github.com/k8pai"
                        label="Open GitHub"
                        icon={LuExternalLink}
                        className="mt-5"
                    />
                </aside>
            </div>
        </section>
    )
}
