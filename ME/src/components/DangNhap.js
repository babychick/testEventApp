import React, {Component} from 'react';
import {
    Text, 
    View, 
    TouchableOpacity,
    AsyncStorage } from 'react-native';
import AppStyle from '../theme';

const styles = AppStyle.StyleDangNhap;

export default class DangNhap extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                _id: '5baf39270be9833d48edafd6',
                email: 'longtb2@gmail.com'
            }
        };
    }

    saveData = async() =>{
        var data = JSON.stringify(this.state.data);
        AsyncStorage.setItem('data',data);
    }
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
            </View>
        )
    }
}

