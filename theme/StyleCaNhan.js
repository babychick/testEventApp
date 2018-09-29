import {
    StyleSheet,
    Dimensions
} from 'react-native';

const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
const StyleCaNhanTT = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        // marginTop: 24,
        backgroundColor:"#FFFFFF"
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
    }, item:{
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH - 32,
        marginHorizontal: 16,
        marginTop: 16,
        borderBottomColor: '#009688',
        borderBottomWidth: 1,
        paddingBottom: 5,
    }, loutitem:{
        flexDirection: 'row',
        alignItems: 'center',
        width: WIDTH - 32,
        marginHorizontal: 16,
        marginTop: 16,
        borderTopColor: '#009688',
        borderTopWidth: 1,
        borderBottomColor: '#009688',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginTop: 32
    }, iconLeft:{
        fontSize: 25,
        color: '#009688', 
        marginLeft: 16,
    }, iconRight:{
        fontSize: 40,
        color: '#009688', 
        marginRight: 16,
    },  viewText:{
        width: WIDTH * 0.65,
        justifyContent: "center",
        marginLeft: 16,
    }, textItem:{
        marginLeft: 12,
        fontSize: 16,
        // fontWeight: 'bold'
    }
});
export default StyleCaNhanTT;