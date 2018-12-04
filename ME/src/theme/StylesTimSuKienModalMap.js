import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StylesTimSuKienModalMap = StyleSheet.create({
    container:{
        flex: 1,
    }, modal:{
        justifyContent : 'center',
        flex: 1
    }, modalMap:{
        // flex:1
        width: WIDTH,
        height:HEIGHT *0.78
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
export default StylesTimSuKienModalMap;