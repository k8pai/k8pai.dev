import { LuGithub, LuLinkedin, LuMail, LuUser } from 'react-icons/lu'
import LinkButton from '../LinkButton'
import SectionHero from '../SectionHero'
import { skillTags } from '../section-data'

export default function AboutSection() {
    return (
        <section>
            <SectionHero
                eyebrow="About tab"
                title="About Sudarsan"
                body="Full-stack developer building useful tools, polished interfaces, and small products that make repeated work easier."
            />
            <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6">
                    <LuUser className="text-3xl text-yellow-400" />
                    <h2 className="mt-4 text-2xl font-bold">
                        Builds tools with a product eye
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                        Passionate Full Stack Developer specializing in
                        interactive web apps, server-side logic, dynamic
                        front-end design, and clean maintainable code.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <LinkButton
                            href="https://linkedin.com/in/k8pai"
                            label="LinkedIn"
                            icon={LuLinkedin}
                            primary
                        />
                        <LinkButton
                            href="https://github.com/k8pai"
                            label="GitHub"
                            icon={LuGithub}
                        />
                        <LinkButton
                            href="mailto:thek8pai@gmail.com"
                            label="Email"
                            icon={LuMail}
                        />
                    </div>
                </div>
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6">
                    <h2 className="text-2xl font-bold">Education</h2>
                    <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                        <p>
                            <span className="block font-bold text-slate-50">
                                Mahatma Gandhi University
                            </span>
                            Bachelor degree, Computer Applications
                            <br />
                            2019 - 2022
                        </p>
                        <p>
                            <span className="block font-bold text-slate-50">
                                Higher Secondary
                            </span>
                            Computer Science
                            <br />
                            2017 - 2019
                        </p>
                    </div>
                </div>
                <div className="rounded-lg border border-[#263142] bg-[#10141c] p-6 lg:col-span-2">
                    <h2 className="text-2xl font-bold">Core stack</h2>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {skillTags.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-[#2b3648] bg-[#151d2a] px-4 py-2 text-sm font-bold text-[#b7c8e8]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
