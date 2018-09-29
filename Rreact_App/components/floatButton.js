import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

class FloatButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style]}>
                <View style={styles.container}>
                    <Icon iconStyle={styles.icon} name='add'></Icon>
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
        backgroundColor: 'teal'
    },
    icon: {
        width: 24,
        height: 24,
        color: '#fff'
    }
});

export { FloatButton };