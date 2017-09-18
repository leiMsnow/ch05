import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Keyboard,
} from 'react-native';

import Utils from '../utils/utils';

export default class keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardText: '键盘收回',
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({keyboardText: '键盘弹出'});
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({keyboardText: '键盘收回'});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.keyboardText}</Text>
                <TextInput
                    style={styles.textinput}
                />
            </View>
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
    textinput: {
        width: Utils.width,
        height: 40,
        backgroundColor: 'lightgray',
    }
});
