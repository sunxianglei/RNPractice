'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import TitleHeadList from "../component/TitleHeadList";

class CheDanPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
        this.titleNames = ['委托时间', '委托/均价', '委托/成交', '状态'];
	}

	render() {
		return (
            <View>
                <TitleHeadList headerData={this.titleNames}/>
            </View>
		);
	}
}

const styles = StyleSheet.create({
})

export default CheDanPage;