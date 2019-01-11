import React from 'react'
import PropTypes from 'prop-types'

import './FullPhoneItem.css';

FullPhoneItem.propTypes = {

}

function FullPhoneItem(props) {
	return (
		<div className="fullPhoneItem">
			<div className="fullPhoneItem__left">
				<img className="ui circular image fullPhoneItem__avatar" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" />
			</div>
			<div className="fullPhoneItem__right">
				<div className="fullPhoneItem__header">
					<h1>Name</h1>
					<h4>Title Job</h4>
				</div>


				<div className="fullPhoneItem__content">
					<div className="fullPhoneItem__contacts">
						<h3>
							Contacts
						</h3>
						<div className="fullPhoneItem__contacts-content">
							<p>Phone: 213124124</p>
							<p>Email: @gmail</p>
						</div>
					</div>
					<div className="fullPhoneItem__address">
						<h3>
							Address
						</h3>
						<div className="fullPhoneItem__address-content">
							<p>Country: UK</p>
							<p>City: ZP</p>
							<p>Street: ZP</p>
							<p>Zip code: ZP</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export default FullPhoneItem;

