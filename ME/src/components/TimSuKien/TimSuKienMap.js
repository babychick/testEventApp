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
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import EventData from '../../data/EventData';
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = "AIzaSyD15JxPKJaGv1OOWFAz_HNgqGRyXrptams";
import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienMap;
export default class TimSuKienMap extends Component {
    
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
                <MapView showsUserLocation={true}
                    showsCompass = {true}
                    // toolbarEnabled = {true}
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 10.031114,
                        longitude: 105.771645,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    >
                    <MapView.Marker 
                        coordinate={{
                            latitude: 9.969066,
                            longitude: 105.690211
                        }}
                        title={'Đại học Cần Thơ'}
                        description={"3/2 Xuân Khánh - Ninh Kiều - Cần Thơ"}
                        onPress={() => {
                            this.props.navigation.navigate('TimSuKienChiTietChuDe');
                        }}
                    />

                    {/* <MapView.Marker 
                        coordinate={{
                            latitude: 10.031114,
                            longitude: 105.771645,
                        }}
                        title={'Đại học Cần Thơ'}
                        description={"3/2 Xuân Khánh - Ninh Kiều - Cần Thơ"}
                        onPress={() => {
                            this.props.navigation.navigate('TimSuKienChiTietChuDe');
                        }}
                    /> */}

                    <MapViewDirections
                        origin={
                            {
                            latitude: 10.031114,
                            longitude: 105.771645,
                            }
                        }
                        destination={
                            {
                                latitude: 9.969066,
                            longitude: 105.690211
                            }
                        }
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={5}
                        strokeColor="#0066b0"
                    />
                </MapView>
            </View>
        );
    }
}