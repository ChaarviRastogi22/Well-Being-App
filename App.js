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
import SecondMonth from "./src/Activities/SecondMonth";
import ThirdMonth from "./src/Activities/ThirdMonth";
import ForthMonth from "./src/Activities/ForthMonth";
import FifthMonth from "./src/Activities/FifthMonth";
import SixthMonth from "./src/Activities/SixthMonth";

const Navigator = createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen,
    Home: HomeScreen,
    Activity: ActivityScreen,
    Account: AccountScreen,
    About: AboutUs,
    First: FirstMonth,
    Second: SecondMonth,
    Third: ThirdMonth,
    Forth: ForthMonth,
    Fifth: FifthMonth,
    Sixth: SixthMonth
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Home',
      }
    }
);

export default createAppContainer(Navigator);
