'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet, FlatList, Text,
} from 'react-native';
import HeadItem from "./HeadItem";
import WeituoItem from "./WeituoItem";

class TitleHeadList extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
		this.data = [ {name: '同花顺', time: '10:46:00', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:00', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:11', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:22', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:33', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:44', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},
            {name: '同花顺', time: '10:46:55', buyPrice: 55.325, avePrice: 54.562, buyMount: 1000, chengJiao: 0, action: '买入', state: '全部成交'},]
	}

	render() {
		return (
            <View>
                <HeadItem headerData={this.props.headerData}/>
                <FlatList style={{ paddingHorizontal: 10}}
                          data={this.data}
                          renderItem={({item}) => { return  <WeituoItem data={item} />}}
                          ItemSeparatorComponent={() => {
                                  return <View style={styles.splitLine} />
                              }}
                          ListEmptyComponent={() => {
                                  return (<Text style={{fontSize: 20, marginTop: 30,alignSelf: 'center'}}>没有数据！</Text>)
                              }}
                          keyExtractor={(item, index) => index}/>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    splitLine: {
        height: 0.3,
        backgroundColor: '#cbcbcb',
    }
})

export default TitleHeadList;