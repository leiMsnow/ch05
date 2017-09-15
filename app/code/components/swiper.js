import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            advertisements: this.props.advertisements,
        };
    }

    render() {
        return (
            <Swiper
                loop={true}
                height={180}
                autoplay={true}>
                {this.state.advertisements.map((advertisement, index) => {
                    return (
                        <TouchableOpacity key={index}
                                          onPress={() => Alert.alert('点击轮播图', null, null)}>
                            <Image style={styles.advertisementContent}
                                // source={{uri:advertisement.url}}/>
                                   source={advertisement.url}/>
                        </TouchableOpacity>
                    );
                })}
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180,
    },
});
