import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DetailEventCalendar } from '../components/event/detailEventCalendar';
import { NewEvent } from '../components/event/newEvent';
import { CalendarScreen } from '../components/event/calendar';

export default ManageRouter = createStackNavigator({
    NewEventScreen: {
        screen: NewEvent,
        navigationOptions: {
            header: null
        }
    },
    DetailEventCalendarScreen: {
        screen: DetailEventCalendar,
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