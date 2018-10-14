import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
    Keyboard,
    Dimensions  } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {
    Icon
} from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';
import TimSuKien from '../components/TimSuKien/TimSuKien';
import RouterTimSuKien from '../navigators/RouterTimSuKien';
import RouterCaNhan from '../navigators/RouterCaNhan';
import ManageRouter from '../navigators/ManageRouter';
import CalendarScreen from '../navigators/CalendarRouter';

export default createBottomTabNavigator({
    RouterTimSuKien: {
        screen: RouterTimSuKien,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='MaterialIcons' name='home' style={{ fontSize: 24, color: tintColor }} />);
            }, title: 'Trang chủ'
		}
    },
    Calendar: {
        screen: CalendarScreen,
        navigationOptions: {
            tabBarLabel: 'Lịch',
            tabBarIcon: ({tintColor}) => (
                <Icon name='calendar' type='Foundation' size={ 24 } style={{color: [tintColor]}}/>
            ),
        }
    },
    Manage: {
        screen: ManageRouter,
        navigationOptions: {
            tabBarLabel: 'Quản lý',
            tabBarIcon: ({tintColor}) => (
                <Icon name='clipboard-notes' type='Foundation' size={ 24 } style={{color: [tintColor]}}/>
            )
        }
    },
    RouterCaNhan: {
        screen: RouterCaNhan,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='MaterialIcons' name='person' style={{ fontSize: 24, color: tintColor }} />);
            }, title: 'Cá nhân'
		}
    }
},{
    initialRouteName: 'RouterTimSuKien',
    tabBarOptions :  {
        activeTintColor: '#009688',
        inactiveTintColor: 'gray',
    }
}
);
