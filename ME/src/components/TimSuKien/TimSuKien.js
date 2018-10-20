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
import EventData from '../../data/EventData';
import AppStyle from '../../theme';
import url from '../../assets/url'
const styles = AppStyle.StyleTimSuKien;

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
            }
        };
    }

    

    async componentWillMount () {
        await this._getStore()
        await this._isAddInfo()
        await this._getEvent()
    }

    _getEvent= async()=>{
        try {
            fetch(url+'event/findAllEvent')
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        eventList: dataJson,
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
            alert(store)
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
                    this.setState({
                        eventList: dataJson
                    });
                })
		} catch (error) {
            alert(error);
		}
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this._getEvent() });
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
                        <Text style={styles.texttt}>Bạn chưa cập nhật thông tin</Text>
                        <View style={styles.viewbuttontt}>
                            <TouchableOpacity onPress={() => 
                                this.props.navigation.navigate('CaNhan')
                            }>
                                <View style={styles.texticon}>
                                    <Text style={styles.textbuttontt}>Cập nhật thông tin</Text>
                                    <Icon type='Feather' name='corner-down-right' style={styles.iconbuttontt}/>
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
                            this.props.navigation.navigate('TimSuKienMap')
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
                        this.props.navigation.navigate('TimSuKienChiTietChuDe',{data:this.state.eventList[index]});
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
        var ar = (JSON.stringify(this.props.item.linkImage)).split(',');
        var image = ar[0].substr(1);
        return(       
            <View style={styles.viewlist}>
                <Image source = {{uri: image}}
                    style = {styles.listImage}>
                </Image>
                <View style={styles.viewInfo}>
                    <Text style = {styles.listTextTitle}>{this.props.item.eventName }</Text>
                    <Text style = {styles.listText}>{ this.props.item.date }</Text>
                    <Text style = {styles.listText}>{ this.props.item.location }</Text>
                </View>
            </View>
            
        );
    }
}