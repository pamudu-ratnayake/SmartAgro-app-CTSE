import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable, ScrollView} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import harvest from '../../assets/images/harvest.png';
import analysis from '../../assets/images/analysis.png';
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Pie from 'react-native-pie';
import { Component } from "react";
import Therm from '../../../assets/images/Therm.png';
import CircularProgress from "react-native-circular-progress-indicator";
import CustomButton from "../../components/CustomButton";
import CustomBtn4 from "../../components/CustomBtn4/CustomBtn4";
import CustomBtn5 from "../../components/CustomBtn5/CustomBtn5";
import CustomBtn6 from "../../components/CustomBtn6/CustomBtn6";
//import { useNavigation } from "@react-navigation/native";
//import { VictoryPie } from 'victory-native';

export default class Shop extends React.Component{
  
    
    state = {
        data:[]
    }

    fetchData = async()=>{
        const response = await fetch('http://10.0.2.2:80/api/sensors.php')
        const users = await response.json();
        this.setState({data:users});

    }
    componentDidMount(){
        this.fetchData();
    }
    onMonitoringPressed = () => {
        this.props.navigation.navigate('Monitoring');
      };

    render(){
        return(
            <View>
                <CustomHeader></CustomHeader>
                <Text style={styles.text}>Sensors</Text>
                

                <ScrollView  contentContainerStyle={{
              paddingBottom: 200
            }}>

                <FlatList
                data={this.state.data}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item}) =>

                <View style={styles.con}>
                    
                    
                   { /*<Text style={styles.txt}>{item.first_name}</Text>
                    <Text style={styles.txt}>{item.last_name}</Text>
                    <Text style={styles.txt}>{item.advisor_nic}</Text>
                    <Text style={styles.txt}>{item.advisor_qualification}</Text>
                    <Text style={styles.txt}>{item.advisor_experience}</Text>
                    <Text style={styles.txt}>{item.crop_category}</Text>
                    <Text style={styles.txt}>{item.contact_number}</Text>*/}
                    <View style={styles.column}>
                    <View style={styles.rownew}>
                    <View style={styles.container}>
                    <View style={styles.symb}   /> 

                    <Text style={styles.txt}>Soil Temperature</Text>
                    <Image source={Therm} style={styles.image}></Image>
                   {/* <Pie 
                
                radius={75}
                innerRadius={60}
                sections={[
                  {
                    percentage:item.temp,
                    color: '#843333',
                    
                  },
                ]}
                backgroundColor="#ddd"
              />*/}
              <View style={styles.pos}>
              <CircularProgress
                radius={60}
                value={item.temp}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              />
              </View>
              </View>

              
<View style={styles.container}>
<View style={styles.symb2}   /> 
                    <Text style={styles.txt2}>Soil Moisture</Text>
                    <Image source={Therm} style={styles.image}></Image>
                    
                    <View style={styles.pos2}>
                    <CircularProgress
                radius={60}
                value={item.mois}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              /></View></View></View>

<View style={styles.rownew}>
                    <View style={styles.container3}>
                    <View style={styles.symb}   /> 

                    <Text style={styles.txt}>Soil Temperature</Text>
                    <Image source={Therm} style={styles.image}></Image>
                   {/* <Pie 
                
                radius={75}
                innerRadius={60}
                sections={[
                  {
                    percentage:item.temp,
                    color: '#843333',
                    
                  },
                ]}
                backgroundColor="#ddd"
              />*/}
              <View style={styles.pos}>
              <CircularProgress
                radius={60}
                value={item.temp}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              />
              </View>
              </View>

              
<View style={styles.container3}>
<View style={styles.symb2}   /> 
                    <Text style={styles.txt2}>Soil Moisture</Text>
                    <Image source={Therm} style={styles.image}></Image>
                    <View style={styles.pos2}>
                    <CircularProgress
                radius={60}
                value={item.mois}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              /></View></View></View>

              <View style={styles.rownew}>
                    <View style={styles.container2}>
                    <View style={styles.symb}   /> 

                    <Text style={styles.txt}>Soil Temperature</Text>
                    <Image source={Therm} style={styles.image}></Image>
                   {/* <Pie 
                
                radius={75}
                innerRadius={60}
                sections={[
                  {
                    percentage:item.temp,
                    color: '#843333',
                    
                  },
                ]}
                backgroundColor="#ddd"
              />*/}
              <View style={styles.pos}>
              <CircularProgress
                radius={60}
                value={item.temp}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              />
              </View>
              </View>

              
<View style={styles.container2}>
<View style={styles.symb2}   /> 
                    <Text style={styles.txt2}>Soil Moisture</Text>
                    <Image source={Therm} style={styles.image}></Image>
                    <View style={styles.pos2}>
                    <CircularProgress
                radius={60}
                value={item.mois}
                textColor='#222'
                fontSize={20}
                valueSuffix={'%'}
                inActiveStrokeColor={'#843333'}
                activeStrokeColor={'#843333'}
                inActiveStrokeOpacity ={0.2}
                inActiveStrokeWidth={10}
                activeStrokeWidth={10}
                duration={2000}
              /></View>
              
              
              
              
              </View></View></View></View>

             
            
                    

                  

                }
                

                /> 
                <CustomBtn4 style={styles.btn4} 
               // onPress={onSensorHistoryPressed}
                 ></CustomBtn4>
                <CustomBtn5 onPress={this.onMonitoringPressed}></CustomBtn5>
                <CustomBtn6 
               // onPress={onCropAdvisoryPressed}
                ></CustomBtn6>
                </ScrollView>
              

            </View>

        );
    }

}

const styles = StyleSheet.create({
  Container:{
    width:320,
    height:180,
    borderRadius:30,
    borderColor:"#73C971",
    borderWidth:2,
    marginHorizontal:10,
    top:10,
    alignSelf:'center',
    margin:10,

},
    text:{
        fontSize:25,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
    },
    container:{
        width:150,
        height:150,
        borderRadius:20,
        borderColor:"#73C971",
        backgroundColor:"#B2FFB0",
        borderWidth:2,
        left:10,
        top:70,
        alignContent:'center',
       // opacity:0.2,
        marginHorizontal:20,

    },
    container2:{
      width:150,
      height:150,
      borderRadius:20,
      borderColor:"#73C971",
      backgroundColor:"#B2FFB0",
      borderWidth:2,
      left:10,
      top:250,
      marginHorizontal:20,
  },
  container3:{
    width:150,
    height:150,
    borderRadius:20,
    backgroundColor:"#B2FFB0",
    borderWidth:2,
    left:10,
    top:430,
    marginHorizontal:20,
},

    row:{
        top:50,
       // flex: 1,
        flexDirection: "row",

    },
    rownew:{
        
      flex: 1,
      flexDirection: "row",

  },


    image:{
        alignSelf:"center",
        top:-70,
        left:-50
    },

    
    
    txt:{
       // alignSelf:"center",
       left:50,
        color:"black",
        fontSize:10,
        top:-35,
        fontWeight:"bold",
        
        

    },
    txt2:{
      left:50,
        color:"black",
        fontSize:10,
        top:-35,
        left:70,
        fontWeight:"bold",
        

   },
    con:{
      position:'relative',
      height:600,
      width:600

    },
    pos:{
      left:10,
      top:-65
    },
    pos2:{
      top:-65,
      left:10
    },
    symb:{
      height:40,
      width:40,
      left:5,
      top:-20,
      backgroundColor:'#4FAA53'
    },
    symb2:{
      height:40,
      width:40,
      left:5,
      top:-20,
      backgroundColor:'#4FAA53'
    },
    btn4:{
        top:100,
        height:20,
        //left:20
    }
  
})