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
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Navigator = createSwitchNavigator({
    loginFlow: createSwitchNavigator({
        Signup: SignUpScreen,
        Signin: SignInScreen,
    }),
    mainFlow: createStackNavigator({
        Home: HomeScreen,
        Activity: ActivityScreen,
        First: FirstMonth,
        Second: SecondMonth,
        Third: ThirdMonth,
        Forth: ForthMonth,
        Fifth: FifthMonth,
        Sixth: SixthMonth,
        Account: AccountScreen,
        About: AboutUs
    })
});

const App = createAppContainer(Navigator);

export default () => {
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
)};