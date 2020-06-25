import React from 'react';

export default function SignIn() {
	return (
		<form>
			<fieldset>
				<label htmlFor='email'>E-mail</label>
				<input type='email' name='email' inputmode='email' autocomplete='username' id='email'/>
			</fieldset>

			<fieldset>
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' autocomplete='current-password' id='password'/>
			</fieldset>

			<button type='submit'>Sign in</button>
		</form>
	)
}