import React, {Component} from 'react';
import {
    StatusBar
} from 'react-native';



export default class Index extends Component {
    render() {
    return (
        <StatusBar
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            translucent={true}
        />
        );
    }
}
