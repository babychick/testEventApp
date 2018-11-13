import React from 'react';
import { Dimensions, StyleSheet, View } from 'react';
import { BarCodeScanner } from 'expo';

class QRScanner extends React.Component {
    constructor(props) {
        super(props);
        let data = this.props.navigation.state.params.data;
        this.state = {
            isScanned: false,
            userId: null,
            event: {
                eventId: data.eventId,
                adminId: data.adminId
            }
        }
    }

    onUpdateStatus = () => {
        fetch( url + 'attendee/updateUserStatus', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                eventId: this.state.event.eventId,
                adminId: this.state.event.adminId,
                userId: this.state.userId,
                status: 'Đã điểm danh'
            })
        })
        .then(data => data.json())
        .then(dataJson => {
            if (dataJson.title === 'ok') {
                Aler.alert('THÔNG BÁO', 'Điểm danh thành công!',
                    [{ text: 'OK',
                        onPress: () => {
                            this.setState({
                                isScanned: false
                            })
                        }}])
            }
        })
    }

    onScanning = (result) => {
        if (result.data !== this.state.userId) {
            this.setState({
                userId: result.data,
                isScanned: true
            })
        }
        if (this.state.isScanned === true) {
            this.onUpdateStatus()
        }
    }

    render() {
        return (
            <BarCodeScanner
                onBarCodeRead={this.onScanning}
                style={styles.container}
            >
                <View style={styles.layerTop} />
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                </View>
                <View style={styles.layerBottom} />
            </BarCodeScanner>
        );
    }
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 5,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 10,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 5,
    backgroundColor: opacity
  },
});