import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput, Pressable} from "react-native";
//import CustomHeader from "../src/components/CustomHeader";
import CustomHeader from "../../components/CustomHeader";
import plant from '../../assets/images/plant.png';
import weather from '../../../assets/images/weather.png';
import { useNavigation } from "@react-navigation/native";

const MyFarmScreen=() =>{
    const navigation =useNavigation();

    const onFarm=() =>{
        navigation.navigate('Crops');
    }
    return(
        <View>
            <CustomHeader></CustomHeader>
            <View>
                <Text style={styles.text}>My Farm</Text>
            </View>

            <View style={styles.row}>
                <Pressable onPress={onFarm} style={styles.container}>
                    <Image source={plant} style={styles.image}></Image>
                    <Text style={styles.txt}>Your Crops</Text>
                </Pressable>
                <View style={styles.container}>
                    <Image source={weather} style={styles.image}></Image>
                    <Text style={styles.txt}>Weather</Text>
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
        borderRadius:20,
        
        borderColor:"#73C971",
        borderWidth:2,
        left:50,
        top:100,
        marginHorizontal:10,
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
        
        

    }
})



export default MyFarmScreen