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

export default class QuanTri extends Component {
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ffffff'}}>
                <Text style={{color: '#000000'}}>Quản trị</Text>
            </View>
        );
    }
}