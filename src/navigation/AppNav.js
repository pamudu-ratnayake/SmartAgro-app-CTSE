import { View, Text,ActivityIndicator} from 'react-native'
import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import TabNavigator from './TabNavigor';
import AppStack from './AppStack';


function AppNav(){
    const{isLoading, userToken}=useContext(AuthContext);
    if (isLoading) {
        <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }
    return(
        <NavigationContainer>
        {userToken !== null ?
        <AppStack /> :
       <AuthStack/> } 
      </NavigationContainer>
    );
}
export default AppNav