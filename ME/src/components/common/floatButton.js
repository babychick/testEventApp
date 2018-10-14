import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

class FloatButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style]} onPress={this.props.onNewEvent}>
                <View style={styles.container}>
                    <Icon style={styles.icon} size={24} name='add'></Icon>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'teal' ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: '#fff'
    }
});

export { FloatButton };