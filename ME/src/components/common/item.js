import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Color } from '../../assets/color.js';

class Item extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <Image style={styles.image} source={{uri: this.props.linkImage}} resizeMode='stretch' />
                    <View style={styles.detail}>
                        <Text style={styles.title}>{this.props.eventName}</Text>
                        <Text style={styles.caption_text}>{this.props.time}</Text>
                        <Text style={styles.caption_text}>{this.props.location}</Text>
                    </View>
                    {/* Cancel button */}
                    <TouchableOpacity style={{position: 'absolute', top: 16, right: 16, backgroundColor: '#EF5350'}} onPress={this.props.onCancel}>
                        <Text style={{textAlign: 'center'}}>HỦY</Text>
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
    }
});

export { Item };