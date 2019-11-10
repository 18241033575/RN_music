import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Alert
} from 'react-native';

export default class extends Component {

    state = {
        num: 5
    };
    timer = null;
    jumpOver = () => {
        let { navigate } = this.props.navigation;
        setTimeout( ()=> {
            navigate('Home');
            this.setState({
                num: 0
            });
        },500);
    };
    componentDidMount() {
        let { num } = this.state;
        let { navigate } = this.props.navigation;
        this.timer = setInterval(()=>{
            num > 0 && num--;
            this.setState({num});
            num === 0 && (()=>{
                this.timer && clearInterval(this.timer);
                navigate('Home');
            })()
        },1000)
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }
    render() {
        return (
            <View>
                <ImageBackground source={{uri: 'https://c-ssl.duitang.com/uploads/item/201808/27/20180827043223_twunu.thumb.700_0.jpg'}} style={{width: '100%', height: '100%'}}>
                    <Text onPress={this.jumpOver} style={ styles.jumpDown }>跳 过({this.state.num})</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jumpDown: {
        position : 'absolute',
        right: 20,
        bottom: 20,
        paddingHorizontal: 9,
        height: 30,
        lineHeight: 30,
        alignItems: 'center',
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,.2)'
    }
});