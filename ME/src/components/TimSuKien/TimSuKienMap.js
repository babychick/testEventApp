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
const GOOGLE_MAPS_APIKEY = "AIzaSyD15JxPKJaGv1OOWFAz_HNgqGRyXrptams";
import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienMap;

import locations from '../../data/locations';

export default class TimSuKienMap extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            isHidenView: false,
            title: null,
            time: null,
            date: null,
            address: null
            // chonngay: null
        };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDateTimePicker = (date) => {
        this.setState({
            isDateTimePickerVisible: false,
            // chonngay: moment(date).format('DD-MM-YYYY'),
            // data:{...this.state.data, birthday : date }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('TimSuKien')
                    }}>
                        <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                    </TouchableOpacity>
                    <Text style={styles.textheader}>Sự kiện quanh đây</Text>
                    {/* <TouchableOpacity>
                        <Icon type='Entypo' name='check' style={styles.iconheader2}/>
                    </TouchableOpacity> */}
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
                    // showsUserLocation={true}
                    // showsCompass = {true}
                    // showsMyLocationButton = {true}
                    // toolbarEnabled = {true}
                    style={{ flex: 1,
                            zIndex: -1,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0 }}
                    initialRegion={{
                        latitude: 10.031114,
                        longitude: 105.771645,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    >

                    {locations.map((marker, index) => {
                        const coords = {
                            latitude: marker.latitude,
                            longitude: marker.longitude
                        };
                        return (
                            <MapView.Marker
                                key={index}
                                coordinate={coords}
                                title={marker.title}
                                description={marker.description}
                                // pinColor={marker.isDone ? '#0066b0' : '#ea4335'}
                                // opacity={this.state.isFocus == index ? 1 : 0.5}
                                onCalloutPress={() => {
                                    alert(marker.title);
                                }}
                               onPress={() => this.setState({
                                    ...this.state,
                                    isHidenView: true,
                                    title: marker.title,
                                    time: '6:00',
                                    date: '20/10/2018',
                                    address: 'Ninh Kiều - Cần Thơ'
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
                    <TouchableOpacity 
                    // onPress={() => this._getLocationAsync()}
                    >
                        <Icon type='MaterialIcons' name='my-location' style={{ color: '#009688', marginTop: 8, marginBottom: 8, fontSize: 18 }} />
                    </TouchableOpacity>
                </View>
                {this.state.isHidenView ?
                <View hide = {this.state.isHidenView} style = {styles.viewDetail}>
                    <TouchableOpacity>
                        <View style = {styles.viewTitle}>
                            <Text style = {styles.textTitle}>{this.state.title}</Text>
                            <TouchableOpacity  onPress={() => this.setState({
                                ...this.state,
                                isHidenView: false
                            })} >
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
    }
}