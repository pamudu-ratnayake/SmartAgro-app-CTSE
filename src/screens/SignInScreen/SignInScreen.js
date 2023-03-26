
import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,useState, TextInput, Pressable} from "react-native";
import image1 from '../../../assets/images/bb.png';
import name from '../../../assets/images/fff.png';
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInScreen=() =>{
    const navigation =useNavigation();

    const SignupPressed=() =>{
        navigation.navigate('SignUp');
    }
    
    const SignInPressed=() =>{
        navigation.navigate('App');
    }
    
      
    return(
        <View>
            <Image source={image1} style={[styles.image]} resizeMode='contain' />
            <Image source={name} style={[styles.name ]} resizeMode='contain' />
            <View style={styles.container}>
                <TextInput 
                    placeholder="Email Address" 
                    style={styles.input}
                    
                />
            </View>
            <View style={styles.container}>
                <TextInput 
                    placeholder="Password" 
                    style={styles.input} 
                    secureTextEntry={true}
                   
                />

            </View>
           
            <CustomButton onPress={SignInPressed}  text="LOGIN"></CustomButton>
            <Text style={styles.text1}>Don't have an account?</Text>
            
            <Pressable >
                <Text style={styles.link2} onPress={SignupPressed}>SIGN UP</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:40,
    },
    image:{
        width: '70%',
        maxWidth:300,
        maxHeight:200,
        alignSelf:'center',
        top:100,
        
        
        
    },

    name:{
        width:'60%',
        alignSelf:'center',
        maxWidth:100,
        maxHeight:150,
        top:100,
    },

    container:{
        backgroundColor:'ivory',
        width:'80%',
        borderRadius:40,
        borderColor:'#FFA903',
        borderWidth:2,
        top:140,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:5,
    },
    input:{
        paddingLeft:30,

    },

    link1:{
        top:130,
        alignSelf:"flex-end",
        paddingRight:30,
        fontWeight:"bold",

    },

    link2:{
        color:"#FFA903",
        fontWeight:"bold",
        top:130,
        alignSelf:"flex-end",
        paddingRight:75,

    },

    text1:{
        alignSelf:"center",
        top:150,
        fontWeight:"bold",

    },
    
    
});


export default SignInScreen





