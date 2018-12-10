import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
    Keyboard,
    Image,
    Picker,
    FlatList,
    Animated,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import EventData from '../../data/EventData';
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
import DateTimePicker from 'react-native-modal-datetime-picker';
const GOOGLE_MAPS_APIKEY = "AIzaSyDOslcGKfgI3sQ0sIiF3FZFEsK79Ms0C3o";
import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienMap;
import url from '../../assets/url';
import moment from 'moment';

let today = moment().format('YYYY-MM-DD');
let hourday = moment().format('HH:mm');
import locations from '../../data/locations';
var ngayht = (new Date().getDate()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear());

export default class TimSuKienMap extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            isHidenView: false,
            title: null,
            time: null,
            date: null,
            address: null,
            location: this.props.navigation.state.params.location,
            isLocation: this.props.navigation.state.params.isLocation,
            event: locations,
            oneEvent: null
            // chonngay: null
        };
    }

    componentDidMount () {
        this._getEventAll(); 
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDateTimePicker = (date) => {
        this.setState({
            isDateTimePickerVisible: false,
            // chonngay: moment(date).format('DD-MM-YYYY'),
            // data:{...this.state.data, birthday : date }
        })
        let convertedDate = moment(date).format('DD-MM-YYYY');
        // console.log(convertedDate + '  '+date)
        this._getEventOnDate(convertedDate);
    }

    _getEventOnDate = date => {
        try {
            fetch(url+'event/findByKeyValue', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({startDate: date}),
			})
            .then( data => data.json())
                .then( dataJson => {
                    var a = [];
                    let td =  moment(today, 'DD-MM-YYYY', false);
                    let hd =  moment(hourday, 'HH:mm', false);
                    for(var i = 0; i< dataJson.length; i++){
                        let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                        let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                        if(td.diff(convertedDate, 'days') == 0){
                            if (hd.diff(convertedTime, 'minutes') > 0) {
                                a.push(dataJson[i]);
                            }
                        } else {
                            a = dataJson;
                        }
                    }
                    this.setState({
                        event: a
                    });
                    console.log(this.state.event)
                })
		} catch (error) {
            alert(error);
		}
    }

    _getEventAll = async() =>{
        try {
            fetch(url+'event/findAllEvent')
                .then( data => data.json())
                .then( dataJson => {
                    var a = [];
                    let td =  moment(today, 'DD-MM-YYYY', false);
                    let hd =  moment(hourday, 'HH:mm', false);
                    for(var i = 0; i< dataJson.length; i++){
                        let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                        let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                        if(td.diff(convertedDate, 'days') < 0 ){
                            a.push(dataJson[i]);
                        }
                        if(td.diff(convertedDate, 'days') == 0){
                            if (hd.diff(convertedTime, 'minutes') < 0) {
                                a.push(dataJson[i]);
                            }
                        }
                    }
                    this.setState({
                        event : a
                    });
                })
                
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if(this.state.isLocation == true){
            var lo = (this.state.event)
            var lat = this.state.location.lat;
            var long = this.state.location.long;
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TimSuKien')
                        }}>
                            <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Sự kiện quanh đây</Text>
                    </View>

                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDateTimePicker}
                        onCancel={this._hideDateTimePicker}
                        // datePickerModeAndroid={'spinner'}
                        minimumDate={new Date()}
                        mode = {'date'}
                        // confirmTextStyle={{
                        //     color: '#0066b0'
                        // }}
                        // cancelTextStyle={{
                        //     color: '#0066b0'
                        // }}
                    />
                    <MapView 
                        showsUserLocation={true}
                        showsCompass = {true}
                        showsMyLocationButton = {true}
                        // toolbarEnabled = {true}
                        style={{ flex: 1,
                                zIndex: -1,
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0 }}
                        initialRegion={{
                            latitude: this.state.location.lat,
                            longitude: this.state.location.long,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                        onPress={() => this.setState({
                            ...this.state,
                            isHidenView: false,
                        })}
                        >

                        {lo.map((marker, index) => {
                            const coords = {
                                latitude: Number.parseFloat(marker.locationX , 10),
                                longitude: Number.parseFloat(marker.locationY , 10)
                            };
                            return (
                                <MapView.Marker
                                    key={index}
                                    coordinate={coords}
                                    // title={marker.title}
                                    // description={marker.description}
                                    // pinColor={marker.isDone ? '#0066b0' : '#ea4335'}
                                    // opacity={this.state.isFocus == index ? 1 : 0.5}
                                    onCalloutPress={() => {
                                        alert(marker.eventName);
                                    }}
                                onPress={() => this.setState({
                                        ...this.state,
                                        isHidenView: true,
                                        title: marker.eventName,
                                        time: marker.startTime,
                                        date: marker.startDate,
                                        address: marker.location,
                                        oneEvent: marker
                                    })}
                                >
                                </MapView.Marker>
                            );
                        })
                        }
                    </MapView>

                    <View style={styles.toolView}>
                        <TouchableOpacity onPress={() => this._showDateTimePicker()}>
                            <View style={styles.datePicker}>
                                <Icon type='Octicons' name='calendar' style={{ color: '#009688', marginTop: 8, marginBottom: 8, fontSize: 18 }} />
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity 
                        onPress={() => 
                            this.setState({
                                ...this.state,
                                location :{
                                    lat : 15.8799858,
                                    long : 108.3308719
                                }
                            })}>
                            <Icon type='MaterialIcons' name='my-location' style={{ color: '#009688', marginTop: 8, marginBottom: 8, fontSize: 18 }} />
                        </TouchableOpacity> */}
                    </View>
                    {this.state.isHidenView ?
                    <View hide = {this.state.isHidenView} style = {styles.viewDetail}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TimSuKien')
                            this.props.navigation.navigate('TimSuKienChiTietChuDe',{data: this.state.oneEvent, location: this.state.location, screen: 1, isLocation: this.state.isLocation})
                        }}>
                            <View style = {styles.viewTitle}>
                                <Text style = {styles.textTitle}>{this.state.title}</Text>
                                <TouchableOpacity  onPress={() => this.setState({
                                    ...this.state,
                                    isHidenView: false
                                })}>
                                    <Icon type='EvilIcons' name='close-o' style={styles.iconClose}/>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.viewDateTime}>
                                <Text style = {styles.TextDateTime}>{this.state.time}</Text>
                                <Text style = {styles.TextDateTime}>- {this.state.date}</Text>
                            </View>
                            <View style = {styles.viewAddress}>
                                <Text style = {styles.textAddress}>{this.state.address}</Text>
                            </View>
                        </TouchableOpacity>
                    </View> : null
                    }
                    
                </View>
            );
        } else {
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TimSuKien')
                        }}>
                            <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Sự kiện quanh đây</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: 'red'}}>Bạn chưa bật GPS</Text>
                    </View>
                </View>
            );
        }
    }
}