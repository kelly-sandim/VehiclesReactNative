import React from 'react';

import Login from '../public/views/Login';
import { View, StatusBar, StyleSheet } from 'react-native';

export default class App extends React.Component {
    render() {
        return( 
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor="#2e87c2"
                    barStyle="light-content"
                />
                <Login />    
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
});