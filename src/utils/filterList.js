import { isEmpty } from './validation';

// I`m not sure about this execution (This can be bad perfomance)

const filterList = (searchedText, list, conditions) => {
	let filteredList = [];

		for( let key in conditions) {
			if( !isEmpty(conditions[key]) ) {
				
				for( let key2 in conditions[key]) {
					if ( !isEmpty(conditions[key][key2]) ) {
							
						list.forEach(item => {
							const valueHasCoincidence = item[key][key2].toLowerCase().includes(searchedText);
							
							if ( valueHasCoincidence ) {
								const existsItem = filteredList.some(item2 => item2.id === item.id);

								if (!existsItem) {
									filteredList.push(item)
								
								};
							};
						});
					};
				};
			};
		};

	return filteredList;
};

export default filterList;