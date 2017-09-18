import {NativeModules} from 'react-native';

export default {
    'systemName': NativeModules.MyDeviceInfo.systemName,
    systemVersion: NativeModules.MyDeviceInfo.systemVersion,
    deviceLocale: NativeModules.MyDeviceInfo.deviceLocale,
    appVersion: NativeModules.MyDeviceInfo.appVersion,
}
