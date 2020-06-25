import React, { useState } from 'react';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		fetch('http://localhost:3333/authenticate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		}).then(res => res.json())
			.then(data => {
				console.log('Success: ', data)
			})
	};

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor='email'>E-mail</label>
				<input 
					value={email}
					onChange={evt => setEmail(evt.target.value)}
					type='email'
					name='email'
					inputMode='email'
					autoComplete='username'
					id='email'
				/>
			</fieldset>

			<fieldset>
				<label htmlFor='password'>Password</label>
				<input
					value={password}
					onChange={evt => setPassword(evt.target.value)}
					type='password'
					name='password'
					autoComplete='current-password'
					id='password'
				/>
			</fieldset>

			<button type='submit'>Sign in</button>
		</form>
	)
}