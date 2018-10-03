import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleTimSuKienNguoiDung = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#FFFFFF'
        // marginTop: 24
    }, tren :{//phan tren
        width : WIDTH,
        height: WIDTH*0.55,
        backgroundColor: '#009688'
    },
     header :{
        width : WIDTH,
        height:  HEIGHT*0.12,
        backgroundColor: '#00796B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24
    },iconheader1 :{
        fontSize: 35,
        color: '#FFFFFF', 
        marginHorizontal: 16,
        fontWeight: '500',
    }, textheader: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '500',
        flex: 1, 
        // margin: 5
    },iconheader2 :{
        position: 'relative',
        fontSize: 25,
        color: '#FFFFFF', 
        marginHorizontal: 16,
    },
    khung:{
        flexDirection: 'row',
        alignItems: 'center',
    }, anhdaidien:{
        width : WIDTH * 0.3,
        height: WIDTH * 0.3,
        borderRadius: (WIDTH * 0.3)/2,
        margin: 16
    }, thongtin:{
        flexDirection: 'column',
    }, hoten: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '500',
        margin: 5
    }, email: {
        fontSize: 14,
        color: '#FFFFFF',
        margin: 5
    }, duoi: {//phan duoi
        width : WIDTH,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    }, thongtinchitiet:{
        borderBottomColor: '#009688',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginHorizontal: 16
    }, tieude:{
        fontWeight: 'bold',
        marginVertical: 16,
        fontSize: 16,
        textAlign: 'left'
    }, ttcuthe:{
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },icon:{
        fontSize: 25,
        color: '#009688', 
        marginLeft: 12,
    }, iconNext:{
        fontSize: 45,
        color: '#009688', 
        marginRight: 16,
    }, tt:{
        marginLeft: 12,
        fontSize: 14,
    }, diachi: {
        // borderBottomColor: '#009688',
        // borderBottomWidth: 1,
        paddingBottom: 8,
        marginHorizontal: 16
    }, canhchu: {
        width: WIDTH * 0.7
    },
});
export default StyleTimSuKienNguoiDung;