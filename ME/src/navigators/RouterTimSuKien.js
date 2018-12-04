import { createStackNavigator } from 'react-navigation';

// import RouterTabTimSuKien from '../navigators/RouterTabTimSuKien';
import TimSuKienChiTietChuDe from '../components/TimSuKien/TimSuKienChiTietChuDe';
// import TimSuKienChiTietMap from '../components/TimSuKien/TimSuKienChiTietMap';
// import TimSuKienModalMap from '../components/TimSuKien/TimSuKienModalMap';
import TimSuKien from '../components/TimSuKien/TimSuKien';
import TimSuKienMap from '../components/TimSuKien/TimSuKienMap';
import TimSuKienNguoiDung from '../components/TimSuKien/TimSuKienNguoiDung';
import RouterTabTimSuKien from '../navigators/RouterTabTimSuKien';
import Home from '../components/TimSuKien/Home'
import {
    Dimensions
} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
export default RouterTimSuKien = createStackNavigator(
    {
        TimSuKienChiTietChuDe: {
            screen: TimSuKienChiTietChuDe,
            navigationOptions : {
                header: null
            }
        },TimSuKien: {
            screen: TimSuKien,
            navigationOptions : {
                header: null
            }
        },TimSuKienMap: {
            screen: TimSuKienMap,
            navigationOptions : {
                header: null
            }
        }, TimSuKienNguoiDung: {
            screen: TimSuKienNguoiDung,
            navigationOptions : {
                header: null
            }
        }, Home: {
            screen: Home,
            navigationOptions : {
                header: null
            }
        }
    },
    {
        initialRouteName: 'TimSuKien',
    }
);