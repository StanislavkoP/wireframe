import React from 'react'
import PropTypes from 'prop-types'

PhoneItem.defaultProps = {
	firstName: '',
	lastName: '',
	avatar: '',

};

PhoneItem.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	avatar: PropTypes.string,
	clicked: PropTypes.func.isRequired,
};


function PhoneItem(props) {
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

export default PhoneItem;

