import * as React from 'react';
import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { contactFormType } from 'components/contact/Form';

export const ContactEmailTemplate = ({
	name,
	email,
	message,
}: contactFormType) => (
	<Html>
		<Head />
		<Preview>A response from one of the visitors from Portfolio.</Preview>
		<Body style={main}>
			<Container style={container}>
				<Text style={paragraph}>
					<b>{name}</b> just tried to reach out to you!
				</Text>
				<Text style={paragraph}>{message}</Text>
				<Section style={btnContainer}>
					<Button style={button} href={`mailto:${email}`}>
						Send a Response
					</Button>
				</Section>
				<Text style={paragraph}>
					Best,
					<br />
					From Portfolio <a href="https://k8pai.dev">k8pai.dev</a>
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					{new Date().toLocaleDateString()},{' '}
					{new Date().toLocaleTimeString()}
				</Text>
			</Container>
		</Body>
	</Html>
);

export default ContactEmailTemplate;

const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
};

const logo = {
	margin: '0 auto',
};

const paragraph = {
	fontSize: '16px',
	lineHeight: '26px',
};

const btnContainer = {
	textAlign: 'center' as const,
};

const button = {
	backgroundColor: '#5F51E8',
	borderRadius: '3px',
	color: '#fff',
	padding: '12px 12px',
	fontSize: '16px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
};

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
};

const footer = {
	color: '#8898aa',
	fontSize: '12px',
};
