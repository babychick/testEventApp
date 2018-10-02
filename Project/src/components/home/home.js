import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '../common/card';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList : [],
            
        }
    }

    componentDidMount () {
        try {
            fetch('http://192.168.1.23:3000/event/findAllEvent')
                .then( data => data.json())
                .then( dataJson => {
                    this.setState({
                        eventList: dataJson
                    });
                })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={this.container}>
                <View>
                    
                </View>
                <ScrollView>
                    {
                        this.state.eventList.map((item, key) => (
                            <Card openDetailScreen={() => {this.props.navigation.navigate('DetailEventScreen', {eventId: item._id})}}
                                    eventName={item.eventName}
                                    status={item.status}
                                    time={item.time}
                                    date={item.date}
                                    admin={item.admin}
                                    location={item.location}
                                    key={key}></Card>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

export { Home };