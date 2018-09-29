import React, {Component} from 'react';
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



import TimSuKien from '../components/TimSuKien';
import RouterTimSuKien from '../navigators/RouterTimSuKien'
import QuanTri from '../components/QuanTri';
import RouterCaNhan from '../navigators/RouterCaNhan';
import SuKien from '../components/SuKien';

export default createBottomTabNavigator({
    RouterTimSuKien: {
        screen: RouterTimSuKien,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='Ionicons' name='md-search' style={{ fontSize: 24, color: tintColor }} />);
            }, title: 'Tìm sự kiện'
		}
    }, SuKien: {
        screen: SuKien,
        navigationOptions: {
             tabBarIcon:({tintColor}) =>{
                    return(<Icon type='Entypo' name='book' style={{ fontSize: 24, color: tintColor }} />);
            }, title: 'Sự kiện', header: null
		}
    }, QuanTri:{
        screen: QuanTri,
        navigationOptions: {
           tabBarIcon:({tintColor}) =>{
                    return(<Icon type='Entypo' name='add-to-list' style={{ fontSize: 24, color: tintColor }} />);
            }, title: 'Quản trị'
		}
    }, RouterCaNhan: {
        screen: RouterCaNhan,
        navigationOptions: {
            tabBarIcon:({tintColor}) =>{
                    return(<Icon type='MaterialCommunityIcons' name='face-profile' style={{ fontSize: 24, color: tintColor }} />);
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
