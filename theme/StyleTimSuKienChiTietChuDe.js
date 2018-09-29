import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleTimSuKienChiTietChuDe = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        backgroundColor:'#FFFFFF'
        // marginTop: 24
    }, tren :{//phan tren
        width : WIDTH,
        // height: HEIGHT*0.3,
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
        // textAlign: 'center'
        // margin: 5
    },iconheader2 :{
        position: 'relative',
        fontSize: 25,
        color: '#FFFFFF', 
        marginHorizontal: 16,
    }, duoi: {//phan duoi
        // width : WIDTH,
        // height: HEIGHT *0.7,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    }, hinhsk:{
        height: WIDTH *0.5,
        backgroundColor: 'red'
    },hinh:{
        // width: WIDTH,
        // height: WIDTH *0.5
        flex: 1
    }
});
export default StyleTimSuKienChiTietChuDe;