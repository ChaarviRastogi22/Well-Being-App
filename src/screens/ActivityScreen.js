import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from "../components/Spacer";

const ActivityScreen = ( {navigation} ) => {
    return (
        <>
        <View style = {{flex:1, flexDirection: 'row'}}>
        <LinearGradient colors = {["#eafffa","#c6fce5","#6ef3d6"]}>
            <Spacer />
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialCommunityIcons name="flower" size={24} color="black"/>
        <Text style = {{fontSize: 20}}>Activities screen</Text>
        </View>
        
            <View style = {{alignSelf: 'center'}}>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style = {styles.buttonStyling}
                    onPress = {()=> navigation.navigate('First')}
                >
                    <Text style = {styles.buttonFont}>1st Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling} 
                onPress = {()=> navigation.navigate('Second')}>
                <Text style = {styles.buttonFont}>2nd Month</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity style = {styles.buttonStyling}
                onPress = {()=> navigation.navigate('Third')}>
                <Text style = {styles.buttonFont}>3rd Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling}
                onPress = {()=> navigation.navigate('Forth')}>
                <Text style = {styles.buttonFont}>4th Month</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity style = {styles.buttonStyling}
                onPress = {()=> navigation.navigate('Fifth')}>
                <Text style = {styles.buttonFont}>5th Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling}
                onPress = {()=> navigation.navigate('Sixth')}>
                <Text style = {styles.buttonFont}>6th Month</Text>
                </TouchableOpacity>
            </View>
            </View>
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
    buttonStyling : {
    height:100,
    alignItems: 'center',
    margin: 25,
    backgroundColor: '#00bbc4',
    borderRadius: 20,
    justifyContent: 'center',
    width: 125,
    margin: 25,
    borderBottomWidth: 4,
    borderBottomColor: 'white'
    },
    buttonFont: {
        color: 'white', 
        fontSize: 20
    }
});

export default ActivityScreen;