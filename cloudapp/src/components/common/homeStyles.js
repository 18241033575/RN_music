import {
    StyleSheet,
    NativeModules,
    Dimensions
} from 'react-native'
const {height, width} = Dimensions.get('window');
const {StatusBarManager} = NativeModules;

export const S = StyleSheet.create({
    commonHeader: {
        paddingTop: StatusBarManager.HEIGHT,
        backgroundColor: '#fff'
    },
    banner_img: {
        marginLeft: '2%',
        width: '96%',
        height: '100%',
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    cell_text: {
        marginTop: 3,
        color: '#333'
    },
    cate_img: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2
    },
    // 推荐列表
    list: {
        marginTop: 20,
        paddingHorizontal: 12
    },
    list_top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list_title: {
        fontSize: 18,
        fontWeight: '500',
    },
    list_more: {
        paddingHorizontal: 8,
        height: 24,
        lineHeight: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 12,
        fontSize: 12
    },
    list_body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    list_cell: {
        marginTop: 10,
        width: width/3.5,
        height: width/3.5 + 40,
    },
    cell_img: {
        width: width/3.5,
        height: width/3.5,
        borderRadius: 5
    },
    cell_msg: {
        fontSize: 12,
        color: '#333',
    },
    // 排行榜列表
    rank_list: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 12,
        borderRadius: 5,
        overflow: 'hidden'
    },
    rank_list_title: {
      marginBottom: 10,
      fontWeight: '500',
      fontSize: 18
    },
    rank_list_left: {
        width: 120,
        height: 80,
    },
    rank_list_right: {
        flex: 1,
        paddingLeft: 10,
        paddingVertical: 5,
        color: '#999'
    },
    rank_list_img: {
        width: '100%',
        height: '100%'
    }
});