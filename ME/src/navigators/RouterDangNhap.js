import { createStackNavigator } from 'react-navigation';

import DangNhap from '../components/DangNhap';
import RouterScreen from '../navigators/RouterScreen';

import {
    Dimensions
} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
export default RouterDangNhap = createStackNavigator(
    {
        DangNhap: {
            screen: DangNhap,
            navigationOptions : {
                header: null
            }
        },
        RouterScreen: {
            screen: RouterScreen,
            navigationOptions : {
                header: null
            }
        }
    },
    {
        initialRouteName: 'DangNhap',
    }
);