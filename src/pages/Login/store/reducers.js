import * as actions from './actions';

export const initialState = {
	// token: localStorage.getItem("token"),
	token: null,
	isAuthenticated: false,
	user: {},
	error: {},
	isLoading: false
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOGIN_USER_REQUEST:
			return { ...state, error: {}, isLoading: true };

		case actions.LOGIN_USER_SUCCESS:
			const { data } = action.payload;
			return {
				...state,
				token: data['x-access-token'],
				isAuthenticated: true,
				isLoading: false,
				user: data,
				error: {}
			};

		case actions.LOGIN_USER_FAILURE:
			return {
				...state,
				isAuthenticated: false,
				error: action.payload.error,
				user: {},
				isLoading: false
			};

		case actions.FETCH_TOKEN_REQUEST:
			return {
				...state
			};
		case actions.FETCH_TOKEN_SUCCESS:
			return {
				...state,
				token: action.payload,
				isLoading: false
			};

		default:
			return state;
	}
};

export default loginReducer;
