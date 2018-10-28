import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Color } from '../../assets/color';
import moment from 'moment';
import url from '../../assets/url';
import { Item } from '../common/item';
import { CalendarItem } from '../common/calendarItem';

let today = moment().format('DD-MM-YYYY');

LocaleConfig.locales['vi'] = {
    monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
    monthNamesShort: ['Tháng 1.', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
};

LocaleConfig.defaultLocale = 'vi';

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: today,
            eventList: [],
            allEvent: [],
            allDateEvent: [],
            myAllDateEvent: null,
            data: {
                event: null,
            },
            hostScreen: 'CalendarScreen'
        }
    }

    async componentDidMount() {
        await fetch(url + 'event/findAllEvent')
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    allEvent: dataJson
                });
            })
            .catch(err => {
                alert('Fetch failed...' + err);
                console.log(err);
            })
        let arr = {};
        this.state.allEvent.map((item, key) => {
            console.log(item.startDate + ' ' + today);
            let convertedDate = moment(item.startDate, 'DD-MM-YYYY', false).format('YYYY-MM-DD');
            console.log(convertedDate);
            if (item.startDate == today) {
                arr[convertedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#FFFFFF',
                        },
                        text: {
                            color: '#26A69A',
                            fontWeight: 'bold'
                        },
                    },
                }
            } else {
                arr[convertedDate] = {
                    customStyles: {
                        container: {
                            backgroundColor: '#009688',
                        },
                        text: {
                            color: '#FFFFFF'
                        },
                    },
                }
            }
        })

        this.setState({
            myAllDateEvent: arr,
        })

        console.log(this.state.myAllDateEvent);
        await fetch(url + 'event/findByDate/' + this.state.currentDate)
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
        await fetch(url + 'event/findByDate/' + moment(date.dateString).format('DD-MM-YYYY'))
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                    eventList: dataJson
                })
            })
            .catch(err => {
                alert('Không tìm thấy sự kiện!')
            })
        this.setState({
            currentDate: date
        })
    }

    onSwitch = (value) => {
        if (value) {
            this.setState({
                renderManagePage: false
            })
        } else {
            this.setState({
                renderManagePage: true
            })
        }
    }

    onRenderContent = () => {
        if (this.state.renderManagePage) {

        } else {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.switchContainer}>
                    <Switch onValueChange={this.onSwitch}
                        value={this.state.renderManagePage}
                        onTintColor='#FFFFFF' />
                </View>
                <View>
                    <Calendar theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: Color._700,
                        todayTextColor: Color._400,
                        arrowColor: Color._600,
                        textDayFontSize: 17,
                        textMonthFontSize: 17,
                        textDayHeaderFontSize: 17,
                        textMonthFontWeight: 'bold',
                    }}
                        markedDates={this.state.myAllDateEvent}
                        markingType={'custom'}
                        onDayPress={this.fetchByDate} />

                    <Text style={styles.subTitle}>Sự kiện trong ngày</Text>

                    <ScrollView style={styles.list}>
                        {
                            this.state.eventList.map((item, key) => (
                                <CalendarItem start={item.startTime}
                                    end={item.endTime}
                                    eventName={item.eventName}
                                    key={key}
                                    index={key}
                                    onPress={() => { this.props.navigation.navigate('DetailEventScreen', { data: { item: item, hostScreen: 'CalendarScreen' } }) }} />
                            ))
                        }
                    </ScrollView>
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