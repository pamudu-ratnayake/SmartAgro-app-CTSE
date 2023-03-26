import * as React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Dashboard from '../src/screens/Dashboard';
import Dashboard from '../screens/Dashboard';
import CropsScreen from '../screens/CropsScreen/CropsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCropsScreen from '../screens/AddCropsScreen/AddCropsScreen'
import MyFarmScreen from '../screens/MyFarmScreen/MyFarmScreen'
import HomePage from '../screens/HomePage/HomePage';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfile from '../screens/EditProfile/EditProfile';
import MyCrops from '../screens/MyCrops/MyCrops';
import Harvest from '../screens/Harvest/Harvest';
import AddHarvest from '../screens/AddHarvest/AddHarvest';
import MyHarvest from '../screens/MyHarvest/MyHarvest';
import Orders from '../screens/Orders/Orders';
import AddOrders from '../screens/AddOrders/AddOrders';
import AddFertDetails from '../screens/AddFertDetails/AddFertDetails';
import FertilizingDetails from '../screens/FertilizingDetails/FertilizingDetails';
import MyFertilizingDetails from '../screens/MyFertilizingDetails.js/MyFertilizingDetails';
import DelUpMyCrops from '../screens/DelUpMyCrops/DelUpMyCrops';
import UpdateOrders from '../screens/UpdateOrders/UpdateOrders';
import DelUpMyHarvest from '../screens/DelUpMyHarvest/DelUpMyHarvest';
import UpdateHarvest from '../screens/UpdateHarvest/UpdateHarvest';
import MyOrder from '../screens/MyOrder/MyOrder';
import UpdateCrop from '../screens/UpdateCrop/UpdateCrop';
import DelUpMyOrder from '../screens/DelUpMyOrder/DelUpMyOrder';
import UpdateFertDetails from '../screens/UpdateFertilizer/UpdateFertilizer';
import UpdateFertilizer from '../screens/UpdateFertilizer/UpdateFertilizer';
import DelUpMyFert from '../screens/DelUpMyFert/DelUpMyFert';

//reference tutorial from https://www.youtube.com/watch?v=ihfS3kEvH2o&t=11s

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



const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyFarm"
        component={MyFarmScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyCrops"
        component={MyCrops}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpCrop"
        component={UpdateCrop}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Del"
        component={DelUpMyCrops}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddOrders"
        component={AddOrders}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="DelOrder"
        component={DelUpMyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpOrders"
        component={UpdateOrders}
        options={{headerShown: false}}
      />
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

//this should be come first
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
        name="Crops"
        component={CropsScreen}
        options={{headerShown: false}}
      />
 
      <Stack.Screen
        name="AddCrops"
        component={AddCropsScreen}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="MyCrops"
        component={MyCrops}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Harvest"
        component={Harvest}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="AddHarvest"
        component={AddHarvest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyHarvest"
        component={MyHarvest}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="AddOrders"
        component={AddOrders}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="Firt"
        component={FertilizingDetails}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="AddFert"
        component={AddFertDetails}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="MyFert"
        component={MyFertilizingDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Del"
        component={DelUpMyCrops}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="DelOrder"
        component={DelUpMyOrder}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="UpOrders"
        component={UpdateOrders}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="UpCrop"
        component={UpdateCrop}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="DelHar"
        component={DelUpMyHarvest}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="UpHar"
        component={UpdateHarvest}
        options={{headerShown: false}}
      />

<Stack.Screen
        name="DelFert"
        component={DelUpMyFert}
        options={{headerShown: false}}
      />
      

<Stack.Screen
        name="UpFert"
        component={UpdateFertilizer}
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
              ? require('../assets/images/Homeyellow.png')
              : require('../assets/images/homeblack.png');
          } else if (route.name === 'Dashboard') {
            iconName = focused
            ? require('../assets/images/dyellow.png')
              : require('../assets/images/dblack.png');
          } else if (route.name === 'Chat') {
            iconName = focused
            ? require('../assets/images/chatgreen.png')
              : require('../assets/images/chatblack.png');
          }else if (route.name === 'Profile') {
            iconName = focused
            ? require('../assets/images/yuser.png')
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
      <Tab.Screen name="Dashboard" component={DashboardStack} options={navOptionHandler}/>
      <Tab.Screen name="Home" component={HomeStack} options={navOptionHandler} />
      <Tab.Screen name="Profile" component={ProfileStack} options={navOptionHandler}/>
    </Tab.Navigator>
  );
}


export default TabNavigator;


