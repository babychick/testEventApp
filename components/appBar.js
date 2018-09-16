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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 56,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection: 'row',
        backgroundColor: 'teal'
    },
    icon: {
        marginLeft: 16,
        width: 24,
        height: 24,
        color: '#fff'
    },
    title: {
        marginLeft: 32,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        includeFontPadding: false
    }
});

export { AppBar };