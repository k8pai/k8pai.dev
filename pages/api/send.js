import sgmail from '@sendgrid/mail'

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
	if(req.method === "POST"){
		console.log(req.body);
		const { name, email, message } = req.body;
		const msg = {
			to: 'thek8pai@gmail.com',
			from: 'thek8pai@gmail.com',
			subject: `${name.toUpperCase()} sent you a message`,
			text: `Email => ${email}`,
			html: `<strong>${message}</strong>`,
		}
		try{
			await sgmail.send(msg)
			res.status(200).json({ success: true })
		} catch (err) {
			console.log(err)
			res.status(200).json( { success: false })
		}
	}
}
  