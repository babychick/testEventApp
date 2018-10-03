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
     header :{
        width : WIDTH,
        height: HEIGHT*0.12,
        backgroundColor: '#00796B',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24
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
    }
});
export default StyleTimSuKienChuDeMap;