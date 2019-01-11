import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '../../utils/validation';

import FullClientItemHeader from './Header/Header';
import FullClientItemContent from './Content/Content';

import './FullClientItem.css';

const IMAGE_PLACEHOLDER = 'https://via.placeholder.com/128';

FullClientItem.defaultTypes = {
	client: {}
};

FullClientItem.propTypes = {
	client: PropTypes.object.isRequired
};

function FullClientItem(props) {
	const { client } = props;

	const avatar = !isEmpty(client.general) ? client.general.avatar : IMAGE_PLACEHOLDER;
	const firstName = !isEmpty(client.general) ? client.general.firstName : '';
	const lastName = !isEmpty(client.general) ? client.general.lastName : '';


	return (
		<div className="fullPhoneItem">
			<div className="fullPhoneItem__left">
				<img className="ui circular image fullPhoneItem__avatar" src={`${ avatar }`} alt={ `${ firstName } ${ lastName }` }/>
			</div>

			<div className="fullPhoneItem__right">
				<FullClientItemHeader general={ client.general } job={ client.job }/>
				<FullClientItemContent contacts={ client.contact } address={ client.address }/>
			</div>
		</div>
	);
};



export default FullClientItem;

