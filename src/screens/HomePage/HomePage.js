import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable, TouchableOpacity} from "react-native";
import MapView from 'react-native-maps';
import CustomHeader from "../../components/CustomHeader";
import farm from "../../../src/assets/images/farm.png";
import crops from "../../../src/assets/images/crops.png"
import yields from '../../../assets/images/yield.png';
import { useNavigation } from "@react-navigation/native";
import CustomImageCarousalLandscape from "../../components/CustomImageCarousalLandscape";



const HomePage=() =>{
    const navigation =useNavigation();
    const onFarmPressed=() =>{
      navigation.navigate('MyFarm');
  }

  const onCropsPressed=() =>{
    navigation.navigate('Yield');
}
    const data = [
      {
        image: require('../../../src/assets/image-product-1.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-2.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-3.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-4.jpg'),
      },
    ];
    const data2 = [
      {
        image: require('../../../src/assets/image-product-1-landscape.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-2-landscape.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-3-landscape.jpg'),
      },
      {
        image: require('../../../src/assets/image-product-4-landscape.jpg'),
      },
    ];
    return (
      <View>
      
      <View>
      <CustomHeader></CustomHeader>
      </View>
     
        <View style={styles.carouselContainer}>
          <Text style={styles.textnew}>Welcome</Text>
          <CustomImageCarousalLandscape data={data2} autoPlay={true} />
         
        </View>
         <View style={styles.containerMap}>
            <MapView style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            ></MapView>
          </View>
          <Text style={styles.textnew2}>Your Crops</Text>
          <View style={styles.column}>
        <View style={styles.row}>
        
                  <TouchableOpacity  style={styles.containerC1} onPress={onFarmPressed} >
                      <Image source={farm} style={styles.image}></Image>
                      <Text style={styles.txt}>My Farm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.containerC1} onPress={onCropsPressed} >
                      <Image source={yields} style={styles.image}></Image>
                      <Text style={styles.txt}>Yield</Text>
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
        paddingBottom: 10,
        alignSelf:"center"
      },
      
  row:{
      
    flex: 1,
    flexDirection: "row",

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
  