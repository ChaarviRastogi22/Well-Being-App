import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LetsGetStarted = ({navigation}) => {
    return (
        <View style = {styles.homescreenStyle}>
                  <TouchableOpacity 
                    style = {styles.buttonStyling} 
                    onPress = {() => navigation.navigate('Signin')}
                    >
                            
                    <Text style = {styles.textButton}>Let's get started</Text>
                      </TouchableOpacity> 
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
              <MaterialCommunityIcons size={23} name = "yoga" color = 'gray' />
              <Text style = {styles.bottomTab}>
                WellBeing
              </Text>
            </View>
            </View> 

            
    )};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    buttonStyling : {
        justifyContent: 'center',
        height:200,
        alignItems: 'center',
        marginTop: 100,
        margin: 15,
        backgroundColor: '#00bbc4',
        borderRadius: 20
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        margin: 10
    },
    homescreenStyle: {
        flex:1,
        backgroundColor: "#c6fce5",
        justifyContent: 'center'
    },
    bottomTab : { 
        fontSize: 17,
        alignContent: 'center',
        marginLeft: 10,
        color: 'gray'
    }
});

export default LetsGetStarted;
