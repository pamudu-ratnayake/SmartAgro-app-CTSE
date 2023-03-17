import React from "react";
import { View,Text,StyleSheet, Pressable, Image} from "react-native";
import His from "../../../assets/images/history.png"
import mon from "../../../assets/images/mon.png"
import sup from "../../../assets/images/sup.png"


const CustomBtn6= ({onPress,text,type}) =>{
    return(
        <Pressable onPress={onPress} //style={}
        style={[styles.card, styles.shadowProp,styles.container]} >
            <Text style={styles.text}>Crop Advisory</Text>
            <Image source={sup} style={styles.Hisimage}></Image>
        </Pressable>
    )
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        borderColor:'#278B25',
        borderWidth:5,
        width:'60%',
        height:'20%',
        alignSelf:'center',
        height:60,
        top:60,
        padding:0,
        borderRadius:40,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },

    
    

    text:{
        color:'#000000',
        alignSelf:'center',
        fontSize:20,
        top:10,
        left:20,
        fontWeight:'bold',
    },
    Hisimage: {
        top: -23,
        left:7,
        height:40,
        width:40,
        alignSelf:"auto"

    },
   

    
})

export default CustomBtn6