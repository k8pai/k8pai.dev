import Works from '../components/Works'
import ContactForm from './ContactForm';
import worksData from '../data/Worksinfo';
import TeachAndTools from "../components/TechAndTools";
import Hero from '../components/Hero';
import techsData from '../data/TechData';
import { HeroLinks } from '../data/Socials';

export default function Home() {

	return (
		<div className="flex-grow flex flex-col bg-tertext w-full">
			<Hero socials={HeroLinks} />
			<TeachAndTools techs={techsData} />
			<Works works={worksData} />
			<ContactForm />
		</div>
	)
}