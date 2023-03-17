import React from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,TextInput,Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen=() =>{
    
    const navigation =useNavigation();
    const onVerifyPressed=() =>{
        navigation.navigate('ResetPassword');

    }
    return(
        <View>
            <View>
                <Text style={styles.text1}>Forgot Password?</Text>
            </View>
            <View style={styles.row}>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>
            
            </View>

            <View>
                <Text style={styles.txt1}>Code was sent to your mobile number </Text>
                <Text style={styles.txt2}>The code expires in</Text>
                <Text style={styles.txt3}>5 minutes</Text>
            </View>

            <Pressable onPress={onVerifyPressed} style={styles.button} >
                <Text style={styles.text}>VERIFY CODE</Text>
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    row:{
        flex: 1,
        flexDirection: "row"

    },
    container:{
        backgroundColor:'#D9D9D9',
        width:75,
        height:75,
        borderRadius:20,
        top:150,
        left:15,
        marginHorizontal:10,
        
    },
    text1:{
        alignSelf:"flex-start",
        top:100,
        fontWeight:"bold",
        fontSize:20,
        color:"black",
        paddingLeft:25,
    },

    txt1:{
        top:250,
        alignSelf:"center",
    },
    txt2:{
        top:300,
        paddingLeft:100,

    },
    txt3:{
        top:280,
        color:"black",
        paddingLeft:230,

    },

    
    button:{
        backgroundColor:'#42CC3F',
        width:250,
        height:60,
        alignSelf:'center',
        borderRadius:40,
        top:400,
       

    },
    text:{
        color:'#FFFFFF',
        alignSelf:'center',
        top:20,
        fontWeight:'bold',
        fontSize:15,
    },


})


export default ForgotPasswordScreen