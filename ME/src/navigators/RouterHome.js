import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DetailEvent } from '../components/event/detailEvent';
import { Home } from '../components/home/home';
import { Card } from '../components/common/card';

export default HomeRouter = createStackNavigator({
    DetailEventScreen: {
        screen: DetailEvent,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Card: {
        screen: Card,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Home'
})