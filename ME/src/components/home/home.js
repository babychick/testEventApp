import React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Card } from '../common/card';
import { Icon, Col } from 'native-base';
import { Color } from '../../assets/color';
import { FloatButton } from '../common/floatButton';
import url from '../../assets/url';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList : [],
            searchValue: '',
            showClearText: false,
            iconName: null
        }
    }

    componentDidMount () {

        {this.showClearTextButton}
        try {
            fetch(url+'event/findAllEvent')
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

    onSearchEvent = () => {

    }

    onClearText = () => {

    }

    showClearTextButton = () => {

        if (this.state.searchValue === '') {
            this.setState({
                showClearText: false
            })
        }
        else {
            this.setState({
                showClearText: true
            })
        }
            
        if (this.state.showClearText ===  true) {
            this.setState({
                iconName: 'close'
            })
        }
    }

    render() {
        return (
            <View style={this.container}>
                {/* search bar */}
                <View style={styles.searchBarContainer}>
                    <Icon style={styles.searchIcon} name='search'></Icon>
                    <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                                selectionColor='#fff'
                                style={styles.searchText}
                                placeholder='Tìm sự kiện'
                                onChangeText={this.showClearTextButton}></TextInput>
                    <TouchableOpacity onPress={this.onClearText}>
                        <Icon style={styles.closeIcon} name={this.state.iconName}></Icon>
                    </TouchableOpacity>
                </View>

                {/* List Event */}
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
             <FloatButton style = {{position:'absolute', right:16,  bottom: 100, zIndex: 1}}
             onPressNew={() => {
                            this.props.navigation.navigate('NewEvent')
                        }}
             ></FloatButton>

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
    searchBarContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: Color._500,
        alignItems: 'center'
    },
    searchText: {
        width: Dimensions.get('screen').width - 80,
        height: 24,
        paddingHorizontal: 16,
        fontSize: 20,
        color: '#fff'
    },
    searchIcon: {
        color: '#fff'
    },
    closeIcon: {
        color: '#fff'
    }
});

export { Home };