import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { isEmpty } from '../../utils/validation';
import getClient from '../../selectors/currentClient';

import FullClientItemHeader from '../../components/FullClientItem/Header/Header';
import FullClientItemContent from '../../components/FullClientItem/Content/Content';

import './FullClientInform.css';

const IMAGE_PLACEHOLDER = 'https://via.placeholder.com/128';

class FullClientItem extends Component {

	static propTypes = {
		client: PropTypes.object.isRequired
	}

	render() {

		const { client } = this.props;
	
		const avatar = !isEmpty(client.general) ? client.general.avatar : IMAGE_PLACEHOLDER;
		const firstName = !isEmpty(client.general) ? client.general.firstName : '';
		const lastName = !isEmpty(client.general) ? client.general.lastName : '';	
		
		let fullInformContent = null;
		if ( !isEmpty(client) ) {
			
			fullInformContent = (
				<div className="fullClientInform">
					<div className="fullClientInform__left">
						<img className="ui circular image fullClientInform__avatar" src={`${ avatar }`} alt={ `${ firstName } ${ lastName }` }/>
					</div>

					<div className="fullClientInform__right">
						<FullClientItemHeader general={ client.general } job={ client.job }/>
						<FullClientItemContent contacts={ client.contact } address={ client.address }/>
					</div>
				</div>
			)
		};
	
		return ( fullInformContent )
	};
};

const mapStateToProps = (state) => ({
	client: getClient(state)
});


export default connect(mapStateToProps)(FullClientItem);

