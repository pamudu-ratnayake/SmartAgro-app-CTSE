import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
//import CustomHeader from "../../components/CustomHeader";
//import customHeader2 from "../../components/CustomHeader2";
import CustomHeader2 from "../../components/CustomHeader2";
import farm from '../../../assets/images/farm.png';
import crops from '../../../assets/images/crops.png';
import controllers from '../../../assets/images/controllers.png';
import yields from '../../../assets/images/yield.png';
import sub from '../../../assets/images/sub.png';
import shop from '../../../assets/images/shop.png';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
//import mzgs1 from "../../../assets/images/mzgscreen1.png" 

const Inbox=() =>{
    const navigation =useNavigation();
    const onNetworkPressed =() =>{
        navigation.navigate('Chatscreen1');
    }


    return(
        <View>
           <CustomHeader2></CustomHeader2>
            <View>
                <Text style={styles.text}>Inbox</Text>
            </View>
            <View style={styles.btnnetwork}>
            <CustomButton text="Network" style={styles.btnnetwork} onPress={onNetworkPressed}>

            </CustomButton>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:"black",
        top:-210,
        left:30,
        fontWeight:"bold"
        
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
    btnnetwork:{
        position:"relative",
        left:100,
        top:-10,
        right:100,
        paddingTop:10
    

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
    }
    
    
   
})




export default Inbox