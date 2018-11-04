import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { NewEvent } from '../event/newEvent';
import { DetailEvent } from '../event/detailEvent';
import { Color } from '../../assets/color';
import HomeRouter from '../../navigators/homeRouter';

const NavigationBar = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeRouter,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon type='MaterialIcons' name='home' size={24} style={{color: [tintColor]}}/>
            )
        }
    }
}, {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: Color._500,
        inactiveTintColor: '#bdbdbd',
        style: {
            backgroundColor: '#fff',
            borderTopWidth: 1
          }
    }
});

export { NavigationBar };