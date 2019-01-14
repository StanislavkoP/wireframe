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

	//Array where we adding a filtered objects
	let filteredList = [];
		// Iteration over the first key in CONDITIONS
		for( let key in CONDITIONS) {
			
			// Checking if the first key in CONDITIONS object has filter keys
			if( !isEmpty(CONDITIONS[key]) ) {
				// Iteration over the second key in CONDITIONS
				for( let key2 in CONDITIONS[key]) {

					// Iteration over the list you need to filter
					list.forEach(contact => {
						// Variable with true or false if contact has field coincidence with text which user typed
						const valueHasCoincidence = contact[key][key2].toLowerCase().includes(searchedText);
						
						// If it has coincedence
						if ( valueHasCoincidence ) {
							// We cheking if the filtered list has current iteration item
							const existsContact = filteredList.some(filteredContact => filteredContact.id === contact.id);

							// If not then we add this iteration item to the filtered list
							if (!existsContact) {
								filteredList.push(contact)
							
							};
						};
					});
				};
			};
		};

	return filteredList;
};

export default filterList;