import React, { Component } from "react";
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LaunchScreen from '../Containers/LaunchScreen'
import LLoginScreen from '../Containers/LoginScreen';


import SideBar from "../Containers/sidebar";
import Hello from "../Containers/Hello"
import LoginScreen from "../Containers/loginModule/components/LoginScreen"
import SignUp from "../Containers/loginModule/screens/SignUp"
import Wellcome from "../Containers/loginModule/screens/Wellcome"
import ForgetPass1 from "../Containers/loginModule/screens/ForgetPass1"
import ForgetPass2 from "../Containers/loginModule/screens/ForgetPass2"
import Information from "../Containers/loginModule/screens/Information"
import Verify from "../Containers/loginModule/screens/Verify"
import Home from "../Containers/home/";
import Courses from "../Containers/courses/";




import styles from './Styles/NavigationStyles'

// my navigator
const MainAppStack = createStackNavigator(
  {
    Home: { screen: Home,path:'Home' },
    Courses : { screen : Courses }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const Drawer = createDrawerNavigator();



function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: '#e91e63',
    }}
    initialRouteName= "Home"
    drawerPosition='right'
    contentComponent= {(props) => <SideBar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const LoginNavigator = createStackNavigator(
  {

    LoginScreen : {screen : LoginScreen},
    SignUp : {screen : SignUp},
    Wellcome : {screen: Wellcome},
    ForgetPass1 : {screen : ForgetPass1},
    ForgetPass2 : {screen : ForgetPass2},
    Information : {screen: Information},
    Verify: { screen : Verify}
  },
  {
    initialRouteName: "Wellcome",
    headerMode: "none"
  }
);
const AppNavigator = createStackNavigator(
  {
    Hello : Hello ,
    MyDrawer: {screen : MainAppStack , path:'app'} ,
    LoginNavigator :  LoginNavigator,
  },
  {
    initialRouteName: "Hello",
    headerMode: "none"
  }
);




// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen : { screen : LLoginScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(AppNavigator)
