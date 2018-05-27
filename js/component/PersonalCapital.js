'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet, Image, Text, FlatList, Button,
} from 'react-native';
import Swiper from 'react-native-swiper';

/**
 * 个人资产组件
 */
class PersonalCapital extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

    _swiperItem(data){
        return data.map( (item, index) => {
            return (
                <View key={index}>
                    <View style={styles.accountType}>
                        <Image style={{width:12, height:10}} source={require('../image/niu.png')}></Image>
                        <Text>{item.accountType}</Text>
                        <Text style={{position: 'absolute', right: 10}}>{item.info}</Text>
                    </View>
                    <View style={{backgroundColor: '#dfdfdf', height: 0.5, marginHorizontal: 10}}></View>
                    {/*<FlatList style={{paddingHorizontal: 10,}}*/}
                              {/*scrollEnabled={false}*/}
                              {/*numColumns={3}*/}
                              {/*keyExtractor={(item, index) => index}*/}
                              {/*data={item.data}*/}
                              {/*renderItem={this._renderItem}/>*/}
                    <View style={styles.capitalStyle}>
                        <View style={styles.itemStyle}>
                            <Text>总资产</Text>
                            <Text>{item.capital}</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>总盈亏</Text>
                            <Text>{item.yinkui}</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>市值</Text>
                            <Text>{item.shizhi}</Text>
                        </View>
                    </View>
                    <View style={styles.capitalStyle}>
                        <View style={styles.itemStyle}>
                            <Text>可取</Text>
                            <Text>{item.kequ}</Text>
                        </View>
                        <View style={styles.itemStyle}>
                            <Text>可用</Text>
                            <Text>{item.keyong}</Text>
                        </View>
                        <View style={[styles.itemStyle]}>
                            <Button title='银证转账'
                                    color={'#ffae0c'}
                                    onPress={() => alert('银证转账')}></Button>
                        </View>
                    </View>
                </View>
            )
        } );
    }

    // _renderItem = ({item}) => {
    //     return (
    //         <View style={{flex:1, height: 80,}}>
    //             <Text>{item.name}</Text>
    //             <Text>{item.value}</Text>
    //         </View>
    //     );
    // }


	render() {
	    let data = this.props.data;
		return (
            <View style={styles.container}>
                <Swiper style={{}}
                        loop={false}
                        dotStyle={{backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6}}
                        activeDotStyle={{backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6}}
                        paginationStyle={{bottom: 5}}>
                    { this._swiperItem(data) }
                </Swiper>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container:{
        height: 180,
        backgroundColor: '#ececec',
    },
    accountType: {
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    capitalStyle: {
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    itemStyle: {
        flex: 1,
    },
})

export default PersonalCapital;