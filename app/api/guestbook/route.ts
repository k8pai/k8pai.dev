import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { checkPossibleLinks, cleanText } from '../../../lib/helper';
import { createComments, getComments } from '../../../lib/prisma/guestbook';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		const { data, error } = await getComments();
		if (error) throw new Error(`Error: ${error}`);
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);

	if (!session || !session.user) {
		return NextResponse.json({ data: 'Not Authorized' });
	}
	const email = session.user.email as string;
	const name = session.user.name as string;
	const user = await req.json();
	try {
		if (user.body === '') {
			return NextResponse.json(
				`Your message is Empty, Provide some message to submit.`,
			);
		}
		user.links = checkPossibleLinks(user.body);
		user.body = cleanText(user.body);
		user.created_by = name;
		user.email = email;
		user.updated_at = new Date();
		const { data, error } = await createComments(user);
		if (error) throw new Error('Error Occured');
		return NextResponse.json({ data });
	} catch (err) {
		return NextResponse.json({ error: err });
	}
}
