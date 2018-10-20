import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleHome = StyleSheet.create({
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
        marginLeft: 16
        // textAlign: 'center'
        // margin: 5
    },iconheader2 :{
        fontSize: 20,
        color: '#FFFFFF', 
        marginHorizontal: 16,
        fontWeight: '500',
    }, viewsukien:{
        width: WIDTH
    }, title:{
        color: '#696969',
        fontSize: 16,
        marginLeft: 36,
        marginTop: 16
    }, viewlist: {
        flex:1, 
        flexDirection:'column',
        marginHorizontal: 16,
        marginTop: 16,
        // paddingBottom: 16,
        // borderBottomWidth: 0.7,
        // borderBottomColor: '#009688',
    }, duoi:{
        height: HEIGHT *0.78
    }, listImage : {
        width : WIDTH-32,
        height: WIDTH *0.4,
    }, viewInfo : {
        marginLeft: 16,
        // flex: 1,
        width : WIDTH,
        // opacity: 0.85,
        flexDirection: 'row'
    }, Date:{
        // flex: 1
    }, textDayM:{
        color: 'red',
        paddingTop: 10
    }, textYear:{
        color: 'red'
    }, infor:{
        flex: 1,
        marginLeft: 16
    }, listTextTitle:{
        marginTop: 5,
        fontSize: 18,
        // marginBottom: 16
    }, listText: {
        fontSize: 14,
        marginTop: 5,
        color: '#696969'
    }
});
export default StyleHome;