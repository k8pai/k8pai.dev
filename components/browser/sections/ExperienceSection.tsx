import { LuBriefcase, LuMail } from 'react-icons/lu'
import LinkButton from '../LinkButton'
import SectionHero from '../SectionHero'
import { workItems } from '../section-data'

export default function ExperienceSection() {
    return (
        <section>
            <SectionHero
                eyebrow="Work Experience tab"
                title="Work experience"
                body="A timeline for roles, impact, and operating style. The exact company history can be expanded without changing the browser shell."
            />
            <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
                <div className="rounded-lg border border-[#263142] bg-[#0e131b] p-6">
                    <div className="relative space-y-5 before:absolute before:left-5 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-[#263142]">
                        {workItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative flex gap-5 rounded-lg border border-[#263142] bg-[#10141c] p-5"
                            >
                                <span
                                    className="relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full border-4 border-[#10141c]"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-slate-50">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <aside className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                    <LuBriefcase className="text-3xl text-emerald-400" />
                    <h2 className="mt-4 text-xl font-bold">
                        Resume-ready structure
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                        Company names, dates, measurable outcomes, and stack
                        notes can drop into this timeline when you want the
                        work-history layer finalized.
                    </p>
                    <LinkButton
                        href="mailto:thek8pai@gmail.com?subject=Resume%20request"
                        label="Email for resume"
                        icon={LuMail}
                        primary
                        className="mt-6"
                    />
                </aside>
            </div>
        </section>
    )
}
