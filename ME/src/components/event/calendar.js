import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Color } from '../../assets/color';
import moment from 'moment';
import url from '../../assets/url';
import { Item } from '../common/item';
import { CalendarItem } from '../common/calendarItem';

var startDate = moment().format('DD-MM-YYYY');

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            backColorItem: null
        }
    }

    componentDidMount() {
        fetch( url + 'event/findByDate/' + startDate + 'T17:00:00.000Z')
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson
                })
            })
            .catch(err => {
                // alert('Không tìm thấy sự kiện!')
            })
    }


   fetchByDate = async (date) => {
        await fetch( url + 'event/findByDate/' + date.dateString + 'T17:00:00.000Z')
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson
                })
                console.log(this.state.eventList);
            })
            .catch(err => {
                alert('Không tìm thấy sự kiện!')
            })
        console.log(date.dateString);
        console.log(url + 'event/findByDate/' + date.dateString + 'T17:00:00.000Z');
        console.log(this.state.eventList);
    }

    render() {
        return (
            <View style={styles.container}>
                <Calendar theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: Color._600,
                    selectedDayTextColor: Color._600,
                    todayTextColor: Color._600,
                    arrowColor: Color._600,
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                    textMonthFontWeight: 'bold',
                    }}
                    onDayPress={this.fetchByDate}/>

                <Text style={styles.subTitle}>Sự kiện trong ngày</Text>

                <ScrollView style={styles.list}>
                    {
                        this.state.eventList.map((item, key) => {
                            if (key % 2 === 0) {
                            }
                            <CalendarItem start={item.startTime} end={item.endTime} eventName={item.eventName} backgroundColor={Color._50} key={key}/>
                        }

                            
                        )
                    }
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    list: {
        marginTop: 8
    },
    subTitle: {
        fontSize: 14,
        backgroundColor: '#EEEEEE',
        paddingVertical: 8,
        paddingLeft: 16,
        marginTop: 24,
        textAlign: 'center'
    }
})

export { CalendarScreen };