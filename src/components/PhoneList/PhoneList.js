import React from 'react';
import PropTypes from 'prop-types'

import './PhoneList.css';

import PhoneItem from './PhoneItem/PhoneItem';

PhoneList.defaultProps = {
	phoneList: [],
};

PhoneList.propTypes = {
	phoneList: PropTypes.array,
	getPhoneItem: PropTypes.func.isRequired,
};

function PhoneList(props) {
	const { phoneList, getPhoneItem } = props;

	return (
		<div className="ui link items phoneList">
			{
				phoneList.map( (phone, index) => (
					<PhoneItem
						key={ index }
						avatar={ phone.general.avatar }
						firstName={ phone.general.firstName }
						lastName={ phone.general.lastName }
						jobTitle={ phone.job.title }
						clicked={ () => getPhoneItem(phone) }
					/>
				))
			}
		</div>
	);
};

export default PhoneList;
