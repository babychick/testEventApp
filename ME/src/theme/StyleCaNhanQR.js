import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleCaNhanQR = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
        // marginTop: 24
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
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '500',
        flex: 1,
        textAlign: 'center'
        // margin: 5
    },iconheader2 :{
        position: 'relative',
        fontSize: 25,
        color: '#00796B', 
        marginHorizontal: 16,
    },duoi:{
        height:  HEIGHT*0.88,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    }, QRcode:{

    }, huongdan:{
        paddingTop: 20,
        width: WIDTH * 0.6
    }, texthuongdan:{
        fontSize: 16,
        color: '#818181',
        textAlign: 'center'
    }
    
});
export default StyleCaNhanQR;