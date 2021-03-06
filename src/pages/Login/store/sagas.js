import { takeLatest, put, call } from 'redux-saga/effects';
import {
	LOGIN_USER_REQUEST,
	FETCH_TOKEN_REQUEST,
	loginUserSuccess,
	loginUserFailure,
	fetchTokenSuccess
} from './actions';
import Api from '../../../services/Api';

export default function* loginUserWatcher() {
	yield takeLatest(LOGIN_USER_REQUEST, loginUser);
	yield takeLatest(FETCH_TOKEN_REQUEST, fetchToken);
}

export function* loginUser(action) {
	try {
		const { data } = action.payload;
		console.log(data, 'dataLOGINDETAILS');

		const response = yield call(Api.getUser, data);
		yield put(loginUserSuccess(response));
	} catch (error) {
		console.log(error);
		yield put(loginUserFailure(error.response.data));
	}
}

export function* fetchToken(action) {
	try {
		const token = localStorage.getItem('token');
		yield put(fetchTokenSuccess(token));
		return token;
	} catch (e) {
		console.log(e);
	}
}
