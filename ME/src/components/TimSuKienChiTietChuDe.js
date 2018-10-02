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
                        <Text style={styles.textheader}>Chi tiết sự kiện</Text>
                    </View>
                </View>
                <ScrollView style = {styles.duoi}>
                    <View>
                        <Image style={styles.image} source={{uri: 'https://hinhanhdephd.com/wp-content/uploads/2017/06/anh-girl-xinh-de-thuong-nhat-nam-2017-2.jpg'}} resizeMode='stretch'/>
                        <TouchableOpacity style={[{position: 'absolute', right: 16, bottom: 16}]}>
                            <View>
                                <Text style={styles.registerButton}>ĐĂNG KÝ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 16}}>
                        <Text style={styles.heading}>Lễ hội dân gian</Text>

                        <Text style={styles.caption}>không có caption</Text>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Được tổ chức bởi</Text>
                            <TouchableOpacity>
                                <Text style={[styles.content, {marginTop: 5}]}>Nguyễn Đình Phi</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.subContainer}>

                            <Text style={styles.subHeading}>Thời gian</Text>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{height: 24, fontSize: 14, width: 80}}>Bắt đầu</Text>
                                <Text style={styles.content}>09:30</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>20-11-2018</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{height: 24, fontSize: 14, width: 80}}>Kết thúc</Text>
                                <Text style={styles.content}>11:00</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>20-11-2018</Text>
                            </View>

                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.subHeading}>Địa điểm</Text>
                            <TouchableOpacity>
                                <Text style={{fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>Ninh Kiều - Cần Thơ</Text>
                            </TouchableOpacity>
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
                            <Text style={{fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>Text and important elements, like icons, should meet legibility standards when appearing on colored backgrounds, across all screen and device types.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}