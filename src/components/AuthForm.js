import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AuthForm = () => {
    return(
        <>
        <View>
            <Text style = {styles.fontStyle}>Email</Text>

            <TextInput 
                style = {styles.inputStyle}
                placeholder = "example@email.com"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style = {styles.fontStyle}>Password</Text>

            <TextInput 
                style = {styles.inputStyle}
                placeholder = "your_password"
                secureTextEntry
                autoCapitalize= "none"
                autoCorrect = {false}
            />
        </View>
    </>
)};

const styles = StyleSheet.create({
    fontStyle:{
        fontSize:20, marginLeft: 20, marginTop: 30, color: 'gray'
    },
    inputStyle: {
        margin: 10,
        fontSize: 20,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        width: 300,
        borderRadius: 10
    },
    
});

export default AuthForm;