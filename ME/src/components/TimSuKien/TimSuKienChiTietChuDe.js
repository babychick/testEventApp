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
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import Modal from 'react-native-modalbox';
import EventData from '../../data/EventData';
import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienChiTietChuDe;
import url from '../../assets/url'
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY = "AIzaSyD15JxPKJaGv1OOWFAz_HNgqGRyXrptams";

export default class TimSuKienChiTietChuDe extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.navigation.state.params.data,
            name: '',
            isDisable: false,
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
            }
        };
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

    async componentWillMount(){
        await this._getStore()
        await this._isRegistered()
        try {
            fetch(url+'user/'+this.state.data.adminId)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        name: dataJson.name
                    });
                    // alert(this.state.data.adminId)
                })
        } catch (err) {
            alert(err)
        }
    }

    async _onPressRegister(){
        try {
            await fetch(url+'register/addOneRegister', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({
                    userId: this.state.store._id,
                    eventId: this.state.data._id 
                }),
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
               if(responseJson.title == 'ok'){
                   this._disableRegister()
                   alert('Đăng ký thành công')
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
            isDisable: true
        })
    }

    async _isRegistered(){
        try {
            await fetch(url+'register/findByKeyValue', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({
                    userId: this.state.store._id,
                    eventId: this.state.data._id 
                }),
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
               if(responseJson[0].userId == this.state.store._id){
                   this._disableRegister()
               }
            })
		} catch (error) {
            // alert(error);
		}
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tren}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TimSuKien')
                        }}>
                        <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Chi tiết sự kiện</Text>
                        {/* <TouchableOpacity>
                            <Icon type='Ionicons' style={styles.iconheader2} name='md-map'/>
                        </TouchableOpacity>   */}
                    </View>
                </View>
                <ScrollView style = {styles.duoi}>
                    <View>
                        <Image style={styles.image} source={{uri:this.state.data.linkImage}} resizeMode='cover'/>
                        <TouchableOpacity style={[{position: 'absolute', right: 16, bottom: 16}]}
                            disabled={this.state.isDisable}
                             onPress={() => {
                                // this._disableDemo()
                                this._onPressRegister()
                                // alert((this.state.store._id))
                            }}>
                            <View>
                                <Text style={styles.registerButton}>ĐĂNG KÝ</Text>
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
                                <Text style={styles.content}>{this.state.data.time}</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>{this.state.data.date}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{height: 24, fontSize: 14, width: 80}}>Kết thúc</Text>
                                <Text style={styles.content}>{this.state.data.time}</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>{this.state.data.date}</Text>
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
                                        latitude: 10.031114,
                                        longitude: 105.771645,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                    }}
                                    >
                                        <MapView.Marker 
                                            coordinate={{
                                                latitude: 10.032422,
                                                longitude: 105.781578,
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
                                    latitude: 10.032422,
                                    longitude: 105.781578,
                                }}
                                title={this.state.data.eventName}
                                description={this.state.data.location}
                                onPress={() => {
                                    this.props.navigation.navigate('TimSuKienChiTietChuDe');
                                }}
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
                                strokeColor="#0066b0"
                            />

                        </MapView>
                    </View>
                    <View style={styles.modalButton}>
                        <TouchableOpacity style={styles.modalButtonChiDuong} onPress={() => {
                                this.setState({
                                    originCoords: {
                                        latitude: 10.031114,
                                        longitude: 105.771645
                                    },
                                    destinationCoords: {
                                        latitude: 10.032422,
                                        longitude: 105.781578
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
    }
}