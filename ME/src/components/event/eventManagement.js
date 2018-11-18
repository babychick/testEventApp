import React from 'react';
import { Alert, AsyncStorage, Picker, RefreshControl, StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { FloatButton } from '../common/floatButton';
import url from '../../assets/url';
import { Color } from '../../assets/color';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';

class EventManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            originalList: [],
            showPopup: false,
            adminId: null,
            eventId: null,
            refreshing: false,
            currentTime: moment().format('HH:mm'),
            store: {
                _id: '',
                email:''
            },
            filterValue: 'Tất cả',
            filterList: ['Tất cả', 'Hôm nay', 'Đã kết thúc']
        }
    }

    async componentWillMount() {
        await this._getStore();
        // let store = await AsyncStorage.getItem('data');
        // find user
        await this.findUser();
        // find event using adminId
        await fetch(url + "event/findByAdmin/" + this.state.adminId)
            .then(response => response.json())
            .then(responseJson => {
                    this.setState({
                        originalList: responseJson,
                        eventList: responseJson
                    })
            })
    }

    onDeleteEvent = (id) => {
        fetch( url + 'event/' + id, {
            method: 'DELETE'
        })
        .then(data => data.json())
        .then(dataJson => {
            if (dataJson.title === 'ok') {
                Alert.alert('THÔNG BÁO', 'Xóa sự kiện thành công.',
                    [{text: 'OK', onPress: () => this.onRefresh()}]);
            }
        })
    }

    _getStore = async()=>{
        try {
            const store = await AsyncStorage.getItem('data');
            this.setState({
                ...this.state,
                store : JSON.parse(store)
            })
        } catch (error) {
            
        }
    }

    async findUser(){
        try {
            await fetch(url+'user/findByKeyValue', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({accountId: this.state.store._id}),
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
                this.setState({
                    adminId: responseJson[0]._id
                })
                // console.log(responseJson);
            } )
		} catch (error) {
            alert(error);
		}
    }

    onRefresh = async() => {
        await this.setState({
            refreshing: true
        })
        await fetch(url + "event/findByAdmin/" + this.state.adminId)
            .then(data => data.json())
            .then(dataJson => {
            console.log(dataJson)
                if (dataJson) {
                    this.setState({
                        originalList: dataJson,
                        eventList: dataJson,
                        refreshing: false
                    })
                }
            })
        await this.onFilter(this.state.filterValue)
    }

    renderCheckIn = (time) => {
        if (time >= this.state.currentTime) {
            <TouchableOpacity
                style={styles.button}
                onPress={() => {this.props.navigation.navigate('QRScannerScreen', { data: { eventId: this.state.eventId, adminId: this.state.adminId } } )}}>
                <Text style={{ color: '#FFFFFF' }}>ĐIỂM DANH</Text>
            </TouchableOpacity>
        }
    }

    onFilter = (value) => {
        let today = moment().format('DD-MM-YYYY');
        let ctime = moment().format('HH:mm');
        var arr = [];
        switch(value) {
            case 'Hôm nay': {
                this.state.originalList.map((event, index) => {
                    if (event.startDate === today && event.startTime >= ctime) {
                        arr.push(event);
                    }
                });
                this.setState({
                    eventList: arr
                })
            }
            break;
            case 'Tất cả': {
                var arr = this.state.originalList;
                this.setState({
                    eventList: arr
                })
            }
            break;     
            case 'Đã kết thúc': {
                arr = [];
                this.state.originalList.map((event, index) => {
                    if (event.endDate <= today || (event.startDate === today && event.endTime <= ctime)) {
                        arr.push(event);
                    }
                });
                this.setState({
                    eventList: arr
                })
            }
            break;
        }
        this.setState({
            filterValue: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filter}>
                    <Picker selectedValue={this.state.filterValue} value={this.state.filterList[0]} onValueChange={this.onFilter} mode='dropdown'>
                        {
                            this.state.filterList.map((filter, index) => (
                                <Picker.Item key={index} value={filter} label={filter}></Picker.Item>
                            ))
                        }
                    </Picker>
                </View>
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
                            <Swipeout right={[
                                {
                                    text: 'DELETE',
                                    backgroundColor: 'red',
                                    onPress: () => {
                                        this.onDeleteEvent(item._id);
                                    }
                                }
                                ]}
                                key={key} 
                                style={{backgroundColor: '#FFFFFF'}}>
                                <View style={{ flexDirection: 'column', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor: Color._100 }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEventScreen', { data: { hostScreen: 'EventManagerScreen', item: item } })}>
                                        <View style={styles.topContainer}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.eventName}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <View style={styles.bottomContainer}>
                                                {this.renderCheckIn(item.startTime)}
                                                <TouchableOpacity
                                                    style={styles.button}
                                                    onPress={() =>
                                                        // console.log(item)
                                                    this.props.navigation.navigate('MemberListScreen', { data: { hostScreen: 'EventManagerScreen', eventId: item._id, adminId: item.adminId } })
                                                    }>
                                                    <Text style={{ color: '#FFFFFF' }}>DÁNH SÁCH</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swipeout>
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
    },
    filter: {
        height: 56,
        borderBottomColor: Color._500,
        borderBottomWidth: 1,
        padding: 8
    }
})

export { EventManager };