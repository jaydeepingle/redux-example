import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//const store = createStore(() => [], {}, applyMiddleware());

const initialState = {};
const middleware = [thunk];

//spread operator
const store = createStore(
	rootReducer, 
	initialState, 
	applyMiddleware(...middleware)
);

export default store;