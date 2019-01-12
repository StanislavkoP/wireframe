import React from 'react'
import PropTypes from 'prop-types'

import { isEmpty } from '../../../utils/validation';

const IMAGE_PLACEHOLDER = 'https://via.placeholder.com/128';


ClientItem.defaultProps = {
	firstName: '',
	lastName: '',
	avatar: '',

};

ClientItem.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	avatar: PropTypes.string,
	clicked: PropTypes.func.isRequired,
};

function ClientItem(props) {
	const { firstName, lastName, avatar, jobTitle, clicked } = props

	const firstNameCustom = isEmpty(firstName) ? 'Name' : firstName;
	const avatarCustom = isEmpty(avatar) ? IMAGE_PLACEHOLDER : avatar;

	return (
		<div className="item" onClick={clicked}>
			<a className="ui circular tiny image">
				<img src={ `${ avatarCustom }` } alt={`${ firstName } ${ lastName }`} />
			</a>

			<div className="content">
				<a className="header">
					{ `${ firstNameCustom } ${ lastName }` }
				</a>
				<div className="description">
					<p>{ jobTitle }</p>
				</div>
			</div>
		</div>
	);
};

export default ClientItem;

