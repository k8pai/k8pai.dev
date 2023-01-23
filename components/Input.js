import React from 'react'

export default function Input({ values, onChange, id, name, label, placeholder, type, ...props }) {
	return (
		<div className='w-full mb-6 space-y-2'>
			<label className='block text-lg font-semibold' htmlFor={id}>{label}</label>
			<input 
				value={values}
				onChange={onChange}
				autoComplete='off'
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className="w-full text-gray-900 placeholder-slate-400 border-gray-500 border-opacity-50 rounded focus:ring-2 focus:ring-tertxt outline-none focus:outline-none"
				{...props}
				/>
		</div>
	)
}
