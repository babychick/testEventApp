import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import url from '../../assets/url';
import { Color } from '../../assets/color';
import { AppBar } from '../common/appBar';

class AttendeeList extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        this.state = {
            attendeeList: [],
            eventId: data.eventId,
            adminId: data.adminId,
            hostScreen: data.hostScreen
        }
    }

    async componentWillMount() {
        try {
            fetch(url + 'attendee/findAttendees', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                    adminId: this.state.adminId,
                    eventId: this.state.eventId
                })
            })
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    attendeeList: dataJson
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar title='Danh sách tham gia'
                    name={this.state.iconName}
                    goBack={() => this.props.navigation.navigate(this.state.hostScreen)}
                ></AppBar>

                <ScrollView>
                    {
                        this.state.attendeeList.map((member, index) => (
                            <View style={{ flexDirection: 'column', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor: Color._100 }} key={index}>
                                <View style={styles.topContainer}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>{member.userName}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    topContainer: {
        padding: 8
    }
})

export { AttendeeList };