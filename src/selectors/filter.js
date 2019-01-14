import {createSelector} from 'reselect';
import filterList from '../utils/filterList';

const selectClientList = state => state.clientList || [];
const selectsearchedText = state => state.searchedText || '';

const selectFilteredList = createSelector(
	selectClientList,
	selectsearchedText,
	(clientList, searchedText) => filterList(clientList, searchedText)
);

export default selectFilteredList;