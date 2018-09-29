import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleCaNhanCapNhat = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#FFFFFF'
        // marginTop: 24
    }, tren :{//phan tren
        width : WIDTH,
        height: HEIGHT*0.3,
        // backgroundColor: '#009688'
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
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '500',
        flex: 1,
        textAlign: 'center'
        // margin: 5
    },iconheader2 :{
        position: 'relative',
        fontSize: 25,
        color: '#FFFFFF', 
        marginHorizontal: 16,
    },
    khung:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: HEIGHT*0.8,
    }, suaanh:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },anhdaidien:{
        width : WIDTH * 0.3,
        height: WIDTH * 0.3,
        borderRadius: (WIDTH * 0.3)/2,
        margin: 16
    }, textchonanh: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#009688'
    },
    combo:{
        marginHorizontal: 24,
        marginTop: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: '#d6d7da',
        paddingBottom: 5
        // marginVertical: 16
    }, iconcombo:{
        fontSize: 25,
        color: '#009688',
        paddingLeft: 10
    }, textcombo: {
        flex: 1,
        paddingHorizontal: 16,
        fontSize: 16
    }, pikercombo: {
        flex: 1,
        // paddingBottom: 5
        // paddingHorizontal: 16
    }, textcombopiker:{
        flex: 1,
        width: WIDTH *0.78,
        paddingHorizontal: 16,
        fontSize: 16,
        // paddingBottom: 5
    }
});
export default StyleCaNhanCapNhat;