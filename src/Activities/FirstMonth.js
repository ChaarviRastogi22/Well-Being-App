import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';

const FirstMonth = () => {
    return (
        <View style = {{justifyContent: 'center'}}>
            <Text style= {{fontWeight: 'bold', fontSize: 50}}>Video</Text>
            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.istockphoto.com/video/10-second-countdown-and-black-and-white-background-gm1318062242-405297088?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_sponsored&utm_content=http%3A%2F%2Fpixabay.com%2Fvideos%2Fsearch%2F10%2520seconds%2F&utm_term=10+seconds')}>
                <Image  
                    style = {styles.videoCover}
                    source = {require('../../assets/unnamed.jpg')}
                />
            </TouchableOpacity>
            <Text style= {{fontWeight: 'bold', fontSize: 50}}>Video</Text>
            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.istockphoto.com/video/10-second-countdown-and-black-and-white-background-gm1318062242-405297088?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_sponsored&utm_content=http%3A%2F%2Fpixabay.com%2Fvideos%2Fsearch%2F10%2520seconds%2F&utm_term=10+seconds')}>
                <Image  
                    style = {styles.videoCover}
                    source = {require('../../assets/unnamed.jpg')}
                />
            </TouchableOpacity>
            <Text style= {{fontWeight: 'bold', fontSize: 50}}>Video</Text>
            <TouchableOpacity
                onPress = {() => Linking.openURL('https://www.istockphoto.com/video/10-second-countdown-and-black-and-white-background-gm1318062242-405297088?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_video_sponsored&utm_content=http%3A%2F%2Fpixabay.com%2Fvideos%2Fsearch%2F10%2520seconds%2F&utm_term=10+seconds')}>
                <Image  
                    style = {styles.videoCover}
                    source = {require('../../assets/unnamed.jpg')}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    videoCover: {
        width: 100,
        height: 100
    }
});

export default FirstMonth;