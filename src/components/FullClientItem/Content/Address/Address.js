import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '../../../../utils/validation';

FullClientItemAddress.defaultProps = {
	address: {}
};

FullClientItemAddress.propTypes = {
	address: PropTypes.object.isRequired
};

function FullClientItemAddress(props) {
	const { address } = props

	const country = !isEmpty(address.country) ? address.country : '';
	const	city = !isEmpty(address.city) ? address.city : '';
	const	street = !isEmpty(address.street) ? address.street : '';
	const	zipCode = !isEmpty(address.zipCode) ? address.zipCode : '';


	return (
		<div className="fullClientInform__address">
			<h3>
				Address
			</h3>
			<div className="fullClientInform__address-content">
				<p>{`Country: ${ country }`}</p>
				<p>{`City: ${ city }`}</p>
				<p>{`Street: ${ street }`}</p>
				<p>{`Zip code: ${ zipCode }`}</p>
			</div>
		</div>
	);
};



export default FullClientItemAddress;

