import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,SafeAreaView, ScrollView,TextInput,StatusBar, Button, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";

const BillingScreen=() =>{
    return(
        <SafeAreaView >
        <ScrollView>
        <View>
            <CustomHeader></CustomHeader>
            
            <Text style={styles.text1}>Billing Details</Text>

            <Text style={styles.text2}>First Name </Text>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>

            <Text style={styles.text2}>Last Name </Text>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>

            <Text style={styles.text2}>Mobile Number </Text>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>

            <Text style={styles.text2}>Country/Region </Text>
            <View style={styles.container}>
                <TextInput placeholder="Sri Lanka" style={styles.input}/>
            </View>

            <Text style={styles.text2}>Street Address </Text>
            <View style={styles.container}>
                <TextInput placeholder="House number and Street name" style={styles.input}/>
            </View>
            <View style={styles.container}>
                <TextInput placeholder="Apartment,suite,unit,etc. (Optional)" style={styles.input}/>
            </View>

            <Text style={styles.text2}>Postal Code </Text>
            <View style={styles.container}>
                <TextInput placeholder="" style={styles.input}/>
            </View>

            
            

            

        </View>
        </ScrollView>
           
        </SafeAreaView>

    )
}

const styles =StyleSheet.create({
    
    text1 :{
        color:"black",
        top:20,
        paddingLeft:20,
        fontSize:18,
        fontWeight:"bold",
    },
    text2:{
        fontSize:15,
        top:55,
        paddingLeft:40,
        color:"black",

    },

    container:{
        backgroundColor:'#D9D9D9',
        width:'80%',
        borderRadius:10,
        borderColor:'#D9D9D9',
        borderWidth:3,
        top:50,
        paddingHorizontal:10,
        alignSelf:'center',
        marginVertical:8,
    },

    
})


export default BillingScreen