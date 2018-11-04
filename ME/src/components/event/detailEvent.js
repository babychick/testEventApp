import React from 'react';
import { AsyncStorage, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppBar } from '../common/appBar';
import { Color } from '../../assets/color';
import url from '../../assets/url';
import moment from 'moment';

class DetailEvent extends React.Component {

    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        let storage = AsyncStorage.getItem('data');
        this.state = {
            status: null,
            hostScreen: data.hostScreen,
            event: data.item
        }
    }

    componentDidMount() {
        let today = moment().format('YYYY-MM-DD');
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
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar title='Thông tin sự kiện' goBack={() => this.props.navigation.navigate(this.state.hostScreen)}></AppBar>

                <ScrollView>
                    <View>
                        <Image style={styles.image} source={require('../../assets/image/y_r1.jpg')} resizeMode='stretch' />
                        {/* {this.renderRegistryButton} */}
                    </View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={styles.heading}>{this.state.event.eventName}</Text>

                        <Text style={styles.caption}>{this.state.event.eventType}</Text>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Được tổ chức bởi</Text>
                            <TouchableOpacity>
                                <Text style={[styles.content, { marginTop: 5 }]}>{this.props.admin}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.subContainer}>

                            <Text style={styles.subHeading}>Thời gian</Text>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{ height: 24, fontSize: 14, width: 80 }}>Bắt đầu</Text>
                                <Text style={styles.content}>{this.state.event.startTime}</Text>
                                <Text style={[styles.content, { marginLeft: 32 }]}>{this.state.event.startDate}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{ height: 24, fontSize: 14, width: 80 }}>Kết thúc</Text>
                                <Text style={styles.content}>{this.state.event.endTime}</Text>
                                <Text style={[styles.content, { marginLeft: 32 }]}>{this.state.event.endDate}</Text>
                            </View>

                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.subHeading}>Địa điểm</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>{this.state.event.location}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Thành viên</Text>
                            <Text style={[styles.content, { marginTop: 5 }]}>{this.state.event.member}</Text>
                        </View>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Trạng thái</Text>
                            <Text style={[styles.content, { marginTop: 5 }]}>{this.state.status}</Text>
                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.subHeading}>Mô tả</Text>
                            <Text style={{ fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>{this.state.event.description}</Text>
                        </View>
                    </View>
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
    subContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        paddingVertical: 16
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
    },
    heading: {
        height: 44,
        fontSize: 21,
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
        includeFontPadding: false
    },
    subHeading: {
        height: 32,
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    caption: {
        height: 24,
        fontSize: 14,
        textAlignVertical: 'center',
    },
    content: {
        height: 24,
        fontSize: 14,
        marginLeft: 16,
        textAlignVertical: 'center'
    },
    registerButton: {
        fontSize: 14,
        height: 36,
        paddingHorizontal: 16,
        color: '#ffffff',
        textAlignVertical: 'center',
        backgroundColor: Color._700,
        borderRadius: 3,
    }
});

export { DetailEvent };