import {DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";
import FirstPage from "./page/FirstPage";
import LoginPage from "./page/LoginPage";
import TestPage from "./page/TestPage";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import WDPage from "./page/WDPage";
import CheDanPage from "./page/CheDanPage";
import ChiCangPage from "./page/ChiCangPage";

const styles = StyleSheet.create({
    imageStyle: {
        width: 30,
        height: 30,
    },
})

const RootStack = StackNavigator({
    TestPage: {
        screen: TestPage,
    },
}, {
    // headerMode: 'none',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0a8dff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    }
});

const PageNavigator = StackNavigator({
    FirstPage: {
        screen: FirstPage,
        navigationOptions: {
            headerTitle: 'welcome',
        }
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            // title: 'login',
            headerTitle: 'login',
            tabBarVisible: false,
        }
    },
}, {
    initialRouteName: 'FirstPage',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0a8dff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    }
});

const TabNavigation = TabNavigator({
    PageNavigator: {
        screen: PageNavigator,
        navigationOptions: {
            tabBarLabel: '欢迎',
        }
    },
    RootStack: {
        screen: RootStack,
        navigationOptions: {
            // title: 'login',
            tabBarLabel: '测试',
        }
    },
}, {
});

const TabNavigation1 = TabNavigator({
    WDPage: {
        screen: WDPage,
        navigationOptions: {
            tabBarLabel: '五档',
        }
    },
    CheDanPage: {
        screen: CheDanPage,
        navigationOptions: {
            tabBarLabel: '撤单',
        }
    },
    ChiCangPage: {
        screen: ChiCangPage,
        navigationOptions: {
            tabBarLabel: '持仓',
        }
    }
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0a8dff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    }
});

const DrawerNavigation = DrawerNavigator({
    FirstPage: {
        screen: FirstPage,
        navigationOptions: {
            drawerLabel: 'First',
            drawerIcon: (
                <Image source={require('./image/niu.png')} style={styles.imageStyle}></Image>
            )
        }
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            // title: 'login',
            drawerLabel: 'LoginPage',
            drawerIcon: (
                <Image source={require('./image/niu.png')} style={styles.imageStyle}></Image>
            )
        }
    },
});


export default TabNavigation1;