import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../state/actions/index';

import PhoneList from '../components/PhoneList/PhoneList';

class PhoneBook extends Component {

	componentDidMount() {
		this.props.getPhoneList();
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

const mapStateToProps = state => ({
	phoneList: state.phoneList
});

const mapDispatchToProps = dispatch => ({
	getPhoneList : () => dispatch( actions.getPhoneList() )
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
