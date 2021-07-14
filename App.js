import React from 'react';
import { 
  CryptoDetail,
  Transaction,
  Spalsh,
  Login,
  SignUp,
 // notification,
  ForgotPassword,
  Reset
     } from "./src/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from "./src/navigation/tabs";

const RootStack = createStackNavigator();

const App = () => {

  React.useEffect(() =>{
    SplashScreen.hide()

  }, [])
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Spalsh'}
      >
        <RootStack.Screen
          name="Spalsh"
          component={Spalsh}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
        />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
        />
        <RootStack.Screen
          name="Reset"
          component={Reset}
        />
        <RootStack.Screen
          name="Home"
          component={Tabs}
        />
        <RootStack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <RootStack.Screen
          name="Transaction"
          component={Transaction}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App;