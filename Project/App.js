import React from 'react';
import { StyleSheet, View } from 'react-native' ;
import { NavigationBar } from './src/components/common/navigationBar';
import { HomeRouter } from './src/routes/homeRouter';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container } >
                <View style={ styles.status_bar }/>
                <NavigationBar />
                
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    status_bar: {
        height: 24,
        backgroundColor: 'teal'
    }
});