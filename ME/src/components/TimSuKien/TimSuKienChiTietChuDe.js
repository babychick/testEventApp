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
    AsyncStorage,
    Dimensions,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import Modal from 'react-native-modalbox';
import EventData from '../../data/EventData';
import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienChiTietChuDe;
import url from '../../assets/url'
import { MapView, Location } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = "AIzaSyD15JxPKJaGv1OOWFAz_HNgqGRyXrptams";
import Swiper from 'react-native-swiper';
import moment from 'moment';

export default class TimSuKienChiTietChuDe extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.navigation.state.params.data,
            location: this.props.navigation.state.params.location,
            isLocation: this.props.navigation.state.params.isLocation,
            screen: this.props.navigation.state.params.screen,
            name: '',
            isDisable: false,
            colorDisable: '#00796B',
            originCoords: {
                latitude: 0,
                longitude: 0
            },
            destinationCoords: {
                latitude: 0,
                longitude: 0
            },
            store: {
                _id: '',
                email:''
            },
            phone: '',
            linkImage: '',
            textDK: 'ĐĂNG KÝ',
            _id: ''
        };
    }
    _getLocation = async() =>{
        navigator.geolocation.getCurrentPosition(
        (position) => {
            this.setState({
                lat: position.coords.latitude,
                long: position.coords.longitude,
            });
        });
    }

    // _getLocationAsync = async () => {
    //     let location = await Location.getCurrentPositionAsync({});
    //     this.setState(
    //         {
    //             lat: location.coords.latitude,
    //             long: location.coords.longitude,
    //         }
    //     );
    // };

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

    _isMyEvent = async() =>{
        if(this.state._id == this.state.data.adminId){
            this.setState({
                ...this.state,
                textDK: 'SỰ KIỆN CỦA TÔI'
            })
            this._disableRegister()
        }
    }

    async componentWillMount(){
        await this._getStore()
        await this._getUser()
        await this._isRegistered()
        await this._isMyEvent()
        try {
            await fetch(url+'user/'+this.state.data.adminId)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        name: dataJson.name
                    });
                })
        } catch (err) {
            alert(err)
        }
    
    }

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
                    phone: responseJson[0].phone,
                    linkImage: responseJson[0].linkImage,
                    _id: responseJson[0]._id
                })
            } )
		} catch (error) {
            alert(error);
		}
    }

    async _onPressRegister(){
        try {
            await fetch(url+'Registrant/addOneRegistrant', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({
                    adminID: this.state.data.adminId,
                    adminName: this.state.name,
                    eventId: this.state.data._id,
                    eventName: this.state.data.eventName,
                    startDate: this.state.data.startDate,
                    startTime: this.state.data.startTime,
                    endTime: this.state.data.endTime,
                    location: this.state.data.location,
                    userId: this.state._id,
                    email: this.state.store.email,
                    status: false,
                    phone: this.state.phone,
                    linkImage: this.state.linkImage
                })
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
               if(responseJson.title == 'ok'){
                    this._disableRegister()
                    alert('Đăng ký thành công')
                    this.setState({
                        ...this.state,
                        colorDisable: '#696969',
                        textDK: 'ĐÃ ĐĂNG KÝ'
                    })
               }else{
                   alert('Đăng ký không thành công')
               }
            })
		} catch (error) {
            alert(error);
		}
    }

    _disableRegister(){
        this.setState({
            ...this.state,
            isDisable: true,
            colorDisable: '#696969'
        })
    }

    async _isRegistered(){
        try {
            await fetch(url+'registrant/findByKeyValue', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({
                    userId: this.state._id,
                    eventId: this.state.data._id 
                }),
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
                if(responseJson[0].userId == this.state._id){
                    this.setState({
                            ...this.state,
                            textDK: 'ĐÃ ĐĂNG KÝ'
                    })
                    this._disableRegister()
                }
                console.log(responseJson)
            })
		} catch (error) {
		}
    }
    render() {
        if(this.state.isLocation == true){
            // var cars = ["1540716360618photo.jpg","1540716356606photo.jpg"];
            var cars = [];
            cars = (JSON.parse(this.state.data.linkImage));
            var lat = this.state.location.lat;
            var long = this.state.location.long;
            var X = Number.parseFloat(this.state.data.locationX, 10);
            var Y = Number.parseFloat(this.state.data.locationY, 10);
            return (
                <View style={styles.container}>
                    <View style={styles.tren}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                if( this.state.screen == 0){
                                    this.props.navigation.navigate('TimSuKien')
                                } else {
                                    this.props.navigation.navigate('TimSuKienMap', {location: this.state.location, isLocation: this.state.isLocation})
                                }
                                    
                            }}>
                            <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                            </TouchableOpacity>
                            <Text style={styles.textheader}>Chi tiết sự kiện</Text>
                        </View>
                    </View>
                    <ScrollView style = {styles.duoi}>
                        <View>
                            {/* <Image style={styles.image} source={{uri:this.state.data.linkImage}} resizeMode='cover'/> */}
                            <Swiper autoplay height={Dimensions.get('window').height * 0.35}>
                                {cars.map((item, key) => (
                                    <Image key={key} style={styles.image} source={{uri:url + item}} resizeMode='cover'/>
                                ))}
                            </Swiper>
                            <TouchableOpacity style={[{position: 'absolute', right: 16, bottom: 16}]}
                                disabled={this.state.isDisable}
                                onPress={() => {
                                    // this._disableDemo()
                                    this._onPressRegister()
                                    // alert((this.state.store._id))
                                }}>
                                <View>
                                    <Text style={[styles.registerButton, {backgroundColor: this.state.colorDisable}]}>{this.state.textDK}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingHorizontal: 16}}>
                            <Text style={styles.heading}>{this.state.data.eventName}</Text>

                            <Text style={styles.caption}>{this.state.data.status}</Text>

                            <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                                <Text style={styles.subHeading}>Được tổ chức bởi</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('TimSuKienNguoiDung', {data: this.state.data.adminId})
                                }}>
                                    <Text style={[styles.content, {marginTop: 5}]}>{this.state.name}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.subContainer}>

                                <Text style={styles.subHeading}>Thời gian</Text>

                                <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                    <Text style={{height: 24, fontSize: 14, width: 80}}>Bắt đầu</Text>
                                    <Text style={styles.content}>{this.state.data.startTime}</Text>
                                    <Text style={[styles.content, {marginLeft: 32}]}>{this.state.data.startDate}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                    <Text style={{height: 24, fontSize: 14, width: 80}}>Kết thúc</Text>
                                    <Text style={styles.content}>{this.state.data.endTime}</Text>
                                    <Text style={[styles.content, {marginLeft: 32}]}>{this.state.data.endDate}</Text>
                                </View>

                            </View>

                            <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                                <Text style={styles.subHeading}>Thành viên</Text>
                                <Text style={[styles.content, {marginTop: 5}]}>40</Text>
                            </View>

                            <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                                <Text style={styles.subHeading}>Trạng thái</Text>
                                <Text style={[styles.content, {marginTop: 5}]}>Tốt</Text>
                            </View>

                            <View style={styles.subContainer}>
                                <Text style={styles.subHeading}>Mô tả</Text>
                                <Text style={{fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>{this.state.data.description}</Text>
                            </View>

                            <View style={styles.subContainerlocation}>
                                <Text style={styles.subHeadinglocation}>Địa điểm</Text>
                                <TouchableOpacity onPress={() => {
                                        this.refs.showMap.open()
                                    }}>
                                <View  style={styles.maplocation} >
                                        <MapView 
                                            liteMode={true}
                                            style={{ flex: 1 }}
                                            initialRegion={{
                                            latitude: X,
                                            longitude: Y,
                                            latitudeDelta: 0.01,
                                            longitudeDelta: 0.01,
                                        }}
                                        >
                                            <MapView.Marker 
                                                coordinate={{
                                                    latitude: X,
                                                    longitude: Y,
                                                }}
                                            />
                                        </MapView>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <Modal
                        ref = {'showMap'}
                        style={styles.modal}
                        onClosed={this.onClose}
                        onOpened={this.onOpened}
                        swipeToClose = {false}
                        onClosingState={this.onClosingState}
                    >
                        <View style={styles.modalMap}>
                            <MapView showsUserLocation={true}
                                showsCompass = {true}
                                showsMyLocationButton={true}
                                // toolbarEnabled = {true}
                                style={{ flex: 1 }}
                                initialRegion={{
                                    latitude: lat,
                                    longitude: long,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }}
                                >
                                
                                <MapView.Marker 
                                    coordinate={{
                                        latitude: X,
                                        longitude: Y,
                                    }}
                                    title={this.state.data.eventName}
                                    description={this.state.data.location}
                                    // onPress={() => {
                                    //     this.props.navigation.navigate('TimSuKienChiTietChuDe');
                                    // }}
                                />
                                <MapViewDirections
                                    origin={
                                        this.state.originCoords
                                    }
                                    destination={
                                        this.state.destinationCoords
                                    }
                                    apikey={GOOGLE_MAPS_APIKEY}
                                    strokeWidth={5}
                                    strokeColor="#009688"
                                />

                            </MapView>
                        </View>
                        <View style={styles.modalButton}>
                            <TouchableOpacity style={styles.modalButtonChiDuong} onPress={() => {
                                    this.setState({
                                        originCoords: {
                                            latitude: lat,
                                            longitude: long
                                        },
                                        destinationCoords: {
                                            latitude: X,
                                            longitude: Y
                                        }
                                    });
                                }}>
                                <Text style={styles.modalTextChiDuong}>Chỉ đường</Text>
                                <Icon type='MaterialCommunityIcons' style={styles.modalIconChiDuong} name='directions-fork'/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalButtonDong} onPress={() => {
                                    this.refs.showMap.close()
                                }}>
                                <Text style={styles.modalTextDong}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <View style={styles.tren}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                if( this.state.screen == 0){
                                    this.props.navigation.navigate('TimSuKien')
                                } else {
                                    this.props.navigation.navigate('TimSuKienMap', {location: this.state.location, isLocation: this.state.isLocation})
                                }
                                    
                            }}>
                            <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                            </TouchableOpacity>
                            <Text style={styles.textheader}>Chi tiết sự kiện</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: 'red'}}>Bạn chưa bật GPS</Text>
                    </View>
                </View>
            );
        }
    }
}