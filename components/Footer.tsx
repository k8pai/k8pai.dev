'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import { SiDiscord, SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const toggle = () => {
		setShowMenu((state) => !state);
	};

	return (
		<footer className=" py-4 mb-5">
			<div className="flex items-center justify-between mx-10">
				{/* Logo Component */}
				<Logo />
				<div className="space-x-4 flex items-center">
					<Link href={'https://github.com/k8pai'}>
						<SiGithub />
					</Link>
					<Link href={'https://discord.com/users/898949804024012850'}>
						<SiDiscord />
					</Link>
					<Link href={'https://linkedin.com/in/k8pai'}>
						<SiLinkedin />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
