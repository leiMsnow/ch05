import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid,
    NativeModules,
    Image,
    Platform,
} from 'react-native';

export default class MyImagePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._selectPhotoTapped}>
                    <View style={[styles.avatarContainer, styles.avatar]}>
                        {
                            this.state.avatarSource === null ?
                                <Text style={styles.text}>选择图片</Text> :
                                <Image
                                    style={styles.avatar}
                                    scource={this.state.avatarSource}
                                />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    _selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500
        };
        NativeModules.MyImagePicker.launchImagePicker(options, (response) => {
            if (response.didCancel) {
                ToastAndroid.show('取消选择图片', ToastAndroid.SHORT);
            } else if (response.error) {
                ToastAndroid.show('选择图片出错：' + response.error, ToastAndroid.SHORT);
            } else {
                let source;
                if (Platform.OS === 'android') {
                    source = {
                         path: response.path,
                    };
                }
                ToastAndroid.show('图片路径' + source.path, ToastAndroid.SHORT);
                this.setState({avatarSource: source});
            }

        });
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderWidth: 1,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    text: {
        fontSize: 30,
    }
});