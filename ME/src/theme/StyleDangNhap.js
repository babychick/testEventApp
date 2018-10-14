import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleDangNhap = StyleSheet.create({
    container:{
        flex: 1,
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
    }
});
export default StyleDangNhap;