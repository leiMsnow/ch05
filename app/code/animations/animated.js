import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Animated,
    Easing,
} from 'react-native';
// requestAnimationFrame通过改变state来实现动画效果 不推荐
export default class animated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: parseInt(this.props.width),
            height: parseInt(this.props.height),
            rotateValue: new Animated.Value(0),
        }
    }

    render() {
        return (
            <Animated.View style={[
                styles.animation,
                {
                    width: this.state.width,
                    height: this.state.height,
                    transform: [
                        {
                            rotate: this.state.rotateValue.interpolate({
                                inputRange: [
                                    0, 1
                                ],
                                outputRange: [
                                    '0deg', '360deg'
                                ]
                            })
                        }
                    ]
                }
            ]}>
                <Image source={require('../../res/images/phone.jpg')}
                       style={{
                           width: this.state.width,
                           height: this.state.height,
                       }}/>
            </Animated.View>
        );
    }

    componentDidMount() {
        this._startAnimation();
    }

    _startAnimation = () => {
        this.state.rotateValue.setValue(0);
        Animated.timing(this.state.rotateValue, {
            toValue: 1,
            duration: 800,
            easing: Easing.linear
        }).start(() => this._startAnimation());
    }
}

const styles = StyleSheet.create({
    animation: {
        backgroundColor: 'red',
    },
});
