import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'native-base';

class TextBox extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon style={styles.icon} size={24} type={this.props.type} name={this.props.name}></Icon>
                <TextInput keyboardType={this.props.keyboardType} underlineColorAndroid='rgba(0,0,0,0)' style={styles.text} value={this.props.value} placeholder={this.props.placeholder} placeholderTextColor='#959595'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    icon: {
        color: 'teal',
        justifyContent: 'center'
    },
    text: {
        width: Dimensions.get('screen').width - 76,
        height: 24,
        marginLeft: 20,
        fontSize: 18,
        color: '#000'
    }
});

export { TextBox };