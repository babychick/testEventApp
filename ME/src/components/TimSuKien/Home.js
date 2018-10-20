import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
    Keyboard,
    FlatList,
    AsyncStorage,
    Image,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import moment from 'moment';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import AppStyle from '../../theme';
const styles = AppStyle.StyleHome;

import url from '../../assets/url';

export default class Home extends Component {
   constructor(props){
        super(props)
        this.state = {
            isVisible: false,
            eventList: [],
            eventList1: [],
            addInfo: true,
            store: {
                _id: '',
                email:''
            },
            refreshing: false,
            page: 1,
            seed: 1
        };
    }
     
    async componentWillMount () {
        await this._getStore()
        await this._isAddInfo()
        try {
            //Nữa đổi hàm này lại thành tìm 10 sự kiện gần nhất
            fetch(url+'event/findAllEvent')
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        eventList: dataJson,
                        refreshing: false
                    });
                })
        } catch (err) {
            console.log(err)
        }
    }

     loadEvent = async()=>{

     }

    _getStore = async()=>{
        try {
            const store = await AsyncStorage.getItem('data');
            this.setState({
                ...this.state,
                store : JSON.parse(store)
                })
        } catch (error) {
            
        }
    }

    renderchude(){
        items=[];
        for(let item of chude){
            items.push(<Picker.Item key={item} label = {item} value = {item}/>)
        }
        return items;
    }

    _isAddInfo(){
        try {
            fetch(url+'account/email/'+this.state.store.email)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        ...this.state,
                        addInfo: dataJson[0].addInfo
                    });
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

    // _handleRefresh = async () =>{
    //     this.setState({
    //         refreshing: true,
    //         page: 1,
    //         seed: this.state.seed + 1,
    //     })
    //     alert('fgdgfd')
    // };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tren}>
                    <View style={styles.header} zIndex={2}>
                        <Text style={styles.textheader}>Trang chủ</Text>
                        {/* <TouchableOpacity onPress={() => {
                            // this.props.navigation.navigate('TimSuKien')
                        }}> */}
                        
                        <MenuProvider>
                        <Menu>
                        <MenuTrigger style={{marginTop: 20}}>
                            <Icon type='Ionicons' name='md-search' style={styles.iconheader2}/>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                            <MenuOption onSelect={() => alert(`Delete`)} >
                                <Text style={{color: 'red'}}>Delete</Text>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                        </MenuOptions>
                        </Menu>
                        </MenuProvider>
                        
                        {/* </TouchableOpacity> */}
                    </View>
                </View>
                {/* <View style={styles.duoi} zIndex={0}>
                    <FlatList 
                    data = {this.state.eventList}
                    renderItem = {({item, index}) =>
                    <TouchableOpacity onPress={() => {
                        // this.props.navigation.navigate('TimSuKienChiTietChuDe',{data:this.state.eventList[index]});
                    }}>
                        
                        <EventListItem item={item} index={index}/>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item._id}
                    // refreshing={this.state.refreshing}
                    // onRefresh = {this._handleRefresh()}
                    ></FlatList>
                </View> */}
                
            </View>
        );
    }
}


class EventListItem extends Component{
    render(){
        var ar = (JSON.stringify(this.props.item.linkImage)).split(',');
        var image = ar[0].substr(1);
        var DayM = moment(this.props.item.date).format('DD-MM');
        var Year = moment(this.props.item.date).format('YYYY');
        return(       
            <View style={styles.viewlist}>
                <Image source = {{uri: image}}
                    style = {styles.listImage}>
                </Image>
                <View style={styles.viewInfo}>
                    <View style = {styles.Date}>
                        <Text style = {styles.textDayM}>{ DayM }</Text>
                        <Text style = {styles.textYear}>{ Year }</Text>
                    </View>
                    <View style = {styles.infor}>
                        <Text style = {styles.listTextTitle}>{this.props.item.eventName }</Text>
                        <Text style = {styles.listText}>{ this.props.item.location }</Text>
                    </View>
                </View>
            </View>
            
        );
    }
}