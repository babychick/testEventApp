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
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';

import AppStyle from '../theme';
const styles = AppStyle.StyleCaNhanCapNhat;
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

var ngayht = (new Date().getDate()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear());
export default class CaNhanCapNhat extends Component {
    constructor (props) {
        super(props)
        gioitinh = ['Nam', 'Nữ'];
        quocgia = ['Afghanistan',
                    'Kabul',
                    'Afghanistan',
                    'Kabul',
                    'Albania',
                    'Tirana',
                    'Albania',
                    'Tirana',
                    'Algeria',
                    'Algiers',
                    'Algeria',
                    'Algiers',
                    'Andorra',
                    'Andorra la Vella',
                    'Andorra'];
        this.state = {
            selected: 'nam',
            nselected: 'Afghanistan',
            isVisible: false,
            chonngay: ngayht
        };
    }

    renderGioitinh(){
        items=[];
        for(let item of gioitinh){
            items.push(<Picker.Item key={item} label = {item} value = {item}/>)
        }
        return items;
    }

    renderQuocgia(){
        items=[];
        for(let item of quocgia){
            items.push(<Picker.Item key={item} label = {item} value = {item}/>)
        }
        return items;
    }

    handlePiker = (datetime) => {
        this.setState({
            isVisible: false,
            chonngay: moment(datetime).format('DD-MM-YYYY')
        })
    }

    hidePiker = () => {
        this.setState({
            isVisible: false
        })
    }

    showPiker = ()=>{
        this.setState({
            isVisible: true
        })
    }

    render() {
        return (
            <View style = {styles.container}>
            {/* <KeyboardAvoidingView> */}
                <View style={styles.tren}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CaNhanTT')
                        }}>
                            <Icon type='Ionicons' name='ios-arrow-round-back' style={styles.iconheader1}/>
                        </TouchableOpacity>
                        <Text style={styles.textheader}>Cập nhật thông tin</Text>
                        <TouchableOpacity>
                            <Icon type='Entypo' name='check' style={styles.iconheader2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.khung}>
                        <ScrollView>
                        <View style={styles.suaanh}>
                            <Image source = {{uri: 'https://znews-photo-td.zadn.vn/w860/Uploaded/neg_rtlzofn/2017_01_23/14494601_177404746951l3484_2482115257403382069_n.jpg'}}
                                style={styles.anhdaidien}
                            ></Image>
                            <TouchableOpacity>
                            <Text style={styles.textchonanh}>Chọn ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        
                    
                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='user' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {'Họ và tên'}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                             ></TextInput>
                        </View>


                        <View style ={styles.combo}>
                            <Icon type='FontAwesome' name='gift' style={styles.iconcombo}/>
                            <TouchableOpacity onPress={this.showPiker}>
                                <Text style = {styles.textcombopiker}>{this.state.chonngay}</Text>
                            </TouchableOpacity>
                            <DateTimePicker
                                isVisible={this.state.isVisible}
                                onConfirm={this.handlePiker}
                                onCancel={this.hidePiker}
                                mode = {'date'}
                                locale={'af-NA'}
                            />
                        </View>


                        <View style ={styles.combo}>
                             <Icon type='MaterialIcons' name='business-center' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {'Nghề nghiệp'}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                             ></TextInput>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='transgender' style={styles.iconcombo}/>
                             <Picker style={styles.pikercombo}
                                    selectedValue={this.state.selected}
                                    onValueChange={(value) => this.setState({selected: value})}
                                    mode="dropdown"
                             >
                            {this.renderGioitinh()}
                             </Picker>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='flag-checkered' style={styles.iconcombo}/>
                             <Picker style={styles.pikercombo}
                                    selectedValue={this.state.nselected}
                                    onValueChange={(value) => this.setState({nselected: value})}
                                    mode="dropdown"
                             >
                            {this.renderQuocgia()}
                             </Picker>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='home' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {'Địa chỉ'}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                                multiline = {true}
                                numberOfLines = {4}
                             ></TextInput>
                        </View>
                        </ScrollView>
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            </View>
        );
    }
}