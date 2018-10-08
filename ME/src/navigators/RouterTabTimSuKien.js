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
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import TimSuKienChuDe from '../components/TimSuKien/TimSuKienChuDe';
import TimSuKienMap from '../components/TimSuKien/TimSuKienMap';

export default createMaterialTopTabNavigator({
    ChuDe: {
        screen: TimSuKienChuDe,
        navigationOptions: {
            title: 'Chủ đề'
		}
    },Map:{
        screen: TimSuKienMap,
        navigationOptions: {
           title: 'Bản đồ'
		}
    }
},{
    initialRouteName: 'ChuDe',
    tabBarOptions :  {
        activeTintColor: '#009688',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#FFFFFF',
        },labelStyle: {
            fontSize: 16,
        },tabStyle: {
            height: 40,
        },upperCaseLabel: false,
        // showIcon: true
        // showLabel: false
    }
}
);
