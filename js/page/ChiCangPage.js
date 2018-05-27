'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, Text,
} from 'react-native';
import PersonalCapital from "../component/PersonalCapital";

class ChiCangPage extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.data = [ { imageType: 'china', accountType: '人民币账户', info: '计算说明',
                capital: 189533.46, yinkui: -10059.46, shizhi: -21654.00, keyong: 16548.46, kequ: 0.00},
                    { imageType: 'china', accountType: '美元账户', info: '计算说明',
                capital: 1232143.46, yinkui: -12314.46, shizhi: -22222.00, keyong: 123214.46, kequ: 0.00},
                    { imageType: 'china', accountType: '港币账户', info: '计算说明',
                capital: 545342.46, yinkui: -435345.46, shizhi: -11111.00, keyong: 512421.46, kequ: 0.00},]
        // this.data = [ { imageType: 'china', accountType: '人民币账户', info: '计算说明',
        //                     data: [ { name: '总资产', value: 189533.46 }, { name: '总盈亏', value: 189533.46 }, { name: '市值', value: 189533.46 },
        //                             { name: '可取', value: 189533.46 },{ name: '可用', value: 189533.46 }, { name: '银证转账', type: 1 },]},
        //             { imageType: 'china', accountType: '人民币账户', info: '计算说明',
        //                     data: [ { name: '总资产', value: 1231232.46 }, { name: '总盈亏', value: 189533.46 }, { name: '市值', value: 189533.46 },
        //                             { name: '可取', value: 189533.46 },{ name: '可用', value: 189533.46 }, { name: '银证转账', type: 1 },]},
        //             { imageType: 'china', accountType: '人民币账户', info: '计算说明',
        //                     data: [ { name: '总资产', value: 41342343.46 }, { name: '总盈亏', value: 189533.46 }, { name: '市值', value: 189533.46 },
        //                             { name: '可取', value: 189533.46 },{ name: '可用', value: 189533.46 }, { name: '银证转账', type: 1 },]},]
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <PersonalCapital data={this.data} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default ChiCangPage;