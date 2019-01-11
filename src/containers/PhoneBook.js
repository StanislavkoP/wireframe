import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../state/actions/index';
import filterList from '../utils/filterList';

import ClientList from '../components/ClientList/ClientList';
import FullClientItem from '../components/FullClientItem/FullClientItem';
import SearchInput from '../components/UI/SearchInput';

class PhoneBook extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchedText: '',
			currentClient: null,
			filteredClientList: [],
			displayCurrentClient: false,
		}

		this.onSearch = this.onSearch.bind(this)
	}

	static defaultProps = {
		clientList: []
	}

	static propTypes = {
		clientList: PropTypes.array,
		getClientList: PropTypes.func.isRequired
	};



	componentDidMount() {
		this.props.getClientList();
	
	};

	componentWillReceiveProps(nextProps) {
		if(nextProps.clientList) {
			this.setState({filteredClientList: nextProps.clientList})
		
		}
	}



	getClientItem( dataClient ) {
		this.setState({currentClient: dataClient, displayCurrentClient: true})
		
	
	}

	onSearch(e) {
		const searchedText = e.target.value.toLowerCase();
		const clientList = this.props.clientList;
		
		/* conditions is options for filter function of clients list 
		 (must have a structure like clients JSON data) */
		const CONDITIONS = {
			general: {
				firstName: true,
				lastName: true,
				avatar: true,
			},
			job: {
				company: true,
				title: true,
			},
			contact: {
				email: true,
				phone: true,
			},
			address: {
				street: true,
				city: true,
				zipCode: true,
				country: true,
			},
		};

		const filteredList = filterList(searchedText, clientList, CONDITIONS );

		this.setState({
			searchedText, 
			filteredClientList: filteredList,
		});
	}





	render() {
		const { loading, } = this.props;
		const { currentClient, filteredClientList, displayCurrentClient, } = this.state;
		
		const columnStyles = {
			border: '1px solid black', paddingTop: '1rem'
		}

		let clientListContent = null;
		
		if ( !loading ) {
			clientListContent = 
				<ClientList 
					clientList={ filteredClientList }
					getClientItem={ (dataClient) => this.getClientItem(dataClient) }
				/>
		
		}

		return (
			<div className="ui grid centered" style={{marginTop: '20px', height: '100%'}}>
				<div className="five wide column" style={columnStyles}>
					{ 
						<SearchInput 
							value={ this.state.searchedText }
							onChange={ this.onSearch }
						/> 
					}
					{ clientListContent }
				</div>

				<div className="six wide column" style={columnStyles}>
					{ 
						displayCurrentClient 
						? <FullClientItem client={currentClient}/>
						: null
					}
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	clientList: state.clientList,
	loading: state.loading,

});

const mapDispatchToProps = dispatch => ({
	getClientList : () => dispatch( actions.getClientList() )

});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
