import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
// requestAnimationFrame通过改变state来实现动画效果 不推荐
export default class requestanimationframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: parseInt(this.props.width),
            height: parseInt(this.props.height),
        }
    }

    render() {
        return (
            <View style={[
                styles.animation,
                {
                    width: this.state.width,
                    height: this.state.height
                }
            ]}>
            </View>
        );
    }

    componentDidMount() {
        this._startAnimation();
    }

    _startAnimation = () => {
        let count = 0;
        while (++count < 100) {
            requestAnimationFrame(() => {
                this.setState({
                    width: this.state.width + 1,
                    height: this.state.height + 1,
                })
            })
        }
    }
}

const styles = StyleSheet.create({
    animation: {
        backgroundColor: 'red',
    },
});
