import React from 'react'
import PropTypes from 'prop-types'

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

	return (
		<div className="item" onClick={clicked}>
			<a className="ui circular tiny image">
				<img src={ `${avatar}` } alt={`${firstName} ${lastName}`} />
			</a>
			<div className="content">
				<a className="header">
					{ `${firstName} ${lastName}` }
				</a>
				<div className="description">
					<p>{ jobTitle }</p>
				</div>
			</div>
		</div>
	);
};

export default ClientItem;

