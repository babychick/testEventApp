import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

class TextBox extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon iconStyle={styles.icon} type={this.props.type} name={this.props.name}></Icon>
                <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.text} value={this.props.value} placeholder={this.props.placeholder}></TextInput>
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
        width: 24,
        height: 24,
        color: 'teal',
        justifyContent: 'center'
    },
    text: {
        width: Dimensions.get('screen').width - 76,
        height: 24,
        marginLeft: 20,
        fontSize: 16,
        color: '#000'
    }
});

export { TextBox };