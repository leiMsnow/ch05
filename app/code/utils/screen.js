import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Utils from './utils';

export default class screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>width:{Utils.width}</Text>
                <Text style={styles.text}>height:{Utils.height}</Text>
                <Text style={styles.text}>pixelRatio:{Utils.pixelRatio}</Text>
                <Text style={styles.text}>resolutionX:{Utils.resolutionX}</Text>
                <Text style={styles.text}>resolutionY:{Utils.resolutionY}</Text>
            </View>
        );
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
    }
});
