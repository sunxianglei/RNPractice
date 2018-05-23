import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';

const width = 130;
const height = 180;

class WDPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            values: [18.23, 18.22, 18.21, 18.20, 18.19, 18.18, 18.17, 18.16, 18.13, 18.12],
            selectPosition: -1,
            selectPrice: "",
        };
        this.list = ['卖五', '卖四', '卖三', '卖二', '卖一', '买一', '买二', '买三', '买四', '买五'];
        this.numbers = [200, 100, 200, 200, 200, 1000, 1, 20, 1, 15];
        // this.colors = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'];
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState(() => { {this.state.values.map(item => item + 0.8); }});
        // }, 5000);
    }

    renderList(list) {
        return list.map((item, index) => this.renderItem(item, index));
    }

    isShowLine(index) {
        if (index === Math.floor((this.list.length - 1) / 2)) {
            return <View style={{width: width, height: 0.2, backgroundColor: '#c8c8c8'}}></View>
        }
    }

    renderItem(item, index) {
        this.nameWidth = width / 4 - 1;
        this.priceAndNumWidth = ((width - this.nameWidth)) / 2 - 1;
        this.itemHeight = height / 10 - 0.1;
        let color = '#e7e7e7';
        if (this.state.selectPosition === index) {
            color = 'rgba(255,51,46,0.5)';
        }
        return (
            <TouchableWithoutFeedback onPressIn={() => this._onPress(index)}>
                <View style={{flexDirection: 'column'}}>
                    <View style={[styles.itemStyle, {height: this.itemHeight, backgroundColor: color}]}>
                        <Text style={[{width: this.nameWidth, fontSize: 13}]}>{item}</Text>
                        <Text style={[styles.priceText,
                            {width: this.priceAndNumWidth,}]}>{this.state.values[index]}</Text>
                        <Text style={[{width: this.priceAndNumWidth, textAlign: 'right'}]}>{this.numbers[index]}</Text>
                    </View>
                    {this.isShowLine(index)}
                </View>
            </TouchableWithoutFeedback>
        );
    }

    _onPress = (index) => {
        console.log('index=' + index);
        this.setState({
            selectPosition: index,
            selectPrice: this.state.values[index],
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wdContainer}>
                    {this.renderList(this.list)}
                </View>
                <Text style={{marginTop: 20}}>{this.state.selectPrice}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wdContainer: {
        width: width,
        height: height,
        borderWidth: 0.5,
        borderColor: '#b7b7b7',
    },
    itemStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    priceText: {
        color: 'red',
        textAlign: 'right',
    }
})

export default WDPage;