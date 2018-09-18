import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

class Item extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}></View>
                <View style={styles.detail}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.caption_text}>{this.props.time}</Text>
                    <Text style={styles.caption_text}>{this.props.location}</Text>
                </View>
                {/* <Text style={styles.number}></Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 88,
        paddingTop: 16,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    image: {
        width: 100,
        height: 56,
        backgroundColor: 'red'
    },
    detail: {
        width: Dimensions.get('screen').width - 120,
        height: 68,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderColor: '#bfbfbf'
    },
    number: {
        width: 24,
        height: 24,
        borderColor: 'teal',
        borderWidth: 1,
        marginLeft: 16
    },
    title: {
        fontSize: 16,
        marginTop: -3,
        fontWeight: 'bold',
        includeFontPadding: false
    },
    caption_text: {
        height: 20,
        fontSize: 12,
        includeFontPadding: false,
        textAlignVertical: 'bottom'
    }
});

export { Item };