'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableHighlight,
	Text,
	TextInput,
    AsyncStorage
} from 'react-native';
import 'core-js/es6/symbol';

let nativeImageSource = require('nativeImageSource');

class TestPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

    componentDidMount() {
		let jsonData = require('../data/Sample.json');
		console.log("name:" + jsonData.people[0].name);
        console.log("age:" + jsonData.people[0].age);
        console.log("name:" + jsonData.people[1].name);
        AsyncStorage.setItem("name", jsonData.people[0].name)
			.then(() => { console.log("成功存储") })
			.catch((error) => { console.log("失败error:" + error.message) })
		AsyncStorage.getItem("name")
			.then((result) => { console.log("获取成功:" + result) })
        let options = {a: 1, b: 2, c: 3,d: 4};
        let e = Symbol("e");
        options[e] = 5;
        let { a, b, ...rest } = options;
        console.log(a);
        console.log(b);
        console.log(rest);
        console.log(Object.getOwnPropertyNames(options));
        console.log(Object.getOwnPropertySymbols(options));
        console.log(options[e]);
        console.log(suibian(options));
        Array
        const restaurant = {
            soda: 2,
            burger: 1
        };
        const restHandler = {
            get: function(target, property) {
                if (property in target && target[property] > 0) {
                    target[property] -= 1;
                    return `Enjoy your ${property}`;
                }
                return `Sorry, We are out of ${property}s!`;
            }
        };
        // const restProxy = new Proxy(restaurant, restHandler);
        // console.log(restProxy.soda);
        // console.log(restaurant.soda);
    }


	onLayoutChange = (event) => {
		let { x, y, width, height } = event.nativeEvent.layout;
		console.log("width from onLayout" + width);
		console.log("height from onLayout" + height);
		console.log("x from onLayout" + x);
		console.log("y from onLayout" + y);
	}


	render() {
		let image = {
			android: 'mipmap/ic_launcher',
			width: 100,
			height: 100,
		}
		return (
            <View style={styles.container}>
				<View style={styles.subContainer1} onLayout={this.onLayoutChange}/>
				<View style={styles.subContainer2}/>
				<Image source={nativeImageSource(image)} resizeMode={'stretch'}></Image>
                <TouchableOpacity>
                    <View style={{backgroundColor: 'yellow', height: 50,}}/>
                </TouchableOpacity>
                <Text style={styles.textStyle} numberOfLines={1} ref={ref => this.text1 = ref}>牛牛牛！1111111111111111111111111111111111111111</Text>
                <TextInput style={styles.textInputStyle}
                           defaultValue={'sun, hello'} multiline={true}
						   onChangeText={(text) => { console.log(text) }}></TextInput>
			</View>
		);
	}
}

function suibian(optionss){
    options
    return 'xxxxxxxxxxxxxxxxx';
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'space-around',
	},
	subContainer1: {
		height: 100,
		backgroundColor: 'blue',
		borderWidth: 10,
        borderColor: 'yellow',
		borderRadius: 20,
		opacity: 0.5,
		margin: 20,
		elevation: 20,
		shadowColor: 'red',
		// transform: [{
		// 	scale: 0.5,
		// },{
         //    rotateY: '45deg',
		// }],
    },
	subContainer2: {
        height: 50,
        backgroundColor: 'green',
	},
    imageStyle: {
        // width: 100,
        // height: 200,
    },
    textStyle: {
	    textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowOffset:{
            width: 3,
            height: 3,
        },
        textShadowColor: 'grey',
        textShadowRadius: 5,
    },
    textInputStyle: {
	    borderWidth: 2,
        borderColor: 'green',
        fontSize: 20,
        padding: 5,
    }
})

export default TestPage;