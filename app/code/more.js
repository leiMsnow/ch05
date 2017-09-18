import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import MyPicker from './components/picker';
import MySlider from './components/slider';
import MySwitch from './components/switch';
import MyWebView from './components/webview';
import Screen from './utils/screen';
import RequestAnimationFrame from './animations/requestanimationframe';
import LayoutAnimation from './animations/layoutanimation';
import Animated from './animations/animated';
import Geolocation from './components/geolocation';
import Keyboard from './components/keyboard';
import DeviceInfo from "./customapi/MyDeviceInfo";
import Platform from "./customapi/Platform";
import MyImagePicker from "./customapi/MyImagePicker";


export default class more extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>systemName:{Platform.systemName}</Text>
                <Text style={styles.text}>systemVersion:{DeviceInfo.systemVersion}</Text>
                <Text style={styles.text}>deviceLocale:{DeviceInfo.deviceLocale}</Text>
                <Text style={styles.text}>appVersion:{DeviceInfo.appVersion}</Text>
                <MyImagePicker/>
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
