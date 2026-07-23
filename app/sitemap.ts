import { promises as fs } from 'fs'
import path from 'path'

export const baseUrl = 'https://dev.k8pai.com'

async function getNoteSlugs(dir: string) {
    const entries = await fs.readdir(dir, {
        recursive: true,
        withFileTypes: true,
    })
    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
        .map((entry) => {
            const relativePath = path.relative(dir, path.join(dir, entry.name))
            return path.dirname(relativePath)
        })
        .map((slug) => slug.replace(/\\/g, '/'))
}

export default async function sitemap() {
    const notesDirectory = path.join(process.cwd(), 'contents')
    const slugs = await getNoteSlugs(notesDirectory)

    const notes = slugs.map((slug) => ({
        url: `${baseUrl}/notes/${slug}`,
        lastModified: new Date().toISOString(),
    }))

    const routes = ['', '/projects', '/work-experience', '/about', '/notes'].map((route) => ({
        url: `https://dev.k8pai.com${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...notes]
}
