import * as actionTypes from '../actions/actionTypes';

const initialState = {
	searchedText: '',
	clientList: [],
	currentClientId: null,
	loading: false,
	error: false,
};


const getClientListLoading = (state, action) => {
	return {
		...state,
		loading: true,
	}
};

const getClientListSuccess = (state, action) => {
	return {
		...state,
		clientList: action.clientList,
		loading: false,
	}
};

const getClientListFailed = (state, action) => {
	return {
		...state,
		error: true,
	}
};

const getCurrentClient = (state, action) => {
	return {
		...state,
		currentClientId: action.currentClientId,
	}
}

const searchClients = (state, action) => {
	return {
		...state, 
		searchedText: action.text,
	}
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_CLIENT_LIST_LOADING : return getClientListLoading(state, action);
		case actionTypes.GET_CLIENT_LIST_SUCCESS : return getClientListSuccess(state, action);
		case actionTypes.GET_CLIENT_LIST_FAILED : return getClientListFailed(state, action);
		case actionTypes.GET_CURRENT_CLIENT : return getCurrentClient(state, action);
		case actionTypes.SEARCH_CLIENTS : return searchClients(state, action);
		
		default : return state;
	}
};

export default reducer;