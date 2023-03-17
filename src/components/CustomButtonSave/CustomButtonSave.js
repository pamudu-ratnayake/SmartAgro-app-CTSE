import React from "react";
import { View,Text,StyleSheet, Pressable} from "react-native";

const CustonButtonSave= ({onPress,text,type}) =>{
    return(
        <Pressable onPress={onPress} style={styles.container} >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
};

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#42CC3F',
        borderRadius:10,
        width:'60%',
        height:70,
        //alignSelf:'center',
        height:50,
        top:70,
        padding:0,
        borderRadius:40,

    },

    
    

    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
    },

    
})

export default CustonButtonSave