'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/navigation';

export default function UserSupport({ email }: any) {
	const [view, setView] = useState({
		array: [],
		isLiked: false,
		count: '',
	});

	useEffect(() => {
		(async () => {
			await fetch('/api/interactions', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => {
					const obj = {
						array: data || [],
						isLiked: data?.filter(
							(el: any) => el.email === email && el.liked,
						).length
							? true
							: false,
						count: data.length || 0,
					};
					setView(obj);
				});
		})();
	}, []);

	const like = async () => {
		if (!view.isLiked) {
			fetch('/api/interactions', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})
				.then((response) => response.json())
				.then((data) => {
					const obj = {
						array: data || [],
						isLiked: data?.filter(
							(el: any) => el.email === email && el.liked,
						).length
							? true
							: false,
						count: data.length || 0,
					};
					setView(obj);
				});
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
					{view.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
				</IconContext.Provider>
			</motion.button>
			<span style={{ marginLeft: '0.5rem' }}>{view.count}</span>
		</div>
	);
}
