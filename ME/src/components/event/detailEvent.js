import React from 'react';
import { AsyncStorage, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppBar } from '../common/appBar';
import { Color } from '../../assets/color';
import url from '../../assets/url';
import moment from 'moment';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import { InforEvent } from './inforEvent';
// import { ReviewEvent } from './reviewEvent';

// const tabNavigation = createMaterialTopTabNavigator({
//     InforEventScreen: {
//         screen: InforEvent,
//         navigationOptions: {
//             tabBarLabel: 'CHI TIẾT'
//         }
//     },
//     // ReviewEventScreen: {
//     //     screen: ReviewEvent,
//     //     navigationOptions: {
//     //         tabBarLabel: 'ĐÁNH GIÁ'
//     //     }
//     // }
// }, {
//     initialRouteName: 'InforEventScreen'
// })

class DetailEvent extends React.Component {

    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        let storage = AsyncStorage.getItem('data');
        this.state = {
            status: null,
            hostScreen: data.hostScreen,
            event: data.item,
            iconName: null
        }
    }

    componentDidMount() {
        let today = moment().format('DD-MM-YYYY');
        if (this.state.event.startDate < today) {
            this.setState({
                status: 'Chua dien ra'
            })
        }
        if (this.state.event.startDate === today) {
            this.setState({
                status: 'Dang dien ra'
            })
        }
        if (this.state.event.startDate > today) {
            this.setState({
                status: 'Da ket thuc'
            })
        }
    }

    renderRegistryButton = () => {
        if (this.state.event.adminId !== this.props.storage._id) {
            <TouchableOpacity style={[{ position: 'absolute', right: 16, bottom: 16 }]}>
                <View style={styles.shadowBox}>
                    <Text style={styles.registerButton}>ĐĂNG KÝ</Text>
                </View>
            </TouchableOpacity>
        } else {
            this.setState({
                iconName: 'edit'
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar title='Thông tin sự kiện'
                        name = {this.state.iconName}
                        goBack = {() => this.props.navigation.navigate(this.state.hostScreen)}
                        click = {() => this.props.navigation.navigate('EditEventScreen')}
                        ></AppBar>

                <ScrollView>
                    <View>
                        <Image style={styles.image} source={{uri: url + this.state.event.linkImage[0]}} resizeMode='stretch' />
                        {this.renderRegistryButton}
                    </View>
                    {/* <tabNavigation></tabNavigation> */}
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
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
    },
});

export { DetailEvent };