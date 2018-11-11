import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NewEvent } from '../components/event/newEvent';
import { DetailEvent } from '../components/event/detailEvent';
import { CalendarScreen } from '../components/event/calendar';

export default ManageRouter = createStackNavigator({
    NewEventScreen: {
        screen: NewEvent,
        navigationOptions: {
            header: null
        }
    },
    DetailEventScreen: {
        screen: DetailEvent,
        navigationOptions: {
            header: null
        }
    },
    CalendarScreen: {
        screen: CalendarScreen,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'CalendarScreen'
})