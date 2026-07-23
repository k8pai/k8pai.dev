import { projects } from 'data'
import Image from 'next/image'
import { type CSSProperties } from 'react'
import { LuExternalLink, LuGithub } from 'react-icons/lu'
import LinkButton from './LinkButton'

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111827" offset="20%" />
      <stop stop-color="#1f2937" offset="50%" />
      <stop stop-color="#111827" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111827" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`

const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str)

export default function ProjectBrowserCard({
    project,
}: {
    project: (typeof projects)[number]
}) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#263142] bg-[#10141c] transition hover:-translate-y-1 hover:border-blue-400/60">
            <div className="relative aspect-video bg-[#111827]">
                <Image
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    fill
                    sizes="(min-width: 1280px) 420px, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475)
                    )}`}
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-bold text-slate-50">
                            {project.name}
                        </h2>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                            {project.year}
                        </p>
                    </div>
                    {project.role ? (
                        <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-bold text-slate-200">
                            {project.role}
                        </span>
                    ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.Components.slice(0, 5).map(
                        ({ Component, color, darkColor }, index) => (
                            <Component
                                key={index}
                                style={
                                    {
                                        '--tech-color': darkColor ?? color,
                                    } as CSSProperties
                                }
                                className="text-xl text-[var(--tech-color)]"
                            />
                        )
                    )}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.projectUrl ? (
                        <LinkButton
                            href={project.projectUrl}
                            label="Preview"
                            icon={LuExternalLink}
                            primary
                        />
                    ) : null}
                    {project.githubUrl ? (
                        <LinkButton
                            href={project.githubUrl}
                            label="GitHub"
                            icon={LuGithub}
                        />
                    ) : null}
                </div>
            </div>
        </article>
    )
}
