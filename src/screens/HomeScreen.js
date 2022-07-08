import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { LinearGradient } from 'expo-linear-gradient';
import CurrentDate from '../components/CurrentDate';

const HomeScreen = ({navigation}) => {
    var date = new Date().getDate();
    return (
        <>
            <View style = {styles.homescreenStyle}>
                <LinearGradient colors = {["#eafffa","#c6fce5","#6ef3d6", "#0ecedb"]}>
                    <CurrentDate />
                    <Carousel />
                    <TouchableOpacity 
                        style = {styles.buttonStyling}
                        onPress = {() => navigation.navigate('Lets get started')}
                    >
                        <Text style = {styles.text}>Let's get started</Text>
                    </TouchableOpacity>
                    <Text style = {{fontSize : '50'}}>1/30</Text>
                </LinearGradient>
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
    text: {
        fontSize: 25,
        color: 'white'
    },
    buttonStyling : {
        height:40,
        alignItems: 'center',
        margin: 25,
        backgroundColor: '#00bbc4',
        borderRadius: 20,
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    },
    homescreenStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    bottomTab : { 
        fontSize: 17,
        alignContent: 'center',
        marginLeft: 10,
        color: 'gray'
    }
});

export default HomeScreen;
