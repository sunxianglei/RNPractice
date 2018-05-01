'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Button,
	Text,
} from 'react-native';
import {connect} from "react-redux";
import {decreaseCount, increaseCount} from "../action/UpdateCount";

class Counter extends Component {

	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	onIncrease = () => {
		this.props.dispatch(increaseCount(this.state.count));
		// this.setState({
		// 	count: ++this.state.count
		// });
	}

	onDecrease = () => {
        this.props.dispatch(decreaseCount(this.state.count));
        // this.setState({
		// 	count: --this.state.count
		// });
	}

	render() {
		return (
			<View style={styles.container}>
    	  		<Button title='-' onPress={this.onDecrease}></Button>
    	  		<Text style={styles.textstyle}>{this.state.count}</Text>
    	  		<Button title='+' onPress={this.onIncrease}></Button>
    	  	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	textstyle: {
		fontSize: 15,
		color: 'green',
		paddingLeft: 20,
		paddingRight: 20,
		width: 80,
		height: 50,
		textAlign: 'center',
		textAlignVertical: 'center',
	},
});

function select(store){
	return {
		count: store.countReducer.count
	}
}

export default connect(select)(Counter);