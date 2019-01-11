import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../state/actions/index';

import PhoneList from '../components/PhoneList/PhoneList';
import FullPhoneItem from '../components/FullPhoneItem/FullPhoneItem';
import SearchInput from '../components/UI/SearchInput';

class PhoneBook extends Component {
	
	state = {
		currentClient: null,
		displayCurrentClient: false,
	}

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

	getPhoneItem( dataPhone ) {
		this.setState({currentClient: dataPhone, displayCurrentClient: true})
		console.log(dataPhone);
	}

	render() {
		const { phoneList, loading } = this.props;
		const { currentClient, displayCurrentClient } = this.state;

		const columnStyles = {
			border: '1px solid black', paddingTop: '1rem'
		}

		let phoneListContent = null;
		
		if ( !loading ) {
			phoneListContent = 
				<PhoneList 
					phoneList={ phoneList }
					getPhoneItem={ (dataPhone) => this.getPhoneItem(dataPhone) }
				/>
		
		}

		return (
			<div className="ui grid centered" style={{marginTop: '20px'}}>
				<div className="six wide column" style={columnStyles}>
					{ phoneListContent }
				</div>

				<div className="six wide column" style={columnStyles}>
					{ 
						displayCurrentClient 
						? <FullPhoneItem client={currentClient}/>
						: null
					}
					
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
