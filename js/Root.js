'use strict';

import React, {
	Component
} from 'react';
import {
	Provider
} from 'react-redux';
import configureStore from './store/configureStore';
import FirstPage from './page/FirstPage';
import TabNavigation from "./PageNavigation";

class Root extends Component {

	constructor(props) {
		super(props);

		this.state = {
			store: configureStore()
		};
	}

	render() {
		return (
			<Provider store={this.state.store}>
				<TabNavigation />
			</Provider>
		);
	}
}


export default Root;