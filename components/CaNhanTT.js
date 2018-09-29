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

import AppStyle from '../theme';
const styles = AppStyle.StyleCaNhanTT;
    

export default class CaNhanTT extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tren}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CaNhan')
                        }}>
                        <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Thông tin cá nhân</Text>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CaNhanCapNhat')
                        }}>
                            <Icon type='Foundation' name='page-edit' style={styles.iconheader2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.khung}>
                        <View>
                            <Image source = {{uri: 'https://znews-photo-td.zadn.vn/w860/Uploaded/neg_rtlzofn/2017_01_23/14494601_177404746951l3484_2482115257403382069_n.jpg'}}
                                style={styles.anhdaidien}
                            ></Image>
                        </View>
                        <View style={styles.thongtin}>
                                <Text style={styles.hoten}>Công Chúa Bong Bóng</Text>

                                <Text style={styles.email}>bongccb@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.duoi}>
                        <View style={styles.thongtinchitiet}>
                            <Text style={styles.tieude}>Thông tin</Text>
                            <View style={styles.ttcuthe}>
                                <Icon type='SimpleLineIcons' name='phone' style={styles.icon}/>
                                <Text style={styles.tt}>+84 868636380</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='transgender' style={styles.icon}/>
                                <Text style={styles.tt}>Nữ</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='birthday-cake' style={styles.icon}/>
                                <Text style={styles.tt}>20/04/1996</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='MaterialIcons' name='business-center' style={styles.icon}/>
                                <Text style={styles.tt}>Người mẫu - Diễn viên</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='flag-checkered' style={styles.icon}/>
                                <Text style={styles.tt}>Việt Nam</Text>
                            </View>
                        </View>

                        <View style={styles.diachi}>
                            <Text style={styles.tieude}>Địa chỉ</Text>
                            <TouchableOpacity>
                                <View style={styles.ttcuthe}>
                                        <Icon type='FontAwesome' name='home' style={styles.icon}/>
                                    <View style={styles.canhchu}>
                                        <Text style={styles.tt}>Nhà trọ 132 (Khu C) - Phường An Khánh - Quận Ninh Kiều - Thành phố Cần Thơ</Text>
                                    </View>
                                        <Icon type='MaterialIcons' name='navigate-next' style={styles.iconNext}/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={styles.gioithieu}>
                            <Text style={styles.tieude}>Lời giới thiệu</Text>
                        </View> */}
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}