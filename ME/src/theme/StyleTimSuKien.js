import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleTimSuKien = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        // // marginTop: 24,
        backgroundColor:"#FFFFFF"
    },
    viewtexttt:{
        flex: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // // marginTop: 24,
        backgroundColor:"#FFFFFF"
    },texttt:{
        fontSize: 20,
        color: 'red'
    }, viewbuttontt:{
        // width:WIDTH * 0.5,
        // height: 50,
        marginTop: 5,
        borderRadius: 20,
        backgroundColor: '#00796B',
        alignItems: 'center',
    }, textbuttontt:{
        // padding: 10,
        fontSize: 16,
        color: '#FFFFFF'
    }, iconbuttontt:{
        // padding: 10,
        marginLeft: 5,
        fontSize: 16,
        color: '#FFFFFF'
    },texticon:{
        // flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
     header :{
        width : WIDTH,
        height: 56,
        backgroundColor: '#00796B',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: 24
    }, 
    contain:{
        flex:1,
        marginTop: 10
    }, tenheader:{
        // backgroundColor:'#009688',
        // width: WIDTH,
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    }, ten: {
        // flex:70,
        paddingLeft: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },icon: {
        // flex: 30,
        // position: 'absolute',
        textAlign: 'left',
        color: '#FFFFFF',
        fontSize: 20,
        paddingRight: 16,
    }, tab:{
        flex: 1,
        marginTop: HEIGHT * 0.12
    }, combo:{
        marginHorizontal: 16,
        // marginTop: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#009688',
        // paddingBottom: 5
        // marginVertical: 16
    }, pikercombo:{
        flex:1,
        // marginRight: 16
    }, viewtext:{
        backgroundColor: '#00796B',
        borderRadius: 8
    }, textcombo:{
        fontSize: 16,
        color: '#FFFFFF',
        padding: 5
    }, viewsukien:{
        width: WIDTH
    }, viewlist: {
        flex:1, 
        flexDirection:'row',
        marginHorizontal: 16,
        marginTop: 16,
        paddingBottom: 16,
        // borderBottomWidth: 0.7,
        // borderBottomColor: '#009688',
    },title:{
        color: '#696969',
        fontSize: 16,
        marginLeft: 36,
        marginTop: 16
    }, listImage : {
        width : WIDTH *0.22,
        height: WIDTH *0.22,
    }, viewInfo : {
        marginLeft: 16,
        flex: 1,
        // width : WIDTH - 10,
        // opacity: 0.85,
        flexDirection: 'column'
    }, listTextTitle:{
        fontSize: 18,
        // marginBottom: 16
    }, listText: {
        fontSize: 14,
        marginTop: 10,
        color: '#696969'
    }
});
export default StyleTimSuKien;