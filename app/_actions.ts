'use server'

import { contactFormType } from 'components/contact/Form'
import ContactEmailTemplate from 'emails/contact-email-template'
import { ContactFormSchema } from 'lib/schema'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_KEY)

export const sendMail = async (data: contactFormType) => {
    const result = ContactFormSchema.safeParse(data)

    if (result.success) {
        const { name, email, message } = result.data
        try {
            const data = await resend.emails.send({
                from: 'Portfolio <onboarding@resend.dev>',
                to: ['thek8pai@gmail.com'],
                subject: 'Contact form submission',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                react: ContactEmailTemplate({ name, email, message }),
                tags: [
                    {
                        name: 'category',
                        value: 'Portfolio',
                    },
                ],
            })
            return { success: true, data }
        } catch (error) {
            return { success: false, error }
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}
