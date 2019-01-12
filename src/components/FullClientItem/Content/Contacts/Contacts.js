import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '../../../../utils/validation';

FullClientItemContacts.defaultProps = {
	contacts: {}
};

FullClientItemContacts.propTypes = {
	contacts: PropTypes.object.isRequired
};

function FullClientItemContacts(props) {
	const { contacts } = props;

	const phone = !isEmpty(contacts.phone) ? contacts.phone : '';
	const email = !isEmpty(contacts.email) ? contacts.email : '';


	return (
		<div className="fullPhoneItem__contacts">
			<h3>
				Contacts
			</h3>
			<div className="fullPhoneItem__contacts-content">
				<p>{`Phone: ${ phone }`}</p>
				<p>{`Email: ${ email }`}</p>
			</div>
		</div>
	);
};



export default FullClientItemContacts;

