import {View, Text} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaView, Image, TouchableOpacity} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';




import LanguageScreen from '../screens/LanguageScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import PasswordResetScreen from '../screens/PasswordResetScreen'
import YieldScreen from '../../YieldScreen'
import AddharvestScreen from '../screens/AddharvestScreen'
import CropsScreen from '../screens/CropsScreen'
import AddCropsScreen from '../screens/AddCropsScreen'
import MyFarmScreen from '../../MyFarmScreen'
import SubscriptionsScreen from '../screens/SubscriptionsScreen'
import ControllerScreen from '../screens/ControllerScreen'
import Dashboard from '../screens/Dashboard'
import BillingScreen from '../screens/BillingScreen'
import MainContainer from '../MainContainer';
import ActivityCalendar from '../screens/ActivityCalendar';

function CustomHeader({title, isHome, navigation}) {
  //const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? 
          <Image
            style={{width: 30, height: 30, marginLeft: 5}}
            source={require('./src/images/more.png')}
            resizeMode="contain"
          />
        : 
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack(null)}>
            <Image
              style={{width: 25, height: 25, marginLeft: 5}}
              source={require('./src/images/previous.png')}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        }
      </View>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}> {title} </Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go Home Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    );
  }
  
 // function Dashboard

  function HomeScreenDetail(navigation) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Home Detail" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home Detail!</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  function SettingsScreen({navigation}) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Setting" isHome={true} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => navigation.navigate('SettingDetail')}>
            <Text>Go Setting Details</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  function SettingsScreenDetail({navigation}) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title="Setting Detail" navigation={navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting Detail!</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  function NotificationsScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  const navOptionHandler = () => ({
    headerShown: false,
  });
  
  const StackHome = createStackNavigator();
  
  function HomeStack() {
    return (
      <StackHome.Navigator initialRouteName="Home">
        <StackHome.Screen
          name="Home"
          component={HomeScreen}
          options={navOptionHandler}
        />
  
        <StackHome.Screen
          name="HomeDetail"
          component={HomeScreenDetail}
          options={navOptionHandler}
        />
      </StackHome.Navigator>
    );
  }
  
  const StackSetting = createStackNavigator();
  
  function SettingStack() {
    return (
      <StackSetting.Navigator initialRouteName="Setting">
        <StackSetting.Screen
          name="Setting"
          component={SettingsScreen}
          options={navOptionHandler}
        />
        <StackSetting.Screen
          name="SettingDetail"
          component={SettingsScreenDetail}
          options={navOptionHandler}
        />
      </StackSetting.Navigator>
    );
  }
  
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? require('../../assets/images//home.png')
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? require('../../assets/images/settings.png')
                : require('../../assets/images/settingsblack.png');
            }
  
            // You can return any component that you like here!
            return <Image 
            source={iconName} 
            style={{width: 20, height: 20}} resizeMode="contain"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="HomePage" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
    );
  }
  const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName= "MenuTab">
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
