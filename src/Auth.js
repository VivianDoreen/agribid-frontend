import React, { useState, useEffect, useContext, createContext } from 'react';
import Api from './services/Api';
import useSWR from 'swr';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const [ isLoading, setIsloading ] = useState(false);
  

	useEffect(() => {
		// checkAuth();
		console.log('TTTTTTTTTTTTT');
		const xx = Api.getUser({
			email: 'maria@gmail.com',
			password: '123'
		});
		// console.log(xx, 'rerererereree');
		xx.then((response) => console.log(response, 'rerererereree'));
		// .then((response) => console.log(response, 'rerererereree'))
		// .catch((error) => console.error(error));
	}, []);

	// const checkAuth = () => {
	// 	return Api.getUser({
	// 		email: 'maria@gmail.com',
	// 		password: '123'
	// 	})
	// 		.then((response) => console.log(response, 'rerererereree'))
	// 		.catch((error) => console.error(error));
	// };
	return <AuthContext.Provider value='Auth Context'>{children}</AuthContext.Provider>;
};
