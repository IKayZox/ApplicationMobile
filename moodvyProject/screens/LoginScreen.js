import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with:", user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Image style={styles.image} source={require("../assets/log2.png")} />
            
                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    />
                </View>
            
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    />
                </View>
            
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
    }

    export default LoginScreen

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            marginBottom: 40,
            height: 80,
            width: 80,
        },
         
        inputView: {
            backgroundColor: "#FFC0CB",
            borderRadius: 30,
            width: "70%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        
        TextInput: {
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,
        },
        
        forgot_button: {
            height: 30,
            marginBottom: 30,
        },
        
        loginBtn: {
            width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            backgroundColor: "#FF1493",
        },
})