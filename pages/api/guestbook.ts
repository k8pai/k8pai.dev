import { createComments, getComments } from '../../lib/prisma/guestbook';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { checkPossibleLinks, cleanText } from '../../lib/helper';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		try {
			const { data, error } = await getComments();
			if (error) throw new Error(`Error: ${error}`);
			return res.status(200).json(data);
		} catch (error) {
			return res.status(404).json({ error });
		}
	}
	const session = await getServerSession(req, res, authOptions);

	if (!session || !session.user) {
		return res.status(403).json({ data: 'Not Authorized' });
	}
	const email = session.user.email as string;
	const name = session.user.name as string;
	if (req.method === 'POST') {
		const user = req.body;
		try {
			if (user.body === '') {
				return res
					.status(422)
					.send(
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
			return res.status(200).json({ data });
		} catch (err) {
			return res.status(403).json({ error: err });
		}
	}
	res.setHeader('Allow', '[GET, POST, DELETE]');
	res.status(200).end('All done');
}
