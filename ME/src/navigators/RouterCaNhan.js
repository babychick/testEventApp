import { createStackNavigator } from 'react-navigation';

import CaNhanTT from '../components/CaNhan/CaNhanTT';
import CaNhanCapNhat from '../components/CaNhan/CaNhanCapNhat';
import CaNhan from '../components/CaNhan/CaNhan';
import CaNhanQR from '../components/CaNhan/CaNhanQR';

import {
    Dimensions
} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');
const {height : HEIGHT} = Dimensions.get('window');
export default RouterCaNhan = createStackNavigator(
    {
        CaNhan: {
            screen: CaNhan,
            navigationOptions : {
                header: null
            }
        },CaNhanTT: {
            screen: CaNhanTT,
            navigationOptions : {
                header: null
            }
        },
        CaNhanCapNhat: {
            screen: CaNhanCapNhat,
            navigationOptions : {
                header: null
            }
        },CaNhanQR: {
            screen: CaNhanQR,
            navigationOptions : {
                header: null
            }
        }
    },
    {
        initialRouteName: 'CaNhan',
    }
);