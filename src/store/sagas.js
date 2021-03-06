import { all } from 'redux-saga/effects';
import loginUserWatcher from '../pages/Login/store/sagas';

export default function* rootSaga() {
	yield all([ loginUserWatcher() ]);
}
