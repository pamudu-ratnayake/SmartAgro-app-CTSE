import React, { Component } from "react";
import { View,Text,Image,StyleSheet ,useWindowDimensions,useState, TextInput, Pressable} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";



export default class SoilTesting extends React.Component {
    
    state = {
        data:[]
    }

    Session=()=>{
        this.props.navigation.navigate("Session");

    }
    

    fetchData = async()=>{
        const response = await fetch('http://222.165.186.100:80/mobile_services/api/soil_json.php')
        const users = await response.json();
        this.setState({data:users});

    }

    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View>
                <CustomHeader></CustomHeader>
                <Text style={styles.text}>Soil Testing</Text>

                <FlatList
                data={this.state.data}
                keyExtractor={(item, index)=> index.toString()}
                renderItem={({item}) =>

                <View>
                    <View>
                        
                    </View>
                    
                    <Pressable onPress={this.Session} style={styles.Container}>
                    <Image source={{uri:item.company_logo}}></Image>
                    <Text style={styles.txt}>{item.soil_company}</Text>
                    <Text style={styles.txt}>{item.soil_address}</Text>
                    <Text style={styles.txt}>{item.soil_phone}</Text>
                    <Text style={styles.txt}>{item.soil_email}</Text>
                    </Pressable>

                    

                </View>

                }

                />

            </View>

        );
    }

}

const styles = StyleSheet.create({
    text:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        top:10,
        

    },

    txt:{
        //alignSelf:'center',
        fontSize:15,
        color:'black',
        left:100,
        top:10,

    },

    Container:{
        width:350,
        height:100,
        backgroundColor:'#E8E1E1',
        borderRadius:10,
        //borderColor:"#73C971",
        //borderWidth:2,
        marginHorizontal:10,
        top:10,
        alignSelf:'center',
        margin:10,

    }
    
});