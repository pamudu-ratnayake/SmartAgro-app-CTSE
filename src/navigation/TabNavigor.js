import * as React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Avatar,Title, Caption, Text,TouchableRipple,useTheme} from 'react-native-paper';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import Dashboard from '../src/screens/Dashboard';
import Dashboard from '../screens/Dashboard';
import CropsScreen from '../screens/CropsScreen/CropsScreen';
//import MyFarmScreen from './src/screens/MyFarmScreen';
import ControllerScreen from '../screens/ControllerScreen/ControllerScreen';
import YieldScreen from '../screens/YieldScreen/YieldScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {createStackNavigator} from '@react-navigation/stack';
//import CustomHeader from './src/components/CustomHeader';
import CustomHeader from '../components/CustomHeader';
import SettingsScreennew from '../screens/MyFarmScreen/MyFarmScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen from '../screens/EditProfileScreen';
//import CropsScreen from './src/screens/CropsScreen';
import Chatlist from '../screens/ChatTab/Chatlist';
import {useSelector, Provider} from 'react-redux'
import MapView from 'react-native-maps';

//import farm from './assets/images/farm.png'
import farm from '../assets/images/farm.png'
import crops from '../assets/images/crops.png'
import controllers from '../assets/images/controllers.png';
import yields from '../assets/images/yield.png';
import sub from '../assets/images/sub.png';
import shop from '../assets/images/shop.png';
import plant from '../assets/images/shop.png'
import weather from '../assets/images/weather.png'
import CustomImageCarousalLandscape from '../components/CustomImageCarousalLandscape'
import AddharvestScreen from '../screens/AddharvestScreen/AddharvestScreen';
import LanguageScreen from '../screens/LanguageScreen/LanguageScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import PasswordResetScreen from '../screens/PasswordResetScreen/PasswordResetScreen'
//import YieldScreen from './src/screens/YieldScreen'
//import AddharvestScreen from './src/screens/AddharvestScreen'
//import CropsScreen from './src/screens/CropsScreen'
import AddCropsScreen from '../screens/AddCropsScreen/AddCropsScreen'
import MyFarmScreen from '../screens/MyFarmScreen/MyFarmScreen'
import SubscriptionsScreen from '../screens/SubscriptionsScreen/SubscriptionsScreen'
//import ControllerScreen from './src/screens/ControllerScreen'
//import Dashboard from '../screens/Dashboard'
import BillingScreen from '../screens/BillingScreen/BillingScreen'
import AllUser from '../screens/ChatTab/AllUsers';
import { NativeBaseProvider } from 'native-base';
import Home from '../screens/ChatTab/HomeChatlist';
import {Store} from '../Redux/Store'
import Shop from '../screens/Shop/Shop';
import CropAdvisory from '../screens/CropAdvisory';
import CropAdvisory1 from '../screens/CropAdvisory1';
import CropAdvisory2 from '../screens/CropAdvisory2';
import DroneServices from '../screens/DroneServices';
import FertilizerScreen from '../screens/FertilizerScreen';
import SoilTesting from '../screens/SoilTesting';
import Charts from '../screens/Charts';
import ActivityCalendar from '../screens/ActivityCalendar';
import CreateTask from '../screens/CreateTask';
import HomePage from '../screens/HomePage/HomePage';
import Chatscreen from '../screens/chat/Chatscreen1';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import NewCrops from '../screens/NewCrops';
import SensorScreen from '../screens/SensorScreen/SensorScreen';
import Inbox from '../screens/Inbox/Inbox';
import Chatscreen1 from '../screens/chat/Chatscreen1';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import ConversationItem from '../screens/ConversationItem/ConversationItem';
import ChattingScreen from '../screens/ChattingScreen/ChattingScreen'
//import CustomDrawer from '../components/CustomDrawer';
import ChatContacts from '../screens/ChatContacts/ChatContacts'
import ConversationsScreen from '../screens/ConversationsScreen/ConversationsScreen';
import OnCallScreen from '../screens/OnCallScreen/OnCallScreen';
import SensorScreen2 from '../screens/SensorScreen/SensorScreen2';
import Monitoring from '../screens/Monitoring/Monitoring';
import YieldDashboard from '../screens/YieldDashboard/YieldDashboard';
import EditProfile from '../screens/EditProfile/EditProfile';
import charts2 from '../screens/Charts/Charts2';





{/*function DashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('DashboardDetail')}>
          <Text>Go Dashboard Details</Text>
        </TouchableOpacity>
      </View>*/}
     /* <CustomHeader></CustomHeader>
      <View style={styles.column}>
      <View style={styles.row}>
      
                <TouchableOpacity  style={styles.container} onPress={() => navigation.navigate('DashboardDetail')}>
                    <Image source={farm} style={styles.image}></Image>
                    <Text style={styles.txt}>My Farm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('CropDetails')}>
                    <Image source={crops} style={styles.image}></Image>
                    <Text style={styles.txt}>New Crops</Text>
                </TouchableOpacity>

               
            
            </View> 
            <View style={styles.row}>
                <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('controllerDetail')}>
                    <Image source={controllers} style={styles.image}></Image>
                    <Text style={styles.txt}>Controllers</Text>
                </TouchableOpacity>
               
                
                <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('YieldDetail')}>
                    <Image source={yields} style={styles.image}></Image>
                    <Text style={styles.txt}>Yield</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.row}>
                <TouchableOpacity style={styles.container3} onPress={() => navigation.navigate('Subcription')}>
                    <Image source={sub} style={styles.image}></Image>
                    <Text style={styles.txt}>Subscriptions</Text>
                </TouchableOpacity>
               
                
                <TouchableOpacity style={styles.container3} onPress={() => navigation.navigate('ShopDetails')}>
                    <Image source={shop} style={styles.image}></Image>
                    <Text style={styles.txt}>Shop</Text>
                </TouchableOpacity>
                </View>
           
            </View>
          

    </SafeAreaView>
  );
}


function NotificationsScreen({navigation}) {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={styles.containernew}>
    <View style={{marginLeft: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop:15}}>
          <Avatar.Image
          source={{uri:'https://www.dreamstime.com/stock-photo-tender-love-loving-care-lions-image51964422.jpeg',}}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Caption style={styles.Caption}>@j_doe</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
      <View style={styles.rownew}>
      <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
      </View> 
      <View style={styles.rownew}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.rownew}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
      </View>
      
      <Button onPress={() => navigation.goBack()} title="Go back home" />

    </SafeAreaView>
  );
}*/

const styles = StyleSheet.create({
  text:{
      fontSize:20,
      color:"black",
      top:20,
      left:30,
      fontWeight:"bold"
      
  },
  container0:{
    width:140,
    height:140,
    borderRadius:20,
    
    borderColor:"#73C971",
    borderWidth:2,
    left:50,
    top:100,
    marginHorizontal:10,
},
  container:{
      width:110,
      height:110,
      borderRadius:20,
      borderColor:"#73C971",
      borderWidth:2,
      left:55,
      top:70,
      marginHorizontal:20,

  },
  containerC1:{
    width:100,
    height:100,
    borderRadius:20,
    borderColor:"#73C971",
    borderWidth:2,
    left:55,
    marginHorizontal:20,

},
  containernew: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: 150,
    width: 400,
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 9,
    marginTop: 260

    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  rownew: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  container2:{
      width:110,
      height:110,
      borderRadius:20,
      borderColor:"#73C971",
      borderWidth:2,
      left:55,
      top:200,
      marginHorizontal:20,
  },

  container3:{
      width:110,
      height:110,
      borderRadius:20,
      borderColor:"#73C971",
      borderWidth:2,
      left:55,
      top:330,
      marginHorizontal:20,
  },

  row:{
      
      flex: 1,
      flexDirection: "row",

  },

  image:{
      alignSelf:"center",
      top:20,
  },
  txt:{
      alignSelf:"center",
      color:"black",
      top:25,
      fontWeight:"bold",
  },

  txt2:{
      alignSelf:"center",
      color:"black",
      top:25,
      fontWeight:"bold",
      top:50
  },

  txt3:{
      alignSelf:"center",
      color:"black",
      top:25,
      fontWeight:"bold",
      top:35
  },
  textnew: {
    fontSize:20,
    color: 'black',
    left:30,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textnew2:{
    fontSize:20,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 35,
    paddingBottom: 10,
    alignSelf:"center"
  },
  carouselContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  
  
 
})

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

/*const StackHome = createStackNavigator();

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
    <StackSetting.Navigator initialRouteName="Setting" >
      <StackSetting.Screen
        name="Setting"
        component={ActivityCalendar}
        options={navOptionHandler}
      />
  
      <StackSetting.Screen
        name="CreateTask"
        component={CreateTask}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  );
}

const StackDashboard = createStackNavigator();
function DashboardStack() {
  return (
     <StackDashboard.Navigator initialRouteName="Dashboard" >
      <StackDashboard.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={navOptionHandler}
      />
      <StackDashboard.Screen
        name="DashboardDetail"
        component={MyFarmScreen}
        options={navOptionHandler}
      />
      <StackDashboard.Screen
        name="ShopDetails"
        component={Shop}
        options={navOptionHandler}
      />
      <StackDashboard.Screen
      name="CropDetails"
      component={CropsScreen}
      options={navOptionHandler}/>
      <StackDashboard.Screen
      name="controllerDetail"
      component={ControllerScreen}
      options={navOptionHandler}/>
      <StackDashboard.Screen
      name="Addharvest"
      component={AddharvestScreen}
      options={navOptionHandler}/>
       <StackDashboard.Screen
      name="YieldDetail"
      component={YieldScreen}
      options={navOptionHandler}/>
      <StackDashboard.Screen
      name="Charts"
      component={Charts}
      options={navOptionHandler}/>
      <StackDashboard.Screen
        name="Subcription"
        component={SubscriptionsScreen}
        options={navOptionHandler}
      />
      <StackDashboard.Screen
      name="BillingScreen"
      component={BillingScreen}
      options={navOptionHandler}/>
      
      <StackDashboard.Screen
      name="AddCrops"
      component={AddCropsScreen}
      options={navOptionHandler} 
      />
      <StackDashboard.Screen
      name="CropAdvisory"
      component={CropAdvisory}
      options={navOptionHandler} 
      />
      <StackDashboard.Screen
      name="Advisory1"
      component={CropAdvisory1}
      options={navOptionHandler}
      />
      <StackDashboard.Screen
      name ="Advisory2"
      component={CropAdvisory2}
      options={navOptionHandler}
      />
      <StackDashboard.Screen
      name="Drone"
      component={DroneServices}
      options={navOptionHandler}
      />
      <StackDashboard.Screen
      name="Soil"
      component={SoilTesting}
      options={navOptionHandler}
      />
    </StackDashboard.Navigator>
  );
}

const StackChat = createStackNavigator();
function ChatStack() {
  return (
    
    <StackChat.Navigator initialRouteName="Chat">
      <StackChat.Screen
        name="Chat"
        component={Home}
        options={navOptionHandler}
      />
      <StackChat.Screen
        name="ChatDetail"
        component={ChatScreenDetail}
        options={navOptionHandler}
      />
    </StackChat.Navigator>
    
  );
}

const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={NotificationsScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};*/

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
   {  /* <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />*/}
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    
    <Stack.Navigator>
    {/*<Stack.Screen
        name="Chat"
        component={ConversationsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="MessagesScreen"
      component={MessagesScreen}
      options={{headerShown: false}}
      />*/}

  

      <Stack.Screen
        name="Chat"
        component={Inbox}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Chatscreen1"
        component={Chatscreen1}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ChattingScreen"
        component={ChattingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="OnCallScreen"
      component={OnCallScreen}
      options={{headerShown: false}}
      />
   {  /* <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />*/}
    </Stack.Navigator>
  );
};
const ProfileStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown:false}}/>

<Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const CalendarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ActivityCalendar"
        component={ActivityCalendar}
        options={{headerShown: false}}
      />
          <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{headerShown: false}}
      />
  
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
          <Stack.Screen
        name="MyFarm"
        component={MyFarmScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="NewCrops"
        component={NewCrops}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShopDetails"
        component={Shop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Crops"
        component={CropsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="controllerDetail"
        component={ControllerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Harvest"
        component={AddharvestScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Yield"
        component={YieldScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="YieldDash"
        component={charts2}
        options={{headerShown: false}}
      />
       
        <Stack.Screen
        name="Charts"
        component={Charts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillingScreen"
        component={BillingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCrops"
        component={AddCropsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CropAdvisory"
        component={CropAdvisory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Advisory1"
        component={CropAdvisory1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Advisory2"
        component={CropAdvisory2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drone"
        component={DroneServices}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soil"
        component={SoilTesting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Controller"
        component={ControllerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="Fertilizer"
      component={FertilizerScreen}/>
      <Stack.Screen
      name="Sensor"
      component={SensorScreen2}
      options={{headerShown: false}}
      />

      <Stack.Screen
      name="Monitoring"
      component={Monitoring}
      options={{headerShown: false}}
      />


     
  
    </Stack.Navigator>
  );
};


const TabNavigator = () => {
  return (
   
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        borderColor: 'green',
        style:{
        borderTopColor: 'green',
        borderTopWidth:4,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        },
        borderWidth:10,
        borderRadius:50,
        headerShown: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Activity Calendar') {
            iconName = focused
              ? require('../assets/images/calendargreen.png')
              : require('../assets/images/calendarblack.png');
          } else if (route.name === 'Home') {
            iconName = focused
              ? require('../assets/images/homegreen.png')
              : require('../assets/images/homeblack.png');
          } else if (route.name === 'Dashboard') {
            iconName = focused
            ? require('../assets/images/dgreen.png')
              : require('../assets/images/dblack.png');
          } else if (route.name === 'Chat') {
            iconName = focused
            ? require('../assets/images/chatgreen.png')
              : require('../assets/images/chatblack.png');
          }else if (route.name === 'Profile') {
            iconName = focused
            ? require('../assets/images/profilegreen.png')
              : require('../assets/images/profileblack.png');
          }
          // You can return any component that you like here!
          return <Image 
          source={iconName} 
          style={{width: 20, height: 20}} resizeMode="contain"/>;
        },
        headerShown: false
      })}
      taabBrOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom:10, fontsize: 10},
            style: {padding: 10, height:70},
            headerShown: false
        }}>
      <Tab.Screen name="Home" component={HomeStack} options={navOptionHandler} />
      <Tab.Screen name="Activity Calendar" component={CalendarStack} options={navOptionHandler}/>
      <Tab.Screen name="Dashboard" component={DashboardStack} options={navOptionHandler}/>
      <Tab.Screen name="Chat" component={ChatStack} options={navOptionHandler}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={navOptionHandler}/>
    </Tab.Navigator>
  );
}


export default TabNavigator;


//const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();
//export default function App() {
{/* return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MenuTab" component={TabNavigator}/>
        <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
);*/}
 
/*  return(
    
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
  
      <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Language " component={LanguageScreen}/>
                <Stack.Screen name="Bill " component={BillingScreen}/>
                <Stack.Screen name="Dash" component={Dashboard}/>
                <Stack.Screen name="Controller" component={ControllerScreen}/>
                <Stack.Screen name="SignIn" component={SignInScreen}/>
                <Stack.Screen name="Subscription" component={SubscriptionsScreen}/>
                <Stack.Screen name="CropAdvisory" component={CropAdvisory}/>
                <Stack.Screen name="Advisory1" component={CropAdvisory1}/>
                <Stack.Screen name="Advisory2" component={CropAdvisory2}/>
                <Stack.Screen name="Drone" component={DroneServices}/>
                <Stack.Screen name="Fertilizer" component={FertilizerScreen}/>
                <Stack.Screen name="Soil" component={SoilTesting}/>
                <Stack.Screen name="MyFarm" component={MyFarmScreen}/>
                <Stack.Screen name="Crops" component={CropsScreen}/>
                <Stack.Screen name="AddCrops" component={AddCropsScreen}/>
                <Stack.Screen name="Yield" component={YieldScreen}/>
                <Stack.Screen name="Harvest" component={AddharvestScreen}/>
                <Stack.Screen name="Charts" component={Charts}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
                <Stack.Screen name="ResetPassword" component={PasswordResetScreen}/>
                <Stack.Screen name="ActivityCalendar" component={ActivityCalendar}/>
                <Stack.Screen name="Activity Calendar" component={TabNavigator}/>
                <Stack.Screen name="CreateTask" component={CreateTask}/>
  
    </Stack.Navigator>
  </NavigationContainer>)
}*/