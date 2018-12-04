import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Color } from '../../assets/color';

class PopupList extends React.Component {
    constructor(props) {
        super(props);
        // let data = this.props.navigation.state.params.data;
        this.state = {
            // adminId: data.adminId,
            // eventId: data.eventId,
            // hostScreen: data.hostScreen,
            attendeeList: null
        }
    }

    async componentWillMount() {
        try {
            await fetch( url + 'registrant/findRegistrant', {
                methdo: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    adminId: this.props.adminId,
                    eventId: this.props.eventId
                })
            })
                .then(data => data.json())
                .then(dataJson => {
                    this.setState({
                        attendeeList: dataJson
                    })
                })
            }
        catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <ScrollView>
                {
                    this.state.attendeeList.map((item, key) => (
                        <View style={{flexDirection: 'row', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor:  Color._100}}>
                            <View style={styles.topContainer}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.userName}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                                <TouchableOpacity style={[styles.button, {backgroundColor: '#EF5350'}]}>
                                    <Text style={{color: '#FFFFFF'}}>CHẤP NHẬN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, {backgroundColor: Color._500}]}>
                                    <Text style={{color: '#FFFFFF'}}>TỪ CHỐI</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        height: 40,
        padding: 8
    },
    bottomContainer: {
        height: 32,
        paddingBottom: 8,
        paddingRight: 8
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 4
    }
})