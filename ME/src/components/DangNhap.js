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
    AsyncStorage,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import QRCode from 'react-native-qrcode';

import AppStyle from '../theme';
const styles = AppStyle.StyleDangNhap;
const androidClientId ='249723835237-f1oa73oih93srs9126a3ugbcvf0f6ssa.apps.googleusercontent.com';
import url from '../assets/url';
import Expo, {Permissions, Notifications } from 'expo';


async function registerForPushNotificationsAsync() {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;

        // only ask if permissions have not already been determined, because
        // iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            return;
        }

        // Get the token that uniquely identifies this device
        // let token = await Notifications.getExpoPushTokenAsync();
        // console.log(token);

        // POST the token to your backend server from where you can retrieve it to send push notifications.
        // return fetch(PUSH_ENDPOINT, {
        //     method: 'POST',
        //     headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //     token: {
        //         value: token,
        //     },
        //     user: {
        //         username: 'Brent',
        //     },
        //     }),
        // });
    }

export default class DangNhap extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                _id: '_id',
                email: 'email'
            },
            signedIn: false,
            email: '',
            photoUrl: '',
            user: null,
            user:{
                accountId: '',
                name: '',
                birthday: null,
                job: '',
                gender: 'Nam',
                phone : '',
                address: '',
                isBanned: false,
                rateStar: 0,
                nation: 'Afghanistan',
                linkImage: ''
            },
        };
    }

    async componentWillMount () {
        // this.register();
        registerForPushNotificationsAsync()
        try {
            const store = await AsyncStorage.getItem('data');
            // alert(JSON.parse(store)._id)
            if(JSON.parse(store)._id != '_id'){
                await this.props.navigation.navigate('RouterTimSuKien');
            }
        } catch (error) {
            
        }
    }

    

    register= async() =>{
        const {status} = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);
        if(status !== 'granted'){
            alert('Bạn cần cấp phép để thông báo');
            return;
        }
        const token = await Expo.Notifications.getExpoPushTokenAsync();
        console.log(token)
    }

    saveData = async() =>{
        var data = JSON.stringify(this.state.data);
        AsyncStorage.setItem('data',data);
    }

    SignInGG = async() =>{
        try {
        const result = await Expo.Google.logInAsync({
          androidClientId: androidClientId,
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
        //   return result.accessToken;
        console.log(result.user)
        this.setState({
            ...this.state,
            data:{
                ...this.state.data,
                email:result.user.email
            },
            user:{
                ...this.state.user,
                name: result.user.name,
            }
        })
        this.checkUser();
        } else {
        console.log('cancelled')
        }
      } catch(e) {
        console.log('err')
      }
    }

     async checkUser(){
         try {
            await fetch(url+'account/email/'+this.state.data.email)
                .then( data => data.json())
                .then( dataJson => {
                    if(dataJson[0] != null){
                        this.setState({
                            ...this.state,
                            data:{
                                _id: dataJson[0]._id,
                                email: dataJson[0].email
                            }
                        });
                    this.saveData();
                    this.props.navigation.navigate('RouterTimSuKien');
                    // alert('Có r')
                    } else {
                        this.addAccount();
                        // alert('chưa có')
                    }
                    // console.log(dataJson)
                })
        } catch (err) {
            console.log(err)
        }
    }

    addAccount = async() => {
        console.log('addAccount')
        await fetch(url + 'account/addOneAcocunt', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                email: this.state.data.email
            }),
        }).then( (response ) => response.json())
        .then( (responseJson) =>{
            this.setState({
                ...this.state,
                data:{
                    _id:  responseJson.data._id,
                    email: responseJson.data.email
                },
                user:{
                    ...this.state.user,
                    accountId: responseJson.data._id
                }
            });
            this.addUser();
            console.log(this.state.data._id)
        });
    }

    addUser = async() => {
        console.log('addUser')
        console.log(this.state.user)
        await fetch(url + 'user/addOneUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(this.state.user)
        }).then( (response ) => response.json())
        .then( (responseJson) =>{
            if(responseJson.title == 'ok'){
                this.saveData();
                this.props.navigation.navigate('RouterTimSuKien');
            }
        });
         
    }


    //  SignInFB = async() =>{
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2220517691301103', {
    //     permissions: ['public_profile'],
    //     });
    // if (type === 'success') {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //     console.log(JSON.stringify(response))
    // }
    // }


    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity  onPress={() => {
                        this.saveData()
                        this.props.navigation.navigate('RouterTimSuKien')
                    }}>
                    <View style={styles.viewdangnhap}>
                        <Text style={styles.textdangnhap}>ĐĂNG NHẬP</Text>
                    </View>
                </TouchableOpacity> */}
                <View style={styles.viewLogo}>
                    <View style={styles.logo}>
                        <Text style={styles.textLogo}>SK</Text>
                    </View>
                    <Text style={styles.text}>Quản lý sự kiện</Text>
                </View>
                <TouchableOpacity  onPress={() => {
                    this.SignInGG()
                    }}>
                    <View style={styles.viewdangnhap2}>
                        <Text style={styles.textdangnhap}>Đăng nhập với Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

