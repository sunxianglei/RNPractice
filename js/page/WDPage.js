import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import WDComponent from "../component/WDComponent";

class WDPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
        this.values = [18.23, 18.22, 18.21, 18.20, 18.19, 18.18, 18.17, 18.16, 18.13, 18.12];
        this.list = ['卖五', '卖四', '卖三', '卖二', '卖一', '买一', '买二', '买三', '买四', '买五'];
        this.numbers = [200, 100, 200, 200, 200, 1000, 1, 20, 1, 15];
        // this.colors = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'];
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <WDComponent width={130} height={180}/>
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
})

export default WDPage;