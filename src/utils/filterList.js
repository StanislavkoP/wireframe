import { isEmpty } from './validation';

/* conditions is options for filter function of clients list 
(must have a structure like clients JSON data) */
const CONDITIONS = {
	general: {
		firstName: true,
		lastName: true,
		avatar: true,
	},
	job: {
		company: true,
		title: true,
	},
	contact: {
		email: true,
		phone: true,
	},
	address: {
		street: true,
		city: true,
		zipCode: true,
		country: true,
	},
};


// I`m not sure about this execution (This can be bad perfomance)

const filterList = (list, searchedText) => {
	if (isEmpty(list)) {
		return
	}
	
	if ( isEmpty(searchedText) || isEmpty(CONDITIONS) ) {
		return list;
	}

	let filteredList = [];

		for( let key in CONDITIONS) {
			if( !isEmpty(CONDITIONS[key]) ) {
				
				for( let key2 in CONDITIONS[key]) {
					if ( !isEmpty(CONDITIONS[key][key2]) ) {
							
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