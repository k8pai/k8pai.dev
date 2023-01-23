import React, { useState } from 'react'
import Input from './Input';
import Textarea from './Textarea';

export default function ContactForm() {
	const [values, setValues] = new useState({
		name: '',
		email: '',
		message: ''
	})

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(values);

		try{
			const res = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			})
			if(!res.ok){
				setValues({ name: '', email: '', message: '' })
			}
		} catch (err){ 
			console.error(err)
		}
	}

	const onChange = (e) => {
		setValues((prev) => ({ ...prev, [e.target.id]: e.target.value }))
	}


	return (
		<div className='mx-4'>
			<form className='w-full max-w-2xl mx-auto my-4' onSubmit={handleSubmit} method='POST'>
				<Input value={values.name} onChange={onChange} id={'name'} name={"name"} label={'Your name'} placeholder={"Enter your name..."} type={"text"} />
				<Input value={values.email} onChange={onChange} id={'email'} name={"email"} label={'Your email'} placeholder={"Enter your email..."} type={"text"} />
				<Textarea value={values.message} onChange={onChange} id={'message'} name={"message"} label={'Message'} placeholder={"Enter your Message..."} />
				<button className='w-full py-2 rounded-md mt-6 bg-tertxt dark:bg-terbg mx-auto active:bg-sectxt active:dark:bg-secbg outline-none' type='submit'>Submit</button>
			</form>
		</div>
	)
}
