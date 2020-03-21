import React from 'react';

import Login from '../public/views/Login';
import Register from '../public/views/Register';
import { View, StatusBar, StyleSheet } from 'react-native';

export default class App extends React.Component {
    render() {
        return( 
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor="#2e87c2"
                    barStyle="light-content"
                />
                <Register />    
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