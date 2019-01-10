import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../state/actions/index';

import PhoneList from '../components/PhoneList/PhoneList';

class PhoneBook extends Component {

	componentDidMount() {
		this.props.getPhoneList();
	};

	static defaultProps = {
		phoneList: []
	}

	static propTypes = {
		phoneList: PropTypes.array,
		getPhoneList: PropTypes.func.isRequired
	};

	render() {
		const { phoneList, loading } = this.props;

		let phoneListContent = null;
		
		if ( !loading ) {
			phoneListContent = <PhoneList phoneList={ phoneList }/>
		
		}

		return (
			<div className="ui grid centered">
				<div className="six wide column">
					{ phoneListContent }
				</div>

				<div className="six wide column">
					Two column
				</div>
			
			</div>
		);
	};
};

const mapStateToProps = state => ({
	phoneList: state.phoneList,
	loading: state.loading,

});

const mapDispatchToProps = dispatch => ({
	getPhoneList : () => dispatch( actions.getPhoneList() )

});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
