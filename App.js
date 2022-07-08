import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import AboutUs from "./src/screens/AboutUs";
import AccountScreen from "./src/screens/AccountScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ActivityScreen from "./src/screens/ActivityScreen";
import FirstMonth from "./src/Activities/FirstMonth";

const Navigator = createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen,
    Home: HomeScreen,
    Activity: ActivityScreen,
    Account: AccountScreen,
    About: AboutUs,
    First: FirstMonth
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Home',
      }
    }
);

export default createAppContainer(Navigator);
