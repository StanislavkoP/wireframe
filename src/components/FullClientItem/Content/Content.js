import React from 'react';
import PropTypes from 'prop-types';

import FullClientItemContacts from './Contacts/Contacts';
import FullClientItemAddress from './Address/Address';




FullClientItemContent.defaultProps = {
	contacts: {},
	address: {}
};

FullClientItemContent.propTypes = {
	contacts: PropTypes.object.isRequired,
	address: PropTypes.object.isRequired
};

function FullClientItemContent(props) {
	const { contacts, address } = props;



	return (
		<div className="fullPhoneItem__content">
			<FullClientItemContacts contacts={ contacts }/>
			<FullClientItemAddress address={ address }/>
		</div>
	);
};



export default FullClientItemContent;

