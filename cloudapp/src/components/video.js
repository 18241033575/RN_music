import React, {Component} from 'react';
import {
    Platfrom,
    StyleSheet,
    Text,
    View,
    NativeModules,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'

import Video from "react-native-vector-icons/MaterialIcons"
import {S} from "./common/homeStyles";
import StatusBar from './common/statusbar'
import CommonHeader  from './homeSub/publicHeader'

const { Dwidth } = Dimensions.get('window');


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cateArr: [
                {
                    name: '内地',
                    imgUrl: require('../asset/images/champion.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '港台',
                    imgUrl: require('../asset/images/safe.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '欧美',
                    imgUrl: require('../asset/images/water.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '日本',
                    imgUrl: require('../asset/images/skin.png'),
                    categoty: '每日推荐',
                },
                {
                    name: '韩国',
                    imgUrl: require('../asset/images/talk.png'),
                    categoty: '每日推荐',
                }
            ],
            /*
                可选参数 : area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部

                可选参数 : limit: 取出数量 , 默认为 30

                接口地址 : /mv/first

                调用例子 : /mv/first?limit=10
            */
            mvData: []
        }
    }

    componentDidMount() {
        // 推荐列表
        fetch('https://www.lantutu.wang/mv/first?limit=30', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    mvData: json.data
                    // banners: this.state.test
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
        // 新碟
        fetch('https://www.lantutu.wang/album/newest', {
            method: 'GET',
            mode: 'cors',
        }).then(res => {
            return res.json();
        }).then(json => {
            if (json.code === 200) {
                this.setState({
                    mvData: json.albums
                    // banners: this.state.test
                })
            }
        }).catch(err => {
            console.log('请求错误', err);
        });
    }
    static navigationOptions = {
        tabBarLabel: '最新MV',
        tabBarIcon(props){
            const {focused} = props;
            return(
                <Video
                    size={22}
                    name={'ondemand-video'}
                    color={focused?'#dc2c1f':'#000'}
                />
            )
        }
    }

    render () {
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
                            <Text style={S.list_title}>最新MV</Text><Text style={S.list_more}>全部</Text>
                        </View>
                        <View style={S.list_body}>
                            {
                                this.state.mvData.map((item, index) => {
                                    return <View style={S.list_cell} key={index}>
                                        <Image style={S.cell_img} source={{uri: item.cover}}>

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

