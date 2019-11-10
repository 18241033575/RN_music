import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import MicIcon from 'react-native-vector-icons/Entypo'
import VoiceIcon from 'react-native-vector-icons/MaterialIcons'
import SearchIcon from 'react-native-vector-icons/MaterialIcons'

import {S} from '../common/homeStyles'

export default class extends Component {
    render() {
        return (
            <View style={S.commonHeader}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <MicIcon
                        color={'#333'}
                        name={'mic'}
                        size={24}
                    />
                    <View style={{
                        width: 300,
                        height: 30,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#ccc',
                        borderWidth: 1
                    }}>
                        <SearchIcon
                            color={'#333'}
                            name={'search'}
                            size={14}
                        />
                        <Text style={{
                            color: '#333',
                            marginLeft: 9
                        }}>
                            Here With You - Asher Monroe
                        </Text>
                    </View>
                    <VoiceIcon
                        color={'#333'}
                        name={'graphic-eq'}
                        size={24}
                    />
                </View>
            </View>
        );
    }
}