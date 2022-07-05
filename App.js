import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import HomeScreen from "./src/screens/HomeScreen";
import AboutUs from "./src/screens/AboutUs";
import AccountScreen from "./src/screens/AccountScreen";
import AudioScreen from "./src/screens/AudioScreen";
import RateUs from "./src/screens/RateUs";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import LetsGetStartedScreen from "./src/screens/LetsGetStarted";
import VideoScreen from "./src/screens/VideoScreen";
import WorkSheetsScreen from "./src/screens/WorkSheetsScreen";

const Navigator = createSwitchNavigator({
  mainFlow: createStackNavigator({
    Home: HomeScreen,
    Video: VideoScreen,
    Audio: AudioScreen,
    Worksheet: WorkSheetsScreen,
    drawerFeaturesFlow: createDrawerNavigator({
      Account: AccountScreen,
      About: AboutUs,
      Rate: RateUs
    }),
  }),
  loginFlow: createStackNavigator({
      Start: LetsGetStartedScreen,
      Signup: SignUpScreen,
      Signin: SignInScreen,
    })
});

export default createAppContainer(Navigator);
