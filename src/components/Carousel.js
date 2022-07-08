import React from "react";
import { Image,View, ScrollView, StyleSheet } from 'react-native';

const Carousel = () => {
    return (
        <View>
            <ScrollView horizontal
            showsHorizontalScrollIndicator = {false}>
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
                <Image
                style = {styles.affirmations}
                source = {require('../../assets/download.jpg')}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    
  affirmations: {
    margin :5,
    marginLeft: 5,
    marginTop: 40,
    borderRadius: 25,
    height: 300,
    width: 300
  }
});

export default Carousel;