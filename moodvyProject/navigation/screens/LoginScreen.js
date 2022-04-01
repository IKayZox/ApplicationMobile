import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { useNavigation } from '@react-navigation/core'

let conn = false;
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home");
            conn = true;
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
    },

    vw = (percentage) => {
        const viewportWidth = Dimensions.get('window').width;
        const decimal = percentage * .01;
        percentage = parseInt(percentage, 10);

        // Hard limits
        if (percentage < 0) {
            percentage = 100;
        }
        if (percentage > 1000) {
            percentage = 1000;
        }

        return Math.round(viewportWidth * decimal);
    },

    vh = (percentage) => {
        const viewportHeight = Dimensions.get('window').height;
        const decimal = percentage * .01;
        percentage = parseInt(percentage, 10);
    
        // Hard limits
        if (percentage < 0) {
          percentage = 100;
        }
        if (percentage > 1000) {
          percentage = 1000;
        }
    
        return Math.round(viewportHeight * decimal);
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <Image style={{
                    marginBottom: 40,
                    height: vw(60),
                    width: vw(60),
                    borderColor: "black",
                    borderWidth: 1,
                }} source={require("../../assets/log2.png")} />
            
                <StatusBar style="auto" />
                <View style={[styles.inputView, {width: vw(70)}]}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    />
                </View>
            
                <View style={[styles.inputView, {width: vw(70)}]}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Mot de passe"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    />
                </View>
            
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
            
                <TouchableOpacity
                    onPress={handleLogin}
                    style={[styles.loginBtn, {width: vw(60)}]}
                >
                    <Text style={{color: "#fff"}}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}   
                >
                    <Text style={[styles.forgot_button, {marginTop: 9}]}>Pas de compte ? S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
    }

    export default LoginScreen
    export { conn }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },         
        inputView: {
            backgroundColor: "#F9E4B7",
            borderRadius: 30,
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },
        
        TextInput: {
            height: 50,
            flex: 1,
            padding: 5,
            marginLeft: 20,
        },
        
        forgot_button: {
            height: 30,
            marginBottom: 30,
        },
        
        loginBtn: {
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            backgroundColor: "#5E6072",
        },
})