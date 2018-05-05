/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Image,
    FlatList,
    SectionList,
    Button,
    Alert,
    NativeModules,
} from 'react-native';
import Counter from '../component/Counter';
import MovieList from '../component/MovieList';
import {
    connect
} from 'react-redux';

// import {
//   ToastExample
// } from './ToastExample'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class FirstPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.jumpPage = this.jumpPage.bind(this);
    }

    componentDidMount() {
        new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("开始执行异步1");
                resolve('1');
            },2000);
        }).then(result => {
            console.log("promise1 -> ", result);
        });

        fetch('https://facebook.github.io/react-native/movies.json').then(result => {
            console.log("promise2 -> ", result);
        });

        new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("开始执行异步3");
                resolve('3');
            },4000);
        }).then(result => {
            console.log("promise3 -> ", result);
        });

    }

    jumpPage(name, params) {
        if (name) {
            this.props.navigation.navigate(name, params);
        } else {
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!</Text>

                <Text style={styles.instructions}>
                    To get started, edit FirstPage.js</Text>

                <Text style={styles.instructions}>
                    {instructions}</Text>
                <TipText name='sun' jumpClick={this.jumpPage}/>
                <Counter/>
                {/*<MovieList/>*/}
            </View>
        );
    }
}

class TipText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true,
            text: '',
        };
        this.getMoviesFromApi();
        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            })
        }, 1000);

    }

    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            console.log(response);
            let responseJson = await response.json();
            return responseJson.title;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        let display = this.state.showText ? this.props.name : '';
        var title = '';
        return (
            <View>

                <TextInput
                    style={{height: 40}}
                    placeholder="hei man,click there"
                    onChangeText={(text) => {
                        this.setState({text})
                    }}/>

                <Text style={styles.custom}>
                    Hello {display} {this.state.text} it is my first rn project</Text>

                <Text>{title}</Text>

                {/*<Button style={styles.blank}*/}
                {/*onPress={() => {*/}
                {/*// Alert.alert('Button has been pressed!');*/}
                {/*NativeModules.ToastExample.show('Awesome', NativeModules.ToastExample.SHORT);*/}
                {/*}}*/}
                {/*title='Press me'></Button>*/}

                <Button style={styles.blank}
                        onPress={() => {
                            this.props.jumpClick('LoginPage', { phoneNum: '18368493620' });
                        }}
                        title='Press me'></Button>

                <Button style={styles.blank}
                        onPress={() => {
                            this.props.jumpClick('');
                        }}
                        title='Press me'></Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    custom: {
        fontSize: 18,
        textAlign: 'center',
        color: 'blue',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    blank: {
        width: 80,
        height: 50,
        backgroundColor: 'black',
    }
});

export default connect()(FirstPage)