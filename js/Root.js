'use strict';

import React, {
    Component
} from 'react';
import {
    Provider
} from 'react-redux';
import configureStore from './store/configureStore';
import FirstPage from './page/FirstPage';
import TabNavigation1 from "./PageNavigation";
import {StatusBar, View, StyleSheet} from "react-native";

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
            store: configureStore()
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <View style={ {flex: 1} }>
                    <StatusBar translucent={true} barStyle={'default'} backgroundColor={'green'}/>
                    <View style={{marginTop: StatusBar.currentHeight}}/>
                    <TabNavigation1 />
                </View>
            </Provider>
        );
    }
}

export default Root;