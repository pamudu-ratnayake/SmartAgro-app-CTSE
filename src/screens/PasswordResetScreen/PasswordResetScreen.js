import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PasswordResetScreen=() =>{
    const navigation =useNavigation();
    
    const onResetPressed=() =>{
        navigation.navigate('SignIn');
    }
    return(
        <View>
            <Text style={styles.text1}>Reset Your Password</Text>
            <View style={styles.container}>
                <TextInput placeholder="New Password" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Confirm Password" style={styles.input}/>
            </View>

            <Pressable onPress={onResetPressed} style={styles.button} >
                <Text style={styles.text}>RESET</Text>
            </Pressable>
            
        </View>
    )
}

const styles=StyleSheet.create({
    
    text1:{
        alignSelf:"flex-start",
        top:100,
        fontWeight:"bold",
        fontSize:20,
        color:"black",
        paddingLeft:25,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#83C882',
        borderWidth:2,
        top:200,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:15,
    },

    button:{
        backgroundColor:'#42CC3F',
        width:250,
        height:60,
        alignSelf:'center',
        borderRadius:40,
        top:250,
       

    },
    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
        fontSize:15,
    },

})




export default PasswordResetScreen