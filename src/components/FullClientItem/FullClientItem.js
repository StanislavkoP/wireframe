import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from '../../utils/validation';

import './FullClientItem.css';

FullClientItem.defaultTypes = {
	client: {}
};

FullClientItem.propTypes = {
	client: PropTypes.object.isRequired
};

function FullClientItem(props) {
	const { client } = props;

	

	return (
		<div className="fullPhoneItem">
			<div className="fullPhoneItem__left">
				<img className="ui circular image fullPhoneItem__avatar" src={`${client.general.avatar}`} alt={ `${client.general.firstName} ${client.general.lastName}` }/>
			</div>
			<div className="fullPhoneItem__right">
				<div className="fullPhoneItem__header">
					<h1>{ `${client.general.firstName} ${client.general.lastName}` }</h1>
					<h4>{ `${client.job.title} — ${client.job.company}` }</h4>
				</div>


				<div className="fullPhoneItem__content">
					<div className="fullPhoneItem__contacts">
						<h3>
							Contacts
						</h3>
						<div className="fullPhoneItem__contacts-content">
							<p>{`Phone: ${ client.contact.phone }`}</p>
							<p>{`Email: ${ client.contact.email }`}</p>
						</div>
					</div>
					<div className="fullPhoneItem__address">
						<h3>
							Address
						</h3>
						<div className="fullPhoneItem__address-content">
							<p>{`Country: ${ client.address.country }`}</p>
							<p>{`City: ${ client.address.city }`}</p>
							<p>{`Street: ${ client.address.street }`}</p>
							<p>{`Zip code: ${ client.address.zipCode }`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};



export default FullClientItem;

