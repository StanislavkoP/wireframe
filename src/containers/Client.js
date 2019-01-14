import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../state/actions/index';
import selectFilteredList from '../selectors/filter';

import ClientList from '../components/ClientList/ClientList';
import FullClientInform from './FullClientInform/FullClientInform';
import SearchInput from '../components/UI/SearchInput';


class PhoneBook extends Component {
	constructor(props) {
		super(props)

		this.state = {
			searchedText: '',
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

	getClientItem( clientId ) {
		this.props.getCurrentClient(clientId)
		
	}

	onSearch(e) {
		const searchedText = e.target.value.toLowerCase();
		this.props.searchClients(searchedText);
		
		this.setState({
			searchedText, 
		});
	}

	render() {
		const {filteredClientList, loading, error} = this.props;

		const columnStylesCommon = {
			border: '1px solid black',
			paddingTop: '1rem',
			height: 'calc(100vh - 30px)',
		};

		let clientListContent = null;
		if ( !loading ) {
			
			clientListContent = 
				<ClientList 
					clientList={ filteredClientList }
					getClientItem={ (dataClient) => this.getClientItem(dataClient) }
				/>
		
		}

		if (error) {
			clientListContent = (<h1>Error</h1>)
		}
		
		return (
			<div className="ui grid centered" style={{paddingTop: '20px'}}>
				<div className="seven wide tablet five wide computer column" style={Object.assign(columnStylesCommon, {overflowY: 'scroll'} )}>
					{ 
						<SearchInput 
							value={ this.state.searchedText }
							onChange={ this.onSearch }
						/> 
					}

					{ clientListContent }
				</div>

				<div className="seven wide six wide computer column" style={Object.assign(columnStylesCommon, {overflowY: 'auto'} )}>
					{ <FullClientInform /> }
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	filteredClientList: selectFilteredList(state),
	error : state.error,
	loading: state.loading,

});

const mapDispatchToProps = dispatch => ({
	getClientList : () => dispatch( actions.getClientList() ),
	getCurrentClient: (clientId) => dispatch( actions.getCurrentClient(clientId) ),
	searchClients: (text) => dispatch( actions.searchClients(text) )
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
