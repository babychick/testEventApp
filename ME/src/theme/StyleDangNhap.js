import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleDangNhap = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor:"#FFFFFF"
    }, viewdangnhap:{
        width: WIDTH-32,
        height: 40,
        backgroundColor: '#00796B',
        borderRadius: 15,
        marginHorizontal: 16,
        justifyContent: 'center',
    }, textdangnhap:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center'
    }, viewdangnhap2:{
        width: WIDTH-80,
        // marginTop: 20,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 15,
        marginHorizontal: 40,
        justifyContent: 'center',
    }, viewdangnhap3:{
        width: WIDTH-32,
        marginTop: 20,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 15,
        marginHorizontal: 16,
        justifyContent: 'center',
    },viewLogo:{
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },logo:{
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#00796B',
        justifyContent: 'center',
        alignItems: 'center'
    },textLogo:{
        color:'#ffffff',
        fontSize:60,
        fontWeight: 'bold'
    },text:{
        color:'#00796B',
        fontSize:22,
        fontWeight: 'bold',
        marginTop:10,
        marginBottom: 40
    }
});
export default StyleDangNhap;