import React, { Component } from 'react';

import Client from './containers/Client';

class App extends Component {
	render() {
		return (
			<div className="appWrap" style={{overflowX: 'hidden', height: 'calca'}}>
				<Client />
			</div>
		);
	}
}

export default App;
