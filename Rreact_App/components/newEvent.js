import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TextBox } from './textBox.js'

class NewEvent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextBox name='home' placeholder='Tên sự kiện'></TextBox>
                <TextBox name='subtitles' placeholder='Chủ đề'></TextBox>
                <View style={{flexDirection: 'column', borderBottomWidth: 1}}>
                    <View style={{flexDirection: 'row', height: 56, paddingBottom: 16, paddingTop: 16}}>
                        <Icon type='material-community' name='clock' iconStyle={{color: 'teal'}}></Icon>
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
                <TextBox type='entypo' name='location-pin' placeholder='Địa điểm'></TextBox>
                <TextBox type='entypo' name='users' placeholder='Số lượng'></TextBox>
                <TextBox name='description' placeholder='Ghi chú / Mô tả'></TextBox>
                <View style={{borderBottomWidth: 1}}>
                    <TouchableOpacity style={{flexDirection: 'row', height: 56, paddingBottom: 16, paddingTop: 16}}>
                        <Icon type='entypo' name='images' iconStyle={{color: 'teal'}}></Icon>
                        <Text style={{fontSize: 16, marginLeft: 20}}>Thêm ảnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16
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