import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

import reducer from './state/reducers/client';

const rootReducer = reducer;


const configurateStore = (initialState = {}) => {
	const middleWares = [
		thunk
	]

	const enchancers = [
		applyMiddleware(...middleWares)
	]

	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(...enchancers)
	)

	return store
}

const store = configurateStore({});



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>

	, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
