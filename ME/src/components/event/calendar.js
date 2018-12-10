import React from 'react';
import { AsyncStorage, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, RefreshControl } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Color } from '../../assets/color';
import moment from 'moment';
import url from '../../assets/url';
import { CalendarItem } from '../common/calendarItem';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Switch } from 'react-native-switch';
import { Icon } from 'native-base';
import { Item } from '../common/item';
import { Constants, Location, Permissions } from 'expo';

let today = moment().format('DD-MM-YYYY');
let hourday = moment().format('HH:mm');

LocaleConfig.locales['vi'] = {
    monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
    monthNamesShort: ['Tháng 1.', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
};

LocaleConfig.defaultLocale = 'vi';

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: today,
            eventList: [],
            allEvent: [],
            myAllDateEvent: null,
            data: {
                event: null,
            },
            hostScreen: 'CalendarScreen',
            isVisible: false,
            pickedDate: null,
            renderCalendarPage: false,
            searchValue: '',
            showClearText: false,
            iconName: null,
            showPopup: false,
            userId: null,
            store: {
                _id: '',
                email:''
            },
            it: '',
            location:{
                lat:'',
                log: ''
            },
            reloadItem: false,
            refreshing: false,
            isLocation: false,
            event: [],
            text: '',
            fullData: []
        }
    }

    async componentWillMount() {
        // { this.showClearTextButton }
        // let store = await AsyncStorage.getItem('data');
        await this._getStore();
        await this._getUser();      
        
        

        await this._refreshDate()
        

        await fetch(url + 'registrant/findByDate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                userId: this.state.userId,
                startDate: this.state.currentDate
            }),
        })
        .then(data => data.json())
        .then(dataJson => {
            var a = [];
            let td =  moment(today, 'DD-MM-YYYY', false);
            let hd =  moment(hourday, 'HH:mm', false);
            for(var i = dataJson.length - 1; i >= 0; i--){
                let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                if(td.diff(convertedDate, 'days') < 0){
                    a.push(dataJson[i]);
                }
                if(td.diff(convertedDate, 'days') == 0){
                    if (hd.diff(convertedTime, 'minutes') < 0) {
                        a.push(dataJson[i]);
                    }
                }
            }
            this.setState({
                eventList: a
            })
        })
        await this._getLocationAsync();  
    }

     _refreshDate = async()=>{
        //  console.log('refresh')
         // find all event
        await fetch(url + 'registrant/' + this.state.userId)
        .then(data => data.json())
        .then(dataJson => {
            var a = [];
            let td =  moment(today, 'DD-MM-YYYY', false);
            let hd =  moment(hourday, 'HH:mm', false);
            for(var i = dataJson.length - 1; i >= 0; i--){
                let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                if(td.diff(convertedDate, 'days') < 0){
                    a.push(dataJson[i]);
                }
                if(td.diff(convertedDate, 'days') == 0){
                    if (hd.diff(convertedTime, 'minutes') < 0) {
                        a.push(dataJson[i]);
                    }
                }
            }
            this.setState({
                allEvent: a,
                fullData: a
            });
            // console.log(this.state.allEvent)
        })
         if (this.state.allEvent) {
            let arr = {};
            this.state.allEvent.map((item, key) => {
                let convertedDate = moment(item.startDate, 'DD-MM-YYYY', false).format('YYYY-MM-DD');
                if (item.startDate == today) {
                    arr[convertedDate] = {
                        customStyles: {
                            container: {
                                backgroundColor: '#FFFFFF',
                            },
                            text: {
                                color: '#26A69A',
                                fontWeight: 'bold'
                            },
                        },
                    }
                } else {
                    arr[convertedDate] = {
                        customStyles: {
                            container: {
                                backgroundColor: '#009688',
                            },
                            text: {
                                color: '#FFFFFF'
                            },
                        },
                    }
                }
            })

            this.setState({
                myAllDateEvent: arr,
                refreshing: false
            })
            }
     }

    _getStore = async()=>{
        try {
            const store = await AsyncStorage.getItem('data');
            this.setState({
                ...this.state,
                store : JSON.parse(store)
            })
            // alert(store)
        } catch (error) {
            
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({ isLocation : true });
        } else {
            this.setState({ isLocation : false });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            location:{
                lat: location.coords.latitude,
                long: location.coords.longitude,
            },
            isLocation : true 
        });
        // alert(JSON.stringify(location))
    };

    _getUser = async()=>{
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
                    userId : responseJson[0]._id,
                })
            } )
		} catch (error) {
            alert(error);
		}
    }

    fetchByDate = (date) => {
        fetch(url + 'registrant/findByDate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                userId: this.state.userId,
                startDate: moment(date.dateString).format('DD-MM-YYYY')
            })
        })
        .then(data => data.json())
        .then(dataJson => {
            var a = [];
            let td =  moment(today, 'DD-MM-YYYY', false);
            let hd =  moment(hourday, 'HH:mm', false);
            for(var i = dataJson.length - 1; i >= 0; i--){
                let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                if(td.diff(convertedDate, 'days') < 0){
                    a.push(dataJson[i]);
                }
                if(td.diff(convertedDate, 'days') == 0){
                    if (hd.diff(convertedTime, 'minutes') < 0) {
                        a.push(dataJson[i]);
                    }
                }
            }
            this.setState({
                eventList: a
            })
            // console.log(dataJson)
        })
        this.setState({
            currentDate: moment(date.dateString).format('DD-MM-YYYY'),
            isVisible: false
        })
    }

    fetchByDate1 = (date) => {
        fetch(url + 'registrant/findByDate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                userId: this.state.userId,
                startDate: moment(date).format('DD-MM-YYYY')
            })
        })
        .then(data => data.json())
        .then(dataJson => {
            var a = [];
            let td =  moment(today, 'DD-MM-YYYY', false);
            let hd =  moment(hourday, 'HH:mm', false);
            for(var i = dataJson.length - 1; i >= 0; i--){
                let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                if(td.diff(convertedDate, 'days') < 0){
                    a.push(dataJson[i]);
                }
                if(td.diff(convertedDate, 'days') == 0){
                    if (hd.diff(convertedTime, 'minutes') < 0) {
                        a.push(dataJson[i]);
                    }
                }
            }
            this.setState({
                eventList: a
            })
            // console.log(dataJson)
        })
        this.setState({
            currentDate: moment(date).format('DD-MM-YYYY'),
            isVisible: false
        })
    }

    onSwitch = (value) => {
        this.setState({
            renderCalendarPage: value,
            searchValue: this.state.text
        })
        this._refreshDate();
        this._getLocationAsync();  
    }

    handleDatePicker = (date) => {
        this.setState({
            pickedDate: moment(date).format('DD-MM-YYYY'),
            isVisible: false,
            showPopup: true
        })   
    }

    onClearText = () => {
        this.setState({
            searchValue: '',
            iconName: null
        })
    }

    showClearTextButton = (text) => {
        // if (value === '') {
        //     this.setState({
        //         showClearText: falses
        //     })
        // } else {
        //     this.setState({
        //         showClearText: true,
        //         searchValue: value
        //     })
        // }

        // if (this.state.showClearText === true) {
        //     this.setState({
        //         iconName: 'close'
        //     })
        // }

        // if (this.state.showClearText === false) {
        //     this.setState({
        //         iconName: null
        //     })
        // }
        const newData = this.state.fullData.filter(function(item){
            const itemData = item.eventName.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            allEvent: newData,
            text: text
        })
    }

    onPressCancel(id){
        console.log("vo day");
        fetch(url + 'registrant/deleteOneRegistrant', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                id:id,
                userId: this.state.userId,
                startDate: this.state.currentDate
            })
        })
        .then(data => data.json())
        .then(dataJson => {
            if (dataJson.title === 'ok') {
                Alert.alert('THÔNG BÁO', 'Hủy thành công.',
                    [{ text: 'OK', onPress: () => {
                        this.setState({
                            eventList : dataJson.data
                        })
                        // this.setState({refreshing: true});
                        // fetchData().then(() => {
                        //     this.setState({refreshing: false});
                        // });
                        this._refreshDate()
                    }
                    }]);
            }

            if (dataJson.title === 'ERROR') {
                Alert.alert('THÔNG BÁO', 'Hủy éo thành công.',
                    [{ text: 'OK' }]);
            }

        })
    }

    _getEvent(_id, adminName){
         try {
            fetch(url+'event/'+_id)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        event: dataJson
                    });
                    this.props.navigation.navigate('DetailEventCalendarScreen', { location: this.state.location, data: dataJson, isLocation: this.state.isLocation, adminName: adminName})
                })
        } catch (err) {
            console.log(err)
        }
    }

    onRefresh = async() =>{
        await this.setState({
            refreshing: true
        })
        await this._refreshDate();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    {
                        this.state.renderCalendarPage ? (
                            <View style={styles.searchBarContainer}>
                                <Icon style={{ color: '#fff' }} type='Ionicons' name='search'></Icon>
                                <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                                    selectionColor='#fff'
                                    style={styles.searchText}
                                    placeholder='Tìm sự kiện'
                                    onChangeText={(text) => this.showClearTextButton(text)}
                                >{this.state.searchValue}</TextInput>
                                {/* <TouchableOpacity onPress={this.onClearText}>
                                    <Icon style={{ color: '#fff' }} type='Ionicons' name={this.state.iconName}></Icon>
                                </TouchableOpacity> */}
                            </View>
                        ) : (
                                <View style={{ flex: 2 }}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>CHỌN NGÀY</Text>
                                    </TouchableOpacity>
                                    <DateTimePicker
                                        minimumDate={new Date()}
                                        header={'Chọn ngày'}
                                        isVisible={this.state.isVisible}
                                        onConfirm={this.fetchByDate1}
                                        onCancel={() => this.setState({ isVisible: false })}
                                        mode={'date'}
                                        datePickerModeAndroid={'spinner'}
                                        // locale={'vi'}
                                        locale={'af-NA'}
                                        format={'DD-MM-YYYY'}
                                    />
                                </View>
                            )
                    }

                    <View>
                        <Switch onValueChange={this.onSwitch}
                            value={this.state.renderCalendarPage}
                            barHeight={24}
                            circleSize={20}
                            disabled={false}
                            circleBorderWidth={0}
                            backgroundActive={'#004D40'}
                            backgroundInactive={'#004D40'}
                            switchLeftPx={2.5}
                            switchRightPx={2.5}
                        />
                    </View>
                </View>
                {
                    this.state.renderCalendarPage ? (
                        <View>
                            {
                                this.state.allEvent.map((item, key) => (
                                    <Item linkImage={item.linkImage }
                                        key = {key}
                                        eventName={item.eventName}
                                        time={item.startTime + "  " + item.startDate}
                                        location={item.location}
                                        onPress={() => { 
                                            this._getEvent(item.eventId, item.adminName);
                                            // console.log(this.state.location)
                                            // console.log(this.state.allEvent)
                                            // this.props.navigation.navigate('DetailEventCalendarScreen', { location: this.state.location, data: item, isLocation: this.state.isLocation})
                                             }}
                                        onCancel={() => {
                                            this.setState({
                                                it : item._id
                                            })
                                            console.log(item._id);
                                            this.onPressCancel(item._id)
                                        }
                                        } 
                                            />
                                ))
                            }
                        </View>
                    ) : (
                            <ScrollView
                                scrollEnabled = {false}
                                refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.onRefresh}
                                />}
                            >
                                <Calendar theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    textSectionTitleColor: Color._700,
                                    todayTextColor: Color._400,
                                    arrowColor: Color._600,
                                    textDayFontSize: 15,
                                    textMonthFontSize: 15,
                                    textDayHeaderFontSize: 15,
                                    paddingVertical: 5,
                                    textMonthFontWeight: 'bold'
                                }}
                                    style={{
                                        height: 310,
                                    }}
                                    markedDates={this.state.myAllDateEvent}
                                    minDate={new Date()}
                                    markingType={'custom'}
                                        onDayPress={this.fetchByDate} />
                                <Text style={styles.subTitle}>Sự kiện ngày {this.state.currentDate}</Text>

                                <ScrollView style={styles.list}>
                                    {
                                        this.state.eventList.map((item, key) => (
                                            <CalendarItem start={item.startTime}
                                                end={item.endTime}
                                                eventName={item.eventName}
                                                key={key}
                                                index={key}
                                                onPress={() => { 
                                                    this._getEvent(item.eventId, item.adminName);
                                                    // console.log('asdsajdvasbjd' + this.state.event)
                                                    
                                                    
                                                }}
                                                onCancel={() => {
                                                    this.setState({
                                                        it : item._id
                                                    })
                                                    console.log(item._id);
                                                    this.onPressCancel(item._id)
                                                }
                                                } />
                                        ))
                                    }
                                </ScrollView>
                            </ScrollView>
                        )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    list: {
        marginTop: 8
    },
    subTitle: {
        fontSize: 14,
        backgroundColor: '#EEEEEE',
        paddingVertical: 4,
        marginTop: 12,
        textAlign: 'center'
    },
    topContainer: {
        flexDirection: 'row',
        height: 48,
        backgroundColor: Color._500,
        padding: 12
    },
    searchBarContainer: {
        flex: 2,
        flexDirection: 'row',
        padding: 12,
        backgroundColor: Color._500,
        alignItems: 'center'
    },
    searchText: {
        width: Dimensions.get('window').width - 132,
        height: 24,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#fff'
    }
})

export { CalendarScreen };