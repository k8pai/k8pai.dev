import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code);
	return (
		<article className="prose prose-quoteless prose-neutral dark:prose-invert">
			<Component />
		</article>
	);
}
