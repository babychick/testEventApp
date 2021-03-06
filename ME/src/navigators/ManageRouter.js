import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { NewEvent } from '../components/event/newEvent';
import { EventManager } from '../components/event/eventManagement';
import { DetailEvent } from '../components/event/detailEvent';
import { MemberList } from '../components/event/MemberList';
import { AttendeeList } from '../components/event/AttendeeList';
import { EditEvent } from '../components/event/editEvent';
import { QRScanner } from '../components/common/QRScanner';

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
    AttendeeListScreen: {
        screen: AttendeeList,
        navigationOptions: {
            header: null
        }
    },
    EditEventScreen: {
        screen: EditEvent,
        navigationOptions: {
            header: null
        }
    },
    QRScannerScreen: {
        screen: QRScanner,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'EventManagerScreen'
})