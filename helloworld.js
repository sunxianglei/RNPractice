import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text
} from 'react-native';

export default class HelloWorld extends Component{
	render(){
		return (
			<Text style={styles.hello}>
				HelloWorld!
			</Text>
		);
	}

}

const styles = StyleSheet.create({
	hello: {
		fontSize: 20,
		color: 'blue',
		justifyContent: 'center',
		textAlign: 'center',
	},
});