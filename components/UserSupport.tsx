'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/navigation';

export default function UserSupport({ view, email }: any) {
	// const router = useRouter();
	// const [isRefreshing, startTransition] = useTransition();
	const [isLiked, setIsLiked] = useState(
		view?.filter((el) => el.email === email && el.liked).length
			? true
			: false,
	);
	let likes = view?.filter((el) => el.liked).length;

	const like = async () => {
		if (!isLiked) {
			await fetch('/api/interactions', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});
			setIsLiked(true);
		}
	};

	return (
		<div className="flex items-center mt-2">
			<motion.button
				onClick={like}
				whileTap={{ scale: 0.9 }}
				style={{
					transition: 'color 0.3s',
					border: 'none',
					background: 'none',
					cursor: 'pointer',
				}}
			>
				<IconContext.Provider
					value={{
						size: '24',
					}}
				>
					{isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
				</IconContext.Provider>
			</motion.button>
			<span style={{ marginLeft: '0.5rem' }}>{likes}</span>
		</div>
	);
}
