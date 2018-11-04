import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatButton } from '../common/floatButton';
import { Item } from 'native-base';
import Dialog  from 'react-native-popup-dialog';
import { PopupList } from './popupList';
import url from '../../assets/url';

class EventManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            eventList: [],
            showPopup: false,
            adminId: null,
            eventId: null,
            data: {
                hostScreen: 'EventManagerScreen',
                userId: '',
            }
        }
    }

    async componentWillMount() {
        await fetch(url + "event/findByAdmin/" + this.state.userId)
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson
                })
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <FloatButton style={{ position: 'absolute', right: 16, bottom: 16 }}
                    onNewEvent={() => { this.props.navigation.navigate('NewEventScreen', { data: this.state.data }) }} />
                <View>
                    {
                        this.state.eventList.map((item, key) => (
                            <View style={{ flexDirection: 'row', flex: 1, height: 72, borderBottomWidth: 1, borderBottomColor: Color._100 }} key={key}>
                                <View style={styles.topContainer}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.eventName}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DetailEventScreen', { data: this.state.data })}>
                                        <Text style={{ color: '#FFFFFF' }}>CHI TIẾT</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={() => { this.setState({ showPopup: true, adminId: item.adminId, eventId: item.eventId })}}>
                                        <Text style={{ color: '#FFFFFF' }}>DÁNH SÁCH</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </View>
                {/* <Dialog visible={this.state.showPopup}>
                    <View style = {{flex: 1}}>
                        <PopupList adminId={this.state.adminId} eventId={this.state.eventId}/>
                    </View>
                </Dialog> */}
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

export { EventManager };