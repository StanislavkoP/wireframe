import * as actionTypes from './actionTypes';

const getPhoneListLoading = () => {
	return {
		type: actionTypes.GET_PHONE_LIST_LOADING
	}
};

const getPhoneListSuccess = (dataPhoneList) => {
	return {
		type: actionTypes.GET_PHONE_LIST_SUCCESS,
		phoneList: dataPhoneList,
	}
};

const getPhoneListFailed = () => {
	return {
		type: actionTypes.GET_PHONE_LIST_FAILED,
	}
};

export const getPhoneList = () => dispatch => {
	dispatch( getPhoneListLoading() )
	
	fetch('/clients.json')
		.then(res => res.json())
		.then(res => dispatch ( getPhoneListSuccess(res) ))
		.catch(err => {
			console.log(err.response);
			dispatch( getPhoneListFailed() )
		});
};