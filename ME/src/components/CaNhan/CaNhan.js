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

import AppStyle from '../../theme';
const styles = AppStyle.StyleCaNhan;
    
export default class CaNhan extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                _id: '',
                email:''
            }
        };
        }

        QRComponent = async()=>{
            try {
                const data = await AsyncStorage.getItem('data');
                this.setState({data:JSON.parse(data)})
                this.props.navigation.navigate('CaNhanQR',{data:this.state.data})
            } catch (error) {
                
            }
        }

        TTComponent = async()=>{
            try {
                const data = await AsyncStorage.getItem('data');
                this.setState({data:JSON.parse(data)})
                this.props.navigation.navigate('CaNhanTT',{data:this.state.data})
            } catch (error) {
                
            }
        }

        saveData = async() =>{
            var data = JSON.stringify({
                _id: '_id',
                email: 'email'
            });
            AsyncStorage.setItem('data', data);
            this.props.navigation.navigate('DangNhap');
        }

        
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                        {/* <Text style={styles.textheader}>Cá nhân</Text> */}
                        {/* Ảnh và tên */}
                    <View style={styles.tenheader}>
                            <Text style={styles.ten}>Cá nhân</Text>
                    </View>
                </View>
                <View style={styles.contain}>
                <ScrollView>
                {/* Thông tin cá nhân */}
                    <TouchableOpacity onPress={() => {
                        // this.props.navigation.navigate('CaNhanTT')
                        this.TTComponent()
                    }}>
                        <View style={styles.item}>
                            <Icon type='Feather' name='user' style={styles.iconLeft}/>
                            <View style={styles.viewText}>
                                <Text style={styles.textItem}>Thông tin cá nhân</Text>
                            </View>
                            <Icon type='MaterialIcons' name='navigate-next' style={styles.iconRight}/>
                        </View>
                    </TouchableOpacity>  
                    {/* Mã QR của tôi */}
                    <TouchableOpacity onPress={() => {
                        this.QRComponent();
                    }}>
                        <View style={styles.item}>
                            <Icon type='MaterialCommunityIcons' name='qrcode' style={styles.iconLeft}/>
                            <View style={styles.viewText}>
                                <Text style={styles.textItem}>Mã QR của tôi</Text>
                            </View>
                            <Icon type='MaterialIcons' name='navigate-next' style={styles.iconRight}/>
                        </View>
                    </TouchableOpacity> 

                    <TouchableOpacity onPress={() => {
                        this.saveData();
                    }}>
                        <View style={styles.loutitem}>
                            <Icon type='Feather' name='log-out' style={styles.iconLeft}/>
                            <View style={styles.viewText}>
                                <Text style={styles.textItem}>Đăng xuất</Text>
                            </View>
                            <Icon type='MaterialIcons' name='navigate-next' style={styles.iconRight}/>
                        </View>
                    </TouchableOpacity> 
                </ScrollView>
                </View>
            </View>
        )
    }
}