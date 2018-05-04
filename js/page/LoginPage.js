'use strict';

import React, {
	Component
} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button, Text, NativeModules,
} from 'react-native';

class LoginPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
	    this.params = this.props.navigation.state.params;
		return (
            <View style={styles.container}>
                <TextInput placeholder={'请输入手机号码'} />
                <Text>您输入的手机号：{this.params?this.params.phoneNum:undefined}</Text>
                <TextInput placeholder={'请输入密码'} password={true} />
                <Button title='确定' onPress={() => {
                    this.props.navigation.navigate('TestPage');
                }}></Button>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
    },
})

export default LoginPage;