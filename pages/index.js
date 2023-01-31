import Head from 'next/head'
import Image from 'next/image'
import Works from '../components/Works'
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import { IconContext } from 'react-icons';
import { BootstrapIcon, ExpressIcon, GithubIcon, GitIcon, HtmlIcon, JavaScriptIcon, Logok8pai, MongodbIcon, MysqlIcon, NextJsIcon, NodeJsIcon, PrismaIcon, ReactIcon, ScssIcon, SolidityIcon, TailwindcssIcon, TypeScriptIcon, VercelIcon, VscodeIcon, Web3Icon } from '../components/socialIcons/SocialIcons';
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