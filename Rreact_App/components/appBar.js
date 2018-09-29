import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

class AppBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Icon iconStyle={styles.icon} name='arrow-back'/>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity style={styles.additionButton}>
                    <Text style={styles.content}>{this.props.content}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 56,
        flexDirection: 'row',
        backgroundColor: 'teal',
    },
    icon: {
        width: 56,
        height: 56,
        padding: 16,
        color: '#fff'
    },
    title: {
        padding: 16,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        includeFontPadding: false
    },
    additionButton: {
        position: 'absolute',
        right: 0,
        padding: 16,
    },
    content: {
        fontSize: 20,
        color: '#fff',
        includeFontPadding: false
    }
});

export { AppBar };