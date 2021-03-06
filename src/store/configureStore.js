import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';



const saveToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
};

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
		
const sagaMiddleware = createSagaMiddleware();
var middleWare = applyMiddleware(sagaMiddleware);


const store = createStore(rootReducer, composeEnhancers(middleWare));

const configureStore = () => {
	return {
		...store,
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

store.subscribe(() => {
	return saveToLocalStorage(store.getState().loginReducer.token);
});

export default configureStore;
