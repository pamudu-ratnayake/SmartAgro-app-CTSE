import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import OnboardingScreen from '../screens/OnboardingScreen';
//import LoginScreen from '../screens/LoginScreen';
//import RegisterScreen from '../screens/RegisterScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen/PasswordResetScreen';
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
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen}/>
      <Stack.Screen name="ResetPassword" component={PasswordResetScreen}/>
    </Stack.Navigator>
  );
};

export default AuthStack;