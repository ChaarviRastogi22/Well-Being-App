import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({ navigation }) => {
    return(
        <>
        <View style = {styles.backgroundStyle}>
            <Text style = {{fontSize:20, marginLeft: 20}}>Welcome User!</Text>
            <Text style = {{color: 'gray',fontSize:15, marginLeft: 20}}>Sign up to continue</Text>
            <Image 
                    style = {styles.logo}
                    source = {require('../../assets/images.png')}
            />
            <View>
            <AuthForm />
            <View style = {{alignItems: 'center'}}>
        <TouchableOpacity
            style = {{backgroundColor: '#00bbc4', borderRadius: 25, margin: 10, width: 200, alignItems: 'center', justifyContent: 'center', height: 35}}
            onPress = {() => navigation.navigate('Start')} >
                <Text style = {{fontSize: 20, color: 'white'}}>
                    Sign Up
                </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {{backgroundColor: '#00bbc4', borderRadius: 25, marginTop: 20, width: 200, alignItems: 'center', justifyContent: 'center', height: 35}}
            onPress = {() => navigation.navigate('mainFlow')} >
                <Text style = {{fontSize: 20, color: 'white'}}>
                    Go to mainflow
                </Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
    <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
    <MaterialCommunityIcons size={23} name = "yoga" color = 'gray' />
            <Text style = {styles.bottomTab}>
                WellBeing
            </Text>
    </View>
    </>
)};

const styles = StyleSheet.create({
    inputStyle: {
        margin: 10,
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        borderBottomWidth: 2,
        width: 300
    },
    backgroundStyle: {
        backgroundColor: '#effafb',
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100,
        margin: 30,
        marginLeft: 60
    }
});

export default SignUpScreen;