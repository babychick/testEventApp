import React from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import RouterDangNhap from './src/navigators/RouterDangNhap'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
            Feather: require("native-base/Fonts/Feather.ttf"),
            FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
            Foundation: require("native-base/Fonts/Foundation.ttf"),
            Entypo: require("native-base/Fonts/Entypo.ttf"),
            MaterialIcons: require("native-base/Fonts/MaterialIcons.ttf"),
            SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 24, backgroundColor: 'teal' }}></View>
                <RouterDangNhap />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

AppRegistry.registerComponent('ME', () => App);