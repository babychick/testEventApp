import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Color } from '../../assets/color.js';
import url from '../../assets/url';

class Item extends React.Component {
    render() {
        // console.log(this.props.linkImage);
        var ar = (this.props.linkImage).split(',');
        var image = '';
        if(ar.length == 1){
            image = JSON.parse(this.props.linkImage);
        } else {
            image = JSON.parse(ar[0].substr(1));
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.image} source={{uri: url + image}} resizeMode='stretch' />
                    <View style={styles.detail}>
                        <Text style={styles.title}>{this.props.eventName}</Text>
                        <Text style={styles.caption_text}>{this.props.time}</Text>
                        <Text style={styles.caption_text}>{this.props.location}</Text>
                    </View>
                </View>
                    {/* Cancel button */}
                    <TouchableOpacity style={styles.cancelButton} onPress={this.props.onCancel}>
                        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>HỦY</Text>
                    </TouchableOpacity>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width * 0.22 + 32,
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#bfbfbf",
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    image: {
        width: Dimensions.get('window').width * 0.22,
        height: Dimensions.get('window').width * 0.22,
    },
    detail: {
        width: Dimensions.get('window').width - (Dimensions.get('window').width * 0.22 + 48),
        marginLeft: 20,
        borderColor: '#bfbfbf',
        flexDirection: 'column'
    },
    number: {
        width: 24,
        height: 24,
        borderColor: Color._500,
        borderWidth: 1,
        marginLeft: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        includeFontPadding: false
    },
    caption_text: {
        marginTop: 8,
        fontSize: 12,
        includeFontPadding: false,
    },
    cancelButton: {
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderRadius: 5,
        flex: 3.5,
        position: 'absolute',
        top: 14,
        right: 16,
        backgroundColor: '#EF5350'
    }
});

export { Item };