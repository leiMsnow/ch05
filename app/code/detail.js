import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button,
    Alert,
} from 'react-native';

const SERVER_URL = 'http://172.12.11.93:3000/';
const PRODUCT_API = 'products/';

export default class detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: this.props.product.id + '',
            productTitle: this.props.product.title,
            productSubtitle: this.props.product.subtitle,
            productImage: this.props.product.image,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={
                    this._pressBackButton.bind(this)
                }>
                    <Text style={styles.back}>返回</Text>
                </TouchableOpacity>
                <View style={styles.line}>
                    <Text style={styles.text}>ID</Text>
                    <TextInput style={styles.input}
                               value={this.state.productId}
                               onChangeText={(text) => {
                                   this.setState({
                                       productId: text
                                   })
                               }}
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Title</Text>
                    <TextInput style={styles.input}
                               value={this.state.productTitle}
                               onChangeText={(text) => {
                                   this.setState({
                                       productTitle: text
                                   })
                               }}
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Subtitle</Text>
                    <TextInput style={styles.input}
                               value={this.state.productSubtitle}
                               onChangeText={(text) => {
                                   this.setState({
                                       productSubtitle: text
                                   })
                               }}
                    />
                </View>
                <View style={styles.line}>
                    <Text style={styles.text}>Image</Text>
                    <Text>{this.state.productImage}</Text>
                </View>

                <Button title='更新' onPress={this._updateProduct}/>
                <Button title='新建' onPress={this._addProduct}/>
                <Button title='删除' onPress={this._deleteProduct}/>
            </View>
        );
    }

    _pressBackButton = () => {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    };

    _updateProduct = () => {
        console.log('request-updateProduct:' + SERVER_URL + PRODUCT_API + this.state.productId);
        const req = new Request(SERVER_URL + PRODUCT_API + this.state.productId,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': parseInt(this.state.productId),
                    'title': this.state.productTitle,
                    'subtitle': this.state.productSubtitle,
                    'image': this.state.productImage,
                })
            });

        fetch(req)
            .then((res) => {
                if (res.status === 200)
                    return res.json();
                else
                    console.log('request failed');
            })
            .then((result, done) => {
                if (!done) {
                    Alert.alert('更新成功', null, null);
                    this.props.productUpdated();
                } else {
                    Alert.alert('更新失败', null, null);
                }
            })
            .catch((error) => {
                Alert.alert('更新失败：' + error, null, null);
            });
    };

    _addProduct = () => {
        console.log('request-updateProduct:' + SERVER_URL + PRODUCT_API);
        const req = new Request(SERVER_URL + PRODUCT_API,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': parseInt(this.state.productId) + 1,
                    'title': this.state.productTitle,
                    'subtitle': this.state.productSubtitle,
                    'image': this.state.productImage,
                })
            });

        fetch(req)
            .then((res) => {
                if (res.status === 200)
                    return res.json();
                else
                    console.log('request failed');
            })
            .then((result, done) => {
                if (!done) {
                    Alert.alert('新建成功', null, null);
                    this.props.productUpdated();
                } else {
                    Alert.alert('新建失败', null, null);
                }
            })
            .catch((error) => {
                Alert.alert('新建失败：' + error, null, null);
            });
    };

    _deleteProduct = () => {
        console.log('request-updateProduct:' + SERVER_URL + PRODUCT_API + this.state.productId);
        const req = new Request(SERVER_URL + PRODUCT_API + this.state.productId,
            {
                method: 'DELETE'
            });

        fetch(req)
            .then((res) => {
                if (res.status === 200)
                    return res;
                else
                    console.log('request failed');
            })
            .then((result, done) => {
                if (!done) {
                    Alert.alert('删除成功', null, null);
                    this.props.productUpdated();
                } else {
                    Alert.alert('删除失败', null, null);
                }
            })
            .catch((error) => {
                Alert.alert('删除失败：' + error, null, null);
            });
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    line: {
        flexDirection: 'row',
    },
    text: {
        width: 100,
        fontSize: 20,
    },
    input: {
        flex: 1,
    },
    back: {
        fontSize: 20,
        color: 'blue'
    }
});