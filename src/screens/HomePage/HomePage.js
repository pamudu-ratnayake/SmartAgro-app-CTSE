import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable, TouchableOpacity} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import farm from "../../../src/assets/images/farm.png";
import yields from '../../../assets/images/yield.png';
import crops from '../../../assets/images/fru.png';
import controllers from '../../../assets/images/sho.png';
import { useNavigation } from "@react-navigation/native";


const HomePage=() =>{
    const navigation =useNavigation();
    const onFarmPressed=() =>{
      navigation.navigate('MyFarm');
  }

  const onCropsPressed=() =>{
    navigation.navigate('Orders');
}
   
   
    return (
      <View>
      
      <View>
      <CustomHeader></CustomHeader>
      </View>
     
        <View style={styles.carouselContainer}>
          <Text style={styles.textnew}>Welcome</Text>
          
         
        </View>
      
          <Text style={styles.textnew2}>Shortcuts</Text>
          <View style={styles.column}>
        <View style={styles.row}>
        
                  <TouchableOpacity  style={styles.containerC1} onPress={onFarmPressed} >
                      <Image source={crops} style={styles.image}></Image>
                      <Text style={styles.txt}>Crops</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.containerC1} onPress={onCropsPressed} >
                      <Image source={controllers} style={styles.image}></Image>
                      <Text style={styles.txt}>Orders</Text>
                  </TouchableOpacity>
                  
                  </View>
                  </View>
  
      </View>
    );
  }

  const styles = StyleSheet.create({

    carouselContainer: {
        paddingTop: 15,
        paddingBottom: 15,
      },
      textnew: {
        fontSize:20,
        color: 'black',
        left:30,
        top:-350,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
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
      textnew2:{
        fontSize:20,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 35,
        top:-400,
        paddingBottom: 10,
        alignSelf:"center"
      },
      
  row:{
      
    flex: 1,
    top:-380,
    flexDirection: "row",

},
containerC1:{
    width:100,
    height:100,
    borderRadius:20,
    borderColor:"#FFA903",
    borderWidth:2,
    left:55,
    marginHorizontal:20,

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






  })
  export default HomePage;
  