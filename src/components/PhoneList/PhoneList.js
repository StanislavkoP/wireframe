import React from 'react';
import PropTypes from 'prop-types'

import './PhoneList.css';

import PhoneItem from './PhoneItem/PhoneItem';

PhoneList.defaultProps = {
	phoneList: [],
};

PhoneList.propTypes = {
	phoneList: PropTypes.array,
};

function PhoneList(props) {
	const { phoneList } = props;

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
					/>
				))
			}
		</div>
	);
};

export default PhoneList;
