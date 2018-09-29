import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleTimSuKienChuDe = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        // marginTop: 50,
        backgroundColor:"#FFFFFF"
    }, combo:{
        marginHorizontal: 16,
        marginTop: 16,
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
export default StyleTimSuKienChuDe;