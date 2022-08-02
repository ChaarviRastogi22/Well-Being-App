import React, { useState }  from "react";
import {  View, TouchableOpacity,Text } from "react-native";
const WorksheetScreen = () => {

    return(
        <View>
            <Text>Rate us</Text>
            <Text>How was your experience?</Text>
            <View ></View>
            <TouchableOpacity style = {{flexDirection:'row', margin: 10, height: 50}}>
                <Text style = {{backgroundColor: 'green', marginLeft: 10}}>Excellent</Text>
                <Text style = {{backgroundColor: 'lime', marginLeft: 10}}>Very good</Text>
                <Text style = {{backgroundColor: 'yellow', marginLeft: 10}}>Average</Text>
                <Text style = {{backgroundColor: 'pink', marginLeft: 10}}>Below average</Text>
                <Text style = {{backgroundColor: 'red', marginLeft: 10}}>Poor</Text>
            </TouchableOpacity>
        </View>
    )
};

export default WorksheetScreen;