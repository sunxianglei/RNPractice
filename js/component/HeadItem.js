'use strict';

import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, Text,
} from 'react-native';

class HeadItem extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let names = this.props.headerData;
        return (
            <View style={styles.container}>
                <Text style={styles.leftText}>{names[0]}</Text>
                <Text style={styles.rightText}>{names[1]}</Text>
                <Text style={styles.rightText}>{names[2]}</Text>
                <Text style={styles.rightText}>{names[3]}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        textAlign: 'right',
    }
})

export default HeadItem;