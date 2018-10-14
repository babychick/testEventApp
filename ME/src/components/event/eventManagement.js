import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatButton } from '../common/floatButton';

class EventManager extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            data: {
                hostScreen: 'EventManagerScreen',
                userId: '123456789',
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FloatButton style={{position: 'absolute', right: 16, bottom: 16}}
                onNewEvent={() => {this.props.navigation.navigate('NewEventScreen', {data: this.state.data})}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },

})

export { EventManager };