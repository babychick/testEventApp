import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
    Keyboard,
    Dimensions  } from 'react-native';

export default class SuKien extends Component {
    static navigationOptions = {
        title: 'Event Detail',
        headerStyle: {
            backgroundColor: '#EF6C00',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
                <Text style={{color: '#FFFFFF'}}>Sự kiện tương tác</Text>
            </View>
        );
    }
}