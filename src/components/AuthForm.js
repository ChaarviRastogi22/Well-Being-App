import React, {useState} from "react";
import {View, StyleSheet} from 'react-native';
import {Input } from 'react-native-elements';
import Spacer from "./Spacer";

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style = {styles.container}>
            <Input 
                style = {styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                label = "Email"
                value = {email}
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                style = {styles.inputStyle}
                value = {password}
                label = "Password"
                secureTextEntry
                autoCapitalize= "none"
                autoCorrect = {false}
                onChangeText = {setPassword}
            />
        </View>
)};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    fontStyle:{
        fontSize:20, marginLeft: 20, marginTop: 30
    },
    inputStyle: {
        fontSize: 20,
        borderBottomColor: '#00bbc4'
    },
    
});

export default AuthForm;