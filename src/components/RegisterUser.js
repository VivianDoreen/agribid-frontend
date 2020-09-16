import React, { useState, useEffect } from 'react';
import Header from './Header';

const RegisterUser = () => {
	const [ state, setState ] = useState({
		name: 'Nabulo Vivian Doreen',
		email: 'nabulov@yahoo.com',
		password: 123,
		confirm_password: '123',
		role: 'farmer'
	});

	const handleChange = (e) => {
		// console.log(e.target.name, 'e.target');
		const { name, value } = e.target;
		setState((state) => ({ ...state, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const config = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({
				name: state.name,
				email: state.email,
				password: state.password,
				confirm_password: state.confirm_password,
				role: state.role
			})
		};

		fetch('https://agribidtech.herokuapp.com/api/v1/auth/signup', config)
			.then((response) => {
				const statusCode = response.status;
				console.log(statusCode, 'status_code');
				return response.json();
			})
			.then((response) => console.log(response));
	};

	return (
		<div
			style={{
				width: '70%',
				margin: '0px auto'
			}}
		>
			<Header />
			<form onSubmit={handleSubmit} style={{ margin: 30 }}>
				<legend style={{ margin: 10 }}>Register User</legend>
				<input type='text' placeholder='Name' name='name' onChange={handleChange} />
				<br />
				<br />
				<input type='email' placeholder='Email' name='email' onChange={handleChange} />
				<br />
				<br />
				<input type='password' placeholder='Password' name='password' onChange={handleChange} />
				<br />
				<br />
				<input type='text' placeholder='Confirm Password' name='confirm_password' onChange={handleChange} />
				<br />
				<br />
				<select name='role' onChange={handleChange}>
					<option>role</option>
					<option value='farmer'>farmer</option>
					<option value='client'>client</option>
				</select>
				<br />
				<br />
				<button>Register</button>
			</form>
		</div>
	);
};
export default RegisterUser;
