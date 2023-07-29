import { cache } from 'react';
import prisma from '.';

export const getViews = cache(async () => {
	try {
		const result = await prisma.views.findMany({});
		return { data: result };
	} catch (error) {
		return { error };
	}
});

export const increment = async (slug: string) => {
	try {
		const result = await prisma.views.findUnique({
			where: { slug: slug },
		});

		console.log('result from increment => ', result);
		return { result };
	} catch (error) {
		console.log('error => ', error);
		return { error };
	}
};

export const getViewCount = async (slug: string) => {
	const existingView = await prisma.views.findUnique({ where: { slug } });
	return existingView ? existingView.count : 0;
};
