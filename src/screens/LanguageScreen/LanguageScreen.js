import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Button, Pressable} from "react-native";
import name from '../../../assets/images/name.png';
import { useNavigation } from "@react-navigation/native";


const LanguageScreen=() =>{
    const {height}= useWindowDimensions();
    const navigation =useNavigation();

    const onEnglish =() =>{
        navigation.navigate('SignIn');
    }
    return(
        <View>
            <Image source={name} style={[styles.name, {height:height*0.3}]} resizeMode='contain' />

            <View>
                <Text style={styles.text1}>Select the language below</Text>
            </View>

            <Pressable style={styles.container} >
            <Text style={styles.text}>SINHALA</Text>
            </Pressable>
            
            
            <Pressable onPress={onEnglish} style={styles.container} >
            <Text style={styles.text}>ENGLISH</Text>
            </Pressable>

            <Pressable  style={styles.container} >
            <Text style={styles.text}>TAMIL</Text>
            </Pressable>

            
            

            

        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        width:150,
        alignSelf:'center',
        top:30,
    },

    text1:{
        alignSelf:'center',
        color:'black',
        fontSize:18,
        top:-45,
        fontFamily:"Cochin"

    },

    container:{
        backgroundColor:'#42CC3F',
        width:300,
        height:60,
        top:100,
        alignSelf:'center',
        borderRadius:20,
        marginVertical:10,

    },
    
    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
        fontSize:15,
    },

})


export default LanguageScreen
