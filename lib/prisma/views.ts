import prisma from '.';

export const getViews = async () => {
	try {
		const result = await prisma.views.findMany({});
		return { data: result };
	} catch (error) {
		return { error };
	}
};

export const increment = async (slug: string) => {
	try {
		const result = await prisma.views.findUnique({
			where: { slug: slug },
		});

		console.log('result from increment => ', result);
		// if(result){

		// }
		return { result };
	} catch (error) {
		console.log('error => ', error);
		return { error };
	}
};
