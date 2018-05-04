'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	FlatList,
	Text,
	Button,
} from 'react-native';
import {
	connect
} from 'react-redux';
import getMoviesData from '../action/MoviesAction';

class MovieList extends Component {

	// shouldComponentUpdate(nextProps) {
	// 	console.log("before update isFetching -> ", this.props.isFetching);
	// 	console.log("after update isFetching -> ", nextProps.isFetching);
	// 	return true;
	// }

	render() {
		let { title, description, movies } = this.props.content;
		return (
			<View>
				<Button title='request' onPress={() => 
					{ this.props.dispatch(getMoviesData("https://facebook.github.io/react-native/movies.json")) }}></Button>
                <FlatList
                    data={movies}
                    renderItem={({item}) => <Text> {item.title} </Text>}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});

function select(store) {
	return {
		isFetching: store.moviesReducer.isFetching,
		content: store.moviesReducer.content
	}
}


export default connect(select)(MovieList);