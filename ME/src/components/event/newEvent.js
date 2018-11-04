import React from 'react';
import { Dimensions, Alert, KeyboardAvoidingView, Picker, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { TextBox } from '../common/textBox';
import { AppBar } from '../common/appBar';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Color } from '../../assets/color';
import { ImagePicker, ImageManipulator } from 'expo';
import url from '../../assets/url';

var form = new FormData();

class NewEvent extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        this.state = {
            showList: false,
            isSDVisible: false,
            isEDVisible: false,
            isSTVisible: false,
            isETVisible: false,
            hostScreen: data.hostScreen,
            adminId: data.userId,
            adminName: null,
            eventName: null,
            eventType: null,
            location: null,
            locationX: null,
            locationY: null,
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
            startTime: moment().format('HH:mm'),
            endTime: moment().format('HH:mm'),
            member: null,
            description: null,
            linkImage: null,
            subject: ['Ẩm thực',
                'Lễ hội',
                'Dân gian',
                'Âm nhạc',
                'Nhạc hội',
                'Thời trang',
                'Triễn lãm',
                'Huong Nghiep',
                'Giai tri',
                'Van hoa, Giao duc']
        }
    }

    handleStartDatePicker = (date) => {
        this.setState({
            startDate: moment(date).format('YYYY-MM-DD'),
            isSDVisible: false
        })
    }

    handleEndDatePicker = (date) => {
        this.setState({
            endDate: moment(date).format('YYYY-MM-DD'),
            isEDVisible: false
        })
    }

    handleStartTimePicker = (time) => {
        this.setState({
            startTime: moment(time).format('HH:mm'),
            isSTVisible: false
        })
    }

    handleEndTimePicker = (time) => {
        this.setState({
            endTime: moment(time).format('HH:mm'),
            isETVisible: false
        })
    }

    openImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false
        });

        if(!result.cancelled) {
            console.log(result.uri);

            let resizedPhoto = await ImageManipulator.manipulate(result.uri, [{ rotate: 0 }], { format: 'jpeg'});

            if (resizedPhoto.width > 1000 && resizedPhoto.height > 750) {
                resizedPhoto = await ImageManipulator.manipulate(result.uri, [{ resize: {width: 1000, height: 750} }], { format: 'jpeg'});
            }
            
            var n =  Date.now();
            var photo = {
                uri: resizedPhoto.uri,
                type: 'image/jpeg',
                name: n+'photo.jpg'
            };
            form.append("fileData", photo);
        }
    }

    onPressUpLoad = async ()=>{
        await fetch( url +'upload', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            },
            body: form,
        })
        .then( (response ) => response.json())
        .then( (responseJson) =>{
            console.log(responseJson);
            let object = JSON.stringify(responseJson);
            this.setState({
                linkImage: object
            })
            // alert(JSON.stringify(this.state.linkImage))
        })
        .catch(err => {
            alert(err);
        });
    }
    
    onSave = async () => {
        let upload = await this.onPressUpLoad();
        alert(this.state.linkImage)
        await fetch(url + 'event/addOneEvent', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                adminId: this.state.adminId,
                eventName: this.state.eventName,
                eventType: this.state.eventType,
                location: this.state.location,
                locationX: this.state.locationX,
                locationY: this.state.locationY,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                member: this.state.member,
                linkImage: this.state.linkImage,
                description: this.state.description
            }),
        })
        .then(res => res.json())
        .then(resJson => {
            if (resJson.title === 'ok') {
                Alert.alert('THÔNG BÁO', 'Tạo sự kiện thành công.',
                    [{text: 'OK', onPress: () => this.props.navigation.navigate(this.state.hostScreen)}]);
                form = new FormData();
            }
        });
    }

    selectDestination = (data, details = null) => {  
        let region = {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        };

        this.setState({
            location: data.description,
            locationX: region.latitude,
            locationY: region.longitude
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <AppBar title='Tạo sự kiện'
                    type='Entypo'
                    name='check'
                    goBack={() => { this.props.navigation.navigate(this.state.hostScreen) }}
                    click={this.onSave} />

                <ScrollView style={{ paddingHorizontal: 16 }}>
                    <KeyboardAvoidingView behavior='padding'>
                        <TextBox type='MaterialIcons' name='home' placeholder='Tên sự kiện' onChangeText={(text) => this.setState({ eventName: text })}></TextBox>

                        <View style={{ flexDirection: 'row', height: 56, paddingVertical: 16, borderBottomWidth: 1 }}>
                            <Icon type='MaterialIcons' name='subtitles' size={24} style={styles.icon}></Icon>
                            <Picker style={styles.picker} selectedValue={this.state.eventType} onValueChange={(value) => this.setState({ eventType: value })} mode='dropdown' fontSize={18}>
                                {
                                    this.state.subject.map((item, key) => (
                                        <Picker.Item key={key} value={item} label={item} />
                                    ))
                                }
                            </Picker>
                        </View>

                        <View style={{ flexDirection: 'column', borderBottomWidth: 1 }}>

                            <View style={{ flexDirection: 'row', height: 56, paddingTop: 16 }}>
                                <Icon type='MaterialIcons' name='watch-later' style={{ color: 'teal', textAlign: 'center' }}></Icon>
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>Thời gian</Text>
                            </View>

                            <View style={styles.subContainer}>
                                <Text style={{ color: '#9E9E9E', fontSize: 16, width: 80 }}>Bắt đầu</Text>

                                {/* start time */}
                                <TouchableOpacity onPress={() => this.setState({ isSTVisible: true })}>
                                    <Text style={styles.time}>{this.state.startTime}</Text>
                                </TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isSTVisible}
                                    onConfirm={this.handleStartTimePicker}
                                    onCancel={() => this.setState({ isSTVisible: false })}
                                    mode={'time'}
                                    locale={'af-NA'}
                                />
                                {/* start date */}
                                <TouchableOpacity onPress={() => this.setState({ isSDVisible: true })}>
                                    <Text style={styles.date}>{this.state.startDate}</Text>
                                </TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isSDVisible}
                                    onConfirm={this.handleStartDatePicker}
                                    onCancel={() => this.setState({ isSDVisible: false })}
                                    mode={'date'}
                                    locale={'af-NA'}
                                />
                            </View>

                            <View style={styles.subContainer}>
                                <Text style={{ color: '#9E9E9E', fontSize: 16, width: 80 }}>Kết thúc</Text>

                                {/* end time */}
                                <TouchableOpacity onPress={() => this.setState({ isETVisible: true })}>
                                    <Text style={styles.time}>{this.state.endTime}</Text>
                                </TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isETVisible}
                                    onConfirm={this.handleEndTimePicker}
                                    onCancel={() => this.setState({ isETVisible: false })}
                                    mode={'time'}
                                    locale={'af-NA'}
                                />

                                {/* end date */}

                                <TouchableOpacity onPress={() => this.setState({ isEDVisible: true })}>
                                    <Text style={styles.date}>{this.state.endDate}</Text>
                                </TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isEDVisible}
                                    onConfirm={this.handleEndDatePicker}
                                    onCancel={() => this.setState({ isEDVisible: false })}
                                    mode={'date'}
                                    locale={'af-NA'}
                                />
                            </View>
                        </View>
                        <View style={styles.location}>
                            <Icon type='Entypo' name='location-pin' size={24} style={{ color: 'teal' }}></Icon>
                            <GooglePlacesAutocomplete
                                placeholder="Địa điểm"
                                minLength={2}
                                autoFocus={false}
                                returnKeyType={'search'}
                                listViewDisplayed={false}
                                fetchDetails={true}
                                onPress={this.selectDestination}
                                getDefaultValue={() => {
                                    return ''; // text input default value
                                }}
                                query={{
                                    key: 'AIzaSyAGF8cAOPFPIKCZYqxuibF9xx5XD4JBb84',
                                    language: 'vi',
                                    // types: '(cities)', // default: 'geocode'
                                }}
                                styles={{
                                    predefinedPlacesDescription: {
                                        color: 'blue',
                                    },
                                    description: {
                                        color: Color._900,
                                        marginRight: 16,
                                        paddingHorizontal: 16,
                                        fontSize: 16,
                                        height: 24,
                                    },
                                    textInputContainer: {
                                        backgroundColor: '#fff',                                        
                                        borderTopWidth: 0,
                                        borderBottomWidth: 0,
                                        marginLeft: 4,
                                        marginTop: -8
                                    },
                                    textInput: {
                                        height: 30,
                                        fontSize: 18
                                    }
                                }}
                                enablePoweredByContainer={false}
                                currentLocation={true}
                                currentLocationLabel="Vị trí hiện tại"
                                nearbyPlacesAPI="GooglePlacesSearch"
                                filterReverseGeocodingByTypes={[
                                    'locality',
                                    'administrative_area_level_3',
                                ]}
                            />
                        </View>
                        <TextBox style={{ marginLeft: 4 }} type='FontAwesome' name='users' placeholder='Số lượng' value={this.state.member}
                            onChangeText={(text) => this.setState({ member: text })}
                            keyboardType='numeric'></TextBox>
                        <TextBox type='MaterialIcons' name='description' placeholder='Ghi chú / Mô tả' value={this.state.description}
                            onChangeText={(text) => this.setState({ description: text })}></TextBox>
                        <View style={{ borderBottomWidth: 1 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', height: 56, paddingBottom: 16, paddingTop: 16 }} onPress={this.openImagePicker}>
                                <Icon type='Entypo' name='images' style={{ color: 'teal' }}></Icon>
                                <Text style={{ fontSize: 18, marginLeft: 20 }}>Thêm ảnh</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    subContainer: {
        height: 48,
        flexDirection: 'row',
        paddingLeft: 64
    },
    date: {
        fontSize: 18,
        marginLeft: 50
    },
    time: {
        fontSize: 18,
        marginLeft: 20
    },
    icon: {
        color: 'teal'
    },
    location: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingTop: 16,
        paddingBottom: 4
    },
    picker: {
        width: Dimensions.get('window').width - 76,
        height: 24,
        marginLeft: 14
    }
});

export { NewEvent };