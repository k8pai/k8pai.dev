// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const NotePosts = defineDocumentType(() => ({
	name: 'Notes',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		header: {
			type: 'string',
			required: false,
		},
		title: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: false,
		},
		date: {
			type: 'date',
			required: true,
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: 'contents',
	documentTypes: [NotePosts],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted');
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted'];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
		],
	},
});
