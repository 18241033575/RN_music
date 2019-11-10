import React, {Component} from 'react';
import {
    Platfrom,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Mine from "react-native-vector-icons/Feather"

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: '朋友',
        tabBarIcon(props){
            const {focused} = props;
            return(
                <Mine
                    size={22}
                    name={'users'}
                    color={focused?'#dc2c1f':'#000'}
                />
            )
        }
    }

    render () {
      return(
        <View style={{ height: 44 }}>
            <Text>这是朋友页面</Text>
        </View>
      );
    }
}

