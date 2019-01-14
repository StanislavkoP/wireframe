import * as actionTypes from './actionTypes';
import { generateId } from '../../utils/generatorId';

const getClientListLoading = () => {
	return {
		type: actionTypes.GET_CLIENT_LIST_LOADING
	}
};

const getClientListSuccess = (dataClientList) => {
	return {
		type: actionTypes.GET_CLIENT_LIST_SUCCESS,
		clientList: dataClientList,
	}
};

const getClientListFailed = () => {
	return {
		type: actionTypes.GET_CLIENT_LIST_FAILED,
	}
};

export const getClientList = () => dispatch => {
	dispatch( getClientListLoading() )
	
	fetch('/clients.json')
		.then(res => res.json())
		.then(res =>{
			// Adding ID to each item of list for best perfomance and searching
			const newListWithId = res.map(item => (
				{ 
					id: generateId(),
					...item 
				}
			));

			dispatch ( getClientListSuccess(newListWithId) )
		})
		.catch(err => {
			console.log(err.response);
			dispatch( getClientListFailed() )
		});
};

export const searchClients = (text) => dispatch => {
	dispatch({
		type: actionTypes.SEARCH_CLIENTS, 
		text,
	})
}

export const getCurrentClient = (currentClientId) => dispatch => {	
	dispatch({
		type: actionTypes.GET_CURRENT_CLIENT,
		currentClientId,
	});
}