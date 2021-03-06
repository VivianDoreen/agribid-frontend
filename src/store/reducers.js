import { combineReducers } from 'redux';
import loginReducer from '../pages/Login/store/reducers';

const rootReducer = combineReducers({
	loginReducer
});

export default rootReducer;
