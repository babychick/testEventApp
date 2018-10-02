import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppBar } from '../common/appBar';
import { Color } from '../../assets/color';

class DetailEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            event: '',
            eventId: this.props.navigation.state.params.eventId
        }
    }

    componentDidMount () {
        fetch('http://192.168.1.23:3000/Event/' + this.state.eventId)
            .then(data => data.json())
            .then(dataJson => {
                this.setState({
                event: dataJson
                });
            })
            .catch(err => console.log("Err: " + err))
    }

    render() {
        return (
            <View style={styles.container}>
                <AppBar title='Thông tin sự kiện' goBack={() => this.props.navigation.navigate('Home')}></AppBar>

                <ScrollView>
                    <View>
                        <Image style={styles.image} source={require('../../assets/image/y_r1.jpg')} resizeMode='stretch'/>
                        <TouchableOpacity style={[{position: 'absolute', right: 16, bottom: 16}]}>
                            <View style={styles.shadowBox}>
                                <Text style={styles.registerButton}>ĐĂNG KÝ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingHorizontal: 16}}>
                        <Text style={styles.heading}>{this.state.event.eventName}</Text>

                        <Text style={styles.caption}>{this.state.event.eventType}</Text>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Được tổ chức bởi</Text>
                            <TouchableOpacity>
                                <Text style={[styles.content, {marginTop: 5}]}>{this.props.admin}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.subContainer}>

                            <Text style={styles.subHeading}>Thời gian</Text>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{height: 24, fontSize: 14, width: 80}}>Bắt đầu</Text>
                                <Text style={styles.content}>{this.props.startTime}</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>{this.props.startDate}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
                                <Text style={{height: 24, fontSize: 14, width: 80}}>Kết thúc</Text>
                                <Text style={styles.content}>{this.props.endTime}</Text>
                                <Text style={[styles.content, {marginLeft: 32}]}>{this.props.endDate}</Text>
                            </View>

                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.subHeading}>Địa điểm</Text>
                            <TouchableOpacity>
                                <Text style={{fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>{this.props.location}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Thành viên</Text>
                            <Text style={[styles.content, {marginTop: 5}]}>{this.props.member}</Text>
                        </View>

                        <View style={[styles.subContainer, { flexDirection: 'row' }]}>
                            <Text style={styles.subHeading}>Trạng thái</Text>
                            <Text style={[styles.content, {marginTop: 5}]}>{this.props.status}</Text>
                        </View>

                        <View style={styles.subContainer}>
                            <Text style={styles.subHeading}>Mô tả</Text>
                            <Text style={{fontSize: 14, marginLeft: 16, textAlignVertical: 'bottom', }}>{this.props.description}</Text>
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