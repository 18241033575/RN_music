import React, {Component} from 'react';
import {
    Platfrom,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'
import StatusBar from './common/statusbar'
import CommonHeader from './homeSub/publicHeader'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import Swiper from 'react-native-swiper'
import Mine from "react-native-vector-icons/Ionicons"
import {S} from "./common/homeStyles";

const {Dwidth} = Dimensions.get('window');
const {height, width} = Dimensions.get('window');
export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '排行榜',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <Mine
                    size={22}
                    name={'md-musical-notes'}
                    color={focused ? '#dc2c1f' : '#000'}
                />
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            singerList: [],
            rankList: []
        }
    }

    componentDidMount() {
        // 歌手榜
        fetch('https://www.lantutu.wang/toplist/artist', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    singerList: json.list.artists
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
        // 排行榜
        fetch('https://www.lantutu.wang/toplist/detail', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    rankList: json.list
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
                <View style={{
                    position: 'relative',
                    height: height,
                    backgroundColor: '#fff'
                }}>
                    <View
                        style={{
                            position: 'absolute',
                            Dwidth,
                            height: 160,
                            backgroundColor: 'green'
                        }}
                    >

                    </View>
                    <ScrollableTabView
                        tabBarInactiveTextColor={'#222'}
                        tabBarActiveTextColor={'#000'}
                        tabBarUnderlineStyle={{backgroundColor: '#fff', borderRadius: 3}}
                        renderTabBar={() => <ScrollableTabBar
                            style={{
                                // height: 60,
                                borderWidth: 0, //默认白色
                                // elevation: 2
                                borderBottomWidth: 1,
                                borderBottomColor: '#eee'
                            }}
                        >

                        </ScrollableTabBar>}
                    >
                        <View
                            tabLabel={'排行榜'}
                        >
                            <ScrollView style={{marginBottom: 140}}>
                                {/* 排行列表 */}
                                {
                                    this.state.rankList.map((item, index) => {
                                        return <View style={S.rank_list}>
                                            <View style={S.rank_list_left}>
                                                <Image style={S.rank_list_img} source={{uri: item.coverImgUrl}}>

                                                </Image>
                                            </View>
                                            <View style={S.rank_list_right}>
                                                <Text style={S.rank_list_title}>
                                                   {item.name}
                                                </Text>
                                                <Text numberOfLines={2} ellipsizeMode={'tail'}>
                                                    {item.description}
                                                </Text>
                                            </View>
                                        </View>
                                    })
                                }
                            </ScrollView>
                        </View>
                        <View
                            tabLabel={'歌手榜'}
                            style={{
                                marginTop: 10
                            }}

                        >
                            <ScrollView style={{marginBottom: 100}}>
                                {/* 排行列表 */}
                                {
                                    this.state.singerList.map((item, index) => {
                                        return <View style={S.rank_list}>
                                            <View style={S.rank_list_left}>
                                                <Image style={S.rank_list_img} source={{uri: item.picUrl}}>

                                                </Image>
                                            </View>
                                            <View style={S.rank_list_right}>
                                                <Text>
                                                    { item.lastRank + 1 + '.'}  {item.name}
                                                </Text>
                                            </View>
                                        </View>
                                    })
                                }
                            </ScrollView>
                        </View>
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

const mineStyle = StyleSheet.create({
    /* container: {
         width: '100%',
         height: '100%',
     },*/
    base_msg: {
        flexDirection: 'row',
        width: Dwidth,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    name_msg: {
        marginTop: 20,
        marginLeft: 30,
    },
    avatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#999',
    },
    whiteColor: {
        color: '#fff',
    },
    acc_list: {},
    list_cell: {
        // flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dwidth,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});
