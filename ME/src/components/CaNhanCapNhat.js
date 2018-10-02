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
    Alert,
    AsyncStorage,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';

import AppStyle from '../theme';
const styles = AppStyle.StyleCaNhanCapNhat;
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Modal from 'react-native-modalbox';
import nation from '../data/national';
import url from '../assets/url';
var ngayht = (new Date().getDate()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear());
export default class CaNhanCapNhat extends Component {
    constructor (props) {
        super(props)
        gioitinh = ['Nam', 'Nữ'];
        this.state = {
            selected: 'nam',
            nselected: 'Afghanistan',
            isVisible: false,
            chonngay: moment(this.props.navigation.state.params.data.birthday).format('DD-MM-YYYY'),
            data : this.props.navigation.state.params.data,
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
        for(let item of nation){
            items.push(<Picker.Item key={item} label = {item} value = {item}/>)
        }
        return items;
    }

    handlePiker = (date) => {
        this.setState({
            isVisible: false,
            chonngay: moment(date).format('DD-MM-YYYY'),
            data:{...this.state.data, birthday : date }
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

    handleName = (text) => {
      this.setState({data:{...this.state.data, name : text }})
    }

    handleJob = (text) => {
      this.setState({data:{...this.state.data, job : text }})
    }

    handleAddress = (text) => {
      this.setState({data:{...this.state.data, address : text }})
    }

    handlePhone= (text) => {
      this.setState({data:{...this.state.data, phone : text }})
    }

    _params(){
        let data = this.state.data;
        let dt =  AsyncStorage.getItem('data');
        return {
            _id: data._id,
            accountId : data.data._id,
            name : data.name,
            birthday: data.birthday,
            job : data.job,
            gender : data.gender,
            phone : data.phone,
            address : data.address,
            isBanned : data.isBanned,
            rateStar : data.rateStar,
            nation : data.nation,
            linkImage : data.linkImage
        }
    }

    async _onPressCapNhat(){
        try {
            let data = this.state.data;
            let dt = await AsyncStorage.getItem('data');
            await fetch(url+'user/updateUser', {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify(this._params()),
			})
            .then( (response ) => response.json())
            .then( (responseJson) =>{
                this. _capNhatThanhCong();
                // alert(JSON.stringify(responseJson))
            })
		} catch (error) {
            this._capNhatThatBai()
            // alert(error)
		}
    }

    
    _capNhatThanhCong(){
        Alert.alert(
        'THÔNG BÁO',
        'Cập nhật thành công',
        [
            {text: 'OK', onPress: () => this.props.navigation.navigate('CaNhan')},
        ],
        { cancelable: false }
        )
    }

     _capNhatThatBai(){
        alert('Cập nhật thất bại vui lòng kiểm tra lại')
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
                        <TouchableOpacity onPress={() => {
                            // alert(JSON.stringify(this._params()))
                            this._onPressCapNhat()
                        }}>
                            <Icon type='Entypo' name='check' style={styles.iconheader2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.khung}>
                    {/* <KeyboardAvoidingView style={{flex:1}}> */}
                        <ScrollView>
                        <View style={styles.suaanh}>
                            <Image source = {{uri: this.state.data.linkImage}}
                                style={styles.anhdaidien}
                            ></Image>
                            <TouchableOpacity onPress={() => {
                            alert(JSON.stringify(this._params()))
                        }}>
                            <Text style={styles.textchonanh}>Chọn ảnh</Text>
                            </TouchableOpacity>
                        </View>
                        
                    
                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='user' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {this.state.data.name}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                                onChangeText = {this.handleName}
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
                                placeholder = {this.state.data.job}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                                onChangeText = {this.handleJob}
                             ></TextInput>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='Entypo' name='phone' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {this.state.data.phone}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                                onChangeText = {this.handlePhone}
                             ></TextInput>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='transgender' style={styles.iconcombo}/>
                             <Picker style={styles.pikercombo}
                                    selectedValue={this.state.selected}
                                    onValueChange={(value) => this.setState({
                                        selected: value,
                                        data:{...this.state.data, gender : value }
                                        })}
                                    mode="dropdown"
                             >
                            {this.renderGioitinh()}
                             </Picker>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='flag-checkered' style={styles.iconcombo}/>
                             <Picker style={styles.pikercombo}
                                    selectedValue={this.state.data.nation}
                                    onValueChange={(value) => this.setState({
                                        nselected: value,
                                        data:{...this.state.data, nation : value }
                                        })}
                                    mode="dropdown"
                             >
                            {this.renderQuocgia()}
                             </Picker>
                        </View>

                        <View style ={styles.combo}>
                             <Icon type='FontAwesome' name='home' style={styles.iconcombo}/>
                             <TextInput style ={styles.textcombo}
                                placeholder = {this.state.data.address}
                                placeholderTextColor = {'#818181'}
                                underlineColorAndroid= 'rgba(0,0,0,0)'
                                multiline = {true}
                                numberOfLines = {4}
                                onChangeText = {this.handleAddress}
                             ></TextInput>
                        </View>
                        </ScrollView>
                        {/* </KeyboardAvoidingView> */}
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            
            </View>
        );
    }
}