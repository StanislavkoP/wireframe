import React from 'react';
import PropTypes from 'prop-types'

import { isEmpty } from '../../utils/validation';

import ClientItem from './ClientItem/ClientItem';

ClientList.defaultProps = {
	clientList: [],
};

ClientList.propTypes = {
	clientList: PropTypes.array,
	getClientItem: PropTypes.func.isRequired,
};

function ClientList(props) {
	const { clientList, getClientItem } = props;

	return (
		<div className="ui link items">
			{
				clientList.map( client => {
					const avatar = !isEmpty(client.general) ? client.general.avatar : '';
					const firstName = !isEmpty(client.general) ? client.general.firstName : '';
					const lastName = !isEmpty(client.general) ? client.general.lastName : '';
					const jobTitle = !isEmpty(client.job) ? client.job.title : '';
					
					return (
						<ClientItem
							key={ client.id }
							avatar={ avatar }
							firstName={ firstName }
							lastName={ lastName }
							jobTitle={ jobTitle }
							clicked={ () => getClientItem(client.id) }
						/>
					)
				})
			}
		</div>
	);
};

export default ClientList;
