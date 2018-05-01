'use strict';

import React, {
	Component
} from 'react';
import {
	Provider
} from 'react-redux';
import configureStore from './store/configureStore';
import FirstPage from './page/FirstPage';

class Root extends Component {

	constructor(props) {
		super(props);

		this.state = {
			state: configureStore()
		};
	}

	render() {
		return (
			<Provider store={this.state.state}>
				<FirstPage />
			</Provider>
		);
	}
}


export default Root;