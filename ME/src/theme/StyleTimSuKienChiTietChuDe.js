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
        height: 56,
        backgroundColor: '#00796B',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 24
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
        fontSize: 20,
        color: '#FFFFFF', 
        marginHorizontal: 16,
        fontWeight: '500',
    }, duoi: {//phan duoi
        // width : WIDTH,
        // height: HEIGHT *0.7,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    }, image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
    }, registerButton: {
        fontSize: 14,
        height: 36,
        paddingHorizontal: 16,
        color: '#ffffff',
        textAlignVertical: 'center',
        borderRadius: 3,
    }, caption: {
        height: 24,
        fontSize: 14,
        textAlignVertical: 'center',
    }, subContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        paddingVertical: 16
    }, subHeading: {
        height: 32,
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    }, content: {
        height: 24,
        fontSize: 14,
        marginLeft: 16,
        textAlignVertical: 'center'
    }, heading: {
        height: 44,
        fontSize: 21,
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
        includeFontPadding: false
    }, actionItem: {
        position: 'absolute',
        right: 0,
        width: 56,
        height: 56,
        padding: 16,
    }, modal:{
        justifyContent : 'center',
        flex: 1
    }, modalMap:{
        flex:1
    }, modalButton:{
        width: WIDTH,
        height: HEIGHT*0.08,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, modalButtonChiDuong:{
        width: WIDTH *0.5,
        height: HEIGHT*0.08,
        backgroundColor:'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, modalTextChiDuong:{
        fontSize:18,
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        // marginVertical: 10
    }, modalIconChiDuong:{
        fontSize: 20,
        color: '#FFFFFF', 
        fontWeight: '500',
        marginVertical: 10
    }, modalButtonDong:{
        width: WIDTH *0.5,
        height: HEIGHT*0.08,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },modalTextDong:{
        fontSize: 18,
        color:'#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        // marginVertical: 10
    },maplocation:{
        width:WIDTH,
        height: 100,
        // marginVertical: 50,
    }, subContainerlocation: {
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        paddingVertical: 16,
        flexDirection: 'column'
    }, subHeadinglocation: {
        height: 32,
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    }
});
export default StyleTimSuKienChiTietChuDe;