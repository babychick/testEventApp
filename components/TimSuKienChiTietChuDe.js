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
import EventData from '../data/EventData';
import AppStyle from '../theme';
const styles = AppStyle.StyleTimSuKienChiTietChuDe;

export default class TimSuKienChiTietChuDe extends Component {
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
                        <Text style={styles.textheader}>Thông tin sự kiện</Text>
                    </View>
                </View>
                <ScrollView style={styles.duoi}>
                    <View style={styles.hinhsk}>
                        <Image source = {{uri: 'https://hinhanhdephd.com/wp-content/uploads/2017/06/anh-girl-xinh-de-thuong-nhat-nam-2017-2.jpg'}}
                        style = {styles.hinh}/>
                    </View>
                    <View style={styles.tensk}>
                        <Text style={styles.titleten}></Text>
                        <Text style={styles.ten}></Text>
                    </View>

                    <View style={styles.nguoitaosk}>
                        <Text style={styles.titlenguoitao}></Text>
                        <Text style={styles.nguoitao}></Text>
                    </View>

                    <View style={styles.thoigiansk}>
                        <Text style={styles.titlethoigian}></Text>
                        <Text style={styles.thoigianbd}></Text>
                        <Text style={styles.thoigiankt}></Text>
                    </View>

                    <View style={styles.diachisk}>
                        <Text style={styles.titlediachi}></Text>
                        <Text style={styles.diachi}></Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}