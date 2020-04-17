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

import UserRouter from '../../users/routes/UserRouter';
import { Appbar } from 'react-native-paper';



export default class Home extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            TextInputEmail: '',
            TextInputPassword: '',
        };        
    }
    
    checkTextInput = () => {
        //Handler for the Submit onPress
        if (this.state.TextInputEmail != '') {          
          if (this.state.TextInputPassword != '') {
            <UserRouter />
          } else {
            alert('Por favor, preencha o campo de senha!');
          }
        } else {
            alert('Por favor, preencha o campo de e-mail!');
        }
    };

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar 
                    backgroundColor="#ffffff"
                    barStyle="dark-content"
                />
                
            </KeyboardAvoidingView>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
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