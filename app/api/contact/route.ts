import { NextResponse, type NextRequest } from 'next/server'
import { htmlTemplate, transporter } from '../../../lib/nodemailer'

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json()

    try {
        const htmlContent = htmlTemplate(name, email, message)
        await transporter.sendMail({
            from: email,
            to: 'sudarsankpai@gmail.com',
            html: htmlContent,
            subject: `Portfolio`,
        })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ data: 'Something went wrong...' })
    }

    return NextResponse.json({ data: { name, email, message } })
}
