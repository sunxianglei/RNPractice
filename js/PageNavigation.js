import {StackNavigator, TabNavigator} from "react-navigation";
import FirstPage from "./page/FirstPage";
import LoginPage from "./page/LoginPage";
import TestPage from "./page/TestPage";

const RootStack = StackNavigator(
    {
        TestPage: {
            screen: TestPage,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

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
        }
    },
    RootStack: {
        screen: RootStack,
    }
}, {
    initialRouteName: 'FirstPage',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#0a8dff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
});

const TabNavigation = TabNavigator({
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
        }
    },
});

export default TabNavigation;