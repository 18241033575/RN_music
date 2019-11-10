import React, {Component} from 'react';
import {
    Platfrom,
    StyleSheet,
    Text,
    View,
    NativeModules,
    Image,
    Dimensions,
    Alert,
    ScrollView
} from 'react-native'
import {S} from './common/homeStyles'

const {Dwidth} = Dimensions.get('window');

import StatusBar from './common/statusbar'
import Swiper from 'react-native-swiper'
import CommonHeader from './homeSub/publicHeader'

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cateArr: [
                {
                    name: '每日推荐',
                    imgUrl: require('../asset/images/hot.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '歌单',
                    imgUrl: require('../asset/images/hat.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '排行榜',
                    imgUrl: require('../asset/images/rank.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '电台',
                    imgUrl: require('../asset/images/love.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '直播',
                    imgUrl: require('../asset/images/add_user.png'),
                    categoty: '每日推荐',
                },
            ],
            banners: [],
            recommendList: [],
            newDisc: []
        }
    }

    componentDidMount() {
        let url = 'https://www.lantutu.wang/banner';
        fetch(url, {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    banners: json.banners
                    // banners: this.state.test
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
        // 推荐列表
        fetch('https://www.lantutu.wang/personalized?limit=6', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    recommendList: json.result
                    // banners: this.state.test
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
        // 新碟 -- 最新专辑
        fetch('https://www.lantutu.wang/album/newest', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                json.albums.length = 3;
                this.setState({
                    newDisc: json.albums
                    // banners: this.state.test
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
    }

    render() {
        return (
            <View>
                <StatusBar/>
                {/* 头部 */}
                <CommonHeader/>
                <ScrollView style={{marginBottom: 80}}>
                    <View style={{
                        position: 'relative',
                        backgroundColor: '#fff',
                    }}>

                        <View
                            style={{
                                marginTop: 10
                            }}

                        >
                            {/*banner*/}
                            <View style={{
                                height: 150,
                            }}>
                                <Swiper
                                    style={S.wrapper}
                                    activeDotColor={'red'}
                                    autoplay
                                    autoplayTimeout={3}
                                >
                                    {
                                        this.state.banners.map((item, index) => {
                                            return <View style={S.slide2} key={index}>
                                                <Image style={S.banner_img} source={{uri: item.imageUrl}}>

                                                </Image>
                                            </View>
                                        })
                                    }
                                </Swiper>
                            </View>
                            {/*分类*/}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    height: 108,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#eee'
                                }}
                            >
                                {
                                    this.state.cateArr.map((item, index) => {
                                        return <View
                                            style={{
                                                alignItems: 'center'
                                            }}
                                            key={index}
                                        >
                                            <Image
                                                style={S.cate_img}
                                                source={item.imgUrl}
                                            />
                                            <Text
                                                style={S.cell_text}
                                            >
                                                {item.name}
                                            </Text>
                                        </View>
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    {/* 列表 */}
                    <View style={S.list}>
                        <View style={S.list_top}>
                            <Text style={S.list_title}>推荐歌单</Text><Text style={S.list_more}>歌单广场</Text>
                        </View>
                        <View style={S.list_body}>
                            {
                                this.state.recommendList.map((item, index) => {
                                    return <View style={S.list_cell} key={index}>
                                        <Image style={S.cell_img} source={{uri: item.picUrl}}>

                                        </Image>
                                        <Text style={S.cell_msg} numberOfLines={2} ellipsizeMode={'tail'}>
                                            { item.name }
                                        </Text>
                                    </View>
                                })
                            }
                        </View>
                    </View>
                    <View style={S.list}>
                        <View style={S.list_top}>
                            <Text style={S.list_title}>新碟</Text><Text style={S.list_more}>更多新碟</Text>
                        </View>
                        <View style={S.list_body}>
                            {
                                this.state.newDisc.map((item, index) => {
                                    return <View style={S.list_cell} key={index}>
                                        <Image style={S.cell_img} source={{uri: item.picUrl}}>

                                        </Image>
                                        <Text style={S.cell_msg} numberOfLines={2} ellipsizeMode={'tail'}>
                                            { item.name }
                                        </Text>
                                    </View>
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
