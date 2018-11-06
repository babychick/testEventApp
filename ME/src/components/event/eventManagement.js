import React from 'react';
import { AsyncStorage, RefreshControl, StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { FloatButton } from '../common/floatButton';
import Dialog from 'react-native-popup-dialog';
import { PopupList } from './popupList';
import url from '../../assets/url';
import { Color } from '../../assets/color';

let h = new Date().getHours();
let m = new Date().getMinutes();

class EventManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eventList: [],
            showPopup: false,
            adminId: null,
            eventId: null,
            refreshing: false,
            currentTime: h + ":" + m
        }
    }

    async componentWillMount() {
        console.log(this.state.currentTime);
        let store = await AsyncStorage.getItem('data');
        // find user
        await fetch(url + 'user/findUserByAccountId', {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                accountId: store._id
            })
        })
            .then(data => data.json())
            .then(dataJson => {
                console.log(dataJson);
                this.setState({
                    adminId: dataJson._id
                })
            })
        // find event using adminId
        await fetch(url + "event/findByAdmin/" + this.state.adminId)
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson
                })
            })
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        fetch(url + "event/findByAdmin/" + this.state.adminId)
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson,
                    refreshing: false
                })
            })
    }

    renderCheckIn = (time) => {
        if (time >= this.state.currentTime) {
            <TouchableOpacity
                style={styles.button}
                onPress={this.onOpenQRScanner}>
                <Text style={{ color: '#FFFFFF' }}>ĐIỂM DANH</Text>
            </TouchableOpacity>
        }
    }

    onOpenQRScanner = () => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <FloatButton style={{ position: 'absolute', right: 16, bottom: 16, zIndex: 1 }}
                    onNewEvent={() => { this.props.navigation.navigate('NewEventScreen', { data: { hostScreen: 'EventManagerScreen', adminId: this.state.adminId } }) }} />
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                }>
                    {
                        this.state.eventList.map((item, key) => (
                            <View style={{ flexDirection: 'column', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor: Color._100 }} key={key}>
                                <View style={styles.topContainer}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.eventName}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEventScreen', { data: { hostScreen: 'EventManagerScreen', item: item } })}>
                                    <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <View style={styles.bottomContainer}>
                                            {this.renderCheckIn(item.startTime)}
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={() => this.props.navigation.navigate('MemberListScreen', { data: { hostScreen: 'EventManagerScreen', eventId: item.eventId, adminId: item.adminId } })}>
                                                <Text style={{ color: '#FFFFFF' }}>DÁNH SÁCH</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingBottom: 8
    },
    topContainer: {
        padding: 8
    },
    bottomContainer: {
        flexDirection: 'row',
        paddingBottom: 8,
        paddingRight: 8
    },
    button: {
        backgroundColor: Color._300,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        marginLeft: 8
    }

})

export { EventManager };