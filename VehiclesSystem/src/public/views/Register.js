import React, { Component } from 'react';

import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    StatusBar
} from 'react-native';

export default class Login extends Component{
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/orangeCar.png')}/>
                    <Text style={styles.logoText}>Liste Meus Carros!</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput 
                        placeholder="Nome"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        style={styles.input}
                    />
                    <TextInput 
                        placeholder="E-mail"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input} />
                    <TextInput 
                        placeholder="Senha"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input} />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>                
                <View style={styles.signupTextContainer}>
                    <Text style={styles.signupText}>Já possui uma conta? Então</Text>
                    <Text style={styles.signupButton}> faça o Login</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',    
    },    
    logo: {
        width: 300,
        height: 121
    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 25
    },
    buttonContainer: {
        backgroundColor: '#276b98',
        paddingVertical: 15,
        borderRadius: 25
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    forgotPasswordContainer: {       
       alignItems: 'center',
    },
    forgotPasswordText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 17  
    },
    signupTextContainer: {
       flexGrow: 1,
       alignItems: 'flex-end',
       justifyContent: 'center',
       paddingVertical: 16,
       flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    }
});