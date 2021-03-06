export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const FETCH_TOKEN_REQUEST = 'FETCH_TOKEN_REQUEST';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';

export const fetchTokenRequest = () => {
	return {
		type: FETCH_TOKEN_REQUEST
	};
};

export const fetchTokenSuccess = (data) => {
	return {
		type: FETCH_TOKEN_SUCCESS,
		payload: data
	};
};

export const loginUserRequest = (data) => {
	return {
		type: LOGIN_USER_REQUEST,
		payload: { data }
	};
};

export const loginUserSuccess = (data) => {
	console.log(data, 'LoginResponse');
	return {
		type: LOGIN_USER_SUCCESS,
		payload: data
	};
};

export const loginUserFailure = (error) => {
	return {
		type: LOGIN_USER_FAILURE,
		payload: { error }
	};
};
