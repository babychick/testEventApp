import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import url from '../../assets/url';
import { Color } from '../../assets/color';
import { AppBar } from '../common/appBar';

class MemberList extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        this.state = {
            memberList: [],
            eventId: data.eventId,
            adminId: data.adminId,
            hostScreen: data.hostScreen
        }
    }

    async componentWillMount() {
        try {
            fetch(url + 'registrant/findAllRegistrant', {
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
                        memberList: dataJson
                    })
                    console.log(this.state.adminId + ' ' + this.state.eventId)
                })
        } catch (err) {
            console.log(err)
        }
    }

    onDeny = (item) => {
        fetch( url + 'registrant/updateStatus', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                _id: item._id,
                adminId: item.adminId,
                adminName: item.adminName,
                eventId: item.eventId,
                eventName: item.eventName,
                userId: item.userId,
                userName: item.userName,
                location: item.location,
                status: 'Từ chối'
            })
        })
    }

    onAccept = (item) => {
        fetch( url + 'registrant/updateStatus', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                _id: item._id,
                adminId: item.adminId,
                adminName: item.adminName,
                eventId: item.eventId,
                eventName: item.eventName,
                userId: item.userId,
                userName: item.userName,
                location: item.location,
                status: 'Chấp nhận'
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar title='Danh sách đăng ký'
                    name={this.state.iconName}
                    goBack={() => this.props.navigation.navigate(this.state.hostScreen)}
                ></AppBar>

                <ScrollView>
                    {
                        this.state.memberList.map((member, index) => (
                            <View style={{ flexDirection: 'column', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor: Color._100 }} key={index}>
                                <View style={styles.topContainer}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 16 }}>{member.userName}</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <View style={styles.bottomContainer}>
                                        <TouchableOpacity style={[styles.button, {backgroundColor: '#EF5350'}]}
                                                            onPress={this.onDeny(member)}>
                                            <Text style={{ color: '#FFFFFF' }}>TỪ CHỐI</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.button, {backgroundColor: Color._500}]}
                                                            onPress={this.onAccept(member)}>
                                            <Text style={{ color: '#FFFFFF' }}>CHẤP NHẬN</Text>
                                        </TouchableOpacity>
                                    </View>
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
    },
    bottomContainer: {
        flexDirection: 'row',
        paddingBottom: 8,
        paddingRight: 8
    },
    button: {
        backgroundColor: Color._300,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        marginLeft: 8
    }
})

export { MemberList };