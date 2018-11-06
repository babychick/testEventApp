import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import RouterDangNhap from './src/navigators/RouterDangNhap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Foundation: require("./node_modules/@expo/vector-icons/fonts/Foundation.ttf"),
      MaterialCommunityIcons: require("./node_modules/@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      Feather: require("./node_modules/@expo/vector-icons/fonts/Feather.ttf"),
      FontAwesome: require("./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf"),
      Entypo: require("./node_modules/@expo/vector-icons/fonts/Entypo.ttf"),
      MaterialIcons: require("./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf"),
      SimpleLineIcons: require("./node_modules/@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      Ionicons: require("./node_modules/@expo/vector-icons/fonts/Ionicons.ttf")
    })
    .then(() => {
        this.setState({
          loaded: true
    })})
  }

  render() {
    if (this.state.loaded === false) {
      return <Expo.AppLoading/>
    }
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
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

AppRegistry.registerComponent('ME', () => App);