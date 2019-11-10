import React, {Component} from 'react';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';


import Home from "../components/home"
import Video from "../components/video"
import Rank from "../components/rank"
import Friend from "../components/friend"
import Account from "../components/account"
import Adv from "../components/adv"
import {createAppContainer,createSwitchNavigator} from "react-navigation";

import Find from "react-native-vector-icons/AntDesign"

const BottomTabNavigatorContainer = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '发现',
                tabBarIcon(props) {
                    const {focused} = props;
                    return (
                        <Find
                            size={22}
                            name={'find'}
                            color={focused ? '#dc2c1f' : '#000'}
                        />
                    )
                }
            }
        },
        Video: Video,
        Rank: Rank,
        Friend: Friend,
        Account: Account,
        // Adv: Adv
    }, {
        initialRouteName: 'Rank',
        tabBarOptions: {
            inactiveTintColor: '#000', //未激活
            activeTintColor: '#ff6449', //激活
            style: {
                // backgroundColor: '#ff6449', //TabBar背景色
                // height: 50
            },
            pressColor: 'blue', // android 按压时显示的颜色
            labelStyle: {
                // fontSize: 10, // 文字大小
            },
            tabStyle: {
                // height: 50,
                // backgroundColor: 'green'
            },
            tabBarPosition: 'top'
        }
    }
);


const SwitchNavigator = createSwitchNavigator({
    Adv: {
        screen: Adv
    },
    Nav: {
        screen: BottomTabNavigatorContainer
    }
},{
    initialRouteName: 'Adv'
});
export const BottomTabNavigator = createAppContainer(
    BottomTabNavigatorContainer,
    SwitchNavigator,
);