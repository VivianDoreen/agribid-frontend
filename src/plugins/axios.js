import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://agribidtech.herokuapp.com/api/v1/'
});

// axiosClient.interceptors.request.use((request) => {
// 	return {
// 		...request,
// 		headers: {
// 			...request.headers,
// 			'Content-Type': 'application/json',
// 			'x-access-token': `localStorage.getItem("token")`
// 		}
// 	};
// });

// axiosClient.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		return new Promise((resolve) => {
// 			const originalRequest = error.config;
// 			const refreshToken = localStorage.get('refresh_token');
// 			if (
// 				error.response &&
// 				error.response.status === 401 &&
// 				error.config &&
// 				!error.config.__isRetryRequest &&
// 				refreshToken
// 			) {
// 				originalRequest._retry = true;

// 				const response = fetch(api.refreshToken, {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json'
// 					},
// 					body: JSON.stringify({
// 						refresh: refreshToken
// 					})
// 				})
// 					.then((res) => res.json())
// 					.then((res) => {
// 						localStorage.set(res.access, 'token');

// 						return axios(originalRequest);
// 					});
// 				resolve(response);
// 			}

// 			return Promise.reject(error);
// 		});
// 	}
// );

export default axiosClient;
