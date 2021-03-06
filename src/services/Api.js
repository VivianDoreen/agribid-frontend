import axios from '../plugins/axios';
const access_token = localStorage.getItem('token');

const headers = {
	'Content-Type': 'application/json',
	Authorization: access_token
};

export default class Api {
	static setHeaders = () => {
		const headers = {
			'Content-Type': 'application/json',
			Authorization: access_token
		};
		return headers;
	};

	static fetchUsers = async (path) => {
		const response = await axios.get(path, { headers });
		return response;
	};

	// static loginUser = async (path) => {
	// 	const config = {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 			Accept: 'application/json'
	// 		},
	// 		mode: 'cors',
	// 		body: JSON.stringify({
	// 			email: 'maria@gmail.com',
	// 			password: '123'
	// 		})
	// 	};

	// const response = await axios.post(path, {
	// 	email: 'maria@gmail.com',
	// 	password: '123'
	// });
	// 	return response;
	// };
	// static loginUser = async (data) => {
	// 	const config = {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 			Accept: 'application/json'
	// 		},
	// 		mode: 'cors',
	// 		body: JSON.stringify({
	// 			email: 'maria@gmail.com',
	// 			password: '123'
	// 		})
	// 	};

	// 	const response = await axios.post('auth/login', data);
	// 	return response;
	// };

	static getUser = async (data) => {
		const response = await axios.post('/auth/login', data);
		console.log(response, 'responseresponseresponseresponseresponse');
		return response;
	};
	// const fetcher = params => url => post(url, params)
}
