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
import moment from 'moment';

import AppStyle from '../../theme';
const styles = AppStyle.StyleTimSuKienNguoiDung;

import url from '../../assets/url'

export default class TimSuKienNguoiDung extends Component {
   constructor(props){
        super(props)
        this.state = {
            _id : this.props.navigation.state.params.data,
            name: 'nu123ll',
            birthday: null,
            job: null,
            gender: null,
            phone: null,
            address: null,
            isBanned: false,
            rateStar: 0,
            nation: null,
            linkImage: null,
            email: null,
            accountId: null
        };
    }
     
    async componentWillMount(){
        try {
            fetch(url+'user/'+this.state._id)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        name : dataJson.name,
                        birthday: dataJson.birthday,
                        job: dataJson.job,
                        gender: dataJson.gender,
                        phone: dataJson.phone,
                        address: dataJson.address,
                        isBanned: dataJson.isBanned,
                        rateStar: dataJson.rateStar,
                        nation: dataJson.nation,
                        linkImage: dataJson.linkImage,
                    });
                    fetch(url+'account/'+dataJson.accountId)
                    .then( data => data.json())
                    .then( dataJson1 => {
                        this.setState({
                            email : dataJson1.email
                        });
                    })
                })
        } catch (err) {
            console.log(err)
        }
    }


    getParsedDate(date){
        date = String(date).split(' ');
        var days = String(date[0]).split('-');
        var hours = String(date[1]).split(':');
        return [parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
    }
    
    render() {
        const email = this.state.email;
        // var date = getParsedDate(this.state.birthday)
        var birthday = moment(this.state.birthday).format('DD-MM-YYYY');
        return (
            <View style={styles.container}>
                <View style={styles.tren}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TimSuKienChiTietChuDe')
                        }}>
                        <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Thông tin cá nhân</Text>
                        {/* <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CaNhanCapNhat', {data:this.state})
                            // alert(JSON.stringify(this.state));
                        }}>
                            <Icon type='Foundation' name='page-edit' style={styles.iconheader2}/>
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.khung}>
                        <View>
                            <Image source = {{uri: this.state.linkImage}}
                                style={styles.anhdaidien}
                            ></Image>
                        </View>
                        <View style={styles.thongtin}>
                                <Text style={styles.hoten}>{this.state.name}</Text>

                                <Text style={styles.email}>{email}</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.duoi}>
                        <View style={styles.thongtinchitiet}>
                            <Text style={styles.tieude}>Thông tin</Text>
                            <View style={styles.ttcuthe}>
                                <Icon type='SimpleLineIcons' name='phone' style={styles.icon}/>
                                <Text style={styles.tt}>{this.state.phone}</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='transgender' style={styles.icon}/>
                                <Text style={styles.tt}>{this.state.gender}</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='birthday-cake' style={styles.icon}/>
                                <Text style={styles.tt}>{birthday}</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='MaterialIcons' name='business-center' style={styles.icon}/>
                                <Text style={styles.tt}>{this.state.job}</Text>
                            </View>

                            <View style={styles.ttcuthe}>
                                <Icon type='FontAwesome' name='flag-checkered' style={styles.icon}/>
                                <Text style={styles.tt}>{this.state.nation}</Text>
                            </View>
                        </View>

                        <View style={styles.diachi}>
                            <Text style={styles.tieude}>Địa chỉ</Text>
                            <TouchableOpacity>
                                <View style={styles.ttcuthe}>
                                        <Icon type='FontAwesome' name='home' style={styles.icon}/>
                                    <View style={styles.canhchu}>
                                        <Text style={styles.tt}>{this.state.address}</Text>
                                    </View>
                                        <Icon type='MaterialIcons' name='navigate-next' style={styles.iconNext}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}