import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
} from 'react-native';
import Geolocation from 'Geolocation';

export default class geolocation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='获取位置'
                    onPress={() => {
                        Geolocation.getCurrentPosition((data) => {
                            Alert.alert('获取位置成功:' + JSON.stringify(data), null);
                        }, () => {
                            Alert.alert('获取位置失败');
                        })
                    }}
                />
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
