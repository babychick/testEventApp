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

export default class DangNhap extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                _id: '',
                email: ''
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
            }
        };
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
                    if(dataJson == null){
                        this.setState({
                            ...this.state,
                            data:{
                                _id: dataJson[0]._id,
                                email: dataJson[0].email
                            }
                        });
                       console.log('old ' +dataJson[0]._id )
                    this.saveData();
                    this.props.navigation.navigate('RouterTimSuKien');
                    } else {
                        this.addAccount();
                    }
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
                <TouchableOpacity  onPress={() => {
                        this.saveData()
                        this.props.navigation.navigate('RouterTimSuKien')
                    }}>
                    <View style={styles.viewdangnhap}>
                        <Text style={styles.textdangnhap}>ĐĂNG NHẬP</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => {
                    this.SignInGG()
                    }}>
                    <View style={styles.viewdangnhap2}>
                        <Text style={styles.textdangnhap}>GOOGLE</Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity  onPress={() => {
                    this.SignInFB()
                    }}>
                    <View style={styles.viewdangnhap3}>
                        <Text style={styles.textdangnhap}>FACEBOOK</Text>
                    </View>
                </TouchableOpacity> */}

            </View>
        )
    }
}

