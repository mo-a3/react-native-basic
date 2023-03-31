import { useNavigation } from '@react-navigation/native';
import React, { Component,useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';


export const Login = () =>{
    const navigate = useNavigation();
    const [state,setState] = useState({
        email: 'admin',
        password: 'admin'
    })

    const onLoginButton = () => {
        console.log(">> on login button");
        if (state.email == state.password) {
            navigate.navigate('Home', { name: state.email });
            setState({
                email: '',
                password: ''
            });

        } else {
            alert('Username/Password should be admin/admin.');
        }
    }

    const onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    const onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://training.pyther.com/icons/user.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={state.email}
                        onChangeText={(email) => setState({...state,  email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={{ uri: 'https://training.pyther.com/icons/key.png' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={state.password}
                        onChangeText={(password) => setState({...state, password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
