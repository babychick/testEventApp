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
import Modal from 'react-native-modalbox';
const screen = Dimensions.get('window');

export default class CapNhatModal extends Component {
    constructor(props) {
        super(props);
    }
    showModal(){
        this.refs.CapNhatModal.open();
    }
    
    render() {
        return (
            <Modal 
            ref = {'CapNhatModal'}
            style={{
                justifyContent : 'center',
                borderRadius: 20,
                shadowRadius: 10, 
                width: screen.width - 80,
                height: 250
                }}
            position = 'center'
            backdrop = {true}
            onClosed= {() => {
                
            }}
            >
                <Text
                style = {{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#EF6C00',
                }}
                >Get password success</Text>
                <Text
                style = {{
                    marginTop: 30,
                    fontSize: 16,
                    textAlign: 'center',
                    marginHorizontal: 30
                }}
                >You need to confirm your email before sign in</Text>

                <TouchableOpacity  
                    onPress={() => {
                        this.refs.ForgotModal.close();
                        // this.refs.SignUpModal.navigation.navigate('SignIn');
                    }}
                    style={{
                        width : screen.width - 180,
                        height : 45,
                        borderRadius: 25,
                        backgroundColor : '#EF6C00',
                        justifyContent: 'center',
                        marginTop: 30,
                        marginHorizontal: 50
                    }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 16,
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>OK</Text>
                </TouchableOpacity>
            </Modal>
        )
    }
}