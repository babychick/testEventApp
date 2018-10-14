import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Color } from '../../assets/color';

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

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
                    textMonthFontWeight: 'bold'
                    }}/>

                <View style={styles.searchDate}>

                </View>

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
    searchDate: {

    }
})

export { CalendarScreen };