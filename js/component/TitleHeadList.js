'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import HeadItem from "./HeadItem";

class TitleHeadList extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
            <View>
                <HeadItem headerData={this.props.headerData}/>
            </View>
		);
	}
}

const styles = StyleSheet.create({
})

export default TitleHeadList;