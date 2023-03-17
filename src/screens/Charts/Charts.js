import React from "react";
import { View,Text, ActivityIndicator, Dimensions, Alert, Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable,useState,FlatList} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { Component } from "react";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  class Charts extends Component {
    state = {
  datasource:[]
    };
  
  LineChart_Dynamic=()=>{
  
  if (this.state.datasource){
  if(this.state.datasource.length){
  
  return(
  <View>
    <Text style={styles.text1}>Yield Analysis</Text>
    <LineChart
      data={{
        //labels: ["2022-08-21", "2022-08-21", "2022-08-20", "2022-08-19", "2", "June"],
        

        
        datasets: [
          {
            data:  this.state.datasource.map(item=>{
              return(
                item.quantity
                
                
  //you need to add your data here from JSON, and remember the data you are requesting should be integer.
              )
            })
            
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      top={50}
      
      //yAxisLabel="quantity"
      //yAxisSuffix="Rs"
      //yAxisInterval={2} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces:0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
          
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        top:50
      }}
    />
  </View>
  )
  } else {
  return(
  
  <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
  
  <ActivityIndicator size="large"/>
  
  </View>
  
  )
    }
  
  }else {
  
    return(
    
    <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
    
   <Text>no data found</Text>
    
    </View>
    )}
  
    }
  
  //***************************************************************
  //fetch your own data from here
  
   get_chart=()=>{
  
                fetch('http://10.0.2.2:80/api/Analysis.php', {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  
                })
                  .then(response => response.json())
            
                  .then(response => {
                   this.setState({datasource:response})
               
                  })
                  .catch(error => {
                  
                  });
  }
  
  /*componentDidMount will execute the function when the screen is mounted.*/
    componentDidMount=()=>{
      this.get_chart()
    }
  
    render() {
  
  return(
  <View>
    <CustomHeader></CustomHeader>
  
  {this.LineChart_Dynamic()}
  
  </View>
  
  )}}
  
  const styles = StyleSheet.create({
    text1:{
      top:20,
      fontSize:15,
      fontWeight:"bold",
    }
  })
  export default Charts;