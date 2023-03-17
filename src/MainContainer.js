import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


//Screens
//import HomeScreen from '../navigation/screens/Dashboard/HomeScreen';
//import Dashboard from '../navigation/screens/Dashboard/Dashboard';
//import ProfileScreen from '../navigation/screens/Dashboard/ProfileScreen';
//import ChatScreen from '../navigation/screens/Dashboard/ChatScreen';
//import CalendarScreen from '../navigation/screens/Dashboard/CalendarScreen';
import Dashboard from './screens/Dashboard';

//import HomeScreen from '../navigation/screens/Dashboard/'



const Stack = createStackNavigator();


//Screen names
//const homeName = 'Home';
const dashboardName = 'Dashboard';
//const profileName = 'Profile';
//const chatName = 'Chat';
//const calendarName = 'Activity Calendar';

const Tab = createBottomTabNavigator();

function MainContainer(){
    return(
       <NavigationContainer>
        <Tab.Navigator
        initialRouteName={Dashboard}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>{
                let iconName;
                let rn = route.name;

                {/*if(rn === homeName){
                    iconName = focused ? 'home' :'home-outline'

                }*/} if (rn === dashboardName){
                    iconName = focused ? 'grid' :'grid-outline'
                }{/*else if(rn === profileName){
                    iconName = focused ? 'person' :'person-outline'
                }else if(rn === chatName){
                    iconName = focused ? 'chatbox' : 'chatbox-outline'
                }else if(rn === calendarName){
                    iconName = focused ? 'calendar': 'calendar-outline'
                }*/}

                return <Ionicons name={iconName} size={size} color={color}/>

            },
            headerShown: false
        })}
        taabBrOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom:10, fontsize: 10},
            style: {padding: 10, height:70},
            headerShown: false
        }}
        >


       
        <Tab.Screen name={dashboardName} component={Dashboard}
            options={({route})=>({tabBarStyle:{display:getRouteName(route)}})}
        />
       {/* <Tab.Screen name={profileName} component={ProfileScreen}/>
        <Tab.Screen name={chatName} component={ChatScreen}/>
        <Tab.Screen name={calendarName} component={CalendarScreen}/>*/}



        </Tab.Navigator>
       </NavigationContainer>
    );
};

const getRouteName = (route) =>{
    const routeName = getFocusedRouteNameFromRoute(route)
    console.log(routeName);
    if(routeName?.includes("Language") || routeName?.includes("SignIn") || routeName?.includes("SignUp") || routeName?.includes("ResetPassword")){
        return "none";
    }
    return "flex";
};

export default MainContainer;