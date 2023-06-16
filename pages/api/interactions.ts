// import { createComments, getComments } from '../../lib/prisma/guestbook';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { getInteractions, showSupport } from '../../lib/prisma/support';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		try {
			const { data, error } = await getInteractions();
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
	if (req.method === 'PUT') {
		const { email } = req.body;
		try {
			const { data, error } = await showSupport(email);
			if (error) throw new Error('Error Occured');
			return res.status(200).json({ data });
		} catch (err) {
			return res.status(403).json({ error: err });
		}
	}
	res.setHeader('Allow', '[GET, PUT]');
	res.status(200).end('All done');
}
