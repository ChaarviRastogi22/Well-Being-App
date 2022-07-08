import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import AboutUs from "./src/screens/AboutUs";
import AccountScreen from "./src/screens/AccountScreen";
import AudioScreen from "./src/screens/AudioScreen";
import RateUs from "./src/screens/RateUs";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import VideoScreen from "./src/screens/VideoScreen";
import WorkSheetsScreen from "./src/screens/WorkSheetsScreen";

const Navigator = createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen,
    Home: HomeScreen,
    Video: VideoScreen,
    Audio: AudioScreen,
    Worksheet: WorkSheetsScreen,
    Account: AccountScreen,
    About: AboutUs,
    Rate: RateUs,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Home',
      }
    }
);

export default createAppContainer(Navigator);
