'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, Text, TouchableNativeFeedback,
} from 'react-native';

class WeituoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _onPressItem(item) {
        alert(JSON.stringify(item));
        console.log(item);
    }

    render() {
        let data = this.props.data;
        return (
            <TouchableNativeFeedback onPress={() => this._onPressItem(data)}>
                <View style={styles.container}>
                    <View style={styles.textGroup}>
                        <Text style={styles.leftText}>{data.name}</Text>
                        <Text style={styles.leftText}>{data.time}</Text>
                    </View>
                    <View style={styles.textGroup}>
                        <Text style={styles.rightText}>{data.buyPrice}</Text>
                        <Text style={styles.rightText}>{data.avePrice}</Text>
                    </View>
                    <View style={styles.textGroup}>
                        <Text style={styles.rightText}>{data.buyMount}</Text>
                        <Text style={styles.rightText}>{data.chengJiao}</Text>
                    </View>
                    <View style={styles.textGroup}>
                        <Text style={styles.rightText}>{data.action}</Text>
                        <Text style={styles.rightText}>{data.state}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textGroup: {
        flex: 1,
    },
    leftText: {
        color: 'red',
    },
    rightText: {
        color: 'red',
        textAlign: 'right',
    },
    splitLine: {
        height: 0.5,
        backgroundColor: '#cbcbcb',
    }
})

export default WeituoItem;