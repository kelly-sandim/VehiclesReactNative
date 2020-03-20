import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export default class Login extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/orangeCar.png')}/>
                </View>
                <View style={styles.formContainer}>
                    <TextInput 
                        placeholder="E-mail"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input} />
                    <TextInput 
                        placeholder="Senha"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        style={styles.input} />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },    
    logo: {
        width: 300,
        height: 121
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#276b98',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});