import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ActivityScreen = ( {navigation} ) => {
    return (
        <>
        <View style = {{flex:1}}>
        <LinearGradient colors = {["#eafffa","#c6fce5","#6ef3d6", "#0ecedb"]}>
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style = {styles.buttonStyling}
                    onPress = {()=> navigation.navigate('First')}
                >
                    <Text style = {{color: 'white'}}>1st Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling}>
                <Text style = {{color: 'white'}}>2nd Month</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity style = {styles.buttonStyling}>
                <Text style = {{color: 'white'}}>3rd Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling}>
                <Text style = {{color: 'white'}}>4th Month</Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity style = {styles.buttonStyling}>
                <Text style = {{color: 'white'}}>5th Month</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonStyling}>
                <Text style = {{color: 'white'}}>6th Month</Text>
                </TouchableOpacity>
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
    margin: 25
    }
});

export default ActivityScreen;