import React, {Component} from 'react';
import {
    Platfrom,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'

import Account from "react-native-vector-icons/MaterialIcons"
const { Dwidth } = Dimensions.get('window');
export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '账号',
        tabBarIcon(props) {
            const {focused} = props;
            return (
                <Account
                    size={22}
                    name={'account-circle'}
                    color={focused ? '#dc2c1f' : '#000'}
                />
            )
        }
    };

    render() {
        return (
            <View style={accountStyle.container}>
                <View style={accountStyle.base_msg}>
                    <View style={accountStyle.avatar}>
                        <Text style={accountStyle.whiteColor}>上 传</Text>
                        <Text style={accountStyle.whiteColor}>头 像</Text>
                    </View>
                    <View style={accountStyle.name_msg}>
                        <Text>陪着日出看日落</Text>
                    </View>
                </View>

                <View style={accountStyle.acc_list}>
                    <View style={accountStyle.list_cell}>
                     {/*   <Account
                            size={22}
                            name={'account-circle'}
                        />*/}
                        <Text>本地音乐</Text>
                    </View>
                    <View style={accountStyle.list_cell}>
                        <Account
                            size={22}
                            name={'account-circle'}
                        />
                        <Text>最近播放</Text>
                    </View>
                    <View style={accountStyle.list_cell}>
                        <Account
                            size={22}
                            name={'account-circle'}
                        />
                        <Text>下载管理</Text>
                    </View>
                    <View style={accountStyle.list_cell}>
                        <Account
                            size={22}
                            name={'account-circle'}
                        />
                        <Text>我的电台</Text>
                    </View>
                    <View style={accountStyle.list_cell}>
                        <Account
                            size={22}
                            name={'account-circle'}
                        />
                        <Text>我的收藏</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const accountStyle = StyleSheet.create({
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
    acc_list: {

    },
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

