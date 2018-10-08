import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import RouterDangNhap from './src/navigators/RouterDangNhap'
// import Screen from './src/navigators/RouterScreen'
// import {Provider} from 'react-redux';
// import store from './configStore'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={{height:24, backgroundColor:'teal'}}></View>
          <RouterDangNhap/>
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