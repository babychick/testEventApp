import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { TextBox } from '../common/textBox';
import { AppBar } from '../common/appBar';

class NewEvent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppBar title="Tạo sự kiện"></AppBar>
                <View style={{paddingHorizontal: 16}}>
                    <TextBox type='MaterialIcons' name='home' placeholder='Tên sự kiện'></TextBox>
                    <TextBox type='MaterialIcons' name='subtitles' placeholder='Chủ đề'></TextBox>
                    <View style={{flexDirection: 'column', borderBottomWidth: 1}}>
                        <View style={{flexDirection: 'row', height: 56, paddingBottom: 16, paddingTop: 16}}>
                            <Icon type='EvilIcons' name='clock' style={{color: 'teal'}}></Icon>
                            <Text style={{fontSize: 16, marginLeft: 20}}>Thời gian</Text>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={{color: '#bfbfbf', fontSize: 16, width: 80}}>Bắt đầu</Text>
                            <TextInput style={styles.date} value='19/09/2018' underlineColorAndroid='rgba(0,0,0,0)'></TextInput>
                            <TextInput style={styles.time} value='22:30' underlineColorAndroid='rgba(0,0,0,0)'></TextInput>
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={{color: '#bfbfbf', fontSize: 16, width: 80}}>Kết thúc</Text>
                            <TextInput style={styles.date} value='20/09/2018' underlineColorAndroid='rgba(0,0,0,0)'></TextInput>
                            <TextInput style={styles.time} value='22:30' underlineColorAndroid='rgba(0,0,0,0)'></TextInput>
                        </View>
                    </View>                
                    <TextBox type='Entypo' name='location-pin' placeholder='Địa điểm'></TextBox>
                    <TextBox type='FontAwesome' name='user' placeholder='Số lượng'></TextBox>
                    <TextBox type='MaterialIcons' name='description' placeholder='Ghi chú / Mô tả'></TextBox>
                    <View style={{borderBottomWidth: 1}}>
                        <TouchableOpacity style={{flexDirection: 'row', height: 56, paddingBottom: 16, paddingTop: 16}}>
                            <Icon type='Entypo' name='images' style={{color: 'teal'}}></Icon>
                            <Text style={{fontSize: 16, marginLeft: 20}}>Thêm ảnh</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    subContainer: {
        height: 56,
        flexDirection: 'row',
        paddingLeft: 44,
        paddingTop: 16,
        paddingBottom: 16
    },
    date: {
        position: 'absolute',
        fontSize: 16,
        marginLeft: 48,
        marginTop: 12,
        right: 150,
    },
    time: {
        position: 'absolute',
        fontSize: 16,
        marginTop: 12,
        right: 16,
    }
});

export { NewEvent };