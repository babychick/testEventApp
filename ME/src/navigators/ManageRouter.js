import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NewEvent } from '../components/event/newEvent';
import { EventManager } from '../components/event/eventManagement';
import { DetailEvent } from '../components/event/detailEvent';
import { MemberList } from '../components/event/MemberList';
import { EditEvent } from '../components/event/editEvent';

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
    },
    MemberListScreen: {
        screen: MemberList,
        navigationOptions: {
            header: null
        }
    },
    EditEventScreen: {
        screen: EditEvent,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'EventManagerScreen'
})