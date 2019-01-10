import React, { Component } from 'react'

import PhoneList from '../components/PhoneList/PhoneList';

class PhoneBook extends Component {
	
	componentDidMount() {
		
	}

	render() {
		return (
			<div className="ui grid centered">
				<div className="six wide column">
					<PhoneList />
				</div>

				<div className="six wide column">
					Two column
				</div>
			
			</div>
		)
	}
};


export default PhoneBook;