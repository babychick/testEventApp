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
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import QRCode from 'react-native-qrcode';

import AppStyle from '../theme';
const styles = AppStyle.StyleCaNhanQR;

export default class CaNhanQR extends Component {
    constructor(props){
        super(props)
        this.state = {
        // a : this.props.navigation.state.params.test
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('CaNhan')
                    }}>
                    <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                    </TouchableOpacity>
                    <Text style={styles.textheader}>Mã QR của tôi</Text>
                        <Icon type='Foundation' name='page-edit' style={styles.iconheader2}/>
                </View>
                <View style={styles.duoi}>
                    <View style={styles.QRcode}>
                        <QRCode
                            value={'http://facebook.github.io/react-native/'}
                            size={250}
                            // bgColor='purple'
                            fgColor='white'/>
                    </View>
                    <View style={styles.huongdan}>
                        <Text style={styles.texthuongdan}>Mã QR dùng để điểm danh </Text>
                        <Text style={styles.texthuongdan}>khi tham gia sự kiện</Text>
                    </View>
                </View>
            </View>
        )
    }
}