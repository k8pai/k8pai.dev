import React from 'react'

export default function Textarea({ values, onChange, id, name, label, placeholder, ...props }) {
	return (
		<div className='w-full mb-6 space-y-2'>
			<label className='block text-lg font-semibold' htmlFor={id}>{label}</label>
			<textarea 
				value={values}
				onChange={onChange}
				autoComplete='off'
				id={id}
				name={name}
				rows={5}
				placeholder={placeholder}
				className="w-full text-gray-900 placeholder-slate-400 border-gray-500 border-opacity-50 rounded-lg outline-none focus:ring-2 focus:ring-tertxt"
				{...props}
				/>
		</div>
	)
}
