import React from 'react';
import PropTypes from 'prop-types'

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
				clientList.map( client => (
					<ClientItem
						key={ client.id }
						avatar={ client.general.avatar }
						firstName={ client.general.firstName }
						lastName={ client.general.lastName }
						jobTitle={ client.job.title }
						clicked={ () => getClientItem(client) }
					/>
				))
			}
		</div>
	);
};

export default ClientList;
