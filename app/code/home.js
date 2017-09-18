import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Alert,
    AsyncStorage,
} from 'react-native';
import {
    Container,
    Header,
    Content,
    Button,
    Item,
    Icon,
    Input,
    Text,
    List,
    ListItem,
    Thumbnail,
} from 'native-base';

import Detail from './detail';
import Banner from './components/swiper';

const SERVER_URL = 'http://172.12.11.93:3000/';
const PRODUCT_API = 'products/';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            products: [],
            advertisements: [
                {
                    // url: 'https://img12.360buyimg.com/babel/jfs/t7498/194/2982159482/95724/7ddf2ca5/59b773aaNe4fe32e6.jpg'
                    url: require('../res/images/ad_image_01.jpg')
                },
                {
                    // url: 'https://img10.360buyimg.com/babel/jfs/t8026/91/1216032048/194119/eaef445a/59b64accN676ce1f9.jpg'
                    url: require('../res/images/ad_image_02.jpg')
                },
                {
                    // url: 'https://img11.360buyimg.com/babel/jfs/t9427/155/1237940095/119440/7a97ca27/59b65b92N06349ee1.jpg'
                    url: require('../res/images/ad_image_03.jpg')
                }
            ],
            searchText: '',
            isRefreshing: false,
        };
    }

    render() {
        return (
            <Container>
                {/* searchBar */}
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder='搜索商品'
                               onChangeText={(text) => {
                                   this.setState({
                                       searchText: text
                                   });
                                   console.log('输入的内容', this.state.searchText);
                               }}/>
                    </Item>
                    <Button
                        transparent
                        onPress={() => {
                            Alert.alert('搜索了' + this.state.searchText, null, null);
                        }}>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    {/* 轮播图 */}
                    <View style={styles.advertisement}>
                        <Banner advertisements={this.state.advertisements}/>
                    </View>
                    {/* 商品列表 */}
                    <List dataArray={this.state.products}
                          renderRow={this._renderRow}>
                    </List>
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        this._fetchProducts();
    }

    _fetchProducts = () => {
        const req = new Request(SERVER_URL + PRODUCT_API, {method: 'GET'});
        console.log('request-getProduct:' + SERVER_URL + PRODUCT_API);
        fetch(req)
            .then((res) => {
                if (res.status === 200)
                    return res.json();
                else
                    console.log('request failed');
            })
            .then((result, done) => {
                if (!done) {
                    AsyncStorage
                        .setItem('products', JSON.stringify(result))
                        .then((error) => {
                            if (error) {
                                Alert.alert('storage error: ' + error, null, null);
                            }
                        });
                    this.setState({
                        products: result,
                    });
                }
            })
            .catch((error) => {
                console.log('get products error:' + error);
                AsyncStorage
                    .getItem('products')
                    .then((values) => {
                        this.setState({
                            products: JSON.parse(values),
                        });
                    });
            });
    };

    _productUpdated = () => {
        this._fetchProducts();
    };

    _renderRow = (product) => {
        return (
            <ListItem
                button
                onPress={() => {
                    const {navigator} = this.props;
                    if (navigator) {
                        navigator.push({
                            name: 'detail',
                            component: Detail,
                            params: {
                                product: product,
                                productUpdated: this._productUpdated
                            }
                        });
                    }
                }}>
                <Thumbnail
                    square
                    size={40}
                    source={{uri: SERVER_URL + product.image}}
                />
                <Text>{product.title}</Text>
                <Text note>{product.subtitle}</Text>
            </ListItem>
        );
    };
}

const styles = StyleSheet.create({
    advertisement: {
        height: 180,
    },
});
