import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({navigation}) => {
    return (
        <> 
            <View style = {{
              backgroundColor: '#00bbc4', 
              alignItems: 'center',
              borderRadius: 20
            }}
            >
                <AntDesign size={30} name="home" color="white" /> 
            </View>

            <View style = {styles.homescreenStyle}>
                <LinearGradient colors = {["#eafffa","#c6fce5","#6ef3d6", "#0ecedb"]}>
                    <Carousel />
                    <TouchableOpacity 
                        style = {styles.buttonStyling}
                        onPress = {() => navigation.navigate('Audio')}
                    >
                        <Text style = {styles.text}>Audios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyling} 
                    onPress = {() => navigation.navigate('Video')}>
                        <Text style = {styles.text}>Videos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonStyling}
                    onPress = {() => navigation.navigate('Worksheet')}>
                        <Text style = {styles.text}>Worksheets</Text>
                    </TouchableOpacity>
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
        margin: 15,
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
