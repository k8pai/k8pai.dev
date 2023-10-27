import { transporter, htmlTemplate } from '../../../lib/nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { name, email, message } = await req.json();

	try {
		const htmlContent = htmlTemplate(name, email, message);
		await transporter.sendMail({
			from: email,
			to: 'sudarsankpai@gmail.com',
			html: htmlContent,
			subject: `Portfolio`,
		});
		return NextResponse.json({ name, email, message });
	} catch (error) {
		console.error('Error sending email:', error);
	}
}
