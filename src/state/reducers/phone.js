import * as actionTypes from '../actions/actionTypes';

const initialState = {
	phoneList: [],
	loading: false,
	error: false,
};


const getPhoneListLoading = (state, action) => {
	return {
		...state,
		loading: true,
	}
};

const getPhoneListSuccess = (state, action) => {
	return {
		...state,
		phoneList: action.phoneList,
		loading: false,
	}
};

const getPhoneListFailed = (state, action) => {
	return {
		...state,
		error: true,
	}
};


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_PHONE_LIST_LOADING : return getPhoneListLoading(state, action);
		case actionTypes.GET_PHONE_LIST_SUCCESS : return getPhoneListSuccess(state, action);
		case actionTypes.GET_PHONE_LIST_FAILED : return getPhoneListFailed(state, action);
		default : return state;
	}
};

export default reducer;