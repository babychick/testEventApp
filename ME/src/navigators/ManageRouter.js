import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NewEvent } from '../components/event/newEvent';
import { EventManager } from '../components/event/eventManagement';
import { DetailEvent } from '../components/event/detailEvent';

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
    EventManagerScreen: {
        screen: EventManager,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'EventManagerScreen'
})