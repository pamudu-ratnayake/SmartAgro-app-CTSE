import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import TabNavigator from './TabNavigor';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="App" component={AppStack}/>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  );
};

export default AuthStack;