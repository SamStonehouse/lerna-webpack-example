import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app';

class Root extends PureComponent {

	calculate() {
		console.log('calculating');
	}

	render() {
		return (
			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		);
	}

}

export default Root;