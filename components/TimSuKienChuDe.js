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
const styles = AppStyle.StyleTimSuKienChuDe;
export default class TimSuKienChuDe extends Component {
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
                    'Triễn lãm'];
        this.state = {
            selected: 'Ẩm thực',
            isVisible: false,
        };
    }

    renderchude(){
        items=[];
        for(let item of chude){
            items.push(<Picker.Item key={item} label = {item} value = {item}/>)
        }
        return items;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.combo}>
                    <View style={styles.pikercombo}>
                        <Picker 
                            selectedValue={this.state.selected}
                            onValueChange={(value) => this.setState({selected: value})}
                            mode="dropdown">
                            {this.renderchude()}
                        </Picker>
                    </View>
                    
                    
                    <TouchableOpacity>
                        <View style={styles.viewtext}>
                            <Text style={styles.textcombo}>Tìm sự kiện</Text>
                        </View> 
                    </TouchableOpacity>
                </View>

                <View style={styles.viewsukien}>
                    {/* <Text style={styles.title}>Gợi ý</Text> */}
                    <FlatList 
                    data = {EventData}
                    renderItem = {({item, index}) =>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('TimSuKienChiTietChuDe');
                    }}>
                        <EventListItem item={item} index={index}/>
                    </TouchableOpacity>
                    }
                    ></FlatList>
                </View>
            </View>
        );
    }
}

class EventListItem extends Component{
    render(){
        return(       
            <View style={styles.viewlist}>
                <Image source = {{uri: this.props.item.linkanh}}
                    style = {styles.listImage}>
                </Image>
                <View style={styles.viewInfo}>
                    <Text style = {styles.listTextTitle}>{ this.props.item.tensk }</Text>
                    <Text style = {styles.listText}>{ this.props.item.sdate }</Text>
                    <Text style = {styles.listText}>{ this.props.item.diachi }</Text>
                </View>
            </View>
            
        );
    }
}