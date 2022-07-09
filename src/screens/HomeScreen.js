import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { LinearGradient } from 'expo-linear-gradient';
import CurrentDate from '../components/CurrentDate';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <View style = {styles.homescreenStyle}>
                <LinearGradient colors = {["#eafffa","#c6fce5","#6ef3d6", "#0ecedb"]}>
                    <View style = {styles.currentDateBar}>
                        <TouchableOpacity>
                            <Entypo name="menu" size={40} color="#010080" />
                        </TouchableOpacity>

                        <CurrentDate />
                    </View>

                    <Carousel />

                    <View style = {styles.dayCounter}>
                        <Text style = {{fontSize : 50, fontWeight: 'bold'}}>1/30</Text>
                    </View>

                    <TouchableOpacity 
                        style = {styles.buttonStyling}
                        onPress = {() => navigation.navigate('Activity')}
                    >
                        <Text style = {styles.text}>Let's get started</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View> 

            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <MaterialCommunityIcons size={23} name = "yoga" color = 'gray' />
                <Text style = {styles.bottomTab}>
                    Well-Being
                </Text>
            </View>
        </>
    )};

const styles = StyleSheet.create({
    currentDateBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
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
    },
    dayCounter: {
        margin: 20, 
        backgroundColor: '#8bf5de', 
        alignSelf: 'center', 
        borderRadius: 25, 
        width: 150,  
        height: 100,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
