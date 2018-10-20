import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { Color } from '../../assets/color';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { eventName: '',
                        admin: '',
                        status: '',
                        time: '',
                        date: '',
                        location: '',
                        member: '',
                        eventType: '' };
    }

    // componentDidMount = () => {

    // }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/image/y_r1.jpg')} resizeMode='stretch'/>
                <View style={styles.subContainer}>
                    <View style={styles.leftSubContainer}>
                        <Text style={styles.leftSubContainerContent}>{this.props.time}</Text>
                        <Text style={styles.leftSubContainerContent}>{this.props.date}</Text>
                    </View>
                    <View style={styles.rightSubContainer}>
                        <TouchableOpacity onPress={this.props.openDetailScreen}>
                            <Text style={styles.title}>{this.props.eventName}</Text>
                        </TouchableOpacity>
                        <Text style={styles.subtitle_2}>{this.props.location}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        borderBottomColor: '#bdbdbd',
        justifyContent: 'center'
    },
    subContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Color._200,
        paddingVertical: 16
    },
    leftSubContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rightSubContainer: {
        flex: 2.3,
        flexDirection: 'column',
        paddingHorizontal: 16
    },
    image: {
        height: 194,
        width: Dimensions.get('screen').width - 32,
        borderRadius: 10
    },
    title: {
        fontSize: 17,
        includeFontPadding: false
    },
    subtitle_1: {
        fontSize: 15,
        marginTop: 16,
        color: '#BDBDBD',
        includeFontPadding: false
    },
    subtitle_2: {
        fontSize: 13,
        marginTop: 16,
        color: 'black',
        includeFontPadding: false
    },
    leftSubContainerContent: {
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingHorizontal: 16,
        fontSize: 12,
        color: 'black'
    }
});

export { Card };