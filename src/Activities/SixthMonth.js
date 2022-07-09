import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Spacer from "../components/Spacer";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SixthMonth = () => {
    return (
        <>
        <View style = {{flex: 1,flexDirection: 'row'}}>
            <LinearGradient colors = {["#eafffa","#6ef3d6"]}>
                <View>
            <Spacer>
                <Text style= {{fontWeight: 'bold', fontSize: 50}}>Audio</Text>
                <TouchableOpacity style = {{marginTop: 10}}>
                    <MaterialIcons name="multitrack-audio" size={24} color="black" />
                </TouchableOpacity>
            </Spacer>

            <View>
            <Spacer>
            <Text style= {{fontWeight: 'bold', fontSize: 40}}>Video</Text>
            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.istockphoto.com/video/10-second-countdown-and-black-and-white-background-gm1318062242-405297088?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_sponsored&utm_content=http%3A%2F%2Fpixabay.com%2Fvideos%2Fsearch%2F10%2520seconds%2F&utm_term=10+seconds')}>
                <Image  
                    style = {styles.videoCover}
                    source = {require('../../assets/unnamed.jpg')}
                />
            </TouchableOpacity>
            </Spacer>
            </View>
            <Spacer>
                <Text style= {{fontWeight: 'bold', fontSize: 50}}>Worksheet</Text>
                <TouchableOpacity>
                <FontAwesome5 name="file" size={24} color="black" />
                </TouchableOpacity>
            </Spacer>
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
    videoCover: {
        margin :5,
        marginLeft: 5,
        marginTop: 40,
        height: 200,
        width: 320
    }
});

export default SixthMonth;