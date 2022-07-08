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
        fontSize:20, marginLeft: 20, marginTop: 30, color: 'black'
    },
    inputStyle: {
        margin: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        width: 300,
        borderBottomColor: '#00bbc4'
    },
    
});

export default AuthForm;