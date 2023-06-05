import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass,
	},
});

export const htmlTemplate = (name, email, message) => `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        .bold {
          font-weight: bold;
        }
        .sender-email {
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <p class="bold">From </p>
      <p class="sender-email">${name} - ${email}</p>
      <p class="bold sender-email">Message: </p>
	  <p class="sender-email">${message}</p>
    </body>
  </html>
`;
