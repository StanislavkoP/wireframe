import {createSelector} from 'reselect';

import {isEmpty} from '../utils/validation'

const selectClientList = state => state.clientList;
const selectClientId = state => state.currentClientId;

const selectItemById = createSelector(
	selectClientList,
	selectClientId,
	(clientList, clientId) => {
		if ( !isEmpty(clientId) && !isEmpty(clientList) ) {
				const client = clientList.find(client => client.id === clientId);
				
				if ( !isEmpty(client) ) {
					return client;
				
				} else {
					return {};
				
				}
		
		} else {
			return {};
		
		}
	}
);

export default selectItemById