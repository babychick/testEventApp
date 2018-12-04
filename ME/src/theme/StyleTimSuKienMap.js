import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleTimSuKienChuDeMap = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        // // marginTop: 24,
        // backgroundColor:"#FFFFFF"
    }, 
    contain:{
        flex:1,
        marginTop: 10
    }, tenheader:{
        // backgroundColor:'#009688',
        width: WIDTH,
        alignItems: 'center'
    }, ten: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },header :{
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
        fontSize: 18,
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
    },
    toolView: {
        marginTop:80,
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#00796B',
        backgroundColor: 'rgba(250, 250, 250, 0.8)',
        position: 'absolute',
        top: 10,
        right: 10,
        // width: 46
    }, viewDetail:{
        width: WIDTH - 64,
        height: 80,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 32,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#00796B',
    }, viewTitle:{
        // flex: 1,
        width: WIDTH - 96,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 8,
        justifyContent: 'space-between'
    }, textTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    }, iconClose:{
        color: '#00796B'
        // position: 'absolute',
    }, viewDateTime:{
        width: WIDTH - 96,
        flexDirection: 'row',
        marginHorizontal: 16,
        // marginTop: 8,
    }, TextDateTime:{
        fontSize: 12,
        color: 'red'
    }, viewAddress:{
        width: WIDTH - 96,
        marginHorizontal: 16,
        // marginTop: 8,
    }, textAddress:{
        fontSize: 12,
        color: '#696969'
    }
});
export default StyleTimSuKienChuDeMap;