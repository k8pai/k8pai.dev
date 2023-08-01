import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, htmlTemplate } from '../../lib/nodemailer';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;

		try {
			const htmlContent = htmlTemplate(name, email, message);
			await transporter.sendMail({
				from: email,
				to: 'sudarsankpai@gmail.com',
				html: htmlContent,
				subject: `Portfolio`,
			});
			return res.json({ name, email, message });
		} catch (error) {
			console.error('Error sending email:', error);
		}
	}
	res.setHeader('Allow', '[GET, POST]');
	res.end();
}
