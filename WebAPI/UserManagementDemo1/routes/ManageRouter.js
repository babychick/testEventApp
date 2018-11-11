import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NewEvent } from '../components/event/newEvent';
import { DetailEvent } from '../components/event/detailEvent';
import { EventManager } from '../components/event/eventManagement';

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