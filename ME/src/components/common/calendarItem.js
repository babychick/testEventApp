import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Color } from '../../assets/color';

class CalendarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: null
        }
    }

    componentDidMount() {
        if (this.props.index % 2 === 0) {
            this.setState({
                backgroundColor: '#E0F2F1'
            })
        } else {
            this.setState({
                backgroundColor: '#fff'
            })
        }
    }

    render() {
        return (
            <TouchableOpacity style={[styles.container, {backgroundColor: this.state.backgroundColor}]}
                                onPress={this.props.onPress}>
                {/* Left */}
                <View style={styles.leftContainer}>
                    <Text style={styles.time}>{this.props.start}</Text>
                    <Text style={styles.time}>{this.props.end}</Text>
                </View>
                {/* Right */}
                <View style={styles.rightContainer}>
                    <Text style={styles.mainText} numberOfLines = {1}>{this.props.eventName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: Color._50
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    rightContainer: {
        flex: 3.5,
        flexDirection: 'column',
        paddingHorizontal: 16,
        borderLeftWidth: 1,
        borderColor: Color._300
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingHorizontal: 16
    },
    mainText: {
        height: 42,
        fontSize: 18,
        textAlignVertical: 'center'
    }
})

export { CalendarItem };