import React, {useState} from "react";
import {View, StyleSheet} from 'react-native';
import {Input } from 'react-native-elements';
import Spacer from "./Spacer";

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    return(
        <View style = {styles.container}>
            <Input 
                style = {styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                label = "Email"
                onChangeText={setEmail}
            />
            <Spacer />
            <Input
                style = {styles.inputStyle}
                label = "Password"
                secureTextEntry
                autoCapitalize= "none"
                autoCorrect = {false}
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