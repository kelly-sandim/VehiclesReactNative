import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Login extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>Página de Login</Text>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    } 
});