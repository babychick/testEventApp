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
    AsyncStorage,
    ScrollView  } from 'react-native';
import {Icon} from 'native-base';
import { Constants, Location, Permissions } from 'expo';
import EventData from '../../data/EventData';
import AppStyle from '../../theme';
import url from '../../assets/url';
const styles = AppStyle.StyleTimSuKien;
import moment from 'moment';

var now = (new Date().getDate()) + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getFullYear());
let today = moment().format('DD-MM-YYYY');
let hourday = moment().format('HH:mm');
export default class TimSuKien extends Component {
    constructor (props) {
        super(props)
        chude = ['Ẩm thực',
                    'Lễ hội',
                    'Dân gian',
                    'Âm nhạc',
                    'Nhạc hội',
                    'Biểu diễn',
                    'Sách',
                    'Thời trang',
                    'Triễn lãm',
                    'Huong Nghiep',
                    'Giai tri',
                    'Van hoa, Giao duc'];
        this.state = {
            selected: 'Ẩm thực',
            isVisible: false,
            eventList: [],
            eventList1: [],
            isFetching: false,
            addInfo: true,
            store: {
                _id: '',
                email:''
            },
            location:{
                lat:'',
                log: ''
            }, 
            isLocation : false
        };
    }

    

    // _getLocation = async()=>{
    //     let location = Location.getCurrentPositionAsync({});
    //     alert(JSON.stringify(location))
    //     this.setState({
    //         // location:{
    //         //     lat: location.coords.latitude,
    //         //     long: location.coords.longitude,
    //         // }
    //     });
    // }

    // _getLocation2 = async() =>{
    //     navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         this.setState({
    //             location:{
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude,
    //         }
    //         });
    //         alert(JSON.stringify(position))
    //     });
    // }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({ isLocation : true });
        } else {
            this.setState({ isLocation : false });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            location:{
                lat: location.coords.latitude,
                long: location.coords.longitude,
            },
            isLocation : true 
        });
        // alert(JSON.stringify(location))
    };

    // componentDidMount() {
    //     this._getLocationAsync();
    // }

    

    async componentWillMount () {
        
        await this._getStore()
        await this._isAddInfo()
        await this._getEvent()
        await this._getLocationAsync();
        
        // await this._getLocation()

    }

    _getEvent= async()=>{
        try {
            fetch(url+'event/findAllEvent')
                .then( data => data.json())
                .then( dataJson => {
                    var a = [];
                    var count = 0;
                    let td =  moment(today, 'DD-MM-YYYY', false);
                    let hd =  moment(hourday, 'HH:mm', false);
                    for(var i = dataJson.length - 1; i >= 0; i--){
                        let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                        let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                        // console.log(convertedDate + '')
                        // if(moment(today).isBefore(convertedDate) && count < 10){
                        //     a.push(dataJson[i]);
                        //     count++;
                        // }
                        if(td.diff(convertedDate, 'days') < 0 && count < 10){
                            a.push(dataJson[i]);
                            count++;
                        }
                        if(td.diff(convertedDate, 'days') == 0 && count < 10){
                            if (hd.diff(convertedTime, 'hours') < 0) {
                                a.push(dataJson[i]);
                                count++;
                            }
                        }
                    }
                    this.setState({
                        eventList: a,
                        isFetching: false
                    });
                })
        } catch (err) {
            console.log(err)
        }
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

    _getStore = async()=>{
        try {
            const store = await AsyncStorage.getItem('data');
            this.setState({
                ...this.state,
                store : JSON.parse(store)
            })
            // alert(store)
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

    async findEvent(){
        try {
            await fetch(url+'event/findByKeyValue', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({eventType: this.state.selected}),
			})
            .then( data => data.json())
                .then( dataJson => {
                    var a = [];
                    let td =  moment(today, 'DD-MM-YYYY', false);
                    let hd =  moment(hourday, 'HH:mm', false);
                    for(var i = dataJson.length; i > 0; i--){
                        let convertedDate = moment(dataJson[i].startDate, 'DD-MM-YYYY', false);
                        let convertedTime = moment(dataJson[i].startTime, 'HH:mm', false);
                        // if(moment(today).isBefore(convertedDate)){
                        //     a.push(dataJson[i]);
                        // }
                        if(td.diff(convertedDate, 'days') < 0 ){
                            a.push(dataJson[i]);
                        }
                        if(td.diff(convertedDate, 'days') == 0){
                            if (hd.diff(convertedTime, 'hours') < 0) {
                                a.push(dataJson[i]);
                            }
                        }
                    }
                    this.setState({
                        eventList: a
                    });
                })
		} catch (error) {
            alert(error);
		}
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this._getEvent() });
    }

    _isUpInfo = async()=>{
        try {
            fetch(url+'account/email/'+this.state.store.email)
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        ...this.state,
                        addInfo: dataJson[0].addInfo
                    });
                    if(dataJson[0].addInfo == true){
                         this._getEvent()
                    }else{
                        this.props.navigation.navigate('CaNhan')
                    }
                   
                })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if( this.state.addInfo == false){
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.tenheader}>
                            <Text style={styles.ten}>Tìm sự kiện</Text>
                        </View>
                    </View> 
                    <View style={styles.viewtexttt}>
                        <Text style={styles.texttt}>Cập nhật thông tin?</Text>
                        <View style={styles.viewbuttontt}>
                            <TouchableOpacity onPress={() => 
                                this._isUpInfo()
                            }>
                                <View style={styles.texticon}>
                                    <Text style={styles.textbuttontt}>Xác nhận</Text>
                                    {/* <Icon type='Feather' name='corner-down-right' style={styles.iconbuttontt}/> */}
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            );
        } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.tenheader}>
                        <Text style={styles.ten}>Tìm sự kiện</Text>
                    </View>
                    {/* <View> */}
                        <TouchableOpacity onPress={() => {
                            // alert(JSON.stringify(this.state.addInfo))
                            this.props.navigation.navigate('TimSuKienMap',{location: this.state.location, isLocation: this.state.isLocation})
                        }}>
                            <Icon type='Foundation' name='map' style={styles.icon}/>
                        </TouchableOpacity>
                    {/* </View> */}
                </View> 
                 <View style={styles.combo}>
                    <View style={styles.pikercombo}>
                        <Picker 
                            selectedValue={this.state.selected}
                            onValueChange={(value) => this.setState({selected: value})}
                            mode="dropdown">
                            {this.renderchude()}
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={() => {
                            this.findEvent()
                            // alert(JSON.stringify(this.state.eventList))
                        }}>
                        <View style={styles.viewtext}>
                            <Text style={styles.textcombo}>Tìm sự kiện</Text>
                        </View> 
                    </TouchableOpacity>
                </View>

                <View style={styles.viewsukien}>
                    {/* <Text style={styles.title}>Gợi ý</Text> */}
                    <FlatList 
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}    
                    data = {this.state.eventList}
                    renderItem = {({item, index}) =>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('TimSuKienChiTietChuDe',{data:this.state.eventList[index], location: this.state.location, screen: 0, isLocation: this.state.isLocation});
                    }}>
                        
                        <EventListItem item={item} index={index}/>
                    </TouchableOpacity>
                    }
                    keyExtractor={item => item._id}
                    ></FlatList>
                </View>
            </View>
        );
        }
    }
}

class EventListItem extends Component{
    render(){
        var ar = (this.props.item.linkImage).split(',');
        var image = '';
        if(ar.length == 1){
            image = JSON.parse(this.props.item.linkImage);
        } else {
            image = JSON.parse(ar[0].substr(1));
        }
        return(       
            <View style={styles.viewlist}>
                <Image source = {{uri:url + image}}
                    style = {styles.listImage}>
                </Image>
                <View style={styles.viewInfo}>
                    <Text style = {styles.listTextTitle}>{this.props.item.eventName }</Text>
                    <Text style = {styles.listText}>{ this.props.item.startTime + ' ' + this.props.item.startDate}</Text>
                    <Text style = {styles.listText}>{ this.props.item.location }</Text>
                </View>
            </View>
            
        );
    }
}