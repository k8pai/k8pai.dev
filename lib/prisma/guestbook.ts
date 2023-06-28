import prisma from '.';

export async function getComments() {
	try {
		const data = await prisma.guestbook.findMany({
			orderBy: {
				updated_at: 'desc',
			},
		});
		return { data };
	} catch (error) {
		return { error };
	}
}

export interface userType {
	id?: string;
	email: string;
	body: string;
	links: string[];
	created_by: string;
	updated_at?: any;
}

export async function createComments(user: userType) {
	try {
		const data = await prisma.guestbook.create({ data: user });
		return { data };
	} catch (error) {
		return { error };
	}
}
