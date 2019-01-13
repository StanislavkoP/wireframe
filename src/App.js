import React, { Component } from 'react';

import ClientList from './containers/ClientList';

class App extends Component {
	render() {
		return (
			<div className="appWrap" style={{overflowX: 'hidden', height: 'calca'}}>
				<ClientList />
			</div>
		);
	}
}

export default App;
