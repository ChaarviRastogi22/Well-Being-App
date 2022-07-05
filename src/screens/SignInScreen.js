import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AuthForm from "../components/AuthForm";

const SignInScreen = ({ navigation }) => {
    return( 
    <>
        <View style = {{
              backgroundColor: '#00bbc4', 
              alignItems: 'center',
        }}>
                <AntDesign size={30} name="login" color="white" /> 
        </View>

        <View style = {{justifyContent: 'center', backgroundColor:'#effafb', flex: 1}}>
            <Text style = {{fontSize:20, marginLeft: 20}}>
                Hello User!
            </Text>

            <Text style = {{fontSize:20, marginLeft: 20, color: 'gray'}}>
                Login to continue...
            </Text>
            <Image 
                style = {styles.logo}
                source = {require('../../assets/images.png')}
            />

            <View style = {{alignItems: 'center', justifyContent: 'space-around'}}>
                <AuthForm />
                <View style = {{ justifyContent: 'center', alignItems :'center'}}>
                <TouchableOpacity 
                style = {styles.LoginButton}
                onPress = {() => navigation.navigate('mainFlow')}>
                    <Text style = {{fontSize : 20, color: 'white'}}>
                    Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.CreateAccountButton}
                onPress = {() => navigation.navigate('Signup')} >
                    <Text style = {{fontSize: 20}}>
                        Create Account
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
    logo: {
        height: 150,
        width: 150,
        margin: 30,
        marginLeft: 50
    },
    CreateAccountButton: {
        borderWidth: 2, 
        borderRadius: 25, 
        margin: 10, 
        width: 200, 
        alignItems: 'center', 
        height: 35,
        marginTop: 35
    },
    LoginButton: {
        backgroundColor: '#00bbc4',
        alignItems: 'center',
        borderRadius: 25,
        height: 35,                        
        width: 200,
        justifyContent: 'center',
        marginTop: 30
    },
    bottomTab : { 
        fontSize: 17,
        alignContent: 'center',
        marginLeft: 10,
        color: 'gray'
    }
});

export default SignInScreen;