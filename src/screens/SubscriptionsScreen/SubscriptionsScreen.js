import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import advisory from '../../../assets/images/advisory.png';
import drone from '../../../assets/images/drone.png';
import soil from '../../../assets/images/soil.png';
import fertilizer from '../../../assets/images/fertilizer.png';
import { useNavigation } from "@react-navigation/native";
const SubscriptionsScreen =() =>{

    const navigation =useNavigation();

    const onAdvisory=() =>{
        navigation.navigate("CropAdvisory");
    }

    const onFertilizer=() =>{
        navigation.navigate("Fertilizer");
    }
    const onSoilTesting=() =>{
        navigation.navigate("Soil");
    }
    const onDroneServices=() =>{
        navigation.navigate("Drone");
    }
    return(
        <View>
            <CustomHeader></CustomHeader>

            <View>
                <Text style={styles.text}>New Subscriptions</Text>
            </View>

            <View style={styles.column}>
            
                <View style={styles.row}>
                    <Pressable onPress={onAdvisory} style={styles.container}>
                        <Image source={advisory} style={styles.image}></Image>
                        <Text style={styles.txt}>Crop Advisory</Text>
                    </Pressable>
                    <Pressable onPress={onDroneServices} style={styles.container}>
                        <Image source={drone} style={styles.image}></Image>
                        <Text style={styles.txt3}>Drone Services</Text>
                    </Pressable>
                
                </View>

                <View style={styles.row}>

                    <Pressable onPress={onSoilTesting}  style={styles.container2}>
                        <Image source={soil} style={styles.image}></Image>
                        <Text style={styles.txt}>Soil Testing</Text>
                    </Pressable>
                    <Pressable onPress={onFertilizer} style={styles.container2}>
                        <Image source={fertilizer} style={styles.image}></Image>
                        <Text style={styles.txt2}>Fertilizer Provider</Text>
                    </Pressable>
                </View>
                
                

                
            </View>

                

                
            

            

            
           
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:"black",
        top:20,
        left:30,
        fontWeight:"bold"
        
    },


    container:{
        width:140,
        height:140,
        borderRadius:20,borderColor:"#73C971",
        borderWidth:2,
        left:50,
        top:80,
        marginHorizontal:10,
    },

    container2:{
        width:140,
        height:140,
        borderRadius:20,borderColor:"#73C971",
        borderWidth:2,
        left:50,
        top:250,
        marginHorizontal:10,
    },

    row:{
        
        flex: 2,
        flexDirection: "row",
        
        

    },

    column:{
        flex: 4,
        flexDirection: "column",
        justifyContent: 'space-between',

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
    }
})

export default SubscriptionsScreen