import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

class FloatButton extends React.Component {

    onPress
    render() {
        return (
            <TouchableOpacity style={[this.props.style]} onPress={this.props.onPressNew}>
                <View style={styles.container}>
                    <Icon style={styles.icon} name='add'></Icon>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal' 
    },
    icon: {
        width: 24,
        height: 24,
        color: '#ffffff'
    }
});

export { FloatButton };