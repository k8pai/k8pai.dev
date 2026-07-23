export default function SectionHero({
    eyebrow,
    title,
    body,
}: {
    eyebrow: string
    title: string
    body: string
}) {
    return (
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-end">
            <div>
                <span className="inline-flex rounded-full border border-[#263142] bg-[#182033] px-3 py-2 text-xs font-semibold text-[#8cc8ff]">
                    {eyebrow}
                </span>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
                    {body}
                </p>
            </div>
            <div className="rounded-lg border border-[#263142] bg-[#10141c] p-5">
                <h2 className="font-bold text-slate-50">Quick signal</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                    Browser tabs now map to real pages. Guestbook is
                    intentionally omitted from this redesigned portfolio surface.
                </p>
            </div>
        </div>
    )
}
