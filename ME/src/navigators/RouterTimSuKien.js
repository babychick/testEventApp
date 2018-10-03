import { createStackNavigator } from 'react-navigation';

// import RouterTabTimSuKien from '../navigators/RouterTabTimSuKien';
import TimSuKienChiTietChuDe from '../components/TimSuKienChiTietChuDe';
import TimSuKien from '../components/TimSuKien';
import TimSuKienMap from '../components/TimSuKienMap';
import TimSuKienNguoiDung from '../components/TimSuKienNguoiDung';
import RouterTabTimSuKien from '../navigators/RouterTabTimSuKien';
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
        }
    },
    {
        initialRouteName: 'TimSuKien',
    }
);