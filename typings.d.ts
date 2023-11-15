import { ContactFormSchema } from 'lib/schema';
import { TypeOf, infer } from 'zod';

// projects info
export interface ProjectComponents {
	Component: IconType;
	color: string;
	darkColor?: string;
}
export interface projectsType {
	name: string;
	imageUrl: StaticImageData;
	projectUrl?: string;
	githubUrl?: string;
	Components: ProjectComponents[];
}

// Certificates info
export interface certificatesType {
	data: {
		name: string;
		issueDate: string;
		issuerUrl: string;
		issuer: string;
		href: string;
	};
	details?: { feature: string; url?: string }[];
	Component: {
		Component: IconType;
		color: string;
	};
}

// Social Links info

export interface socialLinksType {
	color: string;
	Component: IconType;
	href: string;
}
