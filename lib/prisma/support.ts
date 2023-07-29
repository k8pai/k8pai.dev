import prisma from '.';

// export const getViews = async () => {
// 	try {
// 		const response = await prisma.views.findMany({});
// 		return { data: response };
// 	} catch (error) {
// 		return { error };
// 	}
// };

export const getInteractions = async () => {
	try {
		const response = await prisma.interactions.findMany({});
		return { data: response };
	} catch (error) {
		return { error };
	}
};

export const showSupport = async (mail: string) => {
	try {
		const record = await prisma.interactions.findMany({
			where: {
				email: mail,
			},
		});
		if (!record.length) {
			const data = await prisma.interactions.create({
				data: {
					email: mail,
					liked: true,
				},
			});
			return { data };
		}
		const data = await prisma.interactions.update({
			where: {
				id: record[0].id,
			},
			data: {
				liked: true,
			},
		});

		return { data };
	} catch (error) {
		return { error };
	}
};
