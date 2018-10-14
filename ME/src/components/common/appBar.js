import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { Color } from '../../assets/color';

class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.navigationIcon} onPress={this.props.goBack}>
                    <Icon type='MaterialIcons' style={{color: '#fff'}} name='arrow-back'/>
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <TouchableOpacity style={styles.actionItem}>
                    <Icon type={this.props.type} style={{color: '#fff'}} name={this.props.name}/>
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
        backgroundColor: Color._600,
    },
    navigationIcon: {
        width: 56,
        height: 56,
        padding: 16,
    },
    title: {
        padding: 16,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        includeFontPadding: false
    },
    actionItem: {
        position: 'absolute',
        right: 0,
        width: 56,
        height: 56,
        padding: 16,
    }
});

export { AppBar };