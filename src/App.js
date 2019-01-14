import React, { Component } from 'react';

import Client from './containers/Client';

class App extends Component {
	render() {
		return (
			<div className="appWrap" style={{overflow: 'hidden',     height: '100vh'}}>
				<Client />
			</div>
		);
	}
}

export default App;
